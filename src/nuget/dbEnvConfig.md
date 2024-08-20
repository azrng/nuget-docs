---
title: Azrng.DbEnvConfig
lang: zh-CN
date: 2024-08-20
publish: true
author: azrng
order: 90
category:
 - nuget
tag:
 - 库
---
## Azrng.DbEnvConfig

一个数据库环境变量配置的封装，通过读取数据库的表中的配置，然后代码中直接可以通过IConfiguration来获取内容

### 功能

* 数据库配置导入IConfiguration
* 支持已有配置表导入
* 支持IDbConnection的数据库，比如pgsql、sqlserver、mysql等
* 支持自定义初始化表语句
* 支持自定义初始化表数据
* 支持查询配置语句自定义筛选条件

### 操作例子

#### pgsql使用默认配置表
```c#
var connStr = builder.Configuration["ConnStr"];
builder.Configuration.AddDbConfiguration(options =>
{
    options.CreateDbConnection = () => new NpgsqlConnection(connStr);
    options.FilterWhere = "and is_delete=false";
});
```

#### pgsql使用自定义初始化配置

新建PgsqlScriptService文件继承自DefaultScriptService，如果想去初始化表数据，那么就可以重写GetInitTableDataScript方法
```c#
public class PgsqlScriptService : DefaultScriptService
{
    public override string GetInitTableDataScript()
    {
        var sql =
            $"INSERT INTO config.system_config (id, code, value, is_delete) VALUES (default, '{Guid.NewGuid()}', '{Guid.NewGuid()}', false);";
        return sql;
    }
}
```
注入服务配置
```c#
var connStr = builder.Configuration["ConnStr"];
builder.Configuration.AddDbConfiguration(options =>
{
    options.CreateDbConnection = () => new NpgsqlConnection(connStr);
    options.FilterWhere = "and is_delete=false";
}, new PgsqlScriptService());
```

### 版本更新记录

* 1.0.0-未发布 
  * 支持数据库环境变量配置
