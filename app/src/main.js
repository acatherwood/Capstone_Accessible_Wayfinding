import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App),
  el: '#app',
  mounted() {
    this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
      if (isJustShown == false) {
        console.log('navbar false:', isJustShown)
      }
      if (isJustShown == true) {
        console.log('navbar true:', isJustShown)

      }
    })
  }
})


// new Vue({
// 	el: '#app',
//   mounted() {
//     this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
//       if (isJustShown == false) {
//         console.log('navbar false:', isJustShown)
//       }
//       if (isJustShown == true) {
//         console.log('navbar true:', isJustShown)

//       }
//     })
//   }
// })

