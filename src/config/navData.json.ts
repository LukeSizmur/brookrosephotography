export interface navLinkItem {
	text: string;
	link: string;
	newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
	text: string;
	dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
	{
		text: "Home",
		link: "/",
	},
	{
		text: "Portfolio",
		dropdown: [
			{ text: "Family", link: "/portfolio/family/" },
			{ text: "Weddings", link: "/portfolio/weddings/" },
			{ text: "Love Stories", link: "/portfolio/love-stories/" },
		],
	},
	{
		text: "Services",
		dropdown: [
			{ text: "Wedding Photographer Chichester", link: "/wedding-photographer-chichester/" },
			{ text: "Family Photographer Chichester", link: "/family-photographer-chichester/" },
			{ text: "Newborn Photographer West Sussex", link: "/newborn-photographer-west-sussex/" },
		],
	},
	{
		text: "Gallery",
		link: "/gallery/",
	},
	{
		text: "Pricing",
		dropdown: [
			{ text: "Family & Newborn", link: "/pricing/family-newborn/" },
			{ text: "Weddings", link: "/pricing/weddings/" },
		],
	},
	{
		text: "Legal",
		link: "/privacy-policy/",
	},
];

export default navConfig;
