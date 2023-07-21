---
title: Email
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
## Common.Email

### 操作例子

```c#
services.AddEmail(info =>
{
    info.Host = "smtp.163.com";
    info.Post = 587;
    info.FromName = "发送者用户名";
    info.FromAddress = "发送者地址";
    info.FromPassword = "发送者密码(授权码)";
});
```

### 版本更新记录

>1.0.0 3.1发送邮件服务  
>1.0.1 更新框架为2.1框架兼容更多系统，丰富发送邮件的方法
