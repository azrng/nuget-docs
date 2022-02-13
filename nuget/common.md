# Common

## 介绍

常见的公共类封装

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
