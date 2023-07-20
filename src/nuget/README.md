---
title: 公共核心库
lang: zh-CN
date: 2023-07-20
publish: true
author: azrng
isOriginal: true
category:
 - nuget
tag:
 - 库
---

## Common.Core

### 版本更新记录

* 1.0.4
  * 迁移base64的扩展到StringExtension，并且改名为ToBase64Encode、FromBase64Decode
  * 增加时间段和时间点相互转换代码
  
* 1.0.3
  * 增加任务运行时间限制方法，TaskHelper.RunTimeLimitAsync

  * 增加字符串输出扩展

* 1.0.2
  * 增加本地日志文件操作类

* 1.0.1
  * 引用Newtonsoft.Json包，增加json操作扩展
  * 将扩展方法的命名空间改为Common.Extension
* 1.0.0
  * 将common中的部分类移动到该类库中


## Common

### 介绍

常见的公共类封住

### 操作

#### 扩展类

##### 字符串扩展

```c#
//判断字符串是否是数值类型
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
string[] ToStrArray(this string str, string separator = ",")
//根据条件拼接字符串
StringBuilder AppendIF(this StringBuilder builder, bool condition, string str)
//获取特定位置的字符串    
string GetByIndex(this string str, int index)   
//忽略大小写的字符串比较    
bool EqualsNoCase(this string aimStr, string comparaStr)    
```

##### 时间扩展

```c#
//获取这个月第一天
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
```

##### Json扩展

```
//对象转json字符串
string ToJson(this object obj)
//对象转json字符串
string ToJson(this object obj, string datetimeFormats)
//json字符串转对象
T ToObject<T>(this string json)
//json字符串转list
List<T> ToList<T>(this string json)
//json字符串转DataTable
DataTable ToTable(this string json)
//json字符串转JObject
JObject ToJObject(this string json)
```

##### Decimal扩展

```c#
//自定义格式，默认返回返回格式：1.01
string ToDecimalStandardString(this decimal dec, int number)
// 自定义格式，默认返回返回格式：1.01
string ToDecimalStandardString(this decimal dec)
//自定义格式，不保留小数点后的0    
string ToDecimalNoZeroString(this decimal dec, int number = 1)
```

##### Enumerable扩展

```c#
//检查集合是null或者空
bool IsNullOrEmpty<T>(this IEnumerable<T> source)

//检查集合不是null或者空
bool IsNotNullOrEmpty<T>(this IEnumerable<T> source)

//带条件的where
IQueryable<T> WhereIF<T>(this IQueryable<T> source, bool condition, Expression<Func<T, bool>> predicate)

//带条件的where
IEnumerable<T> WhereIF<T>(this IEnumerable<T> source, bool condition, Func<T, bool> predicate)
```

##### 枚举扩展

```c#
//获取枚举描述
string GetDescriptionString(this Enum enumItem)
//根据Description获取枚举值
T GetEnumValue<T>(string description)
// 获取字段Description
DescriptionAttribute[] GetDescriptAttr(this FieldInfo fieldInfo)
//枚举转字典
Dictionary<int, string> EnumToDictionary<T>() where T : Enum    
```

##### DataTable扩展

```
//IList To DataTable
DataTable ToDataTable(this IList list, bool hasColumns = true)

//List To DataTable
DataTable ToDataTable<T>(this List<T> list, bool hasColumns = true)

//将List追加到其他DataTable
DataTable ToDataTable(this IList list, DataTable table, bool hasColumns = true)
```

##### 编码扩展

```
//获取字符串里面的URL地址
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
```

##### Base64扩展

```
//Base64编码，采用utf8编码方式加密
string Base64Encode(this string source)

//Base64解密，采用utf8编码方式解密
string Base64Decode(this string result)

//Base64编码
string Base64Encode(Encoding encodeType, string source)

//Base64解码
string Base64Decode(Encoding encodeType, string result)
```

##### 集合扩展

```
 bool IsNullOrEmpty<T>(this ICollection<T> source) //检查集合是否存在元素
```

#### 帮助类

##### 公共帮助类

```
//根据时间自动生成编号  201008251145409865
string CreateNo()
//生成0-9随机数
string RndNum(int codeNum)
随机数(示例：e/6LMJB+zyHK6iCcgOAZgu7dkE9fvBkAbAIy3pIE3RY=)
//string GenerateRandomNumber(int len)
```

##### MyHttpContext帮助类

需要提前注册：MyHttpContext.ServiceProvider=xxxServiceProvider

```c#
//获取HttpContext
MyHttpContext.Current
```

##### Session帮助类

