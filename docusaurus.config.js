const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Documentación MyMedicApp',
  tagline: '',
  url: 'https://docs-dev.mymedicapp.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'asaelcb', // Usually your GitHub org/user name.
  projectName: 'mymedicapp-docs-site', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
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
        logo: {
          alt: 'logo.png',
          src: 'img/logo.png'
        }
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Aprende a utilizar MyMedicApp',
            items: [
              {
                label: 'Documentación',
                to: '/docs/intro',
              }
            ],
          },
          {
            title: 'Acerca de MyMedicApp',
            items: [
              {
                label: 'Nuestra página web',
                href: 'https://www.mymedicapp.com',
              },
              {
                label: 'Comienza tu mes de prueba gratis',
                href: 'https://discordapp.com/invite/docusaurus',
              }
            ],
          },
          {
            title: 'Nuestras redes sociales',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/mymedicappmx',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/mymedicappmx',
              },
            ],
          },
        ],
        copyright: `Copyright ©${new Date().getFullYear()} MyMedicApp`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
