---
title: SqlMigration
lang: zh-CN
date: 2023-07-20
publish: true
author: azrng
order: 90
category:
 - nuget
tag:
 - 库
---
## Azrng.SqlMigration

一个脚本迁移的nuget包

### 操作例子

```csharp
services.AddSqlMigrationService("default", config =>
            {
                config.Schema = "sample";
                config.VersionPrefix = string.Empty;
                config.SqlRootPath = Path.Combine(env.WebRootPath, "InitSql");
                config.ConnectionBuilder = (sp) => new NpgsqlConnection(Configuration.GetConnectionString("Pgsql"));
            }).AddAutoMigration()
```

### 版本更新记录

* 0.0.2
  * 修复sql问题
* 0.0.1
  * 基本迁移操作
