---
title: MinioStore
lang: zh-CN
date: 2024-04-19
publish: true
author: azrng
order: 90
category:
 - nuget
tag:
 - 库
---
## Common.MinioStore

一个基于AWSSDK.S3包适用于S3协议的存储封装类库。

### 操作例子

```csharp
services.AddMinioStore(x =>
{
    x.Url = "http://localhost:9000";
    x.AccessKey = "admin";
    x.SecretKey = "123456789";
});

// 或者连接字符串形式
services.AddMinioStore("http://admin:123456789@localhost:9008");
```

在项目中使用该服务，那么就可以通过注册IStore来调用方法

### 版本更新记录

* 1.0.0-beta2
  * 增加支持.Net7、.Net8框架
  * 支持连接字符串方案
* 1.0.0-beta1
  * 基础操作
