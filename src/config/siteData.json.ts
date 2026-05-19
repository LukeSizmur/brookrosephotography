export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter?: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "BrookRosePhotography",
	// Your website's title and description (meta fields)
	title: "Chichester Wedding & Family Photographer | Brook Rose Photography",
	description:
		"Natural documentary wedding, family, and newborn photography in Chichester, West Sussex, and across the UK.",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "BrookRosePhotography",
		email: "#",
		// twitter: "Cosmic_Themes",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/footer-image.png",
		alt: "Brook Rose Photography portrait session",
	},
};

export default siteData;
