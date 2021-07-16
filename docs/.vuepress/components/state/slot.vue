<template>
  <div>
    <sd-state
      state-type="success"
      state-text="更改图标"
      size="medium"
      show-popover
      title="使用插槽"
      content="通过 slot 修改 icon "
    >
      <i class="el-icon-chat-line-round el-icon--right" slot="icon"></i>
    </sd-state>
    <sd-state v-model="visible" state-type="" state-text="自定义弹窗内容" size="" title="" show-popover>
      <p>自定义弹出框里的内容，可嵌套多种信息</p>
      <div style="text-align: right; margin: 0">
        <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
      </div>
    </sd-state>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  }
}
</script>
