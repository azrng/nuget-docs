# Common.YuQueSdk

## 介绍

适用于.NetCore的语雀Sdk，与语雀官方保持一致。

> 官方文档：https://www.yuque.com/yuque/developer/api

## 操作

注册

```
services.AddYuQueService(new YuQueConfig
{
    AuthToken = "xxxxxxxxxxx",
    UserAgent = "netcoresdk"
});
```

依赖注入

```
private readonly IYuQueHelper _yuQueHelper;

public TestController(IYuQueHelper yuQueHelper)
{
    _yuQueHelper = yuQueHelper;
}
```

### 用户

```
//获取当个用户信息
var user = await _yuQueHelper.GetUsersAsync("userLoginName");
```

### 文档

```
//获取文档详情
var docs = await _yuQueHelper.GetReposDocs("654321", "df2gl7");
```



## 版本更新记录

* 0.0.1-beta1
  * 基本的语雀api调用