import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as e,a}from"./app-9e72e254.js";const t={},r=a(`<h2 id="common-efcore" tabindex="-1"><a class="header-anchor" href="#common-efcore" aria-hidden="true">#</a> Common.EFCore</h2><h3 id="操作例子" tabindex="-1"><a class="header-anchor" href="#操作例子" aria-hidden="true">#</a> 操作例子</h3><p>只是包含EFCore公共Base类</p><p>Statrup的ConfigureServices方法添加</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>services.AddAutoGenerationId(); //增加自增ID 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>继承公共基类</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IdentityBaseEntity、IdentityBaseEntity&lt;TKey&gt;
IdentityOperatorEntity、IdentityOperatorEntity&lt;Tkey&gt;
IdentityOperatorStatusEntity、  IdentityOperatorStatusEntity&lt;TKey&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模型配置继承</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>EntityTypeConfigurationIdentity、EntityTypeConfigurationIdentity&lt;T, TKey&gt;
EntityTypeConfigurationIdentityOperator、EntityTypeConfigurationIdentityOperator&lt;T,TKey&gt;
EntityTypeConfigurationIdentityOperatorStatus、EntityTypeConfigurationIdentityOperatorStatus&lt;T, TKey&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本更新记录" tabindex="-1"><a class="header-anchor" href="#版本更新记录" aria-hidden="true">#</a> 版本更新记录</h3><ul><li><p>1.3.0-beta2</p><ul><li>升级.Net8</li></ul></li><li><p>1.3.0-beta1</p><ul><li>模型类优化</li><li>将pgsql中列的PropertyBuilderExtensions迁移到该程序集</li><li>增加BaseRepository作为公共的操作，且方法为虚方法</li><li>移除IBaseRepository中的同步方法</li></ul></li><li><p>1.2.1</p><ul><li><p>查询请求类优化</p></li><li><p>QueryableExtensions类更新</p></li></ul></li><li><p>1.2.0</p><ul><li>GetPageRequest增加一个查询关键字</li><li>将EFCoreExtension内容迁移到工作单元下</li><li>工作单元类需要单独注入，如services.AddUnitOfWork&lt;BaseDbContext&gt;();</li></ul></li><li><p>1.2.0-beta2</p><ul><li>将创建时间修改时间等改为传入方案，用来应对pgsql的时间区分有时区无时区方案</li></ul></li><li><p>1.2.0-beta1</p><ul><li>升级支持.net7</li></ul></li><li><p>1.0.0-beta8</p><ul><li>增加表达式树扩展方法，替换nuget包System.Linq.Dynamic.Core</li></ul></li><li><p>1.0.0-beta7</p><ul><li>增加执行SQL扩展</li><li>增加非追踪</li></ul></li><li><p>1.0.0-beta5</p><ul><li>更新注册的方法从AddEntityBase变更为AddIdHelper()</li></ul></li><li><p>1.0.0-beta4</p><ul><li>支持主键自定义类型</li></ul></li><li><p>1.1.0-beta3</p><ul><li>增加分页相关的类</li><li>去除common包的依赖</li></ul></li><li><p>1.1.0-beta2</p><ul><li>更新因为Common包升级导致的问题</li></ul></li><li><p>1.1.0-beta1</p><ul><li>修改版本支持.net5、.net6、.netstandard2.1</li><li>修改OrderBy排序方法</li></ul></li><li><p>1.0.6</p><ul><li>修改QueryableExtensions扩展，分页支持返回总条数，如果参数错误抛出异常</li></ul></li><li><p>1.0.5</p><ul><li>修改QueryableExtensions扩展</li></ul></li><li><p>1.0.4</p><ul><li>增加默认注入，支持单独使用该库的model类AddEntityBase</li><li>主键ID修改类型为long类型</li></ul></li><li><p>1.0.3</p><ul><li>基本的base类封装</li><li>IBaseRepository接口编写</li><li>工作单元封装</li></ul></li></ul><h2 id="common-efcore-inmemory" tabindex="-1"><a class="header-anchor" href="#common-efcore-inmemory" aria-hidden="true">#</a> Common.EFCore.InMemory</h2><h3 id="操作例子-1" tabindex="-1"><a class="header-anchor" href="#操作例子-1" aria-hidden="true">#</a> 操作例子</h3><h3 id="版本更新记录-1" tabindex="-1"><a class="header-anchor" href="#版本更新记录-1" aria-hidden="true">#</a> 版本更新记录</h3><ul><li><p>1.3.0</p><ul><li>增加InMemoryRepository继承自BaseRepository和IBaseRepository</li></ul></li><li><p>1.2.0</p><ul><li>优化注入服务的方法</li></ul></li><li><p>1.2.0-beta1</p><ul><li>升级支持.net7</li></ul></li><li><p>1.1.0-beta5</p><ul><li>增加非追踪</li></ul></li><li><p>1.0.0-beta4</p><ul><li>修改注入方法名称为AddEntityFramework</li></ul></li><li><p>1.1.0-beta3</p><ul><li>增加分页相关的类</li><li>去除common包的依赖</li></ul></li><li><p>1.1.0-beta2</p><ul><li>更新因为Common包升级导致的问题</li></ul></li><li><p>1.1.0-beta1</p><ul><li>修改版本支持.net5、.net6、.netstandard2.1</li></ul></li><li><p>1.0.3</p><ul><li>更新分页入参</li></ul></li><li><p>1.0.2</p><ul><li>更新包版本</li></ul></li><li><p>1.0.1</p><ul><li>基本操作内存数据库的封住哪个</li></ul></li></ul><h2 id="common-efcore-mysql" tabindex="-1"><a class="header-anchor" href="#common-efcore-mysql" aria-hidden="true">#</a> Common.EFCore.MySQL</h2><h3 id="操作例子-2" tabindex="-1"><a class="header-anchor" href="#操作例子-2" aria-hidden="true">#</a> 操作例子</h3><h3 id="版本更新记录-2" tabindex="-1"><a class="header-anchor" href="#版本更新记录-2" aria-hidden="true">#</a> 版本更新记录</h3><ul><li><p>1.3.0</p><ul><li>增加PostgreRepository继承自BaseRepository和IBaseRepository</li></ul></li><li><p>1.2.0</p><ul><li>优化注入服务逻辑</li></ul></li><li><p>1.1.0</p><ul><li>升级支持.Net7</li><li>修复迁移的时候自定义配置未生效问题</li></ul></li><li><p>1.1.0-beta5</p><ul><li>增加非追踪</li></ul></li><li><p>1.1.0-beta4</p><ul><li>修改注入方法名称为AddEntityFramework</li></ul></li><li><p>1.1.0-beta3</p><ul><li>增加分页相关的类</li><li>去除common包的依赖</li></ul></li><li><p>1.1.0-beta2</p><ul><li>更新因为Common包升级导致的问题</li></ul></li><li><p>1.1.0-beta1</p><ul><li>修改版本支持.net5、.net6、.netstandard2.1</li><li>更新组件包版本</li></ul></li><li><p>0.0.3</p><ul><li>更新分页入参</li></ul></li><li><p>0.0.2</p><ul><li>封装简单方法</li></ul></li></ul><h2 id="common-efcore-postgressql" tabindex="-1"><a class="header-anchor" href="#common-efcore-postgressql" aria-hidden="true">#</a> Common.EFCore.PostgresSQL</h2><h4 id="操作例子-3" tabindex="-1"><a class="header-anchor" href="#操作例子-3" aria-hidden="true">#</a> 操作例子</h4><h4 id="版本更新记录-3" tabindex="-1"><a class="header-anchor" href="#版本更新记录-3" aria-hidden="true">#</a> 版本更新记录</h4><ul><li><p>1.3.0-beta2</p><ul><li>升级支持.Net8</li></ul></li><li><p>1.3.0-beta1</p><ul><li>增加PostgreRepository继承自BaseRepository和IBaseRepository</li></ul></li><li><p>1.2.0</p><ul><li>移除工作单元注入</li></ul></li><li><p>1.2.0-beta2</p><ul><li>新增设置时区的扩展方法</li><li>同步支持Common.EFCore设置时间方案</li></ul></li><li><p>1.2.0-beta1</p><ul><li>升级支持.net7</li></ul></li><li><p>1.1.0-beta4</p><ul><li>增加非追踪</li></ul></li><li><p>1.1.0-beta3</p><ul><li>修改注入方法名称为AddEntityFramework</li></ul></li><li><p>1.0.0-beta2</p><ul><li>解决不显示主键类型</li></ul></li><li><p>1.0.0-beta1</p><ul><li>修改版本支持.net5、.net6、.netstandard2.1</li></ul></li><li><p>0.0.3</p><ul><li>更新分页入参</li></ul></li><li><p>0.0.2</p><ul><li>封装简单方法</li></ul></li></ul><h2 id="common-efcore-sqlite" tabindex="-1"><a class="header-anchor" href="#common-efcore-sqlite" aria-hidden="true">#</a> Common.EFCore.SQLite</h2><h4 id="操作例子-4" tabindex="-1"><a class="header-anchor" href="#操作例子-4" aria-hidden="true">#</a> 操作例子</h4><h4 id="版本更新记录-4" tabindex="-1"><a class="header-anchor" href="#版本更新记录-4" aria-hidden="true">#</a> 版本更新记录</h4><ul><li><p>1.3.0</p><ul><li>增加PostgreRepository继承自BaseRepository和IBaseRepository</li></ul></li><li><p>1.2.0</p><ul><li>移除工作单元注入</li></ul></li><li><p>1.1.2</p><ul><li>修复迁移的时候自定义配置未生效问题</li></ul></li><li><p>1.1.1</p><ul><li>移除Zack.EFCore.Batch.Sqlite_NET6包</li></ul></li><li><p>1.1.0</p><ul><li>升级包版本，支持.net6、.net7</li></ul></li><li><p>1.0.0-beta3</p><ul><li>升级包版本，支持.netstandard2.1和.net5以及.net6</li></ul></li><li><p>1.1.0-beta2</p><ul><li>增加非追踪</li></ul></li><li><p>1.0.0-beta1</p><ul><li>修改注入方法名称为AddEntityFramework</li></ul></li><li><p>0.0.3</p><ul><li>更新分页入参</li></ul></li><li><p>0.0.2</p><ul><li>封装简单方法</li></ul></li></ul><h2 id="common-efcore-sqlserver" tabindex="-1"><a class="header-anchor" href="#common-efcore-sqlserver" aria-hidden="true">#</a> Common.EFCore.SQLServer</h2><h4 id="操作例子-5" tabindex="-1"><a class="header-anchor" href="#操作例子-5" aria-hidden="true">#</a> 操作例子</h4><h4 id="版本更新记录-5" tabindex="-1"><a class="header-anchor" href="#版本更新记录-5" aria-hidden="true">#</a> 版本更新记录</h4><ul><li><p>1.3.0</p><ul><li>增加PostgreRepository继承自BaseRepository和IBaseRepository</li><li>支持.net7</li></ul></li><li><p>1.0.0-beta3</p><ul><li>升级包版本，支持.net5和.net6</li></ul></li><li><p>1.1.0-beta2</p><ul><li>增加非追踪</li></ul></li><li><p>1.0.0-beta1</p><ul><li>修改注入方法名称为AddEntityFramework</li></ul></li><li><p>0.0.3</p><ul><li>更新分页入参</li></ul></li><li><p>0.0.2</p><ul><li>封装简单方法</li></ul></li></ul><h2 id="common-efcoreconfigurations-弃用" tabindex="-1"><a class="header-anchor" href="#common-efcoreconfigurations-弃用" aria-hidden="true">#</a> Common.EFCoreConfigurations(弃用)</h2><h3 id="操作例子-6" tabindex="-1"><a class="header-anchor" href="#操作例子-6" aria-hidden="true">#</a> 操作例子</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>services.AddMySQLService&lt;OpenDbContext&gt;(Configuration[&quot;DbConfig:Mysql:ConnectionString&quot;]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="版本更新记录-6" tabindex="-1"><a class="header-anchor" href="#版本更新记录-6" aria-hidden="true">#</a> 版本更新记录</h3><blockquote><p>1.0.0 基本base实体类封装<br> 1.0.1 增加注释操作</p></blockquote>`,36),n=[r];function o(u,d){return i(),e("div",null,n)}const c=l(t,[["render",o],["__file","efcore.html.vue"]]);export{c as default};
