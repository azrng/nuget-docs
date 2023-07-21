---
title: JWT
lang: zh-CN
date: 2023-07-20
publish: true
author: azrng
order: 100
category:
 - nuget
tag:
 - 库
---
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
* 1.1.2 
  * 配置多个目标框架  
* 1.1.1
  * 拓展生成token的方法
* 1.1.0 
  * 更新版本为5.0 

* 1.0.0 
  * 3.1版本的jwttoken公共库  