使用SessionHelper需要提前注册MyHttpContext.ServiceProvider

```c#
//设置session
void SetSession(string key, string value)
void SetSession<T>(string key, T value)

//获取Session
string GetSession(string key)
T GetSession<T>(string key)

//移除session
void Remove(params string[] keys)
```

##### 表达式树

```c#
PredicateExtensions.True
```

##### 编码操作类

```
//字符串转Unicode码
string StringToUnicode(string value)
//Unicode转字符串
string UnicodeToString(string unicode)
```

##### HTML

```c#
//将HTML标签转换成TEXT文本
string HtmlToText(string strHtml)
```

##### 汉字转拼音

PinYinHelper

```c#
//汉字转化为大写拼音
string GetPinyinQuanPin(string str)

//汉字转化为拼音大写首字母
string GetFirstPinyin(string str)
```

##### 雪花Id

```c#
Snowflake snowflake = new Snowflake();
// snowflake.Sequence = 10;//设置序列
var id = snowflake.NewId();//获取下一个ID
Console.WriteLine(id);
Console.WriteLine(snowflake.NewId(DateTime.Now.AddDays(1)));//获取指定时间的Id，带上节点和序列号。可用于根据业务时间构造插入Id
Console.WriteLine(snowflake.GetId(DateTime.Now.AddDays(1)));//时间转为Id，不带节点和序列号。可用于构建时间片段查询
var flag = snowflake.TryParse(id, out DateTime time, out int worlId, out int sequence);//尝试分析
Console.WriteLine($"time:{time} workId:{worlId} sequence:{sequence}");
```

输出结果

```
6900931916313923585
6901294304267603970
6901294304266813440
time:2022/2/19 22:39:41 workId:193 sequence:1
```

##### 性能检测

来自老赵的性能检测帮助类

```
CodeTimerHelper
```

##### 配置读取

首先先配置IConfiguration

```
//.net6之前
public Startup(IConfiguration configuration, IWebHostEnvironment env)
{
    Configuration = configuration;
    Env = env;

    AppSettings.InitConfiguration(configuration);
}
// .net6
AppSettings.InitConfiguration(builder.Configuration);
```

使用方法

```
var name = AppSettings.GetValue("Service:Name");
var name = AppSettings.GetValue<string>("Service:Name");
```

##### 公共返回类

封装了公共的返回类

```c#
IResultModel
IResultModel<T>
ResultModel:IsSuccess、Code、Message、Errors
ResultModel<T>：IsSuccess、Code、Message、Data
```

> 属性描述
>
> IsSuccess：是否成功  
> Code:状态码  
> Data:返回的数据  
> Errors：模型校验的错误信息

返回正确的方法

```c#
[HttpGet]
public IResultModel<IEnumerable<WeatherForecast>> Get()
{
    var result = Enumerable.Range(1, 3).Select(index => new WeatherForecast
    {
        Date = DateTime.Now.AddDays(index),
        TemperatureC = Random.Shared.Next(-20, 55),
        Summary = Summaries[Random.Shared.Next(Summaries.Length)]
    })
    .ToArray();
    return ResultModel<IEnumerable<WeatherForecast>>.Success(result);
}
```

返回的示例效果

```json
{
  "data": [
    {
      "date": "2022-05-20T22:13:35.2501522+08:00",
      "temperatureC": 52,
      "temperatureF": 125,
      "summary": "Freezing"
    },
    {
      "date": "2022-05-21T22:13:35.2505438+08:00",
      "temperatureC": 4,
      "temperatureF": 39,
      "summary": "Balmy"
    },
    {
      "date": "2022-05-24T22:13:35.250546+08:00",
      "temperatureC": 7,
      "temperatureF": 44,
      "summary": "Hot"
    }
  ],
  "isSuccess": true,
  "code": "200",
  "message": "success",
  "errors": []
}
```

返回错误的效果

```c#
[HttpGet]
public IResultModel<IEnumerable<WeatherForecast>> Get()
{
    return ResultModel<IEnumerable<WeatherForecast>>.Error("参数为空", "400");
}
```

返回结果

```json
{
  "data": null,
  "isSuccess": false,
  "code": "400",
  "message": "参数为空",
  "errors": []
}
```

##### 依赖注入批量注册

需要注册的实现类继承指定的接口，比如用户实现类

```c#
public class UserService : IScopedDependency, IUserService
```

也可以继承自：ITransientDependency、ISingletonDependency，根据自己需求不同继承合适声明周期的接口

批量注入示例

```c#
services.RegisterBusinessServices("MySQL_NetCoreAPI_EFCore.dll");
或者
services.RegisterBusinessServices("MySQL_NetCoreAPI_EFCore.*.dll");
```

