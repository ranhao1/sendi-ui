---
title: '私有包'
---

# 介绍

使用 verdaccio 搭建 npm 私有库，pm2 守护进程。

## verdaccio

后面完善，先参考官方文档 [verdaccio](https://verdaccio.org/)

## pm2 守护进程

在确定 verdaccio 安装成功的情况下，使用 pm2 能更好的管理 verdaccio 服务（需要 node.js 环境），避免服务被错误关闭，进程被中断的情况。

### pm2 介绍

pm2 是 node 进程管理工具，可以用它来简化很多 node 应用管理的繁琐任务，如性能监控、自动重启、负载均衡等，而且使用非常简单。关于 pm2 的内容这里不做过多介绍，可以去[官网](https://pm2.keymetrics.io/)查看了解

### 全局安装 pm2

```bash
npm install pm2 -g
```

### 使用 pm2 启动 verdaccio

```bash
pm2 start verdaccio
```

如果无法启动，找到 verdaccio 安装目录的 bin 文件夹中的 verdaccio 启动文件（具体路径根据 verdaccio 的安装位置确定）。
然后执行：

```bash
pm2 start C:\Users\Administrator\AppData\Roaming\npm\node_modules\verdaccio\bin\verdaccio
```

### 查看运行状态

查看运行状态 `status: online`，即为正常启动，可以访问使用

```bash
pm2 list
```

### 常用命令

```bash
pm2 logs              # 显示所有进程日志
pm2 stop all          # 停止所有进程
pm2 restart all       # 重启所有进程
pm2 stop 0            # 停止指定的进程
pm2 restart 0         # 重启指定的进程
pm2 delete 0          # 杀死指定的进程
pm2 delete all        # 杀死全部进程

```

### pm2 遇到的问题

服务器是 windows 的，在服务器重启后 pm2 不会重启之前的任务，需要手动重启（可能有解决办法，后期研究）。

## 发布 npm 包到私有仓库

!> 下面的命名需要先把 npm 源设置为私有包地址，或者使用 --registry 参数

### 创建本地 npm 用户

需要创建本地 npm 用户，用于上传和管理 npm 包，使用 npm adduser 创建用户，输入用户名、密码、邮箱。

```bash
npm adduser
Username: yourname
Password: *
Email: *
```

### 登录并发布

如果已经注册可以直接登录

```bash
# 登录npm
# 根据提示输入账户/密码/邮箱
npm login

# 登录成功，发布
npm publish

```

## npm 更新发布后的包

> 版本号只能新增，禁止下降，代码修改必须以新版本的形式更新

npm 更新和发布的命令是相同的，都是用 `npm publish` 命令。不同之处在于，需要修改包的版本，步骤如下：

- 修改包的版本（package.json 中的 version 字段）
- 执行 `npm publish`

### npm 版本控制

版本号格式：主版本号.次版本号.修订版本号

版本号递增规则：

- 主版本号：做了不兼容修改或颠覆式重写
- 次版本号：向下兼容的功能性更新
- 修订版本号：向下兼容的问题修复

可以通过 `npm version <update_type>` 命令自动改变版本，updata_type 的可选值如下：

```
major   # 增加主版本号
minor   # 增加次版本号
path    # 增加修订版本号
```

## 使用 nrm 管理 npm 源

一般在本地会有多个 npm 源，可以使用 [nrm](https://github.com/Pana/nrm) 对其进行管理与切换。

### 安装 nrm

```bash
npm install nrm -g
```

### 增加本地 npm 源

```
nrm add localnpm *.*.*.*:4873
```

### 查看是否添加成功

nrm ls

```bash
# 源列表
* npm -----  https://registry.npmjs.org/
  yarn ----- https://registry.yarnpkg.com
  cnpm ----  http://r.cnpmjs.org/
  taobao --  https://registry.npm.taobao.org/
  nj ------  https://registry.nodejitsu.com/
  skimdb -- https://skimdb.npmjs.com/registry
  localnpm --- http://*.*.*.*:4873/
```

### 切换源

```bash
nrm use cnpm  //switch registry to cnpm

    Registry has been set to: http://r.cnpmjs.org/
```
