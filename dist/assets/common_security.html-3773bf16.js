import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as s,a as n}from"./app-aa7cf80f.js";const a={},d=n(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>该包封装了常见的加密公共类</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>MD5哈希算法</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//字符串md5哈希算法
string GetMd5Hash(this string str)

//文件获取md5
string GetFileMd5Hash(string path)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sha哈希算法</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//获取字符串sha1值
string GetSHA1Hash(this string str)
//获取字符串sha256值
string GetSHA256Hash(this string str)
//获取字符串sha512值
string GetSHA512Hash(this string str)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="版本更新记录" tabindex="-1"><a class="header-anchor" href="#版本更新记录" aria-hidden="true">#</a> 版本更新记录</h2><ul><li><p>0.0.1-beta2</p><ul><li>fix处理md5加密将16位和32位弄混问题</li></ul></li><li><p>0.0.1-beta1</p><ul><li>从common里面移出来一些方法</li></ul></li></ul>`,9),r=[d];function l(t,c){return i(),s("div",null,r)}const m=e(a,[["render",l],["__file","common_security.html.vue"]]);export{m as default};
