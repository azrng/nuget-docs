# 介绍

该包封装了HTTP使用的公共类。

# 使用

## 注入

注入httpclient服务

```
service.AddHttpClientService();
```

当你在需要进行http请求的时候，直接通过构造函数注入IHttpHelper

```
public interface IHttpHelper
{
    /// <summary>
    /// GET请求返回字符串
    /// </summary>
    /// <param name="url">请求地址</param>
    /// <param name="jwtToken">token</param>
    /// <param name="headers">请求头</param>
    /// <returns></returns>
    Task<string> GetAsync(string url, string jwtToken = "", IDictionary<string, string> headers = null);

    /// <summary>
    /// GET请求并传递tokenoken返回自定义内容
    /// </summary>
    /// <typeparam name="T">响应内容</typeparam>
    /// <param name="url">请求地址</param>
    /// <param name="jwtToken">token</param>
    /// <param name="headers">请求头</param>
    /// <returns></returns>
    Task<T> GetAsync<T>(string url, string jwtToken = "", IDictionary<string, string> headers = null);

    /// <summary>
    /// Post请求返回字符串
    /// </summary>
    /// <param name="url">请求地址</param>
    /// <param name="data">请求的数据</param>
    /// <param name="jwtToken">token</param>
    /// <param name="headers">请求头</param>
    /// <returns></returns>
    Task<string> PostAsync(string url, object data, string jwtToken = "", IDictionary<string, string> headers = null);

    /// <summary>
    /// POST请求返回自定义内容
    /// </summary>
    /// <typeparam name="T">返回的结果</typeparam>
    /// <param name="url">请求地址</param>
    /// <param name="data">请求的数据</param>
    /// <param name="jwtToken">token</param>
    /// <param name="headers">请求头</param>
    /// <returns></returns>
    Task<T> PostAsync<T>(string url, object data, string jwtToken = "", IDictionary<string, string> headers = null);

    /// <summary>
    /// post传递form-data参数
    /// </summary>
    /// <param name="url">请求地址</param>
    /// <param name="data">请求的数据</param>
    /// <param name="jwtToken">token</param>
    /// <param name="headers">请求头</param>
    /// <returns>字符串类型</returns>
    /// <remarks>postman=>body=>form-data</remarks>
    Task<string> PostFormDataAsync(string url, Dictionary<string, string> data, string jwtToken = "", IDictionary<string, string> headers = null);

    /// <summary>
    /// post传递form-data参数
    /// </summary>
    /// <typeparam name="T">返回的结果</typeparam>
    /// <param name="url">请求地址</param>
    /// <param name="data">请求的数据</param>
    /// <param name="jwtToken">token</param>
    /// <param name="headers">请求头</param>
    /// <returns></returns>
    Task<T> PostFormDataAsync<T>(string url, Dictionary<string, string> data, string jwtToken = "", IDictionary<string, string> headers = null);

    /// <summary>
    /// post传递form-data文件
    /// </summary>
    /// <typeparam name="T">返回的结果</typeparam>
    /// <param name="url">请求地址</param>
    /// <param name="parameter">参数名</param>
    /// <param name="stream">文件流</param>
    /// <param name="headers">请求头</param>
    /// <returns></returns>
    /// <remarks>postman=>body=>form-data</remarks>
    Task<T> PostFormDataAsync<T>(string url, string parameter, Stream stream, IDictionary<string, string> headers = null);

    /// <summary>
    /// post传递form-data参数(支持上传文件)
    /// </summary>
    /// <typeparam name="T">返回的结果</typeparam>
    /// <param name="url">请求地址</param>
    /// <param name="data">请求的数据</param>
    /// <param name="headers">请求头</param>
    /// <returns></returns>
    /// <remarks>postman=>body=>form-data</remarks>
    Task<T> PostFormDataAsync<T>(string url, MultipartFormDataContent data, IDictionary<string, string> headers = null);

    /// <summary>
    /// POST请求返回自定义内容
    /// </summary>
    /// <typeparam name="T">返回的结果</typeparam>
    /// <param name="url">请求地址</param>
    /// <param name="data">json字符串</param>
    /// <param name="jwtToken">token</param>
    /// <param name="headers">请求头</param>
    /// <returns></returns>
    Task<T> PustAsync<T>(string url, object data, string jwtToken = "", IDictionary<string, string> headers = null);

    /// <summary>
    /// Delete请求并传递tokenoken返回自定义内容
    /// </summary>
    /// <param name="url">请求地址</param>
    /// <param name="jwtToken">token</param>
    /// <param name="headers">请求头</param>
    /// <returns></returns>
    Task<string> DeleteAsync(string url, string jwtToken = "", IDictionary<string, string> headers = null);

    /// <summary>
    /// Delete请求并传递tokenoken返回自定义内容
    /// </summary>
    /// <typeparam name="T">响应内容</typeparam>
    /// <param name="url">请求地址</param>
    /// <param name="jwtToken">token</param>
    /// <param name="headers">请求头</param>
    /// <returns></returns>
    Task<T> DeleteAsync<T>(string url, string jwtToken = "", IDictionary<string, string> headers = null);

    /// <summary>
    /// send调用各种接口 目前支持get post(raw) put delete
    /// </summary>
    /// <param name="requestEnum">请求类型</param>
    /// <param name="url">请求地址</param>
    /// <param name="payload">StringContent字符串内容</param>
    /// <returns></returns>
    Task<string> SendAsync(HttpRequestEnum requestEnum, string url, string payload = "");

    /// <summary>
    /// send调用各种接口
    /// </summary>
    /// <param name="requestEnum">请求类型</param>
    /// <param name="url">请求地址</param>
    /// <param name="httpContent">HttpContent</param>
    /// <param name="mediaTypeHeader">ContentType</param>
    /// <returns></returns>
    Task<string> SendAsync(HttpRequestEnum requestEnum, string url, HttpContent httpContent, MediaTypeHeaderValue mediaTypeHeader = null);
}
```

> 注意：Common.RestSharpClient还没采用上面的接口，是另外一套写法使用的时候构造函数注入IHttpClientHelper

## Common.HttpClients演示示例

#### PostFormData

* Task<T> PostFormDataAsync<T>(string url, MultipartFormDataContent formDataContent);

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

# Common.HttpClients修改记录

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

# Common.RestSharpClient修改记录

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