##### IO帮助类

增加创建文件、目录、xml等操作

```

```

### 版本更新记录

* 1.4.1
  * 将Newtonsoft.Json转入core包

  * 将json序列化等操作转入core包
  
* 1.4.0-beta6
  * 将部分无依赖的类移动到Common.Core中

* 1.4.0-beta5
  * 更新时间扩展类，移除TimeExtensions合并到DateTimeExtensions

* 1.4.0-beta4
  * 增加获取无时区时间的方案ToUnspecifiedDateTime

* 1.4.0-beta3
  * 修改CurrentUser默认注入

  * 修改ToDateTimeString支持传入时间格式

* 1.4.0-beta2
  * 修改CurrentUser为DefaultUser

* 1.4.0-beta1
  * 升级支持.net7

* 1.3.0-beta10
  * 增加IsLongFormat、ToInt64

* 1.3.0-beta9
  * 增加appsettings、cron帮助类、HttpContextManager、HttpContextExtensions、ServiceProviderHelper、SessionHelper、ICurrentUser、BaseService

* 1.3.0-beta8
  * 增加生成验证码的方法，CommonHelper.GenerateVerifyCode
* 1.3.0-beta7
  * 人信息扩展
  * 正则扩展
  * 增加性能检测帮助类CodeTimerHelper
* 1.3.0-beta6
  * 优化扩展方法命名空间，正规化
  * 增加汉字获取拼音全拼和首字母方法
* 1.3.0-beta5
  * 将一些mvc里面的公共类迁移出来，干净common
* 1.3.0-beta4
  * 更新session帮助类
  * 增加DataTableExtensions
  * 更新时间扩展类
  * 增加HttpContextExtensions
  * 修改md5哈希算法
  * 增加sha哈希算法
* 1.3.0-beta3
  * 增加BaseRequestDto重载
* 1.3.0-beta2
  * 修复BaseRequestDto&lt;T&gt;导致UserIdentity出错问题
* 1.3.0-beta1
  * 支持.Net6版本
  * 更新Operator支持主键设置类型
* 1.2.8
  * 更新字符串Null值校验
  * 增加雪花ID算法
* 1.2.7
  * 增加.NetCore默认DI容器的批量注入方法
* 1.2.6
  * 移除分页的相关的类
  * 增加依赖注入的类
* 1.2.5
  * 增加生成随机数的方法
  * 增加时间戳和本地时间相互转换方法
  * 增加集合扩展
  * 增加日期扩展
  * 增加浮点数扩展
  * 增加枚举扩展类
  * 增加html帮助类
  * 增加字符串扩展类
  * 增加表达式树
  * 本次发版修改了请求类和返回类，查询包可能会受影响
* 1.2.4
  * 更新GetQueryPageRequest、GetPageInfoRequest、SortContent增加构造函数
* 1.2.3 
  * 更新公共分页返回类
* 1.2.2
  * 更新返回类封装，支持使用静态方法使用
* 1.2.1
  * 更新异常类增加扩展方法
  * 修改异常监听类名称
* 1.2.0
  * 增加枚举根据描述获取枚举值
* 1.1.6
  * 更新net5包版本  更新OperatorProvider
* 1.1.5
  * 配置多个目标框架，支持net5
* 1.1.4
  * 增加分页请求类 
* 1.1.3
  * 增加layui的数据表格返回类
* 1.1.2
  * 修改des加密方法
* 1.1.1
  * 修改json目录，增加字符串扩展方法
* 1.1.0
  * 修改md5加密方法
* 1.0.3
  * 修改加密方法
* 1.0.2
  * 增加时间公共类
* 1.0.1
  * 修改一些文件的命名空间  
* 1.0.0
  * 基本的公共库  

***

# Common.Mvc

## 介绍

常见的Asp.NetCore里面辅助方法

## 操作

### 扩展类

#### HttpContext扩展

```c#
//获取请求的ip地址
string ReqestIp(this HttpContext httpContext)
```

### 帮助类

#### MyHttpContext帮助类

需要提前注册：MyHttpContext.ServiceProvider=xxxServiceProvider

```c#
//获取HttpContext
MyHttpContext.Current
```

#### Session帮助类

使用SessionHelper需要提前注册MyHttpContext.ServiceProvider

```c#
//设置session
void SetSession(string key, string value)
void SetSession<T>(string key, T value)

//获取Session
string GetSession(string key)
T GetSession<T>(string key)

//移除session
void Remove(params string[] keys)
```

#### 配置读取

