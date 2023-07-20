# Common.YuQueSdk

## 介绍

适用于.NetCore的语雀Sdk，与语雀官方保持一致。

> 官方文档：https://www.yuque.com/yuque/developer/api
>
> Apifox文档：https://www.apifox.cn/apidoc/project-584301/api-10357086

#  功能

- 用户
  - [x] 根据用户名获取单个用户信息
  - [x] 根据用户标识获取单个用户信息
- 组织
  - [ ] 用户某个用户加入的组织列表
  - [ ] 获取公开组织列表
  - [ ] 创建组织
  - [ ] 获取单个组织的详细信息
  - [ ] 更新单个组织详细信息
  - [ ] 删除组织
  - [ ] 获取组织成员信息
  - [ ] 增加或更新组织成员
  - [ ] 删除组织成员
- 知识库
  - [x] 获取某个用户的知识库列表
  - [ ] 创建知识库
  - [ ] 获取知识库详情
  - [ ] 更新知识库信息
  - [ ] 删除知识库
- 文档
  - [x] 获取一个仓库的文档列表
  - [x] 获取单篇文档的详细信息
  - [ ] 创建文档
  - [ ] 更新文档
  - [ ] 删除文档


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

### 组织

```

```

### 文档

```
//获取用户下知识库列表
var repList = await yuQueHelper.GetUserRepositoryListAsync("azrng");

//获取知识库下文档列表
var docList = await yuQueHelper.GetRepositoryDocListAsync("10874582");

//获取文档详情
var docs = await _yuQueHelper.GetReposDocs("654321", "df2gl7");
```

## 版本更新记录

* 0.0.1-beta2
  * 更新一些知识库的操作
* 0.0.1-beta1
  * 基本的语雀api调用