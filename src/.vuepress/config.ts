import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/nuget-docs/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "AZRNG",
      description: "AZRNG 包说明文档",
    },
  },

  theme,

  shouldPrefetch: false,
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true
    }),
  ],
});