```c#
// 配置
AppSettings.Configuration=Configuration;

//查询指定的配置信息
string GetValue(params string[] sections)
```

### 公共返回类

封装了公共的返回类

```c#
IResultModel
IResultModel<T>
ResultModel:IsSuccess、Code、Message、Errors
ResultModel<T>：IsSuccess、Code、Message、Data
```

> 属性描述
>
> IsSuccess：是否成功  
> Code:状态码  
> Data:返回的数据  
> Errors：模型校验的错误信息

返回正确的方法

```c#
[HttpGet]
public IResultModel<IEnumerable<WeatherForecast>> Get()
{
    var result = Enumerable.Range(1, 3).Select(index => new WeatherForecast
    {
        Date = DateTime.Now.AddDays(index),
        TemperatureC = Random.Shared.Next(-20, 55),
        Summary = Summaries[Random.Shared.Next(Summaries.Length)]
    })
    .ToArray();
    return ResultModel<IEnumerable<WeatherForecast>>.Success(result);
}
```

返回的示例效果

```json
{
  "data": [
    {
      "date": "2022-05-20T22:13:35.2501522+08:00",
      "temperatureC": 52,
      "temperatureF": 125,
      "summary": "Freezing"
    },
    {
      "date": "2022-05-21T22:13:35.2505438+08:00",
      "temperatureC": 4,
      "temperatureF": 39,
      "summary": "Balmy"
    },
    {
      "date": "2022-05-24T22:13:35.250546+08:00",
      "temperatureC": 7,
      "temperatureF": 44,
      "summary": "Hot"
    }
  ],
  "isSuccess": true,
  "code": "200",
  "message": "success",
  "errors": []
}
```

返回错误的效果

```c#
[HttpGet]
public IResultModel<IEnumerable<WeatherForecast>> Get()
{
    return ResultModel<IEnumerable<WeatherForecast>>.Error("参数为空", "400");
}
```

返回结果

```json
{
  "data": null,
  "isSuccess": false,
  "code": "400",
  "message": "参数为空",
  "errors": []
}
```

### 自定义结果过滤器

通过自定义结果过滤器来默认给所有接口最外层包装一层返回类

```c#
services.AddControllers(options => 
{
    options.Filters.Add(typeof(CustomResultPackFilter));
});
```

若是有些Action不想包装一层，只需要标注特性即可在返回的时候不显示包装的一层

```c#
[NoWrapperAttribute]
```

### 自定义模型验证

因为默认是启用模型校验的，所以当你传的model参数有问题的时候，还未到达action的时候已经处理了校验。



举例，当我们有一个post的接口，入参为

```
public class Userinfo
{
    [Required]
    [MinLength(5)]
    public string Id { get; set; }

    [MinLength(6)]
    public string Name { get; set; }
}
```

当传输不符合条件的数据时候返回的状态码是400，效果如下

```
{
    "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
    "title": "One or more validation errors occurred.",
    "status": 400,
    "traceId": "00-40ff21ce6815e3b18232fa00f2024f67-84a9ab2db0b01cc9-00",
    "errors": {
        "Id": [
            "The Id field is required."
        ],
        "Name": [
            "The field Name must be a string or array type with a minimum length of '6'."
        ]
    }
}
```

这个效果是不方便前端处理的，所以我们使用的，所以我们自己做模型校验来封装错误信息



> 注意：需要先关闭默认的模型校验。

在ConfigureServices中注册自定义模型验证过滤器并禁用默认的自动模型验证

```c#
services.AddControllers(options =>
{
	options.Filters.Add<ModelVerifyFilter>(); //注册模型校验过滤器 
}).ConfigureApiBehaviorOptions(options =>
{
	//[ApiController] 默认自带有400模型验证，且优先级比较高，如果需要自定义模型验证，则需要先关闭默认的模型验证
	options.SuppressModelStateInvalidFilter = true; 
});
```

我们再次调用接口

```c#
{
    "isSuccess": false,
    "code": "400",
    "message": "参数格式不正确",
    "errors": [
        {
            "field": "Id",
            "message": "The Id field is required."
        },
        {
            "field": "Name",
            "message": "The field Name must be a string or array type with a minimum length of '6'."
        }
    ]
}
```

这时候我们的错误信息会显示到error属性里面并且http错误码为400。

### 全局异常处理

使用全局异常处理中间件来处理异常

```c#
var app = builder.Build();

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
```

编写一个接口抛出异常

