const RECIPIENT_EMAIL = "brook.rose@hotmail.com";

function json(response, statusCode, payload) {
	response.status(statusCode).json(payload);
}

function isValidEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value) {
	return String(value)
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#039;");
}

function parseUrlEncoded(body) {
	return Object.fromEntries(new URLSearchParams(body));
}

async function readRequestBody(request) {
	if (Buffer.isBuffer(request.body)) {
		return parseUrlEncoded(request.body.toString("utf8"));
	}

	if (request.body && typeof request.body === "object") {
		return request.body;
	}

	if (typeof request.body === "string") {
		const contentType = request.headers["content-type"] || "";
		return contentType.includes("application/json")
			? JSON.parse(request.body)
			: parseUrlEncoded(request.body);
	}

	const chunks = [];

	for await (const chunk of request) {
		chunks.push(chunk);
	}

	const rawBody = Buffer.concat(chunks).toString("utf8");
	const contentType = request.headers["content-type"] || "";

	if (!rawBody) {
		return {};
	}

	return contentType.includes("application/json") ? JSON.parse(rawBody) : parseUrlEncoded(rawBody);
}

function buildEmail({ name, email, date, message }) {
	const subjectName = name.replaceAll(/[\r\n]+/g, " ");
	const safeName = escapeHtml(name);
	const safeEmail = escapeHtml(email);
	const safeDate = escapeHtml(date);
	const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

	return {
		subject: `New Brook Rose Photography enquiry from ${subjectName}`,
		text: [
			"New enquiry from the Brook Rose Photography contact form.",
			"",
			`Name: ${name}`,
			`Email: ${email}`,
			`Event date: ${date}`,
			"",
			"Message:",
			message,
		].join("\n"),
		html: `
			<h2>New Brook Rose Photography enquiry</h2>
			<p><strong>Name:</strong> ${safeName}</p>
			<p><strong>Email:</strong> ${safeEmail}</p>
			<p><strong>Event date:</strong> ${safeDate}</p>
			<p><strong>Message:</strong></p>
			<p>${safeMessage}</p>
		`,
	};
}

export default async function handler(request, response) {
	if (request.method !== "POST") {
		response.setHeader("Allow", "POST");
		return json(response, 405, { error: "Method not allowed." });
	}

	const apiKey = process.env.RESEND_API_KEY;
	const fromEmail = process.env.CONTACT_FROM_EMAIL || process.env.RESEND_FROM_EMAIL;

	if (!apiKey || !fromEmail) {
		return json(response, 500, {
			error: "Contact form email delivery is not configured.",
		});
	}

	let body;

	try {
		body = await readRequestBody(request);
	} catch {
		return json(response, 400, { error: "Invalid form submission." });
	}

	const name = String(body.name || "").trim();
	const email = String(body.email || "").trim();
	const date = String(body.date || "").trim();
	const message = String(body.message || "").trim();
	const website = String(body.website || "").trim();

	if (website) {
		return json(response, 200, { ok: true });
	}

	if (!name || !email || !date || !message || !isValidEmail(email)) {
		return json(response, 400, { error: "Please complete every field with a valid email address." });
	}

	const { subject, text, html } = buildEmail({ name, email, date, message });

	const resendResponse = await fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${apiKey}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			from: fromEmail,
			to: RECIPIENT_EMAIL,
			reply_to: email,
			subject,
			text,
			html,
		}),
	});

	if (!resendResponse.ok) {
		return json(response, 502, {
			error: "The message could not be sent. Please try again or email Brook directly.",
		});
	}

	return json(response, 200, { ok: true });
}
