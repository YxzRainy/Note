// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
	// mermaid
	markdown: {
		mermaid: true,
	},
	plugins: ['@docusaurus/theme-mermaid'],
	// search local
	themes: [
		[
			require.resolve('@easyops-cn/docusaurus-search-local'),
			{
				hashed: true,
				language: ['en', 'zh'],
				highlightSearchTermsOnTargetPage: true,
				explicitSearchResultPath: true,
			},
		],
	],
	// latex

	stylesheets: [
		{
			href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
			type: 'text/css',
			integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
			crossorigin: 'anonymous',
		},
	],
	title: 'Note',
	url: 'https://note.yxzi.xyz/',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'https://gallery.yxzi.xyz/galleries/2022/06/12/Note.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'facebook', // Usually your GitHub org/user name.
	projectName: 'docusaurus', // Usually your repo name.

	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					breadcrumbs: false,
					remarkPlugins: [math],
					rehypePlugins: [katex],
				},
				blog: false,
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
						href: 'https://github.com/YxzRainy/Note',
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
			//   footer: {
			//     style: 'dark',
			//     links: [
			//       {
			//         title: 'Docs',
			//         items: [
			//           {
			//             label: 'Tutorial',
			//             to: '/docs/intro',
			//           },
			//         ],
			//       },
			//       {
			//         title: 'Community',
			//         items: [
			//           {
			//             label: 'Stack Overflow',
			//             href: 'https://stackoverflow.com/questions/tagged/docusaurus',
			//           },
			//           {
			//             label: 'Discord',
			//             href: 'https://discordapp.com/invite/docusaurus',
			//           },
			//           {
			//             label: 'Twitter',
			//             href: 'https://twitter.com/docusaurus',
			//           },
			//         ],
			//       },
			//       {
			//         title: 'More',
			//         items: [
			//           {
			//             label: 'Blog',
			//             to: '/blog',
			//           },
			//           {
			//             label: 'GitHub',
			//             href: 'https://github.com/facebook/docusaurus',
			//           },
			//         ],
			//       },
			//     ],
			//     copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
			//   },
			//   prism: {
			//     theme: lightCodeTheme,
			//     darkTheme: darkCodeTheme,
			//   },
		}),
};

module.exports = config;
