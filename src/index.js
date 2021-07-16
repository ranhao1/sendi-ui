import Pagination from './components/pagination/index.vue'
import SdStateTag from './components/state/index.vue'

const components = [Pagination, SdStateTag]

// Install the components
export function install(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// Expose the components
export { Pagination, SdStateTag }

/* -- Plugin definition & Auto-install -- */
/* You shouldn't have to modify the code below */

// Plugin
const plugin = { install }

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
