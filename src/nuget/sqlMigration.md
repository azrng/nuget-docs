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

### 快速上手

将需要迁移的文件放到执行目录下，比如可以放在wwwroot下的InitSql目录下，文件命名格式为1.0.0.txt、1.1.0.txt等



举例迁移一个数据库示例

```csharp
services.AddSqlMigrationService("default", config =>
            {
                config.Schema = "sample";
                config.VersionPrefix = string.Empty;
                config.SqlRootPath = Path.Combine(env.WebRootPath, "InitSql");
                config.ConnectionBuilder = (sp) => new NpgsqlConnection(Configuration.GetConnectionString("Pgsql"));
            }).AddAutoMigration()
```

### 迁移多个数据库

```
builder.Services.AddSqlMigrationService("default", config =>
{
    config.Schema = "aa";
    config.VersionPrefix = string.Empty;
    config.SqlRootPath = Path.Combine(builder.Environment.WebRootPath, "MigrationSql");
    config.ConnectionBuilder = (sp) => new NpgsqlConnection(conn);
    // config.LockProvider = x => x.GetRequiredService<ILockProvider>().LockAsync("project_init", TimeSpan.FromMinutes(1));
}).AddSqlMigrationService("default2", config =>
{
    config.Schema = "bb";
    config.VersionPrefix = string.Empty;
    config.SqlRootPath = Path.Combine(builder.Environment.WebRootPath, "MigrationSql2");
    config.ConnectionBuilder = (sp) => new NpgsqlConnection(conn2);
    // config.LockProvider = x => x.GetRequiredService<ILockProvider>().LockAsync("project_init", TimeSpan.FromMinutes(1));
}).AddAutoMigration();
```

### 迁移回调

继承自IMigrationHandler编写迁移回调处理

```csharp
public class DefaultMigrationHandler : IMigrationHandler
{
    private readonly ILogger<DefaultMigrationHandler> _logger;

    public DefaultMigrationHandler(ILogger<DefaultMigrationHandler> logger)
    {
        _logger = logger;
    }

    public Task<bool> BeforeMigrateAsync(string version)
    {
        _logger.LogInformation($"版本：{version}迁移前");
        return Task.FromResult(true);
    }

    public Task MigratedAsync(string version)
    {
        _logger.LogInformation($"版本：{version}迁移成功后");
        return Task.FromResult(true);
    }

    public Task MigrateFailedAsync(string version)
    {
        _logger.LogInformation($"版本：{version}迁移失败");
        return Task.FromResult(true);
    }
}
```

服务配置

```csharp
builder.Services.AddSqlMigrationService<DefaultMigrationHandler>("default", config =>
       {
           config.Schema = "aa";
           config.VersionPrefix = string.Empty;
           config.SqlRootPath = Path.Combine(builder.Environment.WebRootPath, "MigrationSql");
           config.ConnectionBuilder = (sp) => new NpgsqlConnection(conn);
           config.LockProvider = x => x.GetRequiredService<ILockProvider>().LockAsync("project_init", TimeSpan.FromMinutes(1));
       })
       .AddAutoMigration();
```

### 版本更新记录

* 0.1.0
  * 更新迁移输出内容
  * 支持四位版本号
  * 支持 xxx.xxx.xxx 三位细分版本号
* 0.0.2
  * 修复sql问题
* 0.0.1
  * 基本迁移操作
