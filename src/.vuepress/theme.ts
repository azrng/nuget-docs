import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://azrng.gitee.io/nuget-docs/",

  author: {
    name: "Nuget-docs",
    url: "https://azrng.gitee.io/nuget-docs/",
  },
  iconAssets: "fontawesome-with-brands",

  logo: "/logo.svg",
  // 可能在不支持gitlab的，配置github的是可以的
  docsBranch: "develop",
  docsDir: "docs",

  navbar,
  sidebar,
    // 禁用底部栏
    displayFooter: true,
  headerDepth: 4,
  // encrypt: {
  //   config: {
  //     "/demo/encrypt.html": ["1234"],
  //     "/zh/demo/encrypt.html": ["1234"],
  //   },
  // },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // https://theme-hope.vuejs.press/zh/config/theme/layout.html#pageinfo
  // 是否显示编辑者
  contributors: false,

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // 取消注释它们如果你需要 TeX 支持
    // markdownMath: {
    //   // 启用前安装 katex
    //   type: "katex",
    //   // 或者安装 mathjax-full
    //   type: "mathjax",
    // },
  },

  // 在这里配置主题提供的插件
  plugins: {
    // 是否启用博客状态，true开启
    blog: false,

    // 在启用之前需要安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务器，在生产环境中请自行部署并使用自己的服务器！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },
  },
});
