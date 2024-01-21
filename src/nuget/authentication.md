---
title: 认证和授权
lang: zh-CN
date: 2024-01-21
publish: true
author: azrng
order: 70
category:
 - nuget
tag:
 - 库
---
## Azrng.AspNetCore.Authentication.Basic

### 介绍

Basic认证包

### 操作

注册

```
services.AddAuthentication(BasicAuthentication.AuthenticationSchema)
    .AddBasicAuthentication(options =>
    {
        options.UserName = "admin";
        options.Password = "123456";
    });
```

### 版本更新记录

* 0.0.1-beta2
  * 增加认证失败响应内容处理
  * 支持.Net6、.Net7、.Net8
* 0.0.1
  * 基础的Basic认证包

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

* 2.0.0-beta1
  * 重构更新，去除swagger相关的方法以及依赖，swagger使用单独的包
  * 移除3.1依赖，增加.net8支持
  * 移除授权代码，移动到新包中
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
* 1.1.2 
  * 配置多个目标框架  
* 1.1.1
  * 拓展生成token的方法
* 1.1.0 
  * 更新版本为5.0 

* 1.0.0 
  * 3.1版本的jwttoken公共库  

## Azrng.AspNetCore.Authorization.Default

### 说明

一个简单的根据路由进行判断授权的包

### 操作

首先需要新建类PermissionVerifyService，继承自默认的IPermissionVerifyService，并实现该方法的根据路由判断是否有权限访问,如

```c#
public class PermissionVerifyService : IPermissionVerifyService
{
    private readonly ICurrentUser _currentUser;

    public PermissionVerifyService(ICurrentUser currentUser)
    {
        _currentUser = currentUser;
    }

    public Task<bool> IsAuthorize(string path)
    {
        return Task.FromResult(_currentUser.UserId == "1" && path.Contains("path1"));
    }
}
```

然后注入配置

```c#
builder.Services.AddMyAuthorization<PermissionVerifyService>();
```

最后记得使用配置

```c#
app.UseAuthentication();
app.UseAuthorization();
```

然后当你在action上标注`[Authorize]`的时候，会进行授权校验

### 版本更新记录

* 0.0.1
  * 根据路由授权判断

