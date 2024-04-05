---
title: Common.Mvc
lang: zh-CN
date: 2023-07-20
publish: true
author: azrng
order: 40
category:
 - nuget
tag:
 - 库
---
## 说明

常见的Asp.NetCore里面辅助方法

## 操作

### 扩展类

#### HttpContext扩展

```c#
var iPv4 = HttpContext.GetLocalIpAddressToIPv4();
var ipv6 = HttpContext.GetLocalIpAddressToIPv6();
var requestInfo = HttpContext.Request.GetRequestUrlAddress();
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

### Cors

处理前端跨域的问题

```csharp
service.AddAnyCors();

app.UseAnyCors();
```

### 自定义返回结果包装

通过自定义结果过滤器来默认给所有接口最外层包装一层返回类

```c#
services.AddControllers(options => 
{
    options.Filters.Add(typeof(CustomResultPackFilter));
});

// 或者

services.AddMvcResultPackFilterFilter();
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

// 或者使用
services.AddMvcModelVerifyFilter();
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

### 显示所有服务信息

使用方法

```c#
builder.Services.Configure<ShowServiceConfig>(config =>
{
    config.Services = new List<ServiceDescriptor>(builder.Services);

    // 访问路径
    config.Path = "/allservices";
});
```

然后使用中间件

```c#
app.UseShowAllServicesMiddleware();
```

## 版本更新记录

* 0.0.1-beta8
  
  * 修复MinValue特性bug
  
* 0.0.1-beta7

  * 增加RequestBodyAsync扩展，以及增加请求体重复读取中间件
  * 优化模型校验方法

* 0.0.1-beta6

  * 升级支持.net8

* 0.0.1-beta5

  * 修复批量注入的问题

* 0.0.1-beta4

  * 增加HttpContext的扩展，例如获取远程IP、本地IP
  * 增加CollectionNotEmpty、MinValue特性
  * 迁移ServiceCollectionExtension
  * 增加services.AddMvcModelVerifyFilter 模型校验过滤器
  * 增加services.AddMvcResultPackFilterFilter返回值包装过滤器

* 0.1.0-beta3

  * 支持.net8

  * 支持显示所有服务以及服务注入的生命周期

* 0.1.0-beta2

  * 优化代码

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

  * 将关于swagger的东西去掉
  * 优化扩展方法命名空间，正规化

* 0.0.1-beta1

  * 从common里面移出来一些方法

    

