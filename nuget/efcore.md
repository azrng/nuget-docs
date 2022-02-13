# 介绍

该包封装了EFCore常用数据库的公共类

## Common.EFCore

### 使用



### 版本记录

* 1.0.3
  * 将IBaseRepository接口放到EFCore类库
  * 更新包版本到5.10
  
* 1.0.2
  * 将批量删除的方法修改为Zack.EFCore.Batch组件的批量删除
  * 将Repository拆分到各个具体数据库包里面，方便各个数据库进行自定义

* 1.0.1
  * 修复GetById封装问题导致报错

* 1.0.0 
  * 将之前多个数据库封装一起的方式拆开成不同的包，这个包不再直接操作数据库

## Common.EFCore.InMemory

### 使用



### 版本记录

* 1.0.2
  * 将IBaseRepository接口放到EFCore类库

* 1.0.1
  * 将仓储层移植到该类库中
* 1.0.0
  * 封装了一些基本的操作内存数据库的方法

## Common.EFCore.MySQL

### 使用



### 版本记录

* 0.0.3
  * 将IBaseRepository接口放到EFCore类库

* 0.0.2
  * 修改批量删除方法

* 0.0.1
  * 封装了一些见到的操作MySQL的方法

## Common.EFCore.PostgresSQL

### 使用

使用自己创建的上下文

```
services.AddPostgreSQLDb<OpenDbContext>(Configuration["DbConfig:Postgresssql:ConnectionString"]);
```



### 版本记录

* 0.0.3
  * 将IBaseRepository接口放到EFCore类库

* 0.0.2
  * 将仓库层移到该类库中
  * 增加批量删除方法

* 0.0.1
  * 使用EFCore封装基本的操作方法

## Common.EFCore.SQLite

### 使用

### 版本记录

* 0.0.3
  * 将IBaseRepository接口放到EFCore类库

* 0.0.2
  * 将仓储放到该层
  * 修改批量删除方法

* 0.0.1
  * 使用SQLite封装一些简单的操作方法

## Common.EFCore.SQLServer

### 使用

### 版本记录

* 0.0.2
  * 将IBaseRepository接口放到EFCore类库
  * 更新包版本到5.10
  
* 0.0.1
  * 封装基本的操作sqlserver数据库的方法
