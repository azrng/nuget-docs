---
title: SqlSugar
lang: zh-CN
date: 2023-07-20
publish: true
author: azrng
order: 60
category:
 - nuget
tag:
 - 库
---
## Common.SqlSugar

### 操作例子

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

### 版本更新记录

>1.0.0 3.1版本sqlsugar使用封装  
>1.1.0 更新版本为5.0   
>1.1.1 配置多个目标框架   
>1.1.2 添加扩展方法

## Common.SqlSugarQuery

### 操作例子

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

### 版本更新记录

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