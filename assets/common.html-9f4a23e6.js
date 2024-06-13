import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,a as s}from"./app-f76e3641.js";const a={},l=s(`<h2 id="common-core" tabindex="-1"><a class="header-anchor" href="#common-core" aria-hidden="true">#</a> Common.Core</h2><h3 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h3><h4 id="objectextensions" tabindex="-1"><a class="header-anchor" href="#objectextensions" aria-hidden="true">#</a> ObjectExtensions</h4><p>模型类转url参数格式(1.0.5)</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>var userInfo = new UserInfoDto { Id = 1, Name = &quot;Test&quot;, };
// 参数不转小写
var result = userInfo.ToUrlParameter();// Id=1&amp;Name=Test
// 参数转小写
var result = userInfo.ToUrlParameter(true);// id=1&amp;name=Test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录" tabindex="-1"><a class="header-anchor" href="#版本更新记录" aria-hidden="true">#</a> 版本更新记录</h3><ul><li><p>1.0.10-未发布</p><ul><li>增加AsyncHelper执行同步方法</li><li>移除获取时间戳弃用的方法</li><li>增加CollectionHelper支持分页批次处理数据</li><li>增加FileHelper.FormatFileSize</li></ul></li><li><p>1.0.9</p><ul><li>获取特殊文件夹之桌面文件路径</li><li>增加检查文件是否被其他进程锁定方法</li><li>增加获取NTP网络远程时间</li><li>增加系统操作：获取本机ip、ipv4地址、ipv6地址</li><li>增加MimeExtensions扩展</li></ul></li><li><p>1.0.8</p><ul><li>升级支持.net8</li></ul></li><li><p>1.0.7</p><ul><li>更新ICurrentUser默认为string类型UserId</li></ul></li><li><p>1.0.6</p><ul><li>增加程序集扩展方法和程序集帮助类以及获取所有程序集的方法</li><li>增加枚举帮助类EnumHelper，迁移枚举扩展中部分方法到枚举帮助类中</li><li>枚举扩展类中方法GetDescriptionString改名GetDescription</li></ul></li><li><p>1.0.5</p><ul><li>增加Random的NextDouble扩展方法</li><li>支持框架net6.0;net7.0</li></ul></li><li><p>1.0.4</p><ul><li>迁移base64的扩展到StringExtension，并且改名为ToBase64Encode、FromBase64Decode</li><li>增加时间段和时间点相互转换代码</li><li>增加ExceptionExtension、DecimalExtension、DoublelExtension</li></ul></li><li><p>1.0.3</p><ul><li><p>增加任务运行时间限制方法，TaskHelper.RunTimeLimitAsync</p></li><li><p>增加字符串输出扩展</p></li></ul></li><li><p>1.0.2</p><ul><li>增加本地日志文件操作类</li></ul></li><li><p>1.0.1</p><ul><li>引用Newtonsoft.Json包，增加json操作扩展</li><li>将扩展方法的命名空间改为Common.Extension</li></ul></li><li><p>1.0.0</p><ul><li>将common中的部分类移动到该类库中</li></ul></li></ul><h2 id="common" tabindex="-1"><a class="header-anchor" href="#common" aria-hidden="true">#</a> Common</h2><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3><p>常见的公共类封库，继承自Common.Core</p><h3 id="操作-1" tabindex="-1"><a class="header-anchor" href="#操作-1" aria-hidden="true">#</a> 操作</h3><h4 id="扩展类" tabindex="-1"><a class="header-anchor" href="#扩展类" aria-hidden="true">#</a> 扩展类</h4><h5 id="字符串扩展" tabindex="-1"><a class="header-anchor" href="#字符串扩展" aria-hidden="true">#</a> 字符串扩展</h5><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//判断字符串是否是数值类型
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

// 1.4.2 版本后支持传入程序集数组
services.RegisterBusinessServices(assembly);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="io帮助类" tabindex="-1"><a class="header-anchor" href="#io帮助类" aria-hidden="true">#</a> IO帮助类</h5><p>增加创建文件、目录、xml等操作</p><h3 id="版本更新记录-1" tabindex="-1"><a class="header-anchor" href="#版本更新记录-1" aria-hidden="true">#</a> 版本更新记录</h3><ul><li><p>1.4.3</p><ul><li>迁移ServiceCollectionExtension到Common.Mvc</li></ul></li><li><p>1.4.2</p><ul><li>RegisterBusinessServices扩展方法增加重载</li></ul></li><li><p>1.4.1</p><ul><li><p>将Newtonsoft.Json转入core包</p></li><li><p>将json序列化等操作转入core包</p></li></ul></li><li><p>1.4.0-beta6</p><ul><li>将部分无依赖的类移动到Common.Core中</li></ul></li><li><p>1.4.0-beta5</p><ul><li>更新时间扩展类，移除TimeExtensions合并到DateTimeExtensions</li></ul></li><li><p>1.4.0-beta4</p><ul><li>增加获取无时区时间的方案ToUnspecifiedDateTime</li></ul></li><li><p>1.4.0-beta3</p><ul><li><p>修改CurrentUser默认注入</p></li><li><p>修改ToDateTimeString支持传入时间格式</p></li></ul></li><li><p>1.4.0-beta2</p><ul><li>修改CurrentUser为DefaultUser</li></ul></li><li><p>1.4.0-beta1</p><ul><li>升级支持.net7</li></ul></li><li><p>1.3.0-beta10</p><ul><li>增加IsLongFormat、ToInt64</li></ul></li><li><p>1.3.0-beta9</p><ul><li>增加appsettings、cron帮助类、HttpContextManager、HttpContextExtensions、ServiceProviderHelper、SessionHelper、ICurrentUser、BaseService</li></ul></li><li><p>1.3.0-beta8</p><ul><li>增加生成验证码的方法，CommonHelper.GenerateVerifyCode</li></ul></li><li><p>1.3.0-beta7</p><ul><li>人信息扩展</li><li>正则扩展</li><li>增加性能检测帮助类CodeTimerHelper</li></ul></li><li><p>1.3.0-beta6</p><ul><li>优化扩展方法命名空间，正规化</li><li>增加汉字获取拼音全拼和首字母方法</li></ul></li><li><p>1.3.0-beta5</p><ul><li>将一些mvc里面的公共类迁移出来，干净common</li></ul></li><li><p>1.3.0-beta4</p><ul><li>更新session帮助类</li><li>增加DataTableExtensions</li><li>更新时间扩展类</li><li>增加HttpContextExtensions</li><li>修改md5哈希算法</li><li>增加sha哈希算法</li></ul></li><li><p>1.3.0-beta3</p><ul><li>增加BaseRequestDto重载</li></ul></li><li><p>1.3.0-beta2</p><ul><li>修复BaseRequestDto&lt;T&gt;导致UserIdentity出错问题</li></ul></li><li><p>1.3.0-beta1</p><ul><li>支持.Net6版本</li><li>更新Operator支持主键设置类型</li></ul></li><li><p>1.2.8</p><ul><li>更新字符串Null值校验</li><li>增加雪花ID算法</li></ul></li><li><p>1.2.7</p><ul><li>增加.NetCore默认DI容器的批量注入方法</li></ul></li><li><p>1.2.6</p><ul><li>移除分页的相关的类</li><li>增加依赖注入的类</li></ul></li><li><p>1.2.5</p><ul><li>增加生成随机数的方法</li><li>增加时间戳和本地时间相互转换方法</li><li>增加集合扩展</li><li>增加日期扩展</li><li>增加浮点数扩展</li><li>增加枚举扩展类</li><li>增加html帮助类</li><li>增加字符串扩展类</li><li>增加表达式树</li><li>本次发版修改了请求类和返回类，查询包可能会受影响</li></ul></li><li><p>1.2.4</p><ul><li>更新GetQueryPageRequest、GetPageInfoRequest、SortContent增加构造函数</li></ul></li><li><p>1.2.3</p><ul><li>更新公共分页返回类</li></ul></li><li><p>1.2.2</p><ul><li>更新返回类封装，支持使用静态方法使用</li></ul></li><li><p>1.2.1</p><ul><li>更新异常类增加扩展方法</li><li>修改异常监听类名称</li></ul></li><li><p>1.2.0</p><ul><li>增加枚举根据描述获取枚举值</li></ul></li><li><p>1.1.6</p><ul><li>更新net5包版本 更新OperatorProvider</li></ul></li><li><p>1.1.5</p><ul><li>配置多个目标框架，支持net5</li></ul></li><li><p>1.1.4</p><ul><li>增加分页请求类</li></ul></li><li><p>1.1.3</p><ul><li>增加layui的数据表格返回类</li></ul></li><li><p>1.1.2</p><ul><li>修改des加密方法</li></ul></li><li><p>1.1.1</p><ul><li>修改json目录，增加字符串扩展方法</li></ul></li><li><p>1.1.0</p><ul><li>修改md5加密方法</li></ul></li><li><p>1.0.3</p><ul><li>修改加密方法</li></ul></li><li><p>1.0.2</p><ul><li>增加时间公共类</li></ul></li><li><p>1.0.1</p><ul><li>修改一些文件的命名空间</li></ul></li><li><p>1.0.0</p><ul><li>基本的公共库</li></ul></li></ul>`,84),t=[l];function d(r,u){return i(),n("div",null,t)}const v=e(a,[["render",d],["__file","common.html.vue"]]);export{v as default};
