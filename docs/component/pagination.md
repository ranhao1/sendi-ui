---
title: 'Pagination 分页'
---

# Pagination 分页

> 使用的是 [vue-element-admin](https://panjiachen.gitee.io/vue-element-admin-site/zh/) 封装的组件

Pagination 组件主要是基于 Element 的 `el-pagination`进行了二次封装，并拓展了自动滚动的功能。

### 基本使用

效果：
<ClientOnly>
<pagination-base/>
</ClientOnly>

代码：

<<< @/docs/.vuepress/components/pagination/base.vue

## Attributes

|    参数     | 说明                                |   类型   |                  默认值                   |
| :---------: | :---------------------------------- | :------: | :---------------------------------------: |
|    total    | 总条目数                            |  Number  |                    ——                     |
|    page     | 当前页数   支持 .sync 修饰符        |  Number  |                     1                     |
|    limit    | 每页显示条目个数，支持 .sync 修饰符 |  Number  |                    20                     |
| page-sizes  | 每页显示个数选择器的选项设置        | Number[] |             [10, 20, 30, 50]              |
|   layout    | 组件布局，子组件名用逗号分隔        |  String  | 'total, sizes, prev, pager, next, jumper' |
|   hidden    | 是否隐藏                            | Boolean  |                   false                   |
| auto-scroll | 分页之后是否自动滚动到顶部          | Boolean  |                   true                    |

其它 Element 的 `el-pagination`支持的属性，它也都支持。详情见[el-pagination](http://element.eleme.io/#/zh-CN/component/pagination)

## Events

| 事件名称   | 说明                                | 回调参数     |
| ---------- | ----------------------------------- | ------------ |
| pagination | 当 limit 或者 page 发生改变时会触发 | {page,limit} |
