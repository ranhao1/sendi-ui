<template>
  <el-popover
    :title="title"
    :placement="placement"
    :content="content"
    :width="width"
    :disabled="!showPopover"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <el-tag :type="stateType" :size="size" :color="color" slot="reference" :class="{ 'el-tag--popover': showPopover }">
      <span>{{ stateText }}</span>
      <slot name="icon">
        <i class="el-icon-warning-outline" style="cursor: pointer; padding: 2px" v-if="showPopover"></i>
      </slot>
    </el-tag>
    <slot>
      <!-- 默认插槽，Popover 内嵌 HTML 文本 -->
    </slot>
  </el-popover>
</template>

<script>
export default {
  name: 'SdState',
  props: {
    // 弹出框的标题
    title: {
      type: String,
      default: '未通过原因'
    },
    // 弹出框出现位置
    placement: {
      type: String,
      default: 'top-start'
    },
    // 弹出框显示的内容
    content: {
      type: String
    },
    // 弹出框宽度
    width: {
      type: [String, Number],
      default: '300'
    },
    // 是否显示弹窗框
    showPopover: {
      type: Boolean,
      default: false
    },
    // el-tag 的类型
    stateType: {
      type: String
    },
    // state 的内容
    stateText: {
      type: String
    },
    // el-tag 背景色
    color: {
      type: String
    },
    // el-tag 尺寸
    size: {
      type: String,
      default: 'small'
    },
    // el-tag 主题
    effect: {
      type: String,
      default: 'light'
    }
  }
}
</script>

<style>
.el-tag--popover {
  cursor: pointer;
}
</style>
