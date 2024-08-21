import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,a}from"./app-2254020d.js";const l={},d=a(`<h2 id="azrng-dbenvconfig" tabindex="-1"><a class="header-anchor" href="#azrng-dbenvconfig" aria-hidden="true">#</a> Azrng.DbEnvConfig</h2><p>一个数据库环境变量配置的封装，通过读取数据库的表中的配置，然后代码中直接可以通过IConfiguration来获取内容</p><h3 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h3><ul><li>数据库配置导入IConfiguration</li><li>支持已有配置表导入</li><li>支持IDbConnection的数据库，比如pgsql、sqlserver、mysql等</li><li>支持自定义初始化表语句</li><li>支持自定义初始化表数据</li><li>支持查询配置语句自定义筛选条件</li></ul><h3 id="操作例子" tabindex="-1"><a class="header-anchor" href="#操作例子" aria-hidden="true">#</a> 操作例子</h3><h4 id="pgsql使用默认配置表" tabindex="-1"><a class="header-anchor" href="#pgsql使用默认配置表" aria-hidden="true">#</a> pgsql使用默认配置表</h4><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>var connStr = builder.Configuration[&quot;ConnStr&quot;];
builder.Configuration.AddDbConfiguration(options =&gt;
{
    options.CreateDbConnection = () =&gt; new NpgsqlConnection(connStr);
    options.FilterWhere = &quot;and is_delete=false&quot;;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="pgsql使用自定义初始化配置" tabindex="-1"><a class="header-anchor" href="#pgsql使用自定义初始化配置" aria-hidden="true">#</a> pgsql使用自定义初始化配置</h4><p>新建PgsqlScriptService文件继承自DefaultScriptService，如果想去初始化表数据，那么就可以重写GetInitTableDataScript方法</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class PgsqlScriptService : DefaultScriptService
{
    public override string GetInitTableDataScript()
    {
        var sql =
            $&quot;INSERT INTO config.system_config (id, code, value, is_delete) VALUES (default, &#39;{Guid.NewGuid()}&#39;, &#39;{Guid.NewGuid()}&#39;, false);&quot;;
        return sql;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注入服务配置</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>var connStr = builder.Configuration[&quot;ConnStr&quot;];
builder.Configuration.AddDbConfiguration(options =&gt;
{
    options.CreateDbConnection = () =&gt; new NpgsqlConnection(connStr);
    options.FilterWhere = &quot;and is_delete=false&quot;;
}, new PgsqlScriptService());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录" tabindex="-1"><a class="header-anchor" href="#版本更新记录" aria-hidden="true">#</a> 版本更新记录</h3><ul><li>1.0.0-未发布 <ul><li>支持数据库环境变量配置</li></ul></li></ul>`,14),r=[d];function s(t,c){return i(),n("div",null,r)}const v=e(l,[["render",s],["__file","dbEnvConfig.html.vue"]]);export{v as default};
