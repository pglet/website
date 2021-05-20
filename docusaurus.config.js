module.exports = {
  title: 'Pglet',
  tagline: 'Build web apps like a frontend pro in the language you already know. No knowledge of HTML, CSS or JavaScript required.',
  url: 'https://pglet.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'pglet', // Usually your GitHub org/user name.
  projectName: 'pglet.github.io', // Usually your repo name.
  customFields: {
    heroTitle: 'Secure web UI for your backend apps',
    heroSubTitle: 'Fast ...Stream UI from your bots, backup scripts, cron jobs, crawlers. No knowledge of HTML, CSS or JavaScript required.',
  },  
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'pglet Logo',
        src: 'img/logo_light.svg',
        srcDark: 'img/logo_dark.svg',
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
          href: 'https://github.com/pglet/pglet',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['powershell', 'yaml'],
    },    
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'Python tutorial',
              to: 'docs/tutorials/python/',
            },
            {
              label: 'Controls reference',
              to: 'docs/controls/',
            }            
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/rWjf7xx',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/pgletio',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/pglet',
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
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy policy',
              to: 'privacy-policy',
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
