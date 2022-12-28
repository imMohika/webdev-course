export const SITE = {
  title: "Web Dev course",
  description: "",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;

export const SIDEBAR: Sidebar = {
  en: {
    "00 Introduction": [
      { text: "1 The Course", link: "notes/00-1-the-course" },
      {
        text: "2 What are you going to learn",
        link: "notes/00-2-whate-are-you-going-to-learn",
      },
      { text: "3 Tools", link: "notes/00-3-tools" },
    ],
    "01 Terminology": [
      { text: "1 The Computer", link: "notes/01-1-the-computer" },
      { text: "2 What The Web", link: "notes/01-2-what-the-web" },
    ],
    "02 Foundation": [
      { text: "1 HTML", link: "notes/02-1-html" },
      { text: "2 CSS", link: "notes/02-2-css" },
      { text: "Project", link: "" },
    ],
    "03 JavaScript": [
      { text: "1 Basics", link: "notes/03-1-basic-javascript" },
      { text: "2 Tooling", link: "notes/03-2-javascript-tooling" },
      { text: "3 More Javascript", link: "notes/03-3-more-javascript" },
      { text: "Project", link: "" },
    ],
    "04 Optional": [
      { text: "TailwindCSS", link: "notes/04-tailwind" },
      { text: "PostCSS", link: "notes/04-postcss" },
      { text: "Astro", link: "notes/04-astro" },
    ],
  },
};
