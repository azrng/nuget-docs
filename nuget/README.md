# NugetPackage

***

>
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
>
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
