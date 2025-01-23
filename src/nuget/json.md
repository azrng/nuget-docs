---
title: Json
lang: zh-CN
date: 2024-12-2
publish: true
author: azrng
order: 90
category:
 - nuget
tag:
 - 库
---

## Azrng.Core.Json

### 使用方法

注入配置

```c#
services.ConfigureDefaultJson((options) =>
{
});
```

使用的时候注入接口`IJsonSerializer`

### 依赖包

Common.Core

### 版本更新记录

* 1.0.1-beta2-未发布
  * 扩展注入的时候支持无参方式

* 1.0.1-beta1
  * 增加序列化转换器LongToStringConverter
  * 优化写法，调整目录
* 1.0.0
    * 基础的序列化包

## Azrng.Core.NewtonsoftJson

### 使用方法

注入配置

```c#
services.ConfigureNewtonsoftJson((options) =>
{
});
```

使用的时候注入接口`IJsonSerializer`

### 依赖包

Common.Core

### 版本更新记录

* 1.0.0-未发布
  * 基础的序列化包