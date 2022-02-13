# NugetPackage

# Common

## 介绍

常见的公共类封住

## 操作

### 扩展类

#### 字符串扩展

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
//字符串分割成字符串数组
string[] ToStrArray(this string str, string separator = ",")
//根据条件拼接字符串
StringBuilder AppendIF(this StringBuilder builder, bool condition, string str)
```

#### 时间扩展

```c#
//获取以0点0分0秒开始的日期
var start = DateTime.Now.GetStartDateTime();

//获取以23点59分59秒结束的日期
var end = DateTime.Now.GetEndDateTime();

//获取秒时间戳
var unixSecond = ExtTime.GetUnixTimeSeconds();//DateTimeOffset

//时间戳转本地时间-时间戳精确到秒
var datetime1 = unixSecond.ToLocalTimeDateBySeconds();

//时间转时间戳Unix-时间戳精确到秒
var unixSecond2 = DateTime.Now.ToUnixTimestampBySeconds();//DateTime

//获取毫秒时间戳
var unixMillisecond = ExtTime.GetUnixTimeMilliseconds();//DateTimeOffset
//时间转时间戳Unix-时间戳精确到毫秒
var unixMillisecond2 = DateTime.Now.ToUnixTimestampByMilliseconds();//DateTime

//时间转时间戳Unix-时间戳精确到秒
var datetime2= unixMillisecond.ToLocalTimeDateByMilliseconds();
```

#### 日期扩展

```
//当前时间是否周末
bool IsWeekend(this DateTime dateTime)
    
//当前时间是否是工作日
bool IsWeekday(this DateTime dateTime)

//自定义时间格式，默认返回返回格式：2019-01-21 20:57:51
string ToStandardString(this DateTime time, string format)

//自定义时间格式，默认返回返回格式：2019-01-21 20:57:51
string ToStandardString(this DateTime time)
```

#### Json扩展

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

#### Decimal扩展

```c#
//自定义格式，默认返回返回格式：1.01
string ToDecimalStandardString(this decimal dec, int number)
// 自定义格式，默认返回返回格式：1.01
string ToDecimalStandardString(this decimal dec)
//自定义格式，不保留小数点后的0    
string ToDecimalNoZeroString(this decimal dec, int number = 1)
```

#### Enumerable扩展

```
//带条件的where
IQueryable<T> WhereIF<T>(this IQueryable<T> source, bool condition, Expression<Func<T, bool>> predicate)
//带条件的where
IEnumerable<T> WhereIF<T>(this IEnumerable<T> source, bool condition, Func<T, bool> predicate)
```

#### 枚举扩展

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

#### 集合扩展

```
 bool IsNullOrEmpty<T>(this ICollection<T> source) //检查集合是否存在元素
```

### 帮助类

#### 公共帮助类

```
//根据时间自动生成编号  201008251145409865
string CreateNo()
//生成0-9随机数
string RndNum(int codeNum)
随机数(示例：e/6LMJB+zyHK6iCcgOAZgu7dkE9fvBkAbAIy3pIE3RY=)
//string GenerateRandomNumber(int len)
```

#### 表达式树

```c#
PredicateExtensions.True
```

#### 编码操作类

```
//字符串转Unicode码
string StringToUnicode(string value)
//Unicode转字符串
string UnicodeToString(string unicode)
```

#### HTML

```c#
//将HTML标签转换成TEXT文本
string HtmlToText(string strHtml)
```

#### 配置读取

```
//查询指定的配置信息
string GetValue(params string[] sections)
```

### 请求和返回公共类

请求类

```
//分页请求类
GetPageRequest:PageIndex、PageSize
//分页请求类带排序信息
GetPageSortRequest:PageIndex、PageSize、SortContents
```

返回类

```
分页返回类
GetQueryPageResult<T>：Rows、PageInfo

IResultModel
IResultModel<T>
ResultModel:IsSuccess、Code、Message、Message
ResultModel<T>：IsSuccess、Code、Message、Message、Data
```

### 异常处理

使用全局异常处理中间件

```
IApplicationBuilder UseCustomExceptionMiddleware(this IApplicationBuilder builder)
//使用方法
app.UseCustomExceptionMiddleware();
```

抛出异常

```
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

## 版本更新记录

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


# Common.Cache.MemoryCache
## 操作例子
```c#
1.Statrup的ConfigureServices方法添加services.AddMemoryCacheExtension();
2.在需要使用的地方进行注入：IMemoryCachimg
```
#### 版本更新记录
>1.0.0 3.1版本的内存缓存  
>1.0.1 3.1版本的内存缓存   
>1.1.0 更新版本为5.0  
***


