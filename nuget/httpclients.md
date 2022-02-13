# 介绍

该包封装了HTTP使用的公共类

# 使用

### POST

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

# 修改记录

* 1.1.3(未发布)
  * 增加http请求FormData形式去提交文件

* 1.1.2
  * 常用的Http请求封装
