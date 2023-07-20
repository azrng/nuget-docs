import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as d,c as r,a as e,b as i,d as a,e as s}from"./app-72e3ca09.js";const c={},u=s(`<h2 id="common-core" tabindex="-1"><a class="header-anchor" href="#common-core" aria-hidden="true">#</a> Common.Core</h2><h3 id="版本更新记录" tabindex="-1"><a class="header-anchor" href="#版本更新记录" aria-hidden="true">#</a> 版本更新记录</h3><ul><li><p>1.0.4</p><ul><li>迁移base64的扩展到StringExtension，并且改名为ToBase64Encode、FromBase64Decode</li><li>增加时间段和时间点相互转换代码</li></ul></li><li><p>1.0.3</p><ul><li><p>增加任务运行时间限制方法，TaskHelper.RunTimeLimitAsync</p></li><li><p>增加字符串输出扩展</p></li></ul></li><li><p>1.0.2</p><ul><li>增加本地日志文件操作类</li></ul></li><li><p>1.0.1</p><ul><li>引用Newtonsoft.Json包，增加json操作扩展</li><li>将扩展方法的命名空间改为Common.Extension</li></ul></li><li><p>1.0.0</p><ul><li>将common中的部分类移动到该类库中</li></ul></li></ul><h2 id="common" tabindex="-1"><a class="header-anchor" href="#common" aria-hidden="true">#</a> Common</h2><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3><p>常见的公共类封住</p><h3 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h3><h4 id="扩展类" tabindex="-1"><a class="header-anchor" href="#扩展类" aria-hidden="true">#</a> 扩展类</h4><h5 id="字符串扩展" tabindex="-1"><a class="header-anchor" href="#字符串扩展" aria-hidden="true">#</a> 字符串扩展</h5><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//判断字符串是否是数值类型
bool IsIntFormat(this string str)
// 判断字符串是否是decimal类型
bool IsDecimalFormat(this string str)
//判断字符串是否是日期类型
bool IsDateFormat(this string str)
//判断字符串是否包含中文
bool HasChinese(this string str)
//判断字符串不是  null、空和空白字符
bool IsNotNullOrWhiteSpace(this string currentString)
//判断字符串 是  null、空和空白字符
bool IsNullOrWhiteSpace(this string currentString)
//判断字符串是  null、空    
bool IsNullOrEmpty(this string currentString)
//判断字符串不是  null、空
bool IsNotNullOrEmpty(this string currentString)    
//字符串分割成字符串数组
string[] ToStrArray(this string str, string separator = &quot;,&quot;)
//根据条件拼接字符串
StringBuilder AppendIF(this StringBuilder builder, bool condition, string str)
//获取特定位置的字符串    
string GetByIndex(this string str, int index)   
//忽略大小写的字符串比较    
bool EqualsNoCase(this string aimStr, string comparaStr)    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="时间扩展" tabindex="-1"><a class="header-anchor" href="#时间扩展" aria-hidden="true">#</a> 时间扩展</h5><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//获取这个月第一天
DateTime GetThisMonth(this DateTime dateTime)

//获取下个月第一天
DateTime GetNextMonth(this DateTime dateTime)

//获取最后一个月一号
DateTime GetLastMonth(this DateTime dateTime)

//获取今天凌晨0时
DateTime GetToday(this DateTime dateTime)

//获取今天晚上23:59:59
DateTime GetTodayEndTime(this DateTime dateTime)

//获取昨天零时
DateTime GetYesterday(this DateTime dateTime)

//获取明天零时
DateTime GetTomorrow(this DateTime dateTime)

//获取时间戳(true:获取秒 false:获取毫秒)
long GetUnixTime(bool isSeconds);//DateTimeOffset

//时间戳转本地时间-时间戳精确到秒
var datetime1 = unixSecond.ToLocalTimeDateBySeconds();

//时间转时间戳Unix-时间戳精确到秒
var unixSecond2 = DateTime.Now.ToUnixTimestampBySeconds();//DateTime

//获取毫秒时间戳
var unixMillisecond = TimeExtensions.GetUnixTimeMilliseconds();//DateTimeOffset
//时间转时间戳Unix-时间戳精确到毫秒
var unixMillisecond2 = DateTime.Now.ToUnixTimestampByMilliseconds();//DateTime

//时间转时间戳Unix-时间戳精确到秒
var datetime2= unixMillisecond.ToLocalTimeDateByMilliseconds();

//当前时间是否周末
bool IsWeekend(this DateTime dateTime)
    
//当前时间是否是工作日
bool IsWeekday(this DateTime dateTime)

//自定义时间格式，默认返回返回格式：2019-01-21 20:57:51
string ToStandardString(this DateTime time, string format)

//自定义时间格式，默认返回返回格式：2019-01-21 20:57:51
string ToStandardString(this DateTime time)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="json扩展" tabindex="-1"><a class="header-anchor" href="#json扩展" aria-hidden="true">#</a> Json扩展</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//对象转json字符串
string ToJson(this object obj)
//对象转json字符串
string ToJson(this object obj, string datetimeFormats)
//json字符串转对象
T ToObject&lt;T&gt;(this string json)
//json字符串转list
List&lt;T&gt; ToList&lt;T&gt;(this string json)
//json字符串转DataTable
DataTable ToTable(this string json)
//json字符串转JObject
JObject ToJObject(this string json)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="decimal扩展" tabindex="-1"><a class="header-anchor" href="#decimal扩展" aria-hidden="true">#</a> Decimal扩展</h5><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//自定义格式，默认返回返回格式：1.01
string ToDecimalStandardString(this decimal dec, int number)
// 自定义格式，默认返回返回格式：1.01
string ToDecimalStandardString(this decimal dec)
//自定义格式，不保留小数点后的0    
string ToDecimalNoZeroString(this decimal dec, int number = 1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="enumerable扩展" tabindex="-1"><a class="header-anchor" href="#enumerable扩展" aria-hidden="true">#</a> Enumerable扩展</h5><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//检查集合是null或者空
bool IsNullOrEmpty&lt;T&gt;(this IEnumerable&lt;T&gt; source)

//检查集合不是null或者空
bool IsNotNullOrEmpty&lt;T&gt;(this IEnumerable&lt;T&gt; source)

//带条件的where
IQueryable&lt;T&gt; WhereIF&lt;T&gt;(this IQueryable&lt;T&gt; source, bool condition, Expression&lt;Func&lt;T, bool&gt;&gt; predicate)

//带条件的where
IEnumerable&lt;T&gt; WhereIF&lt;T&gt;(this IEnumerable&lt;T&gt; source, bool condition, Func&lt;T, bool&gt; predicate)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="枚举扩展" tabindex="-1"><a class="header-anchor" href="#枚举扩展" aria-hidden="true">#</a> 枚举扩展</h5><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//获取枚举描述
string GetDescriptionString(this Enum enumItem)
//根据Description获取枚举值
T GetEnumValue&lt;T&gt;(string description)
// 获取字段Description
DescriptionAttribute[] GetDescriptAttr(this FieldInfo fieldInfo)
//枚举转字典
Dictionary&lt;int, string&gt; EnumToDictionary&lt;T&gt;() where T : Enum    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="datatable扩展" tabindex="-1"><a class="header-anchor" href="#datatable扩展" aria-hidden="true">#</a> DataTable扩展</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//IList To DataTable
DataTable ToDataTable(this IList list, bool hasColumns = true)

//List To DataTable
DataTable ToDataTable&lt;T&gt;(this List&lt;T&gt; list, bool hasColumns = true)

//将List追加到其他DataTable
DataTable ToDataTable(this IList list, DataTable table, bool hasColumns = true)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="编码扩展" tabindex="-1"><a class="header-anchor" href="#编码扩展" aria-hidden="true">#</a> 编码扩展</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//获取字符串里面的URL地址
string GetUrl(this string str)

//UrlEncode
string UrlEncode(this string target)
string UrlEncode(this string target, Encoding encoding)

//UrlDecode
string UrlDecode(this string target)
string UrlDecode(this string target, Encoding encoding)

//AttributeEncode
string AttributeEncode(this string target)

//HtmlEncode
string HtmlEncode(this string target)
string HtmlDecode(this string target)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="base64扩展" tabindex="-1"><a class="header-anchor" href="#base64扩展" aria-hidden="true">#</a> Base64扩展</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//Base64编码，采用utf8编码方式加密
string Base64Encode(this string source)

//Base64解密，采用utf8编码方式解密
string Base64Decode(this string result)

//Base64编码
string Base64Encode(Encoding encodeType, string source)

//Base64解码
string Base64Decode(Encoding encodeType, string result)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="集合扩展" tabindex="-1"><a class="header-anchor" href="#集合扩展" aria-hidden="true">#</a> 集合扩展</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> bool IsNullOrEmpty&lt;T&gt;(this ICollection&lt;T&gt; source) //检查集合是否存在元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="帮助类" tabindex="-1"><a class="header-anchor" href="#帮助类" aria-hidden="true">#</a> 帮助类</h4><h5 id="公共帮助类" tabindex="-1"><a class="header-anchor" href="#公共帮助类" aria-hidden="true">#</a> 公共帮助类</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//根据时间自动生成编号  201008251145409865
string CreateNo()
//生成0-9随机数
string RndNum(int codeNum)
随机数(示例：e/6LMJB+zyHK6iCcgOAZgu7dkE9fvBkAbAIy3pIE3RY=)
//string GenerateRandomNumber(int len)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="myhttpcontext帮助类" tabindex="-1"><a class="header-anchor" href="#myhttpcontext帮助类" aria-hidden="true">#</a> MyHttpContext帮助类</h5><p>需要提前注册：MyHttpContext.ServiceProvider=xxxServiceProvider</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//获取HttpContext
MyHttpContext.Current
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="session帮助类" tabindex="-1"><a class="header-anchor" href="#session帮助类" aria-hidden="true">#</a> Session帮助类</h5><p>使用SessionHelper需要提前注册MyHttpContext.ServiceProvider</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//设置session
void SetSession(string key, string value)
void SetSession&lt;T&gt;(string key, T value)

//获取Session
string GetSession(string key)
T GetSession&lt;T&gt;(string key)

//移除session
void Remove(params string[] keys)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="表达式树" tabindex="-1"><a class="header-anchor" href="#表达式树" aria-hidden="true">#</a> 表达式树</h5><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>PredicateExtensions.True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="编码操作类" tabindex="-1"><a class="header-anchor" href="#编码操作类" aria-hidden="true">#</a> 编码操作类</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//字符串转Unicode码
string StringToUnicode(string value)
//Unicode转字符串
string UnicodeToString(string unicode)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h5><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//将HTML标签转换成TEXT文本
string HtmlToText(string strHtml)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="汉字转拼音" tabindex="-1"><a class="header-anchor" href="#汉字转拼音" aria-hidden="true">#</a> 汉字转拼音</h5><p>PinYinHelper</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//汉字转化为大写拼音
string GetPinyinQuanPin(string str)

//汉字转化为拼音大写首字母
string GetFirstPinyin(string str)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="雪花id" tabindex="-1"><a class="header-anchor" href="#雪花id" aria-hidden="true">#</a> 雪花Id</h5><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>Snowflake snowflake = new Snowflake();
// snowflake.Sequence = 10;//设置序列
var id = snowflake.NewId();//获取下一个ID
Console.WriteLine(id);
Console.WriteLine(snowflake.NewId(DateTime.Now.AddDays(1)));//获取指定时间的Id，带上节点和序列号。可用于根据业务时间构造插入Id
Console.WriteLine(snowflake.GetId(DateTime.Now.AddDays(1)));//时间转为Id，不带节点和序列号。可用于构建时间片段查询
var flag = snowflake.TryParse(id, out DateTime time, out int worlId, out int sequence);//尝试分析
Console.WriteLine($&quot;time:{time} workId:{worlId} sequence:{sequence}&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>6900931916313923585
6901294304267603970
6901294304266813440
time:2022/2/19 22:39:41 workId:193 sequence:1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="性能检测" tabindex="-1"><a class="header-anchor" href="#性能检测" aria-hidden="true">#</a> 性能检测</h5><p>来自老赵的性能检测帮助类</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CodeTimerHelper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="配置读取" tabindex="-1"><a class="header-anchor" href="#配置读取" aria-hidden="true">#</a> 配置读取</h5><p>首先先配置IConfiguration</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//.net6之前
public Startup(IConfiguration configuration, IWebHostEnvironment env)
{
    Configuration = configuration;
    Env = env;

    AppSettings.InitConfiguration(configuration);
}
// .net6
AppSettings.InitConfiguration(builder.Configuration);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var name = AppSettings.GetValue(&quot;Service:Name&quot;);
var name = AppSettings.GetValue&lt;string&gt;(&quot;Service:Name&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="公共返回类" tabindex="-1"><a class="header-anchor" href="#公共返回类" aria-hidden="true">#</a> 公共返回类</h5><p>封装了公共的返回类</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>IResultModel
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="依赖注入批量注册" tabindex="-1"><a class="header-anchor" href="#依赖注入批量注册" aria-hidden="true">#</a> 依赖注入批量注册</h5><p>需要注册的实现类继承指定的接口，比如用户实现类</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class UserService : IScopedDependency, IUserService
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以继承自：ITransientDependency、ISingletonDependency，根据自己需求不同继承合适声明周期的接口</p><p>批量注入示例</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>services.RegisterBusinessServices(&quot;MySQL_NetCoreAPI_EFCore.dll&quot;);
或者
services.RegisterBusinessServices(&quot;MySQL_NetCoreAPI_EFCore.*.dll&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="io帮助类" tabindex="-1"><a class="header-anchor" href="#io帮助类" aria-hidden="true">#</a> IO帮助类</h5><p>增加创建文件、目录、xml等操作</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="版本更新记录-1" tabindex="-1"><a class="header-anchor" href="#版本更新记录-1" aria-hidden="true">#</a> 版本更新记录</h3><ul><li><p>1.4.1</p><ul><li><p>将Newtonsoft.Json转入core包</p></li><li><p>将json序列化等操作转入core包</p></li></ul></li><li><p>1.4.0-beta6</p><ul><li>将部分无依赖的类移动到Common.Core中</li></ul></li><li><p>1.4.0-beta5</p><ul><li>更新时间扩展类，移除TimeExtensions合并到DateTimeExtensions</li></ul></li><li><p>1.4.0-beta4</p><ul><li>增加获取无时区时间的方案ToUnspecifiedDateTime</li></ul></li><li><p>1.4.0-beta3</p><ul><li><p>修改CurrentUser默认注入</p></li><li><p>修改ToDateTimeString支持传入时间格式</p></li></ul></li><li><p>1.4.0-beta2</p><ul><li>修改CurrentUser为DefaultUser</li></ul></li><li><p>1.4.0-beta1</p><ul><li>升级支持.net7</li></ul></li><li><p>1.3.0-beta10</p><ul><li>增加IsLongFormat、ToInt64</li></ul></li><li><p>1.3.0-beta9</p><ul><li>增加appsettings、cron帮助类、HttpContextManager、HttpContextExtensions、ServiceProviderHelper、SessionHelper、ICurrentUser、BaseService</li></ul></li><li><p>1.3.0-beta8</p><ul><li>增加生成验证码的方法，CommonHelper.GenerateVerifyCode</li></ul></li><li><p>1.3.0-beta7</p><ul><li>人信息扩展</li><li>正则扩展</li><li>增加性能检测帮助类CodeTimerHelper</li></ul></li><li><p>1.3.0-beta6</p><ul><li>优化扩展方法命名空间，正规化</li><li>增加汉字获取拼音全拼和首字母方法</li></ul></li><li><p>1.3.0-beta5</p><ul><li>将一些mvc里面的公共类迁移出来，干净common</li></ul></li><li><p>1.3.0-beta4</p><ul><li>更新session帮助类</li><li>增加DataTableExtensions</li><li>更新时间扩展类</li><li>增加HttpContextExtensions</li><li>修改md5哈希算法</li><li>增加sha哈希算法</li></ul></li><li><p>1.3.0-beta3</p><ul><li>增加BaseRequestDto重载</li></ul></li><li><p>1.3.0-beta2</p><ul><li>修复BaseRequestDto&lt;T&gt;导致UserIdentity出错问题</li></ul></li><li><p>1.3.0-beta1</p><ul><li>支持.Net6版本</li><li>更新Operator支持主键设置类型</li></ul></li><li><p>1.2.8</p><ul><li>更新字符串Null值校验</li><li>增加雪花ID算法</li></ul></li><li><p>1.2.7</p><ul><li>增加.NetCore默认DI容器的批量注入方法</li></ul></li><li><p>1.2.6</p><ul><li>移除分页的相关的类</li><li>增加依赖注入的类</li></ul></li><li><p>1.2.5</p><ul><li>增加生成随机数的方法</li><li>增加时间戳和本地时间相互转换方法</li><li>增加集合扩展</li><li>增加日期扩展</li><li>增加浮点数扩展</li><li>增加枚举扩展类</li><li>增加html帮助类</li><li>增加字符串扩展类</li><li>增加表达式树</li><li>本次发版修改了请求类和返回类，查询包可能会受影响</li></ul></li><li><p>1.2.4</p><ul><li>更新GetQueryPageRequest、GetPageInfoRequest、SortContent增加构造函数</li></ul></li><li><p>1.2.3</p><ul><li>更新公共分页返回类</li></ul></li><li><p>1.2.2</p><ul><li>更新返回类封装，支持使用静态方法使用</li></ul></li><li><p>1.2.1</p><ul><li>更新异常类增加扩展方法</li><li>修改异常监听类名称</li></ul></li><li><p>1.2.0</p><ul><li>增加枚举根据描述获取枚举值</li></ul></li><li><p>1.1.6</p><ul><li>更新net5包版本 更新OperatorProvider</li></ul></li><li><p>1.1.5</p><ul><li>配置多个目标框架，支持net5</li></ul></li><li><p>1.1.4</p><ul><li>增加分页请求类</li></ul></li><li><p>1.1.3</p><ul><li>增加layui的数据表格返回类</li></ul></li><li><p>1.1.2</p><ul><li>修改des加密方法</li></ul></li><li><p>1.1.1</p><ul><li>修改json目录，增加字符串扩展方法</li></ul></li><li><p>1.1.0</p><ul><li>修改md5加密方法</li></ul></li><li><p>1.0.3</p><ul><li>修改加密方法</li></ul></li><li><p>1.0.2</p><ul><li>增加时间公共类</li></ul></li><li><p>1.0.1</p><ul><li>修改一些文件的命名空间</li></ul></li><li><p>1.0.0</p><ul><li>基本的公共库</li></ul></li></ul><hr><h1 id="common-mvc" tabindex="-1"><a class="header-anchor" href="#common-mvc" aria-hidden="true">#</a> Common.Mvc</h1><h2 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍</h2><p>常见的Asp.NetCore里面辅助方法</p><h2 id="操作-1" tabindex="-1"><a class="header-anchor" href="#操作-1" aria-hidden="true">#</a> 操作</h2><h3 id="扩展类-1" tabindex="-1"><a class="header-anchor" href="#扩展类-1" aria-hidden="true">#</a> 扩展类</h3><h4 id="httpcontext扩展" tabindex="-1"><a class="header-anchor" href="#httpcontext扩展" aria-hidden="true">#</a> HttpContext扩展</h4><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//获取请求的ip地址
string ReqestIp(this HttpContext httpContext)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="帮助类-1" tabindex="-1"><a class="header-anchor" href="#帮助类-1" aria-hidden="true">#</a> 帮助类</h3><h4 id="myhttpcontext帮助类-1" tabindex="-1"><a class="header-anchor" href="#myhttpcontext帮助类-1" aria-hidden="true">#</a> MyHttpContext帮助类</h4><p>需要提前注册：MyHttpContext.ServiceProvider=xxxServiceProvider</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//获取HttpContext
MyHttpContext.Current
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="session帮助类-1" tabindex="-1"><a class="header-anchor" href="#session帮助类-1" aria-hidden="true">#</a> Session帮助类</h4><p>使用SessionHelper需要提前注册MyHttpContext.ServiceProvider</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//设置session
void SetSession(string key, string value)
void SetSession&lt;T&gt;(string key, T value)

//获取Session
string GetSession(string key)
T GetSession&lt;T&gt;(string key)

//移除session
void Remove(params string[] keys)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置读取-1" tabindex="-1"><a class="header-anchor" href="#配置读取-1" aria-hidden="true">#</a> 配置读取</h4><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>// 配置
AppSettings.Configuration=Configuration;

//查询指定的配置信息
string GetValue(params string[] sections)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="公共返回类-1" tabindex="-1"><a class="header-anchor" href="#公共返回类-1" aria-hidden="true">#</a> 公共返回类</h3><p>封装了公共的返回类</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>IResultModel
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义结果过滤器" tabindex="-1"><a class="header-anchor" href="#自定义结果过滤器" aria-hidden="true">#</a> 自定义结果过滤器</h3><p>通过自定义结果过滤器来默认给所有接口最外层包装一层返回类</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>services.AddControllers(options =&gt; 
{
    options.Filters.Add(typeof(CustomResultPackFilter));
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若是有些Action不想包装一层，只需要标注特性即可在返回的时候不显示包装的一层</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>[NoWrapperAttribute]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="自定义模型验证" tabindex="-1"><a class="header-anchor" href="#自定义模型验证" aria-hidden="true">#</a> 自定义模型验证</h3><p>因为默认是启用模型校验的，所以当你传的model参数有问题的时候，还未到达action的时候已经处理了校验。</p><p>举例，当我们有一个post的接口，入参为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Userinfo
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个效果是不方便前端处理的，所以我们使用的，所以我们自己做模型校验来封装错误信息</p><blockquote><p>注意：需要先关闭默认的模型校验。</p></blockquote><p>在ConfigureServices中注册自定义模型验证过滤器并禁用默认的自动模型验证</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>services.AddControllers(options =&gt;
{
	options.Filters.Add&lt;ModelVerifyFilter&gt;(); //注册模型校验过滤器 
}).ConfigureApiBehaviorOptions(options =&gt;
{
	//[ApiController] 默认自带有400模型验证，且优先级比较高，如果需要自定义模型验证，则需要先关闭默认的模型验证
	options.SuppressModelStateInvalidFilter = true; 
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们再次调用接口</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候我们的错误信息会显示到error属性里面并且http错误码为400。</p><h3 id="全局异常处理" tabindex="-1"><a class="header-anchor" href="#全局异常处理" aria-hidden="true">#</a> 全局异常处理</h3><p>使用全局异常处理中间件来处理异常</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//使用异常中间件
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="依赖注入批量注册-1" tabindex="-1"><a class="header-anchor" href="#依赖注入批量注册-1" aria-hidden="true">#</a> 依赖注入批量注册</h3><p>需要注册的实现类继承指定的接口，比如用户实现类</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class UserService : IScopedDependency, IUserService
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以继承自：ITransientDependency、ISingletonDependency，根据自己需求不同继承合适声明周期的接口</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//批量注入示例
services.RegisterBusinessServices(&quot;MySQL_NetCoreAPI_EFCore.dll&quot;);
或者
services.RegisterBusinessServices(&quot;MySQL_NetCoreAPI_EFCore.*.dll&quot;);

//或者使用基础的方法，让继承某一类的注入
services.RegisterUniteServices(assemblies, typeof(ISingletonDependency), ServiceLifetime.Singleton);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="版本更新记录-2" tabindex="-1"><a class="header-anchor" href="#版本更新记录-2" aria-hidden="true">#</a> 版本更新记录</h2><ul><li><p>0.1.0-beta1</p><ul><li>升级支持.net7</li></ul></li><li><p>0.0.1-beta6</p><ul><li><p>考虑到该包只能在API层使用，所以移除增加appsettings、cron帮助类、HttpContextManager、HttpContextExtensions、ServiceProviderHelper、SessionHelper、ICurrentUser、BaseService到AzrngCommon包</p></li><li><p>异常处理中间件增加请求日志输出</p></li><li><p>优化AppSettings写法</p></li><li><p>增加了如果是FileContentResult，那么就不包装返回</p></li><li><p>如果没有注入配置，那么就使用默认的CommonMvcConfig配置</p></li></ul></li><li><p>0.0.1-beta5</p><ul><li><p>优化AddDefaultControllers方法，返回值修改为IMvcBuilder</p></li><li><p>公共返回包装的方法优化对415错误的处理，遇到415错误的时候，直接返回不再包装</p></li></ul></li><li><p>0.0.1-beta4</p><ul><li><p>优化支持的框架版本，支持3.1、5.0、6.0</p></li><li><p>增加默认的控制器处理，必须添加AddDefaultControllers操作</p></li></ul></li><li><p>0.0.1-beta3</p><ul><li>优化支持的框架版本，支持3.1、5.0、6.0</li><li>将cors默认全部允许继承，直接使用services.AddAnyCors(); app.UseAnyCors();</li><li>处理自定义模型校验返回状态码为200的错误情况</li><li>处理自定义模型校验和自定义返回类一起使用导致重复包装的问题</li></ul></li><li><p>0.0.1-beat2</p><ul><li>优化扩展方法命名空间，正规化</li></ul></li><li><p>0.0.1-beta1</p><ul><li>从common里面移出来一些方法</li></ul></li><li><p>0.0.1-beta2</p><ul><li>将关于swagger的东西去掉</li></ul></li></ul><h1 id="common-security" tabindex="-1"><a class="header-anchor" href="#common-security" aria-hidden="true">#</a> Common.Security</h1><h2 id="介绍-2" tabindex="-1"><a class="header-anchor" href="#介绍-2" aria-hidden="true">#</a> 介绍</h2><p>该包封装了常见的加密公共类</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>MD5哈希算法</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//字符串md5哈希算法
string GetMd5Hash(this string str)

//文件获取md5
string GetFileMd5Hash(string path)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sha哈希算法</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//获取字符串sha1值
string GetSHA1Hash(this string str)
//获取字符串sha256值
string GetSHA256Hash(this string str)
//获取字符串sha512值
string GetSHA512Hash(this string str)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录-3" tabindex="-1"><a class="header-anchor" href="#版本更新记录-3" aria-hidden="true">#</a> 版本更新记录</h3><ul><li><p>0.0.1-beta2</p><ul><li>fix处理md5加密将16位和32位弄混问题</li></ul></li><li><p>0.0.1-beta1</p><ul><li>从common里面移出来一些方法</li></ul></li></ul><h1 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存" aria-hidden="true">#</a> 缓存</h1><h2 id="common-cache-memorycache" tabindex="-1"><a class="header-anchor" href="#common-cache-memorycache" aria-hidden="true">#</a> Common.Cache.MemoryCache</h2><h3 id="操作例子" tabindex="-1"><a class="header-anchor" href="#操作例子" aria-hidden="true">#</a> 操作例子</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>1.Statrup的ConfigureServices方法添加services.AddMemoryCacheExtension();
2.在需要使用的地方进行注入：IMemoryCachimg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录-4" tabindex="-1"><a class="header-anchor" href="#版本更新记录-4" aria-hidden="true">#</a> 版本更新记录</h3><ul><li><p>1.3.0-beat1</p><ul><li>方法名字统一处理</li></ul></li><li><p>1.2.0</p><ul><li>升级支持.net7</li></ul></li><li><p>1.1.1</p><ul><li>优化代码，支持.net6</li><li>增加GetOrCreate方法</li><li>修改接口名称为ICache</li></ul></li><li><p>1.1.0</p><ul><li>更新版本为5.0</li></ul></li><li><p>1.0.1</p><ul><li>3.1版本的内存缓存</li></ul></li><li><p>1.0.0</p><ul><li>3.1版本的内存缓存</li></ul></li></ul><h2 id="common-cache-redis" tabindex="-1"><a class="header-anchor" href="#common-cache-redis" aria-hidden="true">#</a> Common.Cache.Redis</h2><h3 id="操作例子-1" tabindex="-1"><a class="header-anchor" href="#操作例子-1" aria-hidden="true">#</a> 操作例子</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>1.Statrup的ConfigureServices方法添加services.AddRedisCacheService(&quot;XXX:6379,password=XXX,defaultdatabase=1&quot;);  
2.在需要使用的地方进行注入：IRedisCacheManager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录-5" tabindex="-1"><a class="header-anchor" href="#版本更新记录-5" aria-hidden="true">#</a> 版本更新记录</h3><blockquote><p>1.0.0 3.1版本的redis公共库<br> 1.1.0 更新版本为5.0<br> 1.1.1 修改redis操作管理类</p></blockquote><h2 id="common-cache-csredis" tabindex="-1"><a class="header-anchor" href="#common-cache-csredis" aria-hidden="true">#</a> Common.Cache.CSRedis</h2><h3 id="操作例子-2" tabindex="-1"><a class="header-anchor" href="#操作例子-2" aria-hidden="true">#</a> 操作例子</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>            services.AddRedisCacheService(() =&gt; new RedisConfig
            {
                ConnectionString = &quot;xxxx:6379,password=xxxx,defaultDatabase=0&quot;,
                InstanceName = &quot;prefix&quot;
            });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录-6" tabindex="-1"><a class="header-anchor" href="#版本更新记录-6" aria-hidden="true">#</a> 版本更新记录</h3><blockquote><p>1.0.0 基本增删查封装<br> 1.0.1 修改查询数值为null报错<br> 1.0.2 增加了一些hash的操作</p></blockquote><hr><h1 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h1><h2 id="common-efcore" tabindex="-1"><a class="header-anchor" href="#common-efcore" aria-hidden="true">#</a> Common.EFCore</h2><h3 id="操作例子-3" tabindex="-1"><a class="header-anchor" href="#操作例子-3" aria-hidden="true">#</a> 操作例子</h3><p>只是包含EFCore公共Base类</p><p>Statrup的ConfigureServices方法添加</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>services.AddAutoGenerationId(); //增加自增ID 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>继承公共基类</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IdentityBaseEntity、IdentityBaseEntity&lt;TKey&gt;
IdentityOperatorEntity、IdentityOperatorEntity&lt;Tkey&gt;
IdentityOperatorStatusEntity、  IdentityOperatorStatusEntity&lt;TKey&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模型配置继承</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>EntityTypeConfigurationIdentity、EntityTypeConfigurationIdentity&lt;T, TKey&gt;
EntityTypeConfigurationIdentityOperator、EntityTypeConfigurationIdentityOperator&lt;T,TKey&gt;
EntityTypeConfigurationIdentityOperatorStatus、EntityTypeConfigurationIdentityOperatorStatus&lt;T, TKey&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录-7" tabindex="-1"><a class="header-anchor" href="#版本更新记录-7" aria-hidden="true">#</a> 版本更新记录</h3><ul><li><p>1.2.0</p><ul><li>GetPageRequest增加一个查询关键字</li><li>将EFCoreExtension内容迁移到工作单元下</li><li>工作单元类需要单独注入，如services.AddUnitOfWork&lt;BaseDbContext&gt;();</li></ul></li><li><p>1.2.0-beta2</p><ul><li>将创建时间修改时间等改为传入方案，用来应对pgsql的时间区分有时区无时区方案</li></ul></li><li><p>1.2.0-beta1</p><ul><li>升级支持.net7</li></ul></li><li><p>1.0.0-beta8</p><ul><li>增加表达式树扩展方法，替换nuget包System.Linq.Dynamic.Core</li></ul></li><li><p>1.0.0-beta7</p><ul><li>增加执行SQL扩展</li><li>增加非追踪</li></ul></li><li><p>1.0.0-beta5</p><ul><li>更新注册的方法从AddEntityBase变更为AddIdHelper()</li></ul></li><li><p>1.0.0-beta4</p><ul><li>支持主键自定义类型</li></ul></li><li><p>1.1.0-beta3</p><ul><li>增加分页相关的类</li><li>去除common包的依赖</li></ul></li><li><p>1.1.0-beta2</p><ul><li>更新因为Common包升级导致的问题</li></ul></li><li><p>1.1.0-beta1</p><ul><li>修改版本支持.net5、.net6、.netstandard2.1</li><li>修改OrderBy排序方法</li></ul></li><li><p>1.0.6</p><ul><li>修改QueryableExtensions扩展，分页支持返回总条数，如果参数错误抛出异常</li></ul></li><li><p>1.0.5</p><ul><li>修改QueryableExtensions扩展</li></ul></li><li><p>1.0.4</p><ul><li>增加默认注入，支持单独使用该库的model类AddEntityBase</li><li>主键ID修改类型为long类型</li></ul></li><li><p>1.0.3</p><ul><li>基本的base类封装</li><li>IBaseRepository接口编写</li><li>工作单元封装</li></ul></li></ul><h2 id="common-efcore-inmemory" tabindex="-1"><a class="header-anchor" href="#common-efcore-inmemory" aria-hidden="true">#</a> Common.EFCore.InMemory</h2><h3 id="操作例子-4" tabindex="-1"><a class="header-anchor" href="#操作例子-4" aria-hidden="true">#</a> 操作例子</h3><h3 id="版本更新记录-8" tabindex="-1"><a class="header-anchor" href="#版本更新记录-8" aria-hidden="true">#</a> 版本更新记录</h3><ul><li><p>1.2.0</p><ul><li>优化注入服务的方法</li></ul></li><li><p>1.2.0-beta1</p><ul><li>升级支持.net7</li></ul></li><li><p>1.1.0-beta5</p><ul><li>增加非追踪</li></ul></li><li><p>1.0.0-beta4</p><ul><li>修改注入方法名称为AddEntityFramework</li></ul></li><li><p>1.1.0-beta3</p><ul><li>增加分页相关的类</li><li>去除common包的依赖</li></ul></li><li><p>1.1.0-beta2</p><ul><li>更新因为Common包升级导致的问题</li></ul></li><li><p>1.1.0-beta1</p><ul><li>修改版本支持.net5、.net6、.netstandard2.1</li></ul></li><li><p>1.0.3</p><ul><li>更新分页入参</li></ul></li><li><p>1.0.2</p><ul><li>更新包版本</li></ul></li><li><p>1.0.1</p><ul><li>基本操作内存数据库的封住哪个</li></ul></li></ul><h2 id="common-efcore-mysql" tabindex="-1"><a class="header-anchor" href="#common-efcore-mysql" aria-hidden="true">#</a> Common.EFCore.MySQL</h2><h3 id="操作例子-5" tabindex="-1"><a class="header-anchor" href="#操作例子-5" aria-hidden="true">#</a> 操作例子</h3><h3 id="版本更新记录-9" tabindex="-1"><a class="header-anchor" href="#版本更新记录-9" aria-hidden="true">#</a> 版本更新记录</h3><ul><li><p>1.2.0</p><ul><li>优化注入服务逻辑</li></ul></li><li><p>1.1.0</p><ul><li>升级支持.Net7</li><li>修复迁移的时候自定义配置未生效问题</li></ul></li><li><p>1.1.0-beta5</p><ul><li>增加非追踪</li></ul></li><li><p>1.1.0-beta4</p><ul><li>修改注入方法名称为AddEntityFramework</li></ul></li><li><p>1.1.0-beta3</p><ul><li>增加分页相关的类</li><li>去除common包的依赖</li></ul></li><li><p>1.1.0-beta2</p><ul><li>更新因为Common包升级导致的问题</li></ul></li><li><p>1.1.0-beta1</p><ul><li>修改版本支持.net5、.net6、.netstandard2.1</li><li>更新组件包版本</li></ul></li><li><p>0.0.3</p><ul><li>更新分页入参</li></ul></li><li><p>0.0.2</p><ul><li>封装简单方法</li></ul></li></ul><h2 id="common-efcore-postgressql" tabindex="-1"><a class="header-anchor" href="#common-efcore-postgressql" aria-hidden="true">#</a> Common.EFCore.PostgresSQL</h2><h4 id="操作例子-6" tabindex="-1"><a class="header-anchor" href="#操作例子-6" aria-hidden="true">#</a> 操作例子</h4><h4 id="版本更新记录-10" tabindex="-1"><a class="header-anchor" href="#版本更新记录-10" aria-hidden="true">#</a> 版本更新记录</h4><ul><li><p>1.2.0</p><ul><li>移除工作单元注入</li></ul></li><li><p>1.2.0-beta2</p><ul><li>新增设置时区的扩展方法</li><li>同步支持Common.EFCore设置时间方案</li></ul></li><li><p>1.2.0-beta1</p><ul><li>升级支持.net7</li></ul></li><li><p>1.1.0-beta4</p><ul><li>增加非追踪</li></ul></li><li><p>1.1.0-beta3</p><ul><li>修改注入方法名称为AddEntityFramework</li></ul></li><li><p>1.0.0-beta2</p><ul><li>解决不显示主键类型</li></ul></li><li><p>1.0.0-beta1</p><ul><li>修改版本支持.net5、.net6、.netstandard2.1</li></ul></li><li><p>0.0.3</p><ul><li>更新分页入参</li></ul></li><li><p>0.0.2</p><ul><li>封装简单方法</li></ul></li></ul><h2 id="common-efcore-sqlite" tabindex="-1"><a class="header-anchor" href="#common-efcore-sqlite" aria-hidden="true">#</a> Common.EFCore.SQLite</h2><h4 id="操作例子-7" tabindex="-1"><a class="header-anchor" href="#操作例子-7" aria-hidden="true">#</a> 操作例子</h4><h4 id="版本更新记录-11" tabindex="-1"><a class="header-anchor" href="#版本更新记录-11" aria-hidden="true">#</a> 版本更新记录</h4><ul><li><p>1.2.0</p><ul><li>移除工作单元注入</li></ul></li><li><p>1.1.2</p><ul><li>修复迁移的时候自定义配置未生效问题</li></ul></li><li><p>1.1.1</p><ul><li>移除Zack.EFCore.Batch.Sqlite_NET6包</li></ul></li><li><p>1.1.0</p><ul><li>升级包版本，支持.net6、.net7</li></ul></li><li><p>1.0.0-beta3</p><ul><li>升级包版本，支持.netstandard2.1和.net5以及.net6</li></ul></li><li><p>1.1.0-beta2</p><ul><li>增加非追踪</li></ul></li><li><p>1.0.0-beta1</p><ul><li>修改注入方法名称为AddEntityFramework</li></ul></li><li><p>0.0.3</p><ul><li>更新分页入参</li></ul></li><li><p>0.0.2</p><ul><li>封装简单方法</li></ul></li></ul><h2 id="common-efcore-sqlserver" tabindex="-1"><a class="header-anchor" href="#common-efcore-sqlserver" aria-hidden="true">#</a> Common.EFCore.SQLServer</h2><h4 id="操作例子-8" tabindex="-1"><a class="header-anchor" href="#操作例子-8" aria-hidden="true">#</a> 操作例子</h4><h4 id="版本更新记录-12" tabindex="-1"><a class="header-anchor" href="#版本更新记录-12" aria-hidden="true">#</a> 版本更新记录</h4><ul><li><p>1.0.0-beta3</p><ul><li>升级包版本，支持.net5和.net6</li></ul></li><li><p>1.1.0-beta2</p><ul><li>增加非追踪</li></ul></li><li><p>1.0.0-beta1</p><ul><li>修改注入方法名称为AddEntityFramework</li></ul></li><li><p>0.0.3</p><ul><li>更新分页入参</li></ul></li><li><p>0.0.2</p><ul><li>封装简单方法</li></ul></li></ul><h2 id="common-efcoreconfigurations-弃用" tabindex="-1"><a class="header-anchor" href="#common-efcoreconfigurations-弃用" aria-hidden="true">#</a> Common.EFCoreConfigurations(弃用)</h2><h3 id="操作例子-9" tabindex="-1"><a class="header-anchor" href="#操作例子-9" aria-hidden="true">#</a> 操作例子</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>services.AddMySQLService&lt;OpenDbContext&gt;(Configuration[&quot;DbConfig:Mysql:ConnectionString&quot;]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="版本更新记录-13" tabindex="-1"><a class="header-anchor" href="#版本更新记录-13" aria-hidden="true">#</a> 版本更新记录</h3><blockquote><p>1.0.0 基本base实体类封装<br> 1.0.1 增加注释操作</p></blockquote><h2 id="common-sqlsugar" tabindex="-1"><a class="header-anchor" href="#common-sqlsugar" aria-hidden="true">#</a> Common.SqlSugar</h2><h3 id="操作例子-10" tabindex="-1"><a class="header-anchor" href="#操作例子-10" aria-hidden="true">#</a> 操作例子</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>services.AddSqlSugarService(() 
{
    return new BaseQueryConfig
    {
        ConnectionString = connection,
        DbType = SqlSugar.DbType.MySql
    };
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录-14" tabindex="-1"><a class="header-anchor" href="#版本更新记录-14" aria-hidden="true">#</a> 版本更新记录</h3><blockquote><p>1.0.0 3.1版本sqlsugar使用封装<br> 1.1.0 更新版本为5.0<br> 1.1.1 配置多个目标框架<br> 1.1.2 添加扩展方法</p></blockquote><hr><h2 id="common-sqlsugarquery" tabindex="-1"><a class="header-anchor" href="#common-sqlsugarquery" aria-hidden="true">#</a> Common.SqlSugarQuery</h2><h3 id="操作例子-11" tabindex="-1"><a class="header-anchor" href="#操作例子-11" aria-hidden="true">#</a> 操作例子</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>services.AddSqlSugarService(() =&gt;
{
    return new BaseQueryConfig
    {
        ConnectionString = connection,
        DbType = SqlSugar.DbType.MySql
    };
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录-15" tabindex="-1"><a class="header-anchor" href="#版本更新记录-15" aria-hidden="true">#</a> 版本更新记录</h3><ul><li>1.2.0-beta1 <ul><li>更新包支持多个版本</li><li>更新sqlsugar时间转字符串方法</li></ul></li><li>1.1.2 <ul><li>扩展方法完善</li></ul></li><li>1.1.1 <ul><li>增加sqlsugar时间、小数扩展方法，输出sql日志</li></ul></li><li>1.1.0 <ul><li>更新版本为net5.0</li></ul></li><li>1.0.2 <ul><li>3.1版本 sqlsugar和efcore结合使用</li></ul></li><li>1.0.0 <ul><li>3.1版本sqlsugar查询</li></ul></li></ul><h1 id="http请求" tabindex="-1"><a class="header-anchor" href="#http请求" aria-hidden="true">#</a> Http请求</h1><h2 id="common-httpclients" tabindex="-1"><a class="header-anchor" href="#common-httpclients" aria-hidden="true">#</a> Common.HttpClients</h2><h4 id="操作例子-12" tabindex="-1"><a class="header-anchor" href="#操作例子-12" aria-hidden="true">#</a> 操作例子</h4><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>ConfigureServices里面添加：
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="版本更新记录-16" tabindex="-1"><a class="header-anchor" href="#版本更新记录-16" aria-hidden="true">#</a> 版本更新记录</h4><ul><li><p>1.2.2</p><ul><li>增加x-www-form-urlencoded请求方式代码</li></ul></li><li><p>1.2.1</p><ul><li>增加get获取文件流的方法</li></ul></li><li><p>1.2.0</p><ul><li>升级支持.net7</li></ul></li><li><p>1.1.5</p><ul><li><p>修改put请求命名问题</p></li><li><p>增加patch请求</p></li></ul></li><li><p>1.1.4</p><ul><li>处理多个构造函数的报错</li><li>增加更加灵活的请求方式Send</li></ul></li><li><p>1.1.3</p><ul><li>增加http请求FormData形式去提交文件</li><li>支持框架netstandard2.1、net6.0</li></ul></li><li><p>1.1.2</p><ul><li>更新post方法同时兼容string和其他类型</li></ul></li><li><p>1.1.1</p><ul><li>更新post方法,配置多个目标框架</li></ul></li><li><p>1.1.0</p><ul><li>更新框架版本为5.0</li></ul></li><li><p>1.0.0</p><ul><li>3.1版本的http请求公共库</li></ul></li></ul><hr><h2 id="common-restsharpclient" tabindex="-1"><a class="header-anchor" href="#common-restsharpclient" aria-hidden="true">#</a> Common.RestSharpClient</h2><h3 id="操作例子-13" tabindex="-1"><a class="header-anchor" href="#操作例子-13" aria-hidden="true">#</a> 操作例子</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>services.AddHttpClientService();
然后注入：IHttpClientHelper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录-17" tabindex="-1"><a class="header-anchor" href="#版本更新记录-17" aria-hidden="true">#</a> 版本更新记录</h3><ul><li>1.0.6 <ul><li>增加DownloadData方法</li></ul></li><li>1.0.5 <ul><li>增加userAgent</li></ul></li><li>1.0.4 <ul><li>优化请求和删除方法</li></ul></li><li>1.0.3 <ul><li>优化方法，删除无用代码，修改最后序列化方式</li></ul></li><li>1.0.2 <ul><li>更新方法名称和增加注释</li></ul></li><li>1.0.1 <ul><li>更新post方法同时兼容string和其他类型</li></ul></li><li>1.0.0 <ul><li>版本封装get post put delete</li></ul></li></ul><h1 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h1><h2 id="common-email" tabindex="-1"><a class="header-anchor" href="#common-email" aria-hidden="true">#</a> Common.Email</h2><h3 id="操作例子-14" tabindex="-1"><a class="header-anchor" href="#操作例子-14" aria-hidden="true">#</a> 操作例子</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>services.AddEmail(info =&gt;
{
    info.Host = &quot;smtp.163.com&quot;;
    info.Post = 587;
    info.FromName = &quot;发送者用户名&quot;;
    info.FromAddress = &quot;发送者地址&quot;;
    info.FromPassword = &quot;发送者密码(授权码)&quot;;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录-18" tabindex="-1"><a class="header-anchor" href="#版本更新记录-18" aria-hidden="true">#</a> 版本更新记录</h3><blockquote><p>1.0.0 3.1发送邮件服务<br> 1.0.1 更新框架为2.1框架兼容更多系统，丰富发送邮件的方法</p></blockquote><h2 id="common-jwttoken" tabindex="-1"><a class="header-anchor" href="#common-jwttoken" aria-hidden="true">#</a> Common.JwtToken</h2><h3 id="操作例子-15" tabindex="-1"><a class="header-anchor" href="#操作例子-15" aria-hidden="true">#</a> 操作例子</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>1. 注入服务
services.AddJwtTokenService(options =&gt;
{
    options.JwtAudience = &quot;aaaa&quot;;
    options.JwtIssuer = &quot;bbbb&quot;;
});
2.注入服务IJwtAuthService
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录-19" tabindex="-1"><a class="header-anchor" href="#版本更新记录-19" aria-hidden="true">#</a> 版本更新记录</h3><ul><li><p>1.2.1</p><ul><li>升级包版本以及维护文档</li></ul></li><li><p>1.2.0-beta2</p><ul><li>将swagger使用迁移到该包中</li></ul></li><li><p>1.2.0-beta1</p><ul><li>升级支持net7</li><li>注入服务的方式更新</li></ul></li><li><p>1.1.3</p><ul><li><p>支持netcoreapp3.1;net5.0;net6.0</p></li><li><p>优化方法，增加校验token方法</p></li></ul></li></ul><blockquote><p>1.0.0 3.1版本的jwttoken公共库<br> 1.1.0 更新版本为5.0<br> 1.1.1 拓展生成token的方法<br> 1.1.2 配置多个目标框架</p></blockquote><hr><h2 id="common-qrcode" tabindex="-1"><a class="header-anchor" href="#common-qrcode" aria-hidden="true">#</a> Common.QRCode</h2><h3 id="操作例子-16" tabindex="-1"><a class="header-anchor" href="#操作例子-16" aria-hidden="true">#</a> 操作例子</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>services.AddQrCode();
然后注入：IQrCodeHelp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录-20" tabindex="-1"><a class="header-anchor" href="#版本更新记录-20" aria-hidden="true">#</a> 版本更新记录</h3><blockquote><p>1.0.0 2.1版本的生成二维码和条形码</p></blockquote><h2 id="common-yuquesdk" tabindex="-1"><a class="header-anchor" href="#common-yuquesdk" aria-hidden="true">#</a> Common.YuQueSdk</h2><h3 id="介绍-3" tabindex="-1"><a class="header-anchor" href="#介绍-3" aria-hidden="true">#</a> 介绍</h3><p>适用于.NetCore的语雀Sdk，与语雀官方保持一致。</p>`,256),o={href:"https://www.yuque.com/yuque/developer/api",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.apifox.cn/apidoc/project-584301/api-10357086",target:"_blank",rel:"noopener noreferrer"},v=s(`<h3 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h3><ul><li>用户 <ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 根据用户名获取单个用户信息</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 根据用户标识获取单个用户信息</label></li></ul></li><li>组织 <ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 用户某个用户加入的组织列表</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 获取公开组织列表</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 创建组织</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> 获取单个组织的详细信息</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> 更新单个组织详细信息</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> 删除组织</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> 获取组织成员信息</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> 增加或更新组织成员</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> 删除组织成员</label></li></ul></li><li>知识库 <ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> 获取某个用户的知识库列表</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" disabled="disabled"><label class="task-list-item-label" for="task-item-12"> 创建知识库</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" disabled="disabled"><label class="task-list-item-label" for="task-item-13"> 获取知识库详情</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-14" disabled="disabled"><label class="task-list-item-label" for="task-item-14"> 更新知识库信息</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-15" disabled="disabled"><label class="task-list-item-label" for="task-item-15"> 删除知识库</label></li></ul></li><li>文档 <ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-16" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-16"> 获取一个仓库的文档列表</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-17" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-17"> 获取单篇文档的详细信息</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-18" disabled="disabled"><label class="task-list-item-label" for="task-item-18"> 创建文档</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-19" disabled="disabled"><label class="task-list-item-label" for="task-item-19"> 更新文档</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-20" disabled="disabled"><label class="task-list-item-label" for="task-item-20"> 删除文档</label></li></ul></li></ul><h3 id="操作-2" tabindex="-1"><a class="header-anchor" href="#操作-2" aria-hidden="true">#</a> 操作</h3><p>注册</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>services.AddYuQueService(new YuQueConfig
{
    AuthToken = &quot;xxxxxxxxxxx&quot;,
    UserAgent = &quot;netcoresdk&quot;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>依赖注入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>private readonly IYuQueHelper _yuQueHelper;

public TestController(IYuQueHelper yuQueHelper)
{
    _yuQueHelper = yuQueHelper;
}

// 注入扩展IYuQueExtensionHelper，可以获取目录列表以及仓库文档到指定目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用户" tabindex="-1"><a class="header-anchor" href="#用户" aria-hidden="true">#</a> 用户</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//获取当个用户信息
var user = await _yuQueHelper.GetUsersAsync(&quot;userLoginName&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//获取用户下知识库列表
var repList = await yuQueHelper.GetUserRepositoryListAsync(&quot;azrng&quot;);

//获取知识库下文档列表
var docList = await yuQueHelper.GetRepositoryDocListAsync(&quot;10874582&quot;);

//获取文档详情
var docs = await _yuQueHelper.GetReposDocs(&quot;654321&quot;, &quot;df2gl7&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="版本更新记录-21" tabindex="-1"><a class="header-anchor" href="#版本更新记录-21" aria-hidden="true">#</a> 版本更新记录</h2><ul><li>0.0.1-beta2 <ul><li>更新一些知识库的操作</li></ul></li><li>0.0.1-beta1 <ul><li>基本的语雀api调用</li></ul></li></ul><h2 id="common-aliyunsms-未发布" tabindex="-1"><a class="header-anchor" href="#common-aliyunsms-未发布" aria-hidden="true">#</a> Common.AliyunSms(未发布)</h2><h1 id="介绍-4" tabindex="-1"><a class="header-anchor" href="#介绍-4" aria-hidden="true">#</a> 介绍</h1><p>该包封装了阿里云短信使用的公共类</p><h1 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1" aria-hidden="true">#</a> 使用</h1><h1 id="修改记录" tabindex="-1"><a class="header-anchor" href="#修改记录" aria-hidden="true">#</a> 修改记录</h1>`,18);function m(b,h){const n=t("ExternalLinkIcon");return d(),r("div",null,[u,e("blockquote",null,[e("p",null,[i("官方文档："),e("a",o,[i("https://www.yuque.com/yuque/developer/api"),a(n)])]),e("p",null,[i("Apifox文档："),e("a",p,[i("https://www.apifox.cn/apidoc/project-584301/api-10357086"),a(n)])])]),v])}const x=l(c,[["render",m],["__file","index.html.vue"]]);export{x as default};
