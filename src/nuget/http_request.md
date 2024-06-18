---
title: HTTP
lang: zh-CN
date: 2023-07-20
publish: true
author: azrng
order: 30
category:
 - nuget
tag:
 - 库
---
## Common.HttpClients

### 操作例子

ConfigureServices里面添加

```c#
services.AddHttpClientService();  
```

需要用到的地方直接注入IHttpClientHelper进行

#### PostFormData

* Task&lt;T&gt; PostFormDataAsync&lt;T&gt;(string url, MultipartFormDataContent formDataContent);

请求示例

```c#
var bytes = await File.ReadAllBytesAsync("D:\\2222.png");

var form = new MultipartFormDataContent();
var byteContent = new ByteArrayContent(bytes);
byteContent.Headers.ContentDisposition = new ContentDispositionHeaderValue("form-data")
{
    Name = "file",
    FileName = "img.png"
};
form.Add(byteContent, "file");
form.Add(new StringContent("img.png"), "FileName");
form.Add(new StringContent("image/png"), "ContentType");
var response = await client.PostFormDataAsync<string>("api/file", form);
```

### 版本更新记录

* 1.2.2
  * 增加x-www-form-urlencoded请求方式代码
  * 升级支持.Net8
  
* 1.2.1
  * 增加get获取文件流的方法

* 1.2.0
  * 升级支持.net7

* 1.1.5
  * 修改put请求命名问题

  * 增加patch请求

* 1.1.4
  * 处理多个构造函数的报错
  * 增加更加灵活的请求方式Send

* 1.1.3
  * 增加http请求FormData形式去提交文件
  * 支持框架netstandard2.1、net6.0
* 1.1.2
  * 更新post方法同时兼容string和其他类型
* 1.1.1
  * 更新post方法,配置多个目标框架
* 1.1.0
  * 更新框架版本为5.0
* 1.0.0
  * 3.1版本的http请求公共库



## Common.RestSharpClient

### 操作例子

```c#
services.AddHttpClientService();
然后注入：IHttpClientHelper
```

### 版本更新记录

* 1.0.6
  * 增加DownloadData方法
* 1.0.5
  * 增加userAgent
* 1.0.4
  * 优化请求和删除方法
* 1.0.3
  * 优化方法，删除无用代码，修改最后序列化方式
* 1.0.2
  *  更新方法名称和增加注释
* 1.0.1
  * 更新post方法同时兼容string和其他类型
* 1.0.0
  * 版本封装get post put delete  