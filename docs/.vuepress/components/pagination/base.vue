<template>
  <sd-pagination :total="total" :page.sync="pageIndex" :limit.sync="pageSize" @pagination="getList" />
</template>

<script>
export default {
  data() {
    return {
      total: 10,
      pageIndex: 1,
      pageSize: 10
    }
  },
  methods: {
    getList(paginationInfo) {
      console.log(paginationInfo)
    }
  }
}
</script>
