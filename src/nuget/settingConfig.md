---
title: SettingConfig
lang: zh-CN
date: 2024-04-11
publish: true
author: azrng
order: 40
category:
 - nuget
tag:
 - 库
---
## Azrng.SettingConfig

该项目是一个业务配置维护的[Nuget包](https://www.nuget.org/packages/SettingConfig#readme-body-tab)

### 使用场景

安装该包后，通过简单对接数据库，就可以实现业务逻辑配置的数据库存储，支持页面修改、历史版本控制，代码中查询以及缓存处理。

### 接入方案

注入服务配置

```csharp
var conn = builder.Configuration.GetConnectionString("pgsql");
builder.Services.AddSettingConfig(options =>
{
    options.DbConnectionString = conn;
    options.DbSchema = "sample";
    options.RoutePrefix = "configDashboard";
    options.ApiRoutePrefix = "/api/configDashboard";
});
```

使用Dashboard界面

```
app.UseSettingDashboard();
```

默认情况下启动项目访问 url/systemSetting进行访问

项目中如果需要查询配置信息进行注入服务IConfigExternalProvideService

```
var aa = await _configSettingService.GetConfigContentAsync("aaa");
// 或者
var aa = await _configSettingService.GetConfigAsync<List<string>>("aaa");
```

## 功能

* 个性化配置

  - [x] 页面标题设置
  - [x] 页面路由设置
  - [ ] 页面加密访问

* 系统配置界面

  - [x] 列表展示
    - [x] 配置名、配置key搜索

    - [ ] 版本筛选

    - [x] 删除配置

  - [x] 配置编辑

  - [x] 历史配置
  
* 存储
  - [x] pgsql存储
* 使用
  - [x] 项目中查询
  - [x] 查询缓存  
  - [ ] 支持初始化数据

## 扩展

### Basic认证

需要安装nuget包：Azrng.SettingConfig.BasicAuthorization ,然后

```csharp
var conn = builder.Configuration.GetConnectionString("pgsql");
builder.Services.AddSettingConfig(options =>
{
    options.DbConnectionString = conn;
    options.DbSchema = "sample";
    options.RoutePrefix = "configDashboard";
    options.ApiRoutePrefix = "/api/configDashboard";
    options.Authorization = new[]
    {
        new BasicAuthAuthorizationFilter(new BasicAuthAuthorizationFilterOptions
        {
            RequireSsl = false,
            SslRedirect = false,
            LoginCaseSensitive = true,
            Users = new[] { new BasicAuthAuthorizationUser { Login = "admin", PasswordClear = "123456" } }
        })
    };
});
```

### 缓存扩展

该项目默认使用内存缓存进行存储，你可以自行继承接口来替换默认的缓存方案。

* 1.0.0
  * 基本的Basic认证

## 版本更新记录

* 1.0.0
    * 增加了历史版本配置的复制
    * 增加Basic认证方案
* 0.0.1  
    * 基本的配置更新