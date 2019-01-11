// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview'
import GLOBAL from '../../utils/common'
import vueResourceServer from '../../utils/hserver'
import '../../styles/index.less';
import Demo from '../../components/demo/demo'
import test1 from '../../components/demo/test-one'
import test2 from '../../components/demo/test-two'
import Router from 'vue-router'

Vue.config.productionTip = false
Vue.prototype.GLB = GLOBAL
Vue.use(iView)
Vue.use(Router)
Vue.use(vueResourceServer)

var router = new Router({
  routes: [
    {
      path: '/test1',
      name: 'test1',
      component: test1
    },
    {
      path: '/test2',
      name: 'test2',
      component: test2
    }
  ]
})

// /* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Demo },
  template: '<Demo/>'
})
