> 最新更新时间：2022年5月19日

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

若是有些Action不想包装一层，只需要标注特性

```c#
[NoWrapperAttribute]
```

### 自定义模型验证

因为默认是启用模型校验的，所以当你传的model参数有问题的时候，还未到达action的时候已经处理了校验，所以封装该模型错误信息的过滤器需要先关闭默认的模型校验。

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
举例如下
```c#
public class Class
{
    [Required]
    [MinLength(5)]
    public string Id { get; set; }

    [MinLength(6)]
    public string Name { get; set; }
}
```
我传递不符合条件的值看返回结果
```c#
{
  "data": {
    "isSuccess": false,
    "code": "400",
    "message": "参数格式不正确",
    "errors": [
      {
        "field": "Id",
        "message": "The field Id must be a string or array type with a minimum length of '5'."
      },
      {
        "field": "Name",
        "message": "The field Name must be a string or array type with a minimum length of '6'."
      }
    ]
  },
  "isSuccess": true,
  "code": "200",
  "message": "",
  "errors": []
}
```
这时候我们的错误信息会显示到error属性里面。

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

* 0.0.1-beat2
  
  * 优化扩展方法命名空间，正规化
  
* 0.0.1-beta1

  * 从common里面移出来一些方法

    

