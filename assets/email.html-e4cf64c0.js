import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as a,a as n}from"./app-3103a27d.js";const o={},d=n(`<h2 id="common-email" tabindex="-1"><a class="header-anchor" href="#common-email" aria-hidden="true">#</a> Common.Email</h2><h3 id="操作例子" tabindex="-1"><a class="header-anchor" href="#操作例子" aria-hidden="true">#</a> 操作例子</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>services.AddEmail(info =&gt;
{
    info.Host = &quot;smtp.163.com&quot;;
    info.Post = 587;
    info.FromName = &quot;发送者用户名&quot;;
    info.FromAddress = &quot;发送者地址&quot;;
    info.FromPassword = &quot;发送者密码(授权码)&quot;;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录" tabindex="-1"><a class="header-anchor" href="#版本更新记录" aria-hidden="true">#</a> 版本更新记录</h3><blockquote><p>1.0.0 3.1发送邮件服务<br> 1.0.1 更新框架为2.1框架兼容更多系统，丰富发送邮件的方法</p></blockquote>`,5),s=[d];function r(c,t){return i(),a("div",null,s)}const u=e(o,[["render",r],["__file","email.html.vue"]]);export{u as default};
