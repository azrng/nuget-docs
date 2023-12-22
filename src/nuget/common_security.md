---
title: Common.Security
lang: zh-CN
date: 2023-07-20
publish: true
author: azrng
order: 50
category:
 - nuget
tag:
 - 库
---
## 概述

该包封装了常见的加密公共类

## 使用

MD5哈希算法：Md5Helper

```c#
//字符串md5哈希算法
string GetMd5Hash(this string str)

//文件获取md5
string GetFileMd5Hash(string path)
```

Sha哈希算法：ShaHelper

```c#
//获取字符串sha1值
string GetSHA1Hash(this string str)
//获取字符串sha256值
string GetSHA256Hash(this string str)
//获取字符串sha512值
string GetSHA512Hash(this string str)
```

Des加密算法：DesHelper

Rsa非对称加密算法：RsaHelper

Sm2非对称加密算法：Sm2Helper

Sm3哈希算法：Sm3Helper

Sm4对称加密算法：Sm4Helper

## 更新记录

* 0.0.1-beta5
  * 增加SHA的HMAC算法

* 0.0.1-beta4
  * 增加sm3、rsa等示例，增加单元测试

* 0.0.1-beta3
  * 支持MD5、SHA等、DES、AES、RSA等

* 0.0.1-beta2
  * fix处理md5加密将16位和32位弄混问题

* 0.0.1-beta1
  * 从common里面移出来一些方法