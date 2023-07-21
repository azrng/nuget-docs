import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as l,a as t}from"./app-aa7cf80f.js";const n={},a=t(`<h2 id="common-httpclients" tabindex="-1"><a class="header-anchor" href="#common-httpclients" aria-hidden="true">#</a> Common.HttpClients</h2><h3 id="操作例子" tabindex="-1"><a class="header-anchor" href="#操作例子" aria-hidden="true">#</a> 操作例子</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>ConfigureServices里面添加：
services.AddHttpClientService();  
需要用到的地方直接注入IHttpClientHelper进行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="postformdata" tabindex="-1"><a class="header-anchor" href="#postformdata" aria-hidden="true">#</a> PostFormData</h4><ul><li>Task&lt;T&gt; PostFormDataAsync&lt;T&gt;(string url, MultipartFormDataContent formDataContent);</li></ul><p>请求示例</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>var bytes = await File.ReadAllBytesAsync(&quot;D:\\\\2222.png&quot;);

var form = new MultipartFormDataContent();
var byteContent = new ByteArrayContent(bytes);
byteContent.Headers.ContentDisposition = new ContentDispositionHeaderValue(&quot;form-data&quot;)
{
    Name = &quot;file&quot;,
    FileName = &quot;img.png&quot;
};
form.Add(byteContent, &quot;file&quot;);
form.Add(new StringContent(&quot;img.png&quot;), &quot;FileName&quot;);
form.Add(new StringContent(&quot;image/png&quot;), &quot;ContentType&quot;);
var response = await client.PostFormDataAsync&lt;string&gt;(&quot;api/file&quot;, form);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录" tabindex="-1"><a class="header-anchor" href="#版本更新记录" aria-hidden="true">#</a> 版本更新记录</h3><ul><li><p>1.2.2</p><ul><li>增加x-www-form-urlencoded请求方式代码</li></ul></li><li><p>1.2.1</p><ul><li>增加get获取文件流的方法</li></ul></li><li><p>1.2.0</p><ul><li>升级支持.net7</li></ul></li><li><p>1.1.5</p><ul><li><p>修改put请求命名问题</p></li><li><p>增加patch请求</p></li></ul></li><li><p>1.1.4</p><ul><li>处理多个构造函数的报错</li><li>增加更加灵活的请求方式Send</li></ul></li><li><p>1.1.3</p><ul><li>增加http请求FormData形式去提交文件</li><li>支持框架netstandard2.1、net6.0</li></ul></li><li><p>1.1.2</p><ul><li>更新post方法同时兼容string和其他类型</li></ul></li><li><p>1.1.1</p><ul><li>更新post方法,配置多个目标框架</li></ul></li><li><p>1.1.0</p><ul><li>更新框架版本为5.0</li></ul></li><li><p>1.0.0</p><ul><li>3.1版本的http请求公共库</li></ul></li></ul><h2 id="common-restsharpclient" tabindex="-1"><a class="header-anchor" href="#common-restsharpclient" aria-hidden="true">#</a> Common.RestSharpClient</h2><h3 id="操作例子-1" tabindex="-1"><a class="header-anchor" href="#操作例子-1" aria-hidden="true">#</a> 操作例子</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>services.AddHttpClientService();
然后注入：IHttpClientHelper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录-1" tabindex="-1"><a class="header-anchor" href="#版本更新记录-1" aria-hidden="true">#</a> 版本更新记录</h3><ul><li>1.0.6 <ul><li>增加DownloadData方法</li></ul></li><li>1.0.5 <ul><li>增加userAgent</li></ul></li><li>1.0.4 <ul><li>优化请求和删除方法</li></ul></li><li>1.0.3 <ul><li>优化方法，删除无用代码，修改最后序列化方式</li></ul></li><li>1.0.2 <ul><li>更新方法名称和增加注释</li></ul></li><li>1.0.1 <ul><li>更新post方法同时兼容string和其他类型</li></ul></li><li>1.0.0 <ul><li>版本封装get post put delete</li></ul></li></ul>`,14),r=[a];function s(d,u){return e(),l("div",null,r)}const p=i(n,[["render",s],["__file","http_request.html.vue"]]);export{p as default};
