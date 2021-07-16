---
title: 'State 状态标签'
---

# State 状态标签

基于 `el-tag` 和 `el-popover` 封装而来。一般用于展示状态，并且可以在特定状态下展示 Popover 弹出框信息。例如：可以在“复核未通过”状态，展示复核未通过原因。

## 基本使用

效果：

<ClientOnly>
<state-base/>
</ClientOnly>

代码：

<<< @/docs/.vuepress/components/state/base.vue

## 使用 slot

可以更改 icon ，以及在 Popover 中嵌套多种类型信息

<ClientOnly>
<state-slot/>
</ClientOnly>

代码：

<<< @/docs/.vuepress/components/state/slot.vue

## Attributes

|    参数     | 说明             |      类型      | 可选值          |   默认值   |
| :---------: | :--------------- | :------------: | :-------------- | :--------: |
|    title    | 弹出框的标题     |     String     |                 | 未通过原因 |
|  placement  | 弹出框的出现位置 |     String     | 参考 el-popover | top-start  |
|   content   | 弹出框显示的内容 |     String     | ——              |     ——     |
|    width    | 弹出框宽度       | String, Number | ——              |    300     |
| showPopover | 弹出框是否可用   |    Boolean     | ——              |   false    |
| state-type  | Tag 的类型       |     String     | 参考 el-tag     |     ——     |
| state-text  | Tag 的内容       |     String     | ——              |     ——     |
|    color    | Tag 的背景色     |     String     | ——              |     ——     |
|    size     | Tag 的尺寸       |     String     | 参考 el-tag     |   small    |
|   effect    | Tag 的主题       |     String     | 参考 el-tag     |   light    |

其它 `el-popover` 支持的属性、事件，可以直接设置。其它部分属性支持的可选值和 Element 一致，可参考[el-tag](https://element.eleme.cn/#/zh-CN/component/tag)、[el-popover](https://element.eleme.cn/#/zh-CN/component/popover)

## Slot

| 参数 | 说明                   |
| :--- | :--------------------- |
| ——   | Popover 内嵌 HTML 文本 |
| icon | Tag 内容右侧的 icon    |
