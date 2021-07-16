import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import SendiUi from '../../src/index'

export default ({ Vue, options, router }) => {
  Vue.use(Element)
  Vue.use(SendiUi)
}
