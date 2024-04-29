---
title: 基础库
lang: zh-CN
date: 2023-07-20
publish: true
author: azrng
order: 10
category:
 - nuget
tag:
 - 库
---
## Common.Core

### 操作

#### ObjectExtensions

模型类转url参数格式(1.0.5)

```c#
var userInfo = new UserInfoDto { Id = 1, Name = "Test", };
// 参数不转小写
var result = userInfo.ToUrlParameter();// Id=1&Name=Test
// 参数转小写
var result = userInfo.ToUrlParameter(true);// id=1&name=Test
```



### 版本更新记录

* 1.0.10(未发布)
  * 增加CollectionHelper支持分页批次处理数据
* 1.0.9
  * 获取特殊文件夹之桌面文件路径
  * 增加检查文件是否被其他进程锁定方法
  * 增加获取NTP网络远程时间
  * 增加系统操作：获取本机ip、ipv4地址、ipv6地址
  * 增加MimeExtensions扩展
* 1.0.8
  * 升级支持.net8
* 1.0.7
  * 更新ICurrentUser默认为string类型UserId
* 1.0.6
  * 增加程序集扩展方法和程序集帮助类以及获取所有程序集的方法
  * 增加枚举帮助类EnumHelper，迁移枚举扩展中部分方法到枚举帮助类中
  * 枚举扩展类中方法GetDescriptionString改名GetDescription
* 1.0.5
  * 增加Random的NextDouble扩展方法
  * 支持框架net6.0;net7.0

* 1.0.4
  * 迁移base64的扩展到StringExtension，并且改名为ToBase64Encode、FromBase64Decode
  * 增加时间段和时间点相互转换代码
  * 增加ExceptionExtension、DecimalExtension、DoublelExtension

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

常见的公共类封库，继承自Common.Core

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

// 1.4.2 版本后支持传入程序集数组
services.RegisterBusinessServices(assembly);
```

##### IO帮助类

增加创建文件、目录、xml等操作

### 版本更新记录

* 1.4.3
  * 迁移ServiceCollectionExtension到Common.Mvc

* 1.4.2
  * RegisterBusinessServices扩展方法增加重载

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
