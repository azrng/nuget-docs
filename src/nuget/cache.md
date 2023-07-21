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
## Common.Cache.MemoryCache

### 操作例子

```c#
1.Statrup的ConfigureServices方法添加services.AddMemoryCacheExtension();
2.在需要使用的地方进行注入：IMemoryCachimg
```

### 版本更新记录

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
```c#
1.Statrup的ConfigureServices方法添加services.AddRedisCacheService("XXX:6379,password=XXX,defaultdatabase=1");  
2.在需要使用的地方进行注入：IRedisCacheManager
```
### 版本更新记录
>1.0.0 3.1版本的redis公共库   
>1.1.0 更新版本为5.0   
>1.1.1 修改redis操作管理类

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

>1.0.0 基本增删查封装  
>1.0.1 修改查询数值为null报错  
>1.0.2 增加了一些hash的操作