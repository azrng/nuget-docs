import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as n}from"./app-DSgttSh5.js";const l={};function t(r,s){return n(),a("div",null,s[0]||(s[0]=[e(`<h2 id="common-sqlsugar" tabindex="-1"><a class="header-anchor" href="#common-sqlsugar"><span>Common.SqlSugar</span></a></h2><h3 id="操作例子" tabindex="-1"><a class="header-anchor" href="#操作例子"><span>操作例子</span></a></h3><div class="language-c# line-numbers-mode" data-highlighter="shiki" data-ext="c#" data-title="c#" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">services</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">AddSqlSugarService</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(() </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> new </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">BaseQueryConfig</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        ConnectionString</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> connection</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        DbType</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> SqlSugar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">DbType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">MySql</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    };</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录" tabindex="-1"><a class="header-anchor" href="#版本更新记录"><span>版本更新记录</span></a></h3><blockquote><p>1.0.0 3.1版本sqlsugar使用封装<br> 1.1.0 更新版本为5.0<br> 1.1.1 配置多个目标框架<br> 1.1.2 添加扩展方法</p></blockquote><h2 id="common-sqlsugarquery" tabindex="-1"><a class="header-anchor" href="#common-sqlsugarquery"><span>Common.SqlSugarQuery</span></a></h2><h3 id="操作例子-1" tabindex="-1"><a class="header-anchor" href="#操作例子-1"><span>操作例子</span></a></h3><div class="language-c# line-numbers-mode" data-highlighter="shiki" data-ext="c#" data-title="c#" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">services</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">AddSqlSugarService</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(() =&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> new </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">BaseQueryConfig</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        ConnectionString</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> connection</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        DbType</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> SqlSugar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">DbType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">MySql</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    };</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录-1" tabindex="-1"><a class="header-anchor" href="#版本更新记录-1"><span>版本更新记录</span></a></h3><ul><li>1.2.0-beta1 <ul><li>更新包支持多个版本</li><li>更新sqlsugar时间转字符串方法</li></ul></li><li>1.1.2 <ul><li>扩展方法完善</li></ul></li><li>1.1.1 <ul><li>增加sqlsugar时间、小数扩展方法，输出sql日志</li></ul></li><li>1.1.0 <ul><li>更新版本为net5.0</li></ul></li><li>1.0.2 <ul><li>3.1版本 sqlsugar和efcore结合使用</li></ul></li><li>1.0.0 <ul><li>3.1版本sqlsugar查询</li></ul></li></ul>`,10)]))}const d=i(l,[["render",t],["__file","sqlsugar.html.vue"]]),k=JSON.parse('{"path":"/nuget/sqlsugar.html","title":"SqlSugar","lang":"zh-CN","frontmatter":{"title":"SqlSugar","lang":"zh-CN","date":"2023-07-20T00:00:00.000Z","publish":true,"author":"azrng","order":60,"category":["nuget"],"tag":["库"],"description":"Common.SqlSugar 操作例子 版本更新记录 1.0.0 3.1版本sqlsugar使用封装 1.1.0 更新版本为5.0 1.1.1 配置多个目标框架 1.1.2 添加扩展方法 Common.SqlSugarQuery 操作例子 版本更新记录 1.2.0-beta1 更新包支持多个版本 更新sqlsugar时间转字符串方法 1.1.2 扩展...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/nuget-docs/nuget-docs/nuget/sqlsugar.html"}],["meta",{"property":"og:site_name","content":"AZRNG"}],["meta",{"property":"og:title","content":"SqlSugar"}],["meta",{"property":"og:description","content":"Common.SqlSugar 操作例子 版本更新记录 1.0.0 3.1版本sqlsugar使用封装 1.1.0 更新版本为5.0 1.1.1 配置多个目标框架 1.1.2 添加扩展方法 Common.SqlSugarQuery 操作例子 版本更新记录 1.2.0-beta1 更新包支持多个版本 更新sqlsugar时间转字符串方法 1.1.2 扩展..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-21T15:10:03.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"库"}],["meta",{"property":"article:published_time","content":"2023-07-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-21T15:10:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SqlSugar\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-21T15:10:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"Common.SqlSugar","slug":"common-sqlsugar","link":"#common-sqlsugar","children":[{"level":3,"title":"操作例子","slug":"操作例子","link":"#操作例子","children":[]},{"level":3,"title":"版本更新记录","slug":"版本更新记录","link":"#版本更新记录","children":[]}]},{"level":2,"title":"Common.SqlSugarQuery","slug":"common-sqlsugarquery","link":"#common-sqlsugarquery","children":[{"level":3,"title":"操作例子","slug":"操作例子-1","link":"#操作例子-1","children":[]},{"level":3,"title":"版本更新记录","slug":"版本更新记录-1","link":"#版本更新记录-1","children":[]}]}],"git":{"createdTime":1689952203000,"updatedTime":1689952203000,"contributors":[{"name":"azrng","username":"azrng","email":"itzhangyunpeng@163.com","commits":1,"url":"https://github.com/azrng"}]},"readingTime":{"minutes":0.54,"words":162},"filePathRelative":"nuget/sqlsugar.md","localizedDate":"2023年7月20日","autoDesc":true}');export{d as comp,k as data};
