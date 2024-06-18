import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as l,a as s}from"./app-a493bec6.js";const a={},n=s(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>该包封装了常见的加密公共类</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>MD5哈希算法：Md5Helper</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//字符串md5哈希算法
string GetMd5Hash(this string str)

//文件获取md5
string GetFileMd5Hash(string path)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sha哈希算法：ShaHelper</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//获取字符串sha1值
string GetSHA1Hash(this string str)
//获取字符串sha256值
string GetSHA256Hash(this string str)
//获取字符串sha512值
string GetSHA512Hash(this string str)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Des加密算法：DesHelper</p><p>Rsa非对称加密算法：RsaHelper</p><p>Sm2非对称加密算法：Sm2Helper</p><p>Sm3哈希算法：Sm3Helper</p><p>Sm4对称加密算法：Sm4Helper</p><h2 id="更新记录" tabindex="-1"><a class="header-anchor" href="#更新记录" aria-hidden="true">#</a> 更新记录</h2><ul><li><p>0.0.1-beta7</p><ul><li>对AES加密算法优化</li></ul></li><li><p>0.0.1-beta6</p><ul><li>替换依赖包BouncyCastle.NetCore为BouncyCastle.Cryptography，且将里面的一些源码操作改为使用包的方法，性能更好</li></ul></li><li><p>0.0.1-beta5</p><ul><li>增加SHA的HMAC算法</li></ul></li><li><p>0.0.1-beta4</p><ul><li>增加sm3、rsa等示例，增加单元测试</li></ul></li><li><p>0.0.1-beta3</p><ul><li>支持MD5、SHA等、DES、AES、RSA等</li></ul></li><li><p>0.0.1-beta2</p><ul><li>fix处理md5加密将16位和32位弄混问题</li></ul></li><li><p>0.0.1-beta1</p><ul><li>从common里面移出来一些方法</li></ul></li></ul>`,14),r=[n];function d(t,c){return i(),l("div",null,r)}const h=e(a,[["render",d],["__file","common_security.html.vue"]]);export{h as default};
