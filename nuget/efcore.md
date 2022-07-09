# Common.EFCore

## 操作例子

只是包含EFCore公共Base类   

 Statrup的ConfigureServices方法添加

```
services.AddEntityBase(); //增加自增ID 
```

继承公共基类

```
IdentityBaseEntity、IdentityBaseEntity<TKey>
IdentityOperatorEntity、IdentityOperatorEntity<Tkey>
IdentityOperatorStatusEntity、  IdentityOperatorStatusEntity<TKey>
```

模型配置继承

```
EntityTypeConfigurationIdentity、EntityTypeConfigurationIdentity<T, TKey>
EntityTypeConfigurationIdentityOperator、EntityTypeConfigurationIdentityOperator<T,TKey>
EntityTypeConfigurationIdentityOperatorStatus、EntityTypeConfigurationIdentityOperatorStatus<T, TKey>
```

## 版本更新记录

* 1.0.0-beta7
  * 增加执行SQL扩展
  * 增加非追踪

* 1.0.0-beta5
  * 更新注册的方法从AddEntityBase变更为AddIdHelper()
* 1.0.0-beta4
  * 支持主键自定义类型
* 1.1.0-beta3
  * 增加分页相关的类
  * 去除common包的依赖
* 1.1.0-beta2
  * 更新因为Common包升级导致的问题
* 1.1.0-beta1
  * 修改版本支持.net5、.net6、.netstandard2.1
  * 修改OrderBy排序方法
* 1.0.6
  * 修改QueryableExtensions扩展，分页支持返回总条数，如果参数错误抛出异常
* 1.0.5
  * 修改QueryableExtensions扩展
* 1.0.4
  * 增加默认注入，支持单独使用该库的model类AddEntityBase
  * 主键ID修改类型为long类型
* 1.0.3
  * 基本的base类封装
  * IBaseRepository接口编写
  * 工作单元封装

# Common.EFCore.InMemory

## 操作例子



## 版本更新记录

* 1.1.0-beta5
  * 增加非追踪
* 1.0.0-beta4
  * 修改注入方法名称为AddEntityFramework
* 1.1.0-beta3
  * 增加分页相关的类
  * 去除common包的依赖
* 1.1.0-beta2
  * 更新因为Common包升级导致的问题
* 1.1.0-beta1
  * 修改版本支持.net5、.net6、.netstandard2.1
* 1.0.3
  * 更新分页入参
* 1.0.2
  * 更新包版本
* 1.0.1
  * 基本操作内存数据库的封住哪个

# Common.EFCore.MySQL

##  操作例子

## 版本更新记录

* 1.1.0-beta5
  * 增加非追踪
  
* 1.1.0-beta4
  * 修改注入方法名称为AddEntityFramework
* 1.1.0-beta3
  * 增加分页相关的类
  * 去除common包的依赖
* 1.1.0-beta2
  * 更新因为Common包升级导致的问题
* 1.1.0-beta1
  * 修改版本支持.net5、.net6、.netstandard2.1
  * 更新组件包版本
* 0.0.3
  * 更新分页入参
* 0.0.2
  * 封装简单方法

# Common.EFCore.PostgresSQL

##  操作例子

## 版本更新记录

* 1.1.0-beta4
  * 增加非追踪
* 1.1.0-beta3
  * 修改注入方法名称为AddEntityFramework
* 1.0.0-beta2
  * 解决不显示主键类型
* 1.0.0-beta1
  * 修改版本支持.net5、.net6、.netstandard2.1

# Common.EFCore.SQLite

## 版本更新记录

* 1.1.0-beta2
  * 增加非追踪
* 1.0.0-beta1
  * 修改注入方法名称为AddEntityFramework

# Common.EFCore.SQLServer

## 版本更新记录

* 1.1.0-beta2
  * 增加非追踪
* 1.0.0-beta1
  * 修改注入方法名称为AddEntityFramework

