## 概述
自己使用的一些nuget包使用说明文档。

目标：每天进步一点点

联系地址：itzhangyunpeng@163.com


## 请安装以下工具

* [Git](https://git-scm.com/download)
* [Node.js](https://nodejs.org/zh-cn/download/)（本地开发，可选）
* [Docker Desktop for Mac and Windows](https://www.docker.com/products/docker-desktop)（本地开发，可选）
* [Docker Compose](https://docs.docker.com/compose/install/)（本地开发，可选）
* [Visual Studio Code](https://code.visualstudio.com/Download)（文档编辑，可选）
* [Typora](https://typora.io/)（文档编辑，可选）

## 调试方式（两种方式任选其一）

1. docker

   ```shell
   $ docker-compose up
   ```

2. Node.js

   ```shell
   $ npm install
   $ npm run docs:dev
   ```

3. 在浏览器打开`http://localhost:8080/`