```C#
[HttpGet]
public IEnumerable<WeatherForecast> Get()
{
    throw new ParameterException("参数有误");

        
    return Enumerable.Range(1, 5).Select(index => new WeatherForecast
    {
        Date = DateTime.Now.AddDays(index),
        TemperatureC = Random.Shared.Next(-20, 55),
        Summary = Summaries[Random.Shared.Next(Summaries.Length)]
    })
        .ToArray();
}
```

返回结果

```json
{
  "isSuccess": false,
  "code": "",
  "message": "参数有误",
  "errors": []
}
```

支持抛出异常类型

```c#
//500 自定义错误
BaseCustomerException

//500 系统异常
ServerErrorException

//404 对象未找到
EntityNotFoundException

//400 参数异常
ParameterException

//401 身份验证失败
UserAuthException
```

### 依赖注入批量注册

需要注册的实现类继承指定的接口，比如用户实现类

```c#
public class UserService : IScopedDependency, IUserService
```

也可以继承自：ITransientDependency、ISingletonDependency，根据自己需求不同继承合适声明周期的接口

```c#
//批量注入示例
services.RegisterBusinessServices("MySQL_NetCoreAPI_EFCore.dll");
或者
services.RegisterBusinessServices("MySQL_NetCoreAPI_EFCore.*.dll");

//或者使用基础的方法，让继承某一类的注入
services.RegisterUniteServices(assemblies, typeof(ISingletonDependency), ServiceLifetime.Singleton);
```

## 版本更新记录

* 0.1.0-beta1
  * 升级支持.net7

* 0.0.1-beta6
  * 考虑到该包只能在API层使用，所以移除增加appsettings、cron帮助类、HttpContextManager、HttpContextExtensions、ServiceProviderHelper、SessionHelper、ICurrentUser、BaseService到AzrngCommon包

  * 异常处理中间件增加请求日志输出

  * 优化AppSettings写法

  * 增加了如果是FileContentResult，那么就不包装返回

  * 如果没有注入配置，那么就使用默认的CommonMvcConfig配置

* 0.0.1-beta5
  * 优化AddDefaultControllers方法，返回值修改为IMvcBuilder

  * 公共返回包装的方法优化对415错误的处理，遇到415错误的时候，直接返回不再包装

* 0.0.1-beta4
  * 优化支持的框架版本，支持3.1、5.0、6.0

  * 增加默认的控制器处理，必须添加AddDefaultControllers操作

* 0.0.1-beta3
  * 优化支持的框架版本，支持3.1、5.0、6.0
  * 将cors默认全部允许继承，直接使用services.AddAnyCors();  app.UseAnyCors();
  * 处理自定义模型校验返回状态码为200的错误情况
  * 处理自定义模型校验和自定义返回类一起使用导致重复包装的问题

* 0.0.1-beat2
  * 优化扩展方法命名空间，正规化
* 0.0.1-beta1

  * 从common里面移出来一些方法



* 0.0.1-beta2
  * 将关于swagger的东西去掉

# Common.Security

## 介绍

该包封装了常见的加密公共类

## 使用

MD5哈希算法

```c#
//字符串md5哈希算法
string GetMd5Hash(this string str)

//文件获取md5
string GetFileMd5Hash(string path)
```

Sha哈希算法

```c#
//获取字符串sha1值
string GetSHA1Hash(this string str)
//获取字符串sha256值
string GetSHA256Hash(this string str)
//获取字符串sha512值
string GetSHA512Hash(this string str)
```

### 版本更新记录

* 0.0.1-beta2
  * fix处理md5加密将16位和32位弄混问题

* 0.0.1-beta1
  * 从common里面移出来一些方法

# 缓存

## Common.Cache.MemoryCache

### 操作例子
```c#
1.Statrup的ConfigureServices方法添加services.AddMemoryCacheExtension();
2.在需要使用的地方进行注入：IMemoryCachimg
```
### 版本更新记录
* 1.3.0-beat1
  * 方法名字统一处理
  
* 1.2.0
  * 升级支持.net7
  
* 1.1.1
  * 优化代码，支持.net6
  * 增加GetOrCreate方法
  * 修改接口名称为ICache

* 1.1.0

  * 更新版本为5.0  

* 1.0.1

  * 3.1版本的内存缓存

* 1.0.0

  * 3.1版本的内存缓存


## Common.Cache.Redis
### 操作例子
```c#
1.Statrup的ConfigureServices方法添加services.AddRedisCacheService("XXX:6379,password=XXX,defaultdatabase=1");  
2.在需要使用的地方进行注入：IRedisCacheManager
```
### 版本更新记录
>1.0.0 3.1版本的redis公共库   
>1.1.0 更新版本为5.0   
>1.1.1 修改redis操作管理类