### 3、Common.Cache.Redis
#### 操作例子
```c#
1.Statrup的ConfigureServices方法添加services.AddRedisCacheService("XXX:6379,password=XXX,defaultdatabase=1");  
2.在需要使用的地方进行注入：IRedisCacheManager
```
#### 版本更新记录
>1.0.0 3.1版本的redis公共库   
>1.1.0 更新版本为5.0   
>1.1.1 修改redis操作管理类

### 4、Common.Email
#### 操作例子
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
#### 版本更新记录
>1.0.0 3.1发送邮件服务  
>1.0.1 更新框架为2.1框架兼容更多系统，丰富发送邮件的方法
***


# Common.EFCore
## 操作例子
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

## 版本更新记录

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

# Common.EFCore.InMemory

##  操作例子

## 版本更新记录

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

### Common.EFCore.MySQL

####  操作例子

#### 版本更新记录

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

### Common.EFCore.PostgresSQL

####  操作例子

#### 版本更新记录

* 0.0.3
  * 更新分页入参
* 0.0.2
  * 封装简单方法

### Common.EFCore.SQLite

####  操作例子

#### 版本更新记录

* 0.0.3
  * 更新分页入参
* 0.0.2
  * 封装简单方法

### Common.EFCore.SQLServer

####  操作例子

#### 版本更新记录

* 0.0.3
  * 更新分页入参
* 0.0.2
  * 封装简单方法



***


### 6、Common.HttpClients
#### 操作例子
```c#
ConfigureServices里面添加：
services.AddHttpClientService();  
需要用到的地方直接注入IHttpClientHelper进行
```
#### 版本更新记录
>1.0.0 3.1版本的http请求公共库   
>1.1.0 更新版本为5.0   
>1.1.1 更新post方法,配置多个目标框架  
>1.1.2 更新post方法同时兼容string和其他类型
***


### 7、Common.JwtToken
#### 操作例子
```c#
1. services.AddJwtTokenService(() => new AuthorizationConfig
    {
        JwtAudience = Configuration["JWT:JwtAudience"],
        JwtIssuer = Configuration["JWT:JwtIssuer"],
        JwtSecretKey = Configuration["JWT:JwtSecretKey"]
    });
2.注入服务IJwtAuthService
```
#### 版本更新记录
>1.0.0 3.1版本的jwttoken公共库   
>1.1.0 更新版本为5.0 
>1.1.1 拓展生成token的方法
>1.1.2 配置多个目标框架  
***


### 8、Common.SqlSugar
#### 操作例子
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
#### 版本更新记录
>1.0.0 3.1版本sqlsugar使用封装  
>1.1.0 更新版本为5.0   
>1.1.1 配置多个目标框架   
>1.1.2 添加扩展方法
***


### 9、Common.SqlSugarQuery
#### 操作例子
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
#### 版本更新记录

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

***

### 10、Common.QRCode
#### 操作例子
```c#
services.AddQrCode();
然后注入：IQrCodeHelp
```
#### 版本更新记录
>1.0.0 2.1版本的生成二维码和条形码
***

### 11、Common.RestSharpClient
#### 操作例子
```c#
services.AddHttpClientService();
然后注入：IHttpClientHelper
```
#### 版本更新记录
>1.0.0 2.0版本封住get post put delete  
>1.0.1 更新post方法同时兼容string和其他类型  
>1.0.2 更新方法名称和增加注释 已发布  
>1.0.3 优化方法，删除无用代码，修改最后序列化方式  
>1.0.4 优化请求和删除方法  
>1.0.5 增加userAgent  
>1.0.6 增加DownloadData方法
***

### 12、Common.Cache.CSRedis
#### 操作例子
``` c#
            services.AddRedisCacheService(() => new RedisConfig
            {
                ConnectionString = "xxxx:6379,password=xxxx,defaultDatabase=0",
                InstanceName = "prefix"
            });
```
#### 版本更新记录
>1.0.0 基本增删查封装  
>1.0.1 修改查询数值为null报错  
>1.0.2 增加了一些hash的操作

###  StudyUse
#### 说明 
测试多个目标框架的项目

#### 版本更新记录
>1.0.0  基本测试netstand2.1和net5目标框架  

### Common.EFCoreConfigurations

#### 操作例子

``` c#
services.AddMySQLService<OpenDbContext>(Configuration["DbConfig:Mysql:ConnectionString"]);
```

#### 版本更新记录

>1.0.0 基本base实体类封装
>1.0.1 增加注释操作

# Common.YuQueSdk

## 介绍

适用于.NetCore的语雀Sdk，与语雀官方保持一致。

> 官方文档：https://www.yuque.com/yuque/developer/api

## 操作

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
```

### 用户

```
//获取当个用户信息
var user = await _yuQueHelper.GetUsersAsync("userLoginName");
```

### 文档

```
//获取文档详情
var docs = await _yuQueHelper.GetReposDocs("654321", "df2gl7");
```



## 版本更新记录

* 0.0.1-beta1
  * 基本的语雀api调用