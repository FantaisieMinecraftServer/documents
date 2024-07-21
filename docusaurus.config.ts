import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'Fantaisie Server',
  tagline: '仮想世界で、第二の人生を歩もう！',
  favicon: 'img/favicon.ico',

  url: 'https://docs.tensyoserver.net',
  baseUrl: '/',

  organizationName: 'Fantaisie Project',
  projectName: 'Fantaisie',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/FantaisieMinecraftServer/document/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: false
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'fantaisie network',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'documentSidebar',
          position: 'left',
          label: 'ドキュメント',
        },
        {
          href: 'https://github.com/FantaisieMinecraftServer',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Fantaisie Project.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
