---
title: 缓存
lang: zh-CN
date: 2023-07-20
publish: true
author: azrng
category:
 - nuget
tag:
 - 库
---
## Azrng.Cache.Core

缓存公共接口的定义

### 版本更新记录

* 0.0.1
  * 第一版本接口定义

## Common.Cache.MemoryCache

### 操作例子

首先需要安装组件，建议直接安装最新版本，然后就需要注入服务

```
services.AddMemoryCacheExtension(x =>
{
    x.DefaultExpiry = TimeSpan.FromSeconds(5); // 默认缓存过期时间
});
```

然后就可以在需要使用的地方直接注入ICacheProvider进行使用

### 版本更新记录

* 1.3.0-beat3
  * 修复依赖注入问题

* 1.3.0-beat2
  * 设置时间的时候，过期时间为指定时间到指定时间*1.5之前的一个时间

  * 增加设置值的时候，类型校验

  * 优化使用方法，注入ICacheProvider

  * 支持.Net8

* 1.3.0-beat1
  * 方法名字统一处理

* 1.2.0
  * 升级支持.net7

* 1.1.1
  * 优化代码，支持.net6
  * 增加GetOrCreate方法
  * 修改接口名称为ICache

* 1.1.0

  * 更新版本为5.0  

* 1.0.1

  * 3.1版本的内存缓存

* 1.0.0

  * 3.1版本的内存缓存

## Common.Cache.Redis

### 操作例子

首先需要安装nuget包，直接安装最新版本即可

```
services.AddCacheService(x =>
{
    x.ConnectionString = "localhost:6379,password=123456,DefaultDatabase=0";
    x.KeyPrefix = "test";
});
```

然后在需要使用的地方进行注入ICacheProvider就可以使用了

### 版本更新记录

* 1.2.0-beta1
  * 支持netstandard2.1;net6.0;net7.0;net8.0
  * 将公共的缓存接口定义封装
* 1.1.1
  *  修改redis操作管理类
* 1.1.0
  * 更新版本为5.0 
* 1.0.0
  * 3.1版本的redis公共库

## Common.Cache.CSRedis

### 操作例子

``` c#
            services.AddRedisCacheService(() => new RedisConfig
            {
                ConnectionString = "xxxx:6379,password=xxxx,defaultDatabase=0",
                InstanceName = "prefix"
            });
```

### 版本更新记录

* 1.1.1
  * 支持netstandard2.1;net6.0;net7.0
  * 更新支持传递key前缀
* 1.1.0
  * 升级包版本为.Net5
* 1.0.0
  * 基本增删查封装 