export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
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
	title: "BrookRosePhotography - A Chichester based documentary photographer",
	description:
    "A Chichester based documentary photographer who has captured thousands of photographs",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "BrookRosePhotography",
		email: "#",
		// twitter: "Cosmic_Themes",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Cosmic Themes logo",
	},
};

export default siteData;
