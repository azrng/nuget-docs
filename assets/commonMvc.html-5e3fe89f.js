import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,a as t}from"./app-9ba8c8d9.js";const o={};function u(i,n){return e(),a("div",null,n[0]||(n[0]=[t(`<h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2><p>常见的Asp.NetCore里面辅助方法</p><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h2><h3 id="扩展类" tabindex="-1"><a class="header-anchor" href="#扩展类" aria-hidden="true">#</a> 扩展类</h3><h4 id="httpcontext扩展" tabindex="-1"><a class="header-anchor" href="#httpcontext扩展" aria-hidden="true">#</a> HttpContext扩展</h4><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>var iPv4 = HttpContext.GetLocalIpAddressToIPv4();
var ipv6 = HttpContext.GetLocalIpAddressToIPv6();
var requestInfo = HttpContext.Request.GetRequestUrlAddress();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="帮助类" tabindex="-1"><a class="header-anchor" href="#帮助类" aria-hidden="true">#</a> 帮助类</h3><h4 id="myhttpcontext帮助类" tabindex="-1"><a class="header-anchor" href="#myhttpcontext帮助类" aria-hidden="true">#</a> MyHttpContext帮助类</h4><p>需要提前注册：MyHttpContext.ServiceProvider=xxxServiceProvider</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//获取HttpContext
MyHttpContext.Current
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="session帮助类" tabindex="-1"><a class="header-anchor" href="#session帮助类" aria-hidden="true">#</a> Session帮助类</h4><p>使用SessionHelper需要提前注册MyHttpContext.ServiceProvider</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//设置session
void SetSession(string key, string value)
void SetSession&lt;T&gt;(string key, T value)

//获取Session
string GetSession(string key)
T GetSession&lt;T&gt;(string key)

//移除session
void Remove(params string[] keys)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="公共返回类" tabindex="-1"><a class="header-anchor" href="#公共返回类" aria-hidden="true">#</a> 公共返回类</h3><p>封装了公共的返回类</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>IResultModel
IResultModel&lt;T&gt;
ResultModel:IsSuccess、Code、Message、Errors
ResultModel&lt;T&gt;：IsSuccess、Code、Message、Data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>属性描述</p><p>IsSuccess：是否成功<br> Code:状态码<br> Data:返回的数据<br> Errors：模型校验的错误信息</p></blockquote><p>返回正确的方法</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>[HttpGet]
public IResultModel&lt;IEnumerable&lt;WeatherForecast&gt;&gt; Get()
{
    var result = Enumerable.Range(1, 3).Select(index =&gt; new WeatherForecast
    {
        Date = DateTime.Now.AddDays(index),
        TemperatureC = Random.Shared.Next(-20, 55),
        Summary = Summaries[Random.Shared.Next(Summaries.Length)]
    })
    .ToArray();
    return ResultModel&lt;IEnumerable&lt;WeatherForecast&gt;&gt;.Success(result);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回的示例效果</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-05-20T22:13:35.2501522+08:00&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;temperatureC&quot;</span><span class="token operator">:</span> <span class="token number">52</span><span class="token punctuation">,</span>
      <span class="token property">&quot;temperatureF&quot;</span><span class="token operator">:</span> <span class="token number">125</span><span class="token punctuation">,</span>
      <span class="token property">&quot;summary&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Freezing&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-05-21T22:13:35.2505438+08:00&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;temperatureC&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;temperatureF&quot;</span><span class="token operator">:</span> <span class="token number">39</span><span class="token punctuation">,</span>
      <span class="token property">&quot;summary&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Balmy&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-05-24T22:13:35.250546+08:00&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;temperatureC&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
      <span class="token property">&quot;temperatureF&quot;</span><span class="token operator">:</span> <span class="token number">44</span><span class="token punctuation">,</span>
      <span class="token property">&quot;summary&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hot&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;isSuccess&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;200&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;errors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回错误的效果</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>[HttpGet]
public IResultModel&lt;IEnumerable&lt;WeatherForecast&gt;&gt; Get()
{
    return ResultModel&lt;IEnumerable&lt;WeatherForecast&gt;&gt;.Error(&quot;参数为空&quot;, &quot;400&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回结果</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;isSuccess&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;400&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;参数为空&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;errors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义返回结果包装" tabindex="-1"><a class="header-anchor" href="#自定义返回结果包装" aria-hidden="true">#</a> 自定义返回结果包装</h3><p>通过自定义结果过滤器来默认给所有接口最外层包装一层返回类</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>services.AddControllers(options =&gt; 
{
    options.Filters.Add(typeof(CustomResultPackFilter));
});

// 或者使用该简便的方案

services.AddMvcResultPackFilterFilter();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若是有些Action不想包装一层，只需要标注特性即可在返回的时候不显示包装的一层</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>[NoWrapperAttribute]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者通过传入忽略的前缀来忽略指定接口的返回值包装</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddSwaggerGen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">AddMvcResultPackFilterFilter</span><span class="token punctuation">(</span><span class="token string">&quot;/api/configDashboard&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义模型验证" tabindex="-1"><a class="header-anchor" href="#自定义模型验证" aria-hidden="true">#</a> 自定义模型验证</h3><p>因为默认是启用模型校验的，所以当你传的model参数有问题的时候，还未到达action的时候已经处理了校验。</p><p>举例，当我们有一个post的接口，入参为</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class Userinfo
{
    [Required]
    [MinLength(5)]
    public string Id { get; set; }

    [MinLength(6)]
    public string Name { get; set; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当传输不符合条件的数据时候返回的状态码是400，效果如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;type&quot;: &quot;https://tools.ietf.org/html/rfc7231#section-6.5.1&quot;,
    &quot;title&quot;: &quot;One or more validation errors occurred.&quot;,
    &quot;status&quot;: 400,
    &quot;traceId&quot;: &quot;00-40ff21ce6815e3b18232fa00f2024f67-84a9ab2db0b01cc9-00&quot;,
    &quot;errors&quot;: {
        &quot;Id&quot;: [
            &quot;The Id field is required.&quot;
        ],
        &quot;Name&quot;: [
            &quot;The field Name must be a string or array type with a minimum length of &#39;6&#39;.&quot;
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个效果是不方便前端处理的，所以我们使用的，所以我们自己做模型校验来封装错误信息</p><blockquote><p>注意：需要先关闭默认的模型校验。</p></blockquote><p>在ConfigureServices中注册自定义模型验证过滤器并禁用默认的自动模型验证</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>services<span class="token punctuation">.</span><span class="token function">AddControllers</span><span class="token punctuation">(</span>options <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
	options<span class="token punctuation">.</span>Filters<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Add</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ModelVerifyFilter<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//注册模型校验过滤器 </span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ConfigureApiBehaviorOptions</span><span class="token punctuation">(</span>options <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
	<span class="token comment">//[ApiController] 默认自带有400模型验证，且优先级比较高，如果需要自定义模型验证，则需要先关闭默认的模型验证</span>
	options<span class="token punctuation">.</span>SuppressModelStateInvalidFilter <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 或者使用简便方案</span>
services<span class="token punctuation">.</span><span class="token function">AddMvcModelVerifyFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们再次调用接口</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>{
    &quot;isSuccess&quot;: false,
    &quot;code&quot;: &quot;400&quot;,
    &quot;message&quot;: &quot;参数格式不正确&quot;,
    &quot;errors&quot;: [
        {
            &quot;field&quot;: &quot;Id&quot;,
            &quot;message&quot;: &quot;The Id field is required.&quot;
        },
        {
            &quot;field&quot;: &quot;Name&quot;,
            &quot;message&quot;: &quot;The field Name must be a string or array type with a minimum length of &#39;6&#39;.&quot;
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候我们的错误信息会显示到error属性里面并且http错误码为400。</p><h3 id="自定义特性" tabindex="-1"><a class="header-anchor" href="#自定义特性" aria-hidden="true">#</a> 自定义特性</h3><h4 id="minvalue" tabindex="-1"><a class="header-anchor" href="#minvalue" aria-hidden="true">#</a> MinValue</h4><p>最小值校验</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">MinValue</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span> <span class="token comment">// 校验id的值必须大于2</span>
<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="collectionnotempty" tabindex="-1"><a class="header-anchor" href="#collectionnotempty" aria-hidden="true">#</a> CollectionNotEmpty</h4><p>集合不能为空校验</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">CollectionNotEmpty</span></span><span class="token punctuation">]</span> <span class="token comment">// 校验names值不能为空</span>
<span class="token keyword">public</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> Names <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="依赖注入批量注册" tabindex="-1"><a class="header-anchor" href="#依赖注入批量注册" aria-hidden="true">#</a> 依赖注入批量注册</h3><p>需要注册的实现类继承指定的接口，比如用户实现类继承自接口IScopedDependency</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class UserService : IScopedDependency, IUserService
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以继承自：ITransientDependency、ISingletonDependency，根据自己需求不同继承合适声明周期的接口</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//批量注入示例
services.RegisterBusinessServices(&quot;MySQL_NetCoreAPI_EFCore.dll&quot;);
// 或者
services.RegisterBusinessServices(&quot;MySQL_NetCoreAPI_EFCore.*.dll&quot;);

//或者使用基础的方法，让继承某一类的注入
services.RegisterUniteServices(assemblies, typeof(ISingletonDependency), ServiceLifetime.Singleton);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="中间件" tabindex="-1"><a class="header-anchor" href="#中间件" aria-hidden="true">#</a> 中间件</h3><h4 id="显示所有服务信息" tabindex="-1"><a class="header-anchor" href="#显示所有服务信息" aria-hidden="true">#</a> 显示所有服务信息</h4><p>使用方法</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>services.AddShowAllServices(&quot;/allservices&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后使用中间件</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>app.UseShowAllServicesMiddleware();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后就可以访问页面：<code>http://localhost:5000/allservices</code>,可以看到当前项目注入的服务</p><h4 id="cors跨域" tabindex="-1"><a class="header-anchor" href="#cors跨域" aria-hidden="true">#</a> Cors跨域</h4><p>处理跨域的问题，使用该配置可以允许任何请求</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>service<span class="token punctuation">.</span><span class="token function">AddAnyCors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



app<span class="token punctuation">.</span><span class="token function">UseAnyCors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启用body重复读" tabindex="-1"><a class="header-anchor" href="#启用body重复读" aria-hidden="true">#</a> 启用body重复读</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>app<span class="token punctuation">.</span><span class="token function">UseRequestBodyRepetitionRead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="启用自定义审计" tabindex="-1"><a class="header-anchor" href="#启用自定义审计" aria-hidden="true">#</a> 启用自定义审计</h4><h5 id="默认配置" tabindex="-1"><a class="header-anchor" href="#默认配置" aria-hidden="true">#</a> 默认配置</h5><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">WebApplication</span> app<span class="token punctuation">,</span> <span class="token class-name">IWebHostEnvironment</span> env<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">UseRouting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    app<span class="token punctuation">.</span><span class="token function">UseStaticFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    app<span class="token punctuation">.</span><span class="token function">UseAutoAuditLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 启用自动审计日志</span>

    app<span class="token punctuation">.</span><span class="token function">UseAuthorization</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    app<span class="token punctuation">.</span><span class="token function">MapControllers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下回将日志输出到默认到Logger中，且默认所有路由都会记录日志</p><h5 id="http请求日志示例" tabindex="-1"><a class="header-anchor" href="#http请求日志示例" aria-hidden="true">#</a> HTTP请求日志示例</h5><p>示例如下</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HttpSampleController</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">BaseController</span></span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpGet</span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> name<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;success&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpPost</span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">Post</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">FromBody</span></span><span class="token punctuation">]</span> <span class="token class-name">TestHttpRequest</span> request<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;success&quot;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span>Name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpPut</span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">Put</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">FromBody</span></span><span class="token punctuation">]</span> <span class="token class-name">TestHttpRequest</span> request<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;success&quot;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span>Name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpDelete</span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">Delete</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> id<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;success&quot;</span> <span class="token operator">+</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestHttpRequest</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台输入日志如下，GET请求</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>TraceId:ebd108a89b06171c0501c2faa3752d3c,路由:/api/HttpSample/Get,请求方式:GET。{&quot;id&quot;:0,&quot;serviceName&quot;:&quot;CommonService&quot;,&quot;aliasName&quot;:&quot;AuditLog&quot;,&quot;traceId&quot;:&quot;ebd108a89b06171c0501c2faa3752d3c&quot;,&quot;ipAddress&quot;:null,&quot;userAgent&quot;:&quot;Moz
0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0&quot;,&quot;logLevel&quot;:2,&quot;route&quot;:&quot;/api/HttpSample/Get&quot;,&quot;httpMethod&quot;:&quot;GET&quot;,&quot;requestBody&quot;:&quot;&quot;,&quot;responseBody&quot;:&quot;{\\&quot;dat      t
a\\&quot;:\\&quot;success\\&quot;,\\&quot;isSuccess\\&quot;:true,\\&quot;isFailure\\&quot;:false,\\&quot;code\\&quot;:\\&quot;200\\&quot;,\\&quot;message\\&quot;:\\&quot;success\\&quot;,\\&quot;errors\\&quot;:[]}&quot;,&quot;rawData&quot;:&quot;{\\&quot;Accept\\&quot;:\\&quot;text/plain\\&quot;,\\&quot;Connection\\&quot;:\\&quot;keep-alive\\&quot;,\\&quot;Host\\&quot;:\\&quot;localhost:5000\\&quot;,\\&quot;User-Agent\\&quot;:\\&quot;
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0\\&quot;,\\&quot;Accept-Encoding\\&quot;:\\&quot;gzip, deflate, br, zstd\\&quot;,\\&quot;Accept-Language\\&quot;:\\&quot;zh-CN,zh;q=0.9\\&quot;,\\&quot;Cookie\\&quot;
:\\&quot;Hm_lvt_9bfcf5a38b268829d12324755e6544ba=1730271583,1731375604,1731555056; Hm_lvt_1f046e495f9c28ef302f30895bda829e=1736255999,1736347525,1736694053,1737034159\\&quot;,\\&quot;Referer\\&quot;:\\&quot;http://localhost:5000/index.html\\&quot;,\\&quot;sec-ch-ua-p
latform\\&quot;:\\&quot;\\\\\\&quot;Windows\\\\\\&quot;\\&quot;,\\&quot;sec-ch-ua\\&quot;:\\&quot;\\\\\\&quot;Microsoft Edge\\\\\\&quot;;v=\\\\\\&quot;131\\\\\\&quot;, \\\\\\&quot;Chromium\\\\\\&quot;;v=\\\\\\&quot;131\\\\\\&quot;, \\\\\\&quot;Not_A Brand\\\\\\&quot;;v=\\\\\\&quot;24\\\\\\&quot;\\&quot;,\\&quot;DNT\\&quot;:\\&quot;1\\&quot;,\\&quot;sec-ch-ua-mobile\\&quot;:\\&quot;?0\\&quot;,\\&quot;Sec-Fetch-Site\\&quot;:\\&quot;same-origin
\\&quot;,\\&quot;Sec-Fetch-Mode\\&quot;:\\&quot;cors\\&quot;,\\&quot;Sec-Fetch-Dest\\&quot;:\\&quot;empty\\&quot;}&quot;,&quot;statusCode&quot;:200,&quot;userId&quot;:null,&quot;userName&quot;:null,&quot;startTime&quot;:&quot;2025-01-18 22:14:24&quot;,&quot;endTime&quot;:&quot;2025-01-18 22:14:24&quot;,&quot;elapsedMilliseconds&quot;:45,&quot;errorMessage&quot;:null,&quot;createdOn&quot;:&quot;2025-01-18 22:14:24&quot;}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Post请求</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>TraceId:db253ec876e4c2bacb1c6fbfd9c08f64,路由:/api/HttpSample/Post,请求方式:POST。{&quot;id&quot;:0,&quot;serviceName&quot;:&quot;CommonService&quot;,&quot;aliasName&quot;:&quot;AuditLog&quot;,&quot;traceId&quot;:&quot;db253ec876e4c2bacb1c6fbfd9c08f64&quot;,&quot;ipAddress&quot;:null,&quot;userAgent&quot;:&quot;M
ozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0&quot;,&quot;logLevel&quot;:2,&quot;route&quot;:&quot;/api/HttpSample/Post&quot;,&quot;httpMethod&quot;:&quot;POST&quot;,&quot;requestBody&quot;:&quot;{  \\&quot;id\\&quot;: \\&quot;string\\
&quot;,  \\&quot;name\\&quot;: \\&quot;string\\&quot;}&quot;,&quot;responseBody&quot;:&quot;{\\&quot;data\\&quot;:\\&quot;successstring\\&quot;,\\&quot;isSuccess\\&quot;:true,\\&quot;isFailure\\&quot;:false,\\&quot;code\\&quot;:\\&quot;200\\&quot;,\\&quot;message\\&quot;:\\&quot;success\\&quot;,\\&quot;errors\\&quot;:[]}&quot;,&quot;rawData&quot;:&quot;{\\&quot;Accept\\&quot;:\\&quot;text/plain\\&quot;,\\&quot;Connection\\&quot;:\\&quot;kee
p-alive\\&quot;,\\&quot;Host\\&quot;:\\&quot;localhost:5000\\&quot;,\\&quot;User-Agent\\&quot;:\\&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0\\&quot;,\\&quot;Accept-Encoding\\&quot;:\\&quot;gzip, deflate, br, z
std\\&quot;,\\&quot;Accept-Language\\&quot;:\\&quot;zh-CN,zh;q=0.9\\&quot;,\\&quot;Content-Type\\&quot;:\\&quot;application/json\\&quot;,\\&quot;Cookie\\&quot;:\\&quot;Hm_lvt_9bfcf5a38b268829d12324755e6544ba=1730271583,1731375604,1731555056; Hm_lvt_1f046e495f9c28ef302f30895bda829e=1736255999,1736
347525,1736694053,1737034159\\&quot;,\\&quot;Origin\\&quot;:\\&quot;http://localhost:5000\\&quot;,\\&quot;Referer\\&quot;:\\&quot;http://localhost:5000/index.html\\&quot;,\\&quot;Content-Length\\&quot;:\\&quot;40\\&quot;,\\&quot;sec-ch-ua-platform\\&quot;:\\&quot;\\\\\\&quot;Windows\\\\\\&quot;\\&quot;,\\&quot;sec-ch-ua\\&quot;:\\&quot;\\\\\\&quot;Microsoft Edge\\\\\\&quot;;
v=\\\\\\&quot;131\\\\\\&quot;, \\\\\\&quot;Chromium\\\\\\&quot;;v=\\\\\\&quot;131\\\\\\&quot;, \\\\\\&quot;Not_A Brand\\\\\\&quot;;v=\\\\\\&quot;24\\\\\\&quot;\\&quot;,\\&quot;DNT\\&quot;:\\&quot;1\\&quot;,\\&quot;sec-ch-ua-mobile\\&quot;:\\&quot;?0\\&quot;,\\&quot;Sec-Fetch-Site\\&quot;:\\&quot;same-origin\\&quot;,\\&quot;Sec-Fetch-Mode\\&quot;:\\&quot;cors\\&quot;,\\&quot;Sec-Fetch-Dest\\&quot;:\\&quot;empty\\&quot;}&quot;,&quot;statusCode&quot;:200,&quot;userId&quot;:null,&quot;userName&quot;:null,&quot;startTime&quot;:&quot;2025-01-18 22:18:39&quot;,&quot;endTime&quot;:&quot;2025-01-18 22:18:39&quot;,&quot;elapsedMilliseconds&quot;:4,&quot;errorMessage&quot;:null,&quot;createdOn&quot;:&quot;2025-01-18 22:18:39&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Put请求</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>TraceId:2b23b7510b9bdf600d95a0d57679dcf4,路由:/api/HttpSample/Put,请求方式:PUT。{&quot;id&quot;:0,&quot;serviceName&quot;:&quot;CommonService&quot;,&quot;aliasName&quot;:&quot;AuditLog&quot;,&quot;traceId&quot;:&quot;2b23b7510b9bdf600d95a0d57679dcf4&quot;,&quot;ipAddress&quot;:null,&quot;userAgent&quot;:&quot;Moz
illa/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0&quot;,&quot;logLevel&quot;:2,&quot;route&quot;:&quot;/api/HttpSample/Put&quot;,&quot;httpMethod&quot;:&quot;PUT&quot;,&quot;requestBody&quot;:&quot;{  \\&quot;id\\&quot;: \\&quot;string\\&quot;,  
\\&quot;name\\&quot;: \\&quot;string\\&quot;}&quot;,&quot;responseBody&quot;:&quot;{\\&quot;data\\&quot;:\\&quot;successstring\\&quot;,\\&quot;isSuccess\\&quot;:true,\\&quot;isFailure\\&quot;:false,\\&quot;code\\&quot;:\\&quot;200\\&quot;,\\&quot;message\\&quot;:\\&quot;success\\&quot;,\\&quot;errors\\&quot;:[]}&quot;,&quot;rawData&quot;:&quot;{\\&quot;Accept\\&quot;:\\&quot;text/plain\\&quot;,\\&quot;Connection\\&quot;:\\&quot;keep-al
ive\\&quot;,\\&quot;Host\\&quot;:\\&quot;localhost:5000\\&quot;,\\&quot;User-Agent\\&quot;:\\&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0\\&quot;,\\&quot;Accept-Encoding\\&quot;:\\&quot;gzip, deflate, br, zstd\\
&quot;,\\&quot;Accept-Language\\&quot;:\\&quot;zh-CN,zh;q=0.9\\&quot;,\\&quot;Content-Type\\&quot;:\\&quot;application/json\\&quot;,\\&quot;Cookie\\&quot;:\\&quot;Hm_lvt_9bfcf5a38b268829d12324755e6544ba=1730271583,1731375604,1731555056; Hm_lvt_1f046e495f9c28ef302f30895bda829e=1736255999,17363475
25,1736694053,1737034159\\&quot;,\\&quot;Origin\\&quot;:\\&quot;http://localhost:5000\\&quot;,\\&quot;Referer\\&quot;:\\&quot;http://localhost:5000/index.html\\&quot;,\\&quot;Content-Length\\&quot;:\\&quot;40\\&quot;,\\&quot;sec-ch-ua-platform\\&quot;:\\&quot;\\\\\\&quot;Windows\\\\\\&quot;\\&quot;,\\&quot;sec-ch-ua\\&quot;:\\&quot;\\\\\\&quot;Microsoft Edge\\\\\\&quot;;v=\\\\
\\&quot;131\\\\\\&quot;, \\\\\\&quot;Chromium\\\\\\&quot;;v=\\\\\\&quot;131\\\\\\&quot;, \\\\\\&quot;Not_A Brand\\\\\\&quot;;v=\\\\\\&quot;24\\\\\\&quot;\\&quot;,\\&quot;DNT\\&quot;:\\&quot;1\\&quot;,\\&quot;sec-ch-ua-mobile\\&quot;:\\&quot;?0\\&quot;,\\&quot;Sec-Fetch-Site\\&quot;:\\&quot;same-origin\\&quot;,\\&quot;Sec-Fetch-Mode\\&quot;:\\&quot;cors\\&quot;,\\&quot;Sec-Fetch-Dest\\&quot;:\\&quot;empty\\&quot;}&quot;,&quot;statusCode&quot;:200,&quot;userId&quot;:null,&quot;userName&quot;:null,&quot;startTime&quot;:&quot;2025-01-18 22:22:43&quot;,&quot;endTime&quot;:&quot;2025-01-18 22:22:43&quot;,&quot;elapsedMilliseconds&quot;:23,&quot;errorMessage&quot;:null,&quot;createdOn&quot;:&quot;2025-01-18 22:22:43&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Delete请求</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>TraceId:370af85a7fbbefe0b7d9c2ad86a1f5aa,路由:/api/HttpSample/Delete,请求方式:DELETE。{&quot;id&quot;:0,&quot;serviceName&quot;:&quot;CommonService&quot;,&quot;aliasName&quot;:&quot;AuditLog&quot;,&quot;traceId&quot;:&quot;370af85a7fbbefe0b7d9c2ad86a1f5aa&quot;,&quot;ipAddress&quot;:null,&quot;userAgent
&quot;:&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0&quot;,&quot;logLevel&quot;:2,&quot;route&quot;:&quot;/api/HttpSample/Delete&quot;,&quot;httpMethod&quot;:&quot;DELETE&quot;,&quot;requestBody&quot;:&quot;?id=1111&quot;,&quot;r
esponseBody&quot;:&quot;{\\&quot;data\\&quot;:\\&quot;success1111\\&quot;,\\&quot;isSuccess\\&quot;:true,\\&quot;isFailure\\&quot;:false,\\&quot;code\\&quot;:\\&quot;200\\&quot;,\\&quot;message\\&quot;:\\&quot;success\\&quot;,\\&quot;errors\\&quot;:[]}&quot;,&quot;rawData&quot;:&quot;{\\&quot;Accept\\&quot;:\\&quot;text/plain\\&quot;,\\&quot;Connection\\&quot;:\\&quot;keep-alive\\&quot;,\\&quot;Host\\&quot;:\\&quot;localhost:
5000\\&quot;,\\&quot;User-Agent\\&quot;:\\&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0\\&quot;,\\&quot;Accept-Encoding\\&quot;:\\&quot;gzip, deflate, br, zstd\\&quot;,\\&quot;Accept-Language\\&quot;:\\&quot;zh-
CN,zh;q=0.9\\&quot;,\\&quot;Cookie\\&quot;:\\&quot;Hm_lvt_9bfcf5a38b268829d12324755e6544ba=1730271583,1731375604,1731555056; Hm_lvt_1f046e495f9c28ef302f30895bda829e=1736255999,1736347525,1736694053,1737034159\\&quot;,\\&quot;Origin\\&quot;:\\&quot;http://localhost:5000\\&quot;,\\
&quot;Referer\\&quot;:\\&quot;http://localhost:5000/index.html\\&quot;,\\&quot;sec-ch-ua-platform\\&quot;:\\&quot;\\\\\\&quot;Windows\\\\\\&quot;\\&quot;,\\&quot;sec-ch-ua\\&quot;:\\&quot;\\\\\\&quot;Microsoft Edge\\\\\\&quot;;v=\\\\\\&quot;131\\\\\\&quot;, \\\\\\&quot;Chromium\\\\\\&quot;;v=\\\\\\&quot;131\\\\\\&quot;, \\\\\\&quot;Not_A Brand\\\\\\&quot;;v=\\\\\\&quot;24\\\\\\&quot;\\&quot;,\\&quot;DNT\\&quot;:\\&quot;1\\&quot;
,\\&quot;sec-ch-ua-mobile\\&quot;:\\&quot;?0\\&quot;,\\&quot;Sec-Fetch-Site\\&quot;:\\&quot;same-origin\\&quot;,\\&quot;Sec-Fetch-Mode\\&quot;:\\&quot;cors\\&quot;,\\&quot;Sec-Fetch-Dest\\&quot;:\\&quot;empty\\&quot;}&quot;,&quot;statusCode&quot;:200,&quot;userId&quot;:null,&quot;userName&quot;:null,&quot;startTime&quot;:&quot;2025-01-18 22:23:32&quot;,&quot;endTime&quot;:&quot;2025-01-18 22:23:32&quot;,&quot;elapsedMilliseconds&quot;:11,&quot;errorMessage&quot;:null,&quot;createdOn&quot;:&quot;2025-01-18 22:23:32&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="自定义服务名" tabindex="-1"><a class="header-anchor" href="#自定义服务名" aria-hidden="true">#</a> 自定义服务名</h5><p>需要再配置文件中，增加配置项</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;ServiceName&quot;</span> <span class="token punctuation">:</span> <span class="token string">&quot;APIStudly&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入日志</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>TraceId<span class="token punctuation">:</span>5a54f89b042f266b851e5cccc872ff2c<span class="token punctuation">,</span>路由<span class="token punctuation">:</span><span class="token operator">/</span>api<span class="token operator">/</span>HttpSample<span class="token operator">/</span>Get<span class="token punctuation">,</span>请求方式<span class="token punctuation">:</span>GET。<span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token string">&quot;serviceName&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;APIStudly&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;aliasName&quot;</span><span class="token punctuation">:</span>&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="重写日志存储" tabindex="-1"><a class="header-anchor" href="#重写日志存储" aria-hidden="true">#</a> 重写日志存储</h5><p>如果想重写审计日志的存储，那么可以继承ILoggerService接口进行重写并注入</p><h4 id="全局异常处理" tabindex="-1"><a class="header-anchor" href="#全局异常处理" aria-hidden="true">#</a> 全局异常处理</h4><p>使用全局异常处理中间件来处理异常</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// 使用异常中间件
app.UseCustomExceptionMiddleware();

app.UseAuthorization();

app.MapControllers();

app.Run();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写一个接口抛出异常</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>[HttpGet]
public IEnumerable&lt;WeatherForecast&gt; Get()
{
    throw new ParameterException(&quot;参数有误&quot;);

        
    return Enumerable.Range(1, 5).Select(index =&gt; new WeatherForecast
    {
        Date = DateTime.Now.AddDays(index),
        TemperatureC = Random.Shared.Next(-20, 55),
        Summary = Summaries[Random.Shared.Next(Summaries.Length)]
    })
        .ToArray();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回结果</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;isSuccess&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;参数有误&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;errors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>支持抛出异常类型</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//500 自定义错误
BaseCustomerException

//500 系统异常
ServerErrorException

//404 对象未找到
EntityNotFoundException

//400 参数异常
ParameterException

//401 身份验证失败
UserAuthException
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录" tabindex="-1"><a class="header-anchor" href="#版本更新记录" aria-hidden="true">#</a> 版本更新记录</h3><ul><li><p>0.2.0-beta1-未发布</p><ul><li>适配Core 1.2.1版本变更</li><li>修改审计方法名UseCustomAuditLog为UseAutoAuditLog</li></ul></li><li><p>0.1.2</p><ul><li>优化ResultModel相关依赖</li></ul></li><li><p>0.1.1</p><ul><li>修复CustomResultPackFilter使用报错问题</li><li>增加审计日志中间件</li></ul></li><li><p>0.1.0</p><ul><li>返回值包装支持传入忽略包装的前缀</li></ul></li><li><p>0.1.0-beta8</p><ul><li>修复MinValue特性bug</li></ul></li><li><p>0.1.0-beta7</p><ul><li>增加RequestBodyAsync扩展，以及增加请求体重复读取中间件</li><li>优化模型校验方法</li></ul></li><li><p>0.1.0-beta6</p><ul><li>升级支持.net8</li></ul></li><li><p>0.1.0-beta5</p><ul><li>修复批量注入的问题</li></ul></li><li><p>0.1.0-beta4</p><ul><li>增加HttpContext的扩展，例如获取远程IP、本地IP</li><li>增加CollectionNotEmpty、MinValue特性</li><li>迁移ServiceCollectionExtension</li><li>增加services.AddMvcModelVerifyFilter 模型校验过滤器</li><li>增加services.AddMvcResultPackFilterFilter返回值包装过滤器</li></ul></li><li><p>0.1.0-beta3</p><ul><li><p>支持.net8</p></li><li><p>支持显示所有服务以及服务注入的生命周期</p></li></ul></li><li><p>0.1.0-beta2</p><ul><li>优化代码</li></ul></li><li><p>0.1.0-beta1</p><ul><li>升级支持.net7</li></ul></li><li><p>0.0.1-beta6</p><ul><li><p>考虑到该包只能在API层使用，所以移除增加appsettings、cron帮助类、HttpContextManager、HttpContextExtensions、ServiceProviderHelper、SessionHelper、ICurrentUser、BaseService到AzrngCommon包</p></li><li><p>异常处理中间件增加请求日志输出</p></li><li><p>优化AppSettings写法</p></li><li><p>增加了如果是FileContentResult，那么就不包装返回</p></li><li><p>如果没有注入配置，那么就使用默认的CommonMvcConfig配置</p></li></ul></li><li><p>0.0.1-beta5</p><ul><li><p>优化AddDefaultControllers方法，返回值修改为IMvcBuilder</p></li><li><p>公共返回包装的方法优化对415错误的处理，遇到415错误的时候，直接返回不再包装</p></li></ul></li><li><p>0.0.1-beta4</p><ul><li><p>优化支持的框架版本，支持3.1、5.0、6.0</p></li><li><p>增加默认的控制器处理，必须添加AddDefaultControllers操作</p></li></ul></li><li><p>0.0.1-beta3</p><ul><li>优化支持的框架版本，支持3.1、5.0、6.0</li><li>将cors默认全部允许继承，直接使用services.AddAnyCors(); app.UseAnyCors();</li><li>处理自定义模型校验返回状态码为200的错误情况</li><li>处理自定义模型校验和自定义返回类一起使用导致重复包装的问题</li></ul></li><li><p>0.0.1-beat2</p><ul><li>将关于swagger的东西去掉</li><li>优化扩展方法命名空间，正规化</li></ul></li><li><p>0.0.1-beta1</p><ul><li>从common里面移出来一些方法</li></ul></li></ul><h2 id="azrng-swashbuckle" tabindex="-1"><a class="header-anchor" href="#azrng-swashbuckle" aria-hidden="true">#</a> Azrng.Swashbuckle</h2><h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h3><p>在ConfigureServices中注入</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>services<span class="token punctuation">.</span><span class="token function">AddDefaultSwaggerGen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Configure中使用服务</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>app<span class="token punctuation">.</span><span class="token function">UseDefaultSwagger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="版本更新记录-1" tabindex="-1"><a class="header-anchor" href="#版本更新记录-1" aria-hidden="true">#</a> 版本更新记录</h3><ul><li><p>0.2.0</p><ul><li>增加对.Net9的支持</li></ul></li><li><p>0.1.0</p><ul><li>可扩展性增强</li></ul></li><li><p>0.0.1</p><ul><li>基本操作</li></ul></li></ul>`,110)]))}const p=s(o,[["render",u],["__file","commonMvc.html.vue"]]);export{p as default};
