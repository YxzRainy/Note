// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	// themes: ['@docusaurus/theme-search-algolia'],

	title: '自由清净，无人干涉',
	// tagline: 'Dinosaurs are cool',
	url: 'https://note.yxzi.xyz/',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'https://gallery.yxzi.xyz/galleries/2022/06/12/Note.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'facebook', // Usually your GitHub org/user name.
	projectName: 'docusaurus', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'zh-Hans',
		locales: ['zh-Hans'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: {
					showReadingTime: true,
					readingTime: ({ content, frontMatter, defaultReadingTime }) => defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
					blogTitle: 'Rainy Blog',
					postsPerPage: 10,
					blogSidebarTitle: 'All posts',
					blogSidebarCount: 'ALL',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: '自由清净，无人干涉',
				logo: {
					alt: 'My Site Logo',
					src: 'https://gallery.yxzi.xyz/galleries/2022/06/12/Note.png',
				},
				items: [
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Note',
					},
					{ to: '/blog', label: 'Blog', position: 'left' },

					{
						href: 'https://github.com/YxzRainy/Notes',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
		}),
};

module.exports = config;
