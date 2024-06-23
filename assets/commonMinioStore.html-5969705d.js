import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-dfa24dce.js";const i={},t=e(`<h2 id="common-s3" tabindex="-1"><a class="header-anchor" href="#common-s3" aria-hidden="true">#</a> Common.S3</h2><p>一个基于AWSSDK.S3包适用于S3协议的存储封装类库。</p><h3 id="操作示例" tabindex="-1"><a class="header-anchor" href="#操作示例" aria-hidden="true">#</a> 操作示例</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>services.AddS3Store(x =&gt;
{
    x.Url = &quot;http://localhost:9000&quot;;
    x.AccessKey = &quot;admin&quot;;
    x.SecretKey = &quot;123456789&quot;;
});

// 或者连接字符串形式
services.AddS3Store(&quot;http://admin:123456789@localhost:9008&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录" tabindex="-1"><a class="header-anchor" href="#版本更新记录" aria-hidden="true">#</a> 版本更新记录</h3><ul><li>1.0.0-beta1 <ul><li>基本s3操作，支持不安全https等</li></ul></li></ul><h2 id="common-miniostore" tabindex="-1"><a class="header-anchor" href="#common-miniostore" aria-hidden="true">#</a> Common.MinioStore</h2><p>一个基于AWSSDK.S3包适用于S3协议的存储封装类库。</p><h3 id="操作例子" tabindex="-1"><a class="header-anchor" href="#操作例子" aria-hidden="true">#</a> 操作例子</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>services<span class="token punctuation">.</span><span class="token function">AddMinioStore</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
    x<span class="token punctuation">.</span>Url <span class="token operator">=</span> <span class="token string">&quot;http://localhost:9000&quot;</span><span class="token punctuation">;</span>
    x<span class="token punctuation">.</span>AccessKey <span class="token operator">=</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">;</span>
    x<span class="token punctuation">.</span>SecretKey <span class="token operator">=</span> <span class="token string">&quot;123456789&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 或者连接字符串形式</span>
services<span class="token punctuation">.</span><span class="token function">AddMinioStore</span><span class="token punctuation">(</span><span class="token string">&quot;http://admin:123456789@localhost:9008&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目中使用该服务，那么就可以通过注册IStore来调用方法</p><h3 id="版本更新记录-1" tabindex="-1"><a class="header-anchor" href="#版本更新记录-1" aria-hidden="true">#</a> 版本更新记录</h3><ul><li>1.0.0-beta3 <ul><li>支持minio适配不安全https问题</li></ul></li><li>1.0.0-beta2 <ul><li>增加支持.Net7、.Net8框架</li><li>支持连接字符串方案</li></ul></li><li>1.0.0-beta1 <ul><li>基础操作</li></ul></li></ul>`,13),o=[t];function l(c,r){return s(),a("div",null,o)}const p=n(i,[["render",l],["__file","commonMinioStore.html.vue"]]);export{p as default};
