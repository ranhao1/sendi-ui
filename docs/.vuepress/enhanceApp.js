import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default async ({ Vue, options, router }) => {
  Vue.use(Element)
  if (!Vue.prototype.$isServer) {
    const SendiUI = await import('../../src/index')
    Vue.use(SendiUI)
  }
}
