import Vue from 'vue'
import firebase from 'firebase'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhCv3DGIY4Rx_Cg_tJg1T0xL4ewOBb-aU",
  authDomain: "mcmapping-e2548.firebaseapp.com",
  databaseURL: "https://mcmapping-e2548.firebaseio.com",
  projectId: "mcmapping-e2548",
  storageBucket: "mcmapping-e2548.appspot.com",
  messagingSenderId: "1062665093950",
  appId: "1:1062665093950:web:2ea4c9d6df0c3c86f8a26f",
  measurementId: "G-2T9D31CF99"
};

firebase.initializeApp(firebaseConfig);

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