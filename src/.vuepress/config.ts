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
  head: [
    // 百度统计代码  参考文档：https://blog.csdn.net/baijiafan/article/details/126657618
    ['script', {}, `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?42532615851365bfb5e3b611eb2b31d2";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
    `]
  ]
});

