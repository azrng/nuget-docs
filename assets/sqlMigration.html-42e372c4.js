import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t}from"./app-14307f50.js";const o={},p=t(`<h2 id="azrng-sqlmigration" tabindex="-1"><a class="header-anchor" href="#azrng-sqlmigration" aria-hidden="true">#</a> Azrng.SqlMigration</h2><p>一个脚本迁移的nuget包</p><h3 id="操作例子" tabindex="-1"><a class="header-anchor" href="#操作例子" aria-hidden="true">#</a> 操作例子</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>services<span class="token punctuation">.</span><span class="token function">AddSqlMigrationService</span><span class="token punctuation">(</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span> config <span class="token operator">=&gt;</span>
            <span class="token punctuation">{</span>
                config<span class="token punctuation">.</span>Schema <span class="token operator">=</span> <span class="token string">&quot;sample&quot;</span><span class="token punctuation">;</span>
                config<span class="token punctuation">.</span>VersionPrefix <span class="token operator">=</span> <span class="token keyword">string</span><span class="token punctuation">.</span>Empty<span class="token punctuation">;</span>
                config<span class="token punctuation">.</span>SqlRootPath <span class="token operator">=</span> Path<span class="token punctuation">.</span><span class="token function">Combine</span><span class="token punctuation">(</span>env<span class="token punctuation">.</span>WebRootPath<span class="token punctuation">,</span> <span class="token string">&quot;InitSql&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                config<span class="token punctuation">.</span>ConnectionBuilder <span class="token operator">=</span> <span class="token punctuation">(</span>sp<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">NpgsqlConnection</span><span class="token punctuation">(</span>Configuration<span class="token punctuation">.</span><span class="token function">GetConnectionString</span><span class="token punctuation">(</span><span class="token string">&quot;Pgsql&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AddAutoMigration</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录" tabindex="-1"><a class="header-anchor" href="#版本更新记录" aria-hidden="true">#</a> 版本更新记录</h3><ul><li>0.0.2 <ul><li>修复sql问题</li></ul></li><li>0.0.1 <ul><li>基本迁移操作</li></ul></li></ul>`,6),e=[p];function c(i,l){return s(),a("div",null,e)}const d=n(o,[["render",c],["__file","sqlMigration.html.vue"]]);export{d as default};