module.exports = {
  title: 'Pglet - Web UI streaming service and toolkit',
  tagline: 'Easily program rich and secure user interface in any language. No knowledge of HTML, CSS or JavaScript required.',
  url: 'https://pglet.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'pglet', // Usually your GitHub org/user name.
  projectName: 'pglet.github.io', // Usually your repo name.
  customFields: {
    heroTitle: 'Web UI streaming service and toolkit',
    heroSubTitle: 'Add rich UI to your local apps and stream it to web. No knowledge of HTML, CSS or JavaScript required.',
  },  
  themeConfig: {
    navbar: {
      title: 'pglet',
      logo: {
        alt: 'pglet Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/pglet',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['powershell'],
    },    
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/pglet',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/rWjf7xx',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/pgletio',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/pglet/pglet',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Appveyor Systems Inc. Built with Docusaurus.`,
    }
    // algolia: {
    //   apiKey: 'api-key',
    //   indexName: 'index-name',
    //   appId: 'app-id', // Optional, if you run the DocSearch crawler on your own
    //   algoliaOptions: {}, // Optional, if provided by Algolia
    // }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/pglet/website/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/pglet/website/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
