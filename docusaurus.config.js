/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  // 网站标题
  title: "Ricardo的博客",
  // 网站标语
  tagline: "这里是Ricardo的博客!",
  // 网站网址
  url: "https://xszhao.vercel.app/",
  // 站点相对路径
  baseUrl: "/",
  // 检测到无效链接时的行为
  onBrokenLinks: "throw",
  // 检测到无效 Markdown 链接时的行为
  onBrokenMarkdownLinks: "warn",
  // 网站图标
  favicon: "img/favicon.ico",
  // 拥有此源的 GitHub 用户或组织
  organizationName: "targaryen",
  // GitHub 源的名称
  projectName: "my-docusaurus-website",
  // i18n
  i18n: {
    defaultLocale: "zh-cn",
    locales: ["en", "zh-cn"],
  },
  themeConfig: {
    navbar: {
      title: "Ricardo",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Tutorial",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/Taragryen",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: "Docs",
      //     items: [
      //       {
      //         label: "Tutorial",
      //         to: "/docs/intro",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Community",
      //     items: [
      //       {
      //         label: "Stack Overflow",
      //         href: "https://stackoverflow.com/questions/tagged/docusaurus",
      //       },
      //       {
      //         label: "Discord",
      //         href: "https://discordapp.com/invite/docusaurus",
      //       },
      //       {
      //         label: "Twitter",
      //         href: "https://twitter.com/docusaurus",
      //       },
      //     ],
      //   },
      //   {
      //     title: "More",
      //     items: [
      //       {
      //         label: "Blog",
      //         to: "/blog",
      //       },
      //       {
      //         label: "GitHub",
      //         href: "https://github.com/facebook/docusaurus",
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Ricardo, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
