import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as a,a as n}from"./app-885be8d7.js";const l={},r=n(`<h2 id="azrng-aspnetcore-authentication-basic" tabindex="-1"><a class="header-anchor" href="#azrng-aspnetcore-authentication-basic" aria-hidden="true">#</a> Azrng.AspNetCore.Authentication.Basic</h2><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3><p>Basic认证包</p><h3 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h3><p>注册</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>services.AddAuthentication(BasicAuthentication.AuthenticationSchema)
    .AddBasicAuthentication(options =&gt;
    {
        options.UserName = &quot;admin&quot;;
        options.Password = &quot;123456&quot;;
    });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录" tabindex="-1"><a class="header-anchor" href="#版本更新记录" aria-hidden="true">#</a> 版本更新记录</h3><ul><li>0.0.1-beta2 <ul><li>增加认证失败响应内容处理</li><li>支持.Net6、.Net7、.Net8</li></ul></li><li>0.0.1 <ul><li>基础的Basic认证包</li></ul></li></ul><h2 id="common-jwttoken" tabindex="-1"><a class="header-anchor" href="#common-jwttoken" aria-hidden="true">#</a> Common.JwtToken</h2><h3 id="操作例子" tabindex="-1"><a class="header-anchor" href="#操作例子" aria-hidden="true">#</a> 操作例子</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>1. 注入服务
services.AddJwtTokenService(options =&gt;
{
    options.JwtAudience = &quot;aaaa&quot;;
    options.JwtIssuer = &quot;bbbb&quot;;
});
2.注入服务IJwtAuthService
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录-1" tabindex="-1"><a class="header-anchor" href="#版本更新记录-1" aria-hidden="true">#</a> 版本更新记录</h3><ul><li><p>2.0.0-beta1</p><ul><li>重构更新，去除swagger相关的方法以及依赖，swagger使用单独的包</li><li>移除3.1依赖，增加.net8支持</li><li>移除授权代码，移动到新包中</li></ul></li><li><p>1.2.1</p><ul><li>升级包版本以及维护文档</li></ul></li><li><p>1.2.0-beta2</p><ul><li>将swagger使用迁移到该包中</li></ul></li><li><p>1.2.0-beta1</p><ul><li>升级支持net7</li><li>注入服务的方式更新</li></ul></li><li><p>1.1.3</p><ul><li>支持netcoreapp3.1;net5.0;net6.0</li><li>优化方法，增加校验token方法</li></ul></li><li><p>1.1.2</p><ul><li>配置多个目标框架</li></ul></li><li><p>1.1.1</p><ul><li>拓展生成token的方法</li></ul></li><li><p>1.1.0</p><ul><li>更新版本为5.0</li></ul></li><li><p>1.0.0</p><ul><li>3.1版本的jwttoken公共库</li></ul></li></ul><h2 id="azrng-aspnetcore-authorization-default" tabindex="-1"><a class="header-anchor" href="#azrng-aspnetcore-authorization-default" aria-hidden="true">#</a> Azrng.AspNetCore.Authorization.Default</h2><h3 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h3><p>一个简单的根据路由进行判断授权的包</p><h3 id="操作-1" tabindex="-1"><a class="header-anchor" href="#操作-1" aria-hidden="true">#</a> 操作</h3><p>首先需要新建类PermissionVerifyService，继承自默认的IPermissionVerifyService，并实现该方法的根据路由判断是否有权限访问,如</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class PermissionVerifyService : IPermissionVerifyService
{
    private readonly ICurrentUser _currentUser;

    public PermissionVerifyService(ICurrentUser currentUser)
    {
        _currentUser = currentUser;
    }

    public Task&lt;bool&gt; IsAuthorize(string path)
    {
        return Task.FromResult(_currentUser.UserId == &quot;1&quot; &amp;&amp; path.Contains(&quot;path1&quot;));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后注入配置</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>builder.Services.AddMyAuthorization&lt;PermissionVerifyService&gt;();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后记得使用配置</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>app.UseAuthentication();
app.UseAuthorization();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后当你在action上标注<code>[Authorize]</code>的时候，会进行授权校验</p><h3 id="版本更新记录-2" tabindex="-1"><a class="header-anchor" href="#版本更新记录-2" aria-hidden="true">#</a> 版本更新记录</h3><ul><li>0.0.1 <ul><li>根据路由授权判断</li></ul></li></ul>`,26),s=[r];function d(t,c){return i(),a("div",null,s)}const h=e(l,[["render",d],["__file","authentication.html.vue"]]);export{h as default};
