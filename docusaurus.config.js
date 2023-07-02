// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const organizationName = "egonzalezt";
const projectName = "Containers";

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Containers Blog',
  tagline: "Welcome to our Containers Technology Blog, where we explore the fascinating realm of containerization and its transformative impact on modern software development. Whether you're an aspiring developer, a seasoned IT professional, or simply curious about the world of containers, this blog is your gateway to unlocking the potential of this innovative technology.",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: `https://${organizationName}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/${projectName}/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // (...)
        docs: {
          // (...)
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        blog: {
          // (...)
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Containers Blog',
        logo: {
          alt: 'Containers Blog Logo',
          src: 'img/logo.svg',
        },
        items: [

          {to: '/docs/intro', label: 'Docs', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/egonzalezt/Containers',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docker',
                to: '/docs/category/docker',
              },
              {
                label: 'Docker Compose',
                to: '/docs/category/compose',
              },
              {
                label: 'Docker Network',
                to: '/docs/category/network',
              },
              {
                label: 'Docker Volumes',
                to: '/docs/category/volumes',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/egonzalezt/Containers',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} egonzalezt. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp'],
      },
    }),
    markdown: {
      mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config;
