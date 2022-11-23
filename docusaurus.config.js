// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
	markdown: {
		mermaid: true,
	},
	themes: ['@docusaurus/theme-mermaid'],
};

/** @type {import('@docusaurus/types').Config} */
const config = {
	themes: [
		[
			require.resolve('@easyops-cn/docusaurus-search-local'),
			{
				// ... Your options.
				// `hashed` is recommended as long-term-cache of index file is possible.
				hashed: true,
				// For Docs using Chinese, The `language` is recommended to set to:
				// ```
				language: ['en', 'zh'],
				// ```
				highlightSearchTermsOnTargetPage: true,
				explicitSearchResultPath: true,
			},
		],
	],

	title: 'Note',
	// tagline: 'Dinosaurs are cool',
	url: 'https://note.yxzi.xyz/',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'https://gallery.yxzi.xyz/galleries/2022/06/12/Note.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'facebook', // Usually your GitHub org/user name.
	projectName: 'Note', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'zh-Hans',
		locales: ['zh-Hans'],
	},

	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					// remarkPlugins: [require('mdx-mermaid')],
					sidebarPath: require.resolve('./sidebars.js'),
					// rehypePlugins: [katex],
					// remarkPlugins: [math],
					breadcrumbs: false,
				},

				blog: false,
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
	stylesheets: [
		{
			href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
			type: 'text/css',
			integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
			crossorigin: 'anonymous',
		},
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'Note',
				logo: {
					alt: 'My Site Logo',
					src: 'https://gallery.yxzi.xyz/galleries/2022/06/12/Note.png',
				},
				items: [
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Home',
					},
					{
						label: 'Blog',
						href: 'https://yxzi.xyz/',
						position: 'left',
					},
					{
						href: 'https://github.com/YxzRainy/Notes',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			docs: {
				sidebar: {
					hideable: true,
					autoCollapseCategories: true,
				},
			},
		}),
};

module.exports = config;