## Common.Cache.CSRedis

### 操作例子

``` c#
            services.AddRedisCacheService(() => new RedisConfig
            {
                ConnectionString = "xxxx:6379,password=xxxx,defaultDatabase=0",
                InstanceName = "prefix"
            });
```

### 版本更新记录

>1.0.0 基本增删查封装  
>1.0.1 修改查询数值为null报错  
>1.0.2 增加了一些hash的操作

***

# 数据库

## Common.EFCore

### 操作例子
只是包含EFCore公共Base类   

 Statrup的ConfigureServices方法添加

```
services.AddAutoGenerationId(); //增加自增ID 
```

继承公共基类

```
IdentityBaseEntity、IdentityBaseEntity<TKey>
IdentityOperatorEntity、IdentityOperatorEntity<Tkey>
IdentityOperatorStatusEntity、  IdentityOperatorStatusEntity<TKey>
```

模型配置继承

```
EntityTypeConfigurationIdentity、EntityTypeConfigurationIdentity<T, TKey>
EntityTypeConfigurationIdentityOperator、EntityTypeConfigurationIdentityOperator<T,TKey>
EntityTypeConfigurationIdentityOperatorStatus、EntityTypeConfigurationIdentityOperatorStatus<T, TKey>
```

### 版本更新记录

* 1.2.0
  * GetPageRequest增加一个查询关键字
  * 将EFCoreExtension内容迁移到工作单元下
  * 工作单元类需要单独注入，如services.AddUnitOfWork&lt;BaseDbContext&gt;();
  
* 1.2.0-beta2
  * 将创建时间修改时间等改为传入方案，用来应对pgsql的时间区分有时区无时区方案
* 1.2.0-beta1
  * 升级支持.net7
* 1.0.0-beta8
  * 增加表达式树扩展方法，替换nuget包System.Linq.Dynamic.Core
* 1.0.0-beta7
  * 增加执行SQL扩展
  * 增加非追踪
* 1.0.0-beta5
  * 更新注册的方法从AddEntityBase变更为AddIdHelper()
* 1.0.0-beta4
  * 支持主键自定义类型
* 1.1.0-beta3
  * 增加分页相关的类
  * 去除common包的依赖
* 1.1.0-beta2
  * 更新因为Common包升级导致的问题
* 1.1.0-beta1
  * 修改版本支持.net5、.net6、.netstandard2.1
  * 修改OrderBy排序方法
* 1.0.6
  * 修改QueryableExtensions扩展，分页支持返回总条数，如果参数错误抛出异常
* 1.0.5
  * 修改QueryableExtensions扩展
* 1.0.4
  * 增加默认注入，支持单独使用该库的model类AddEntityBase
  * 主键ID修改类型为long类型
* 1.0.3
  * 基本的base类封装
  * IBaseRepository接口编写
  * 工作单元封装

## Common.EFCore.InMemory

###  操作例子

### 版本更新记录

* 1.2.0
  * 优化注入服务的方法

* 1.2.0-beta1
  * 升级支持.net7
* 1.1.0-beta5
  * 增加非追踪
* 1.0.0-beta4
  * 修改注入方法名称为AddEntityFramework
* 1.1.0-beta3
  * 增加分页相关的类
  * 去除common包的依赖
* 1.1.0-beta2
  * 更新因为Common包升级导致的问题
* 1.1.0-beta1
  * 修改版本支持.net5、.net6、.netstandard2.1
* 1.0.3
  * 更新分页入参
* 1.0.2
  * 更新包版本
* 1.0.1
  * 基本操作内存数据库的封住哪个

## Common.EFCore.MySQL

###  操作例子

### 版本更新记录

* 1.2.0
  * 优化注入服务逻辑
  
* 1.1.0
  * 升级支持.Net7
  * 修复迁移的时候自定义配置未生效问题

* 1.1.0-beta5
  * 增加非追踪
* 1.1.0-beta4
  * 修改注入方法名称为AddEntityFramework
* 1.1.0-beta3
  * 增加分页相关的类
  * 去除common包的依赖
* 1.1.0-beta2
  * 更新因为Common包升级导致的问题
* 1.1.0-beta1
  * 修改版本支持.net5、.net6、.netstandard2.1
  * 更新组件包版本
* 0.0.3
  * 更新分页入参
* 0.0.2
  * 封装简单方法

## Common.EFCore.PostgresSQL

####  操作例子

#### 版本更新记录

* 1.2.0
  * 移除工作单元注入
  
* 1.2.0-beta2
  * 新增设置时区的扩展方法
  * 同步支持Common.EFCore设置时间方案

