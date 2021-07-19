<template>
  <component :is="currentDemo" v-if="currentDemo"></component>
</template>

<script>
import PaginationBase from './pagination/base.vue'

export default {
  components: {
    PaginationBase
  },
  props: {
    component: String
  },
  mounted() {
    this.currentDemo = this.component
  },
  data() {
    return {
      currentDemo: null
    }
  }
}
</script>
