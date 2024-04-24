import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as l,a as n}from"./app-046c2c75.js";const a={},r=n(`<h2 id="common-sqlsugar" tabindex="-1"><a class="header-anchor" href="#common-sqlsugar" aria-hidden="true">#</a> Common.SqlSugar</h2><h3 id="操作例子" tabindex="-1"><a class="header-anchor" href="#操作例子" aria-hidden="true">#</a> 操作例子</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>services.AddSqlSugarService(() 
{
    return new BaseQueryConfig
    {
        ConnectionString = connection,
        DbType = SqlSugar.DbType.MySql
    };
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录" tabindex="-1"><a class="header-anchor" href="#版本更新记录" aria-hidden="true">#</a> 版本更新记录</h3><blockquote><p>1.0.0 3.1版本sqlsugar使用封装<br> 1.1.0 更新版本为5.0<br> 1.1.1 配置多个目标框架<br> 1.1.2 添加扩展方法</p></blockquote><h2 id="common-sqlsugarquery" tabindex="-1"><a class="header-anchor" href="#common-sqlsugarquery" aria-hidden="true">#</a> Common.SqlSugarQuery</h2><h3 id="操作例子-1" tabindex="-1"><a class="header-anchor" href="#操作例子-1" aria-hidden="true">#</a> 操作例子</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>services.AddSqlSugarService(() =&gt;
{
    return new BaseQueryConfig
    {
        ConnectionString = connection,
        DbType = SqlSugar.DbType.MySql
    };
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录-1" tabindex="-1"><a class="header-anchor" href="#版本更新记录-1" aria-hidden="true">#</a> 版本更新记录</h3><ul><li>1.2.0-beta1 <ul><li>更新包支持多个版本</li><li>更新sqlsugar时间转字符串方法</li></ul></li><li>1.1.2 <ul><li>扩展方法完善</li></ul></li><li>1.1.1 <ul><li>增加sqlsugar时间、小数扩展方法，输出sql日志</li></ul></li><li>1.1.0 <ul><li>更新版本为net5.0</li></ul></li><li>1.0.2 <ul><li>3.1版本 sqlsugar和efcore结合使用</li></ul></li><li>1.0.0 <ul><li>3.1版本sqlsugar查询</li></ul></li></ul>`,10),s=[r];function d(c,u){return i(),l("div",null,s)}const v=e(a,[["render",d],["__file","sqlsugar.html.vue"]]);export{v as default};