* 1.2.0-beta1
  * 升级支持.net7
* 1.1.0-beta4
  * 增加非追踪
* 1.1.0-beta3
  * 修改注入方法名称为AddEntityFramework
* 1.0.0-beta2
  * 解决不显示主键类型
* 1.0.0-beta1
  * 修改版本支持.net5、.net6、.netstandard2.1
* 0.0.3
  * 更新分页入参
* 0.0.2
  * 封装简单方法

## Common.EFCore.SQLite

####  操作例子

#### 版本更新记录

* 1.2.0
  * 移除工作单元注入

* 1.1.2
  * 修复迁移的时候自定义配置未生效问题

* 1.1.1
  * 移除Zack.EFCore.Batch.Sqlite_NET6包

* 1.1.0
  * 升级包版本，支持.net6、.net7

* 1.0.0-beta3
  * 升级包版本，支持.netstandard2.1和.net5以及.net6

* 1.1.0-beta2
  * 增加非追踪
* 1.0.0-beta1
  * 修改注入方法名称为AddEntityFramework
* 0.0.3
  * 更新分页入参
* 0.0.2
  * 封装简单方法

## Common.EFCore.SQLServer

####  操作例子

#### 版本更新记录

* 1.0.0-beta3
  * 升级包版本，支持.net5和.net6
  
* 1.1.0-beta2
  * 增加非追踪
* 1.0.0-beta1
  * 修改注入方法名称为AddEntityFramework
* 0.0.3
  * 更新分页入参
* 0.0.2
  * 封装简单方法

## Common.EFCoreConfigurations(弃用)

### 操作例子

``` c#
services.AddMySQLService<OpenDbContext>(Configuration["DbConfig:Mysql:ConnectionString"]);
```

### 版本更新记录

>1.0.0 基本base实体类封装
>1.0.1 增加注释操作

## Common.SqlSugar

### 操作例子

```c#
services.AddSqlSugarService(() 
{
    return new BaseQueryConfig
    {
        ConnectionString = connection,
        DbType = SqlSugar.DbType.MySql
    };
});
```

### 版本更新记录

>1.0.0 3.1版本sqlsugar使用封装  
>1.1.0 更新版本为5.0   
>1.1.1 配置多个目标框架   
>1.1.2 添加扩展方法

***


## Common.SqlSugarQuery

### 操作例子

```c#
services.AddSqlSugarService(() =>
{
    return new BaseQueryConfig
    {
        ConnectionString = connection,
        DbType = SqlSugar.DbType.MySql
    };
});
```

### 版本更新记录

* 1.2.0-beta1
  * 更新包支持多个版本
  * 更新sqlsugar时间转字符串方法
* 1.1.2
  * 扩展方法完善
* 1.1.1
  * 增加sqlsugar时间、小数扩展方法，输出sql日志
* 1.1.0
  * 更新版本为net5.0
* 1.0.2
  * 3.1版本 sqlsugar和efcore结合使用 
* 1.0.0
  * 3.1版本sqlsugar查询

# Http请求

## Common.HttpClients

#### 操作例子
```c#
ConfigureServices里面添加：
services.AddHttpClientService();  
需要用到的地方直接注入IHttpClientHelper进行
```
#### PostFormData

* Task&lt;T&gt; PostFormDataAsync&lt;T&gt;(string url, MultipartFormDataContent formDataContent);

请求示例

```c#
var bytes = await File.ReadAllBytesAsync("D:\\2222.png");

var form = new MultipartFormDataContent();
var byteContent = new ByteArrayContent(bytes);
byteContent.Headers.ContentDisposition = new ContentDispositionHeaderValue("form-data")
{
    Name = "file",
    FileName = "img.png"
};
form.Add(byteContent, "file");
form.Add(new StringContent("img.png"), "FileName");
form.Add(new StringContent("image/png"), "ContentType");
var response = await client.PostFormDataAsync<string>("api/file", form);
```

#### 版本更新记录

* 1.2.2
  * 增加x-www-form-urlencoded请求方式代码
  
* 1.2.1
  * 增加get获取文件流的方法

* 1.2.0
  * 升级支持.net7

* 1.1.5
  * 修改put请求命名问题

  * 增加patch请求

* 1.1.4
  * 处理多个构造函数的报错
  * 增加更加灵活的请求方式Send

* 1.1.3
  * 增加http请求FormData形式去提交文件
  * 支持框架netstandard2.1、net6.0
* 1.1.2
  * 更新post方法同时兼容string和其他类型
* 1.1.1
  * 更新post方法,配置多个目标框架
* 1.1.0
  * 更新框架版本为5.0
* 1.0.0
  * 3.1版本的http请求公共库

***

## Common.RestSharpClient

### 操作例子

```c#
services.AddHttpClientService();
然后注入：IHttpClientHelper
```

### 版本更新记录

* 1.0.6
  * 增加DownloadData方法
* 1.0.5
  * 增加userAgent
* 1.0.4
  * 优化请求和删除方法
* 1.0.3
  * 优化方法，删除无用代码，修改最后序列化方式
* 1.0.2
  *  更新方法名称和增加注释
* 1.0.1
  * 更新post方法同时兼容string和其他类型
* 1.0.0
  * 版本封装get post put delete  

# 其他

## Common.Email

### 操作例子

```c#
services.AddEmail(info =>
{
    info.Host = "smtp.163.com";
    info.Post = 587;
    info.FromName = "发送者用户名";
    info.FromAddress = "发送者地址";
    info.FromPassword = "发送者密码(授权码)";
});
```

### 版本更新记录

>1.0.0 3.1发送邮件服务  
>1.0.1 更新框架为2.1框架兼容更多系统，丰富发送邮件的方法

## Common.JwtToken

### 操作例子
```c#
1. 注入服务
services.AddJwtTokenService(options =>
{
    options.JwtAudience = "aaaa";
    options.JwtIssuer = "bbbb";
});
2.注入服务IJwtAuthService
```
### 版本更新记录

* 1.2.1
  * 升级包版本以及维护文档
  
* 1.2.0-beta2
  * 将swagger使用迁移到该包中
  
* 1.2.0-beta1
  * 升级支持net7
  * 注入服务的方式更新

* 1.1.3

  * 支持netcoreapp3.1;net5.0;net6.0

  * 优化方法，增加校验token方法




>1.0.0 3.1版本的jwttoken公共库   
>1.1.0 更新版本为5.0 
>1.1.1 拓展生成token的方法
>1.1.2 配置多个目标框架  
***

## Common.QRCode
### 操作例子
```c#
services.AddQrCode();
然后注入：IQrCodeHelp
```
### 版本更新记录
>1.0.0 2.1版本的生成二维码和条形码
## Common.YuQueSdk

### 介绍

适用于.NetCore的语雀Sdk，与语雀官方保持一致。

> 官方文档：https://www.yuque.com/yuque/developer/api
>
> Apifox文档：https://www.apifox.cn/apidoc/project-584301/api-10357086

### 功能

- 用户
  - [x] 根据用户名获取单个用户信息
  - [x] 根据用户标识获取单个用户信息
- 组织
  - [ ] 用户某个用户加入的组织列表
  - [ ] 获取公开组织列表
  - [ ] 创建组织
  - [ ] 获取单个组织的详细信息
  - [ ] 更新单个组织详细信息
  - [ ] 删除组织
  - [ ] 获取组织成员信息
  - [ ] 增加或更新组织成员
  - [ ] 删除组织成员
- 知识库
  - [x] 获取某个用户的知识库列表
  - [ ] 创建知识库
  - [ ] 获取知识库详情
  - [ ] 更新知识库信息
  - [ ] 删除知识库
- 文档
  - [x] 获取一个仓库的文档列表
  - [x] 获取单篇文档的详细信息
  - [ ] 创建文档
  - [ ] 更新文档
  - [ ] 删除文档

### 操作

注册

```
services.AddYuQueService(new YuQueConfig
{
    AuthToken = "xxxxxxxxxxx",
    UserAgent = "netcoresdk"
});
```

依赖注入

```
private readonly IYuQueHelper _yuQueHelper;

public TestController(IYuQueHelper yuQueHelper)
{
    _yuQueHelper = yuQueHelper;
}

// 注入扩展IYuQueExtensionHelper，可以获取目录列表以及仓库文档到指定目录
```

### 用户

```
//获取当个用户信息
var user = await _yuQueHelper.GetUsersAsync("userLoginName");
```

### 文档

```
//获取用户下知识库列表
var repList = await yuQueHelper.GetUserRepositoryListAsync("azrng");

//获取知识库下文档列表
var docList = await yuQueHelper.GetRepositoryDocListAsync("10874582");

//获取文档详情
var docs = await _yuQueHelper.GetReposDocs("654321", "df2gl7");
```

## 版本更新记录

* 0.0.1-beta2
  * 更新一些知识库的操作
* 0.0.1-beta1
  * 基本的语雀api调用

## Common.AliyunSms(未发布)

# 介绍

该包封装了阿里云短信使用的公共类

# 使用



# 修改记录
