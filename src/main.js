import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './registerServiceWorker'
import './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.config.productionTip = false

Vue.mixin({
  methods: {
    playExplosion () {
      const explosion_path = '/audio/Explosion1.mp3'
      const explosion = new Audio(explosion_path)
      var promise = explosion.play()
      if (promise !== undefined) {
        promise.then(() => {
          // nothing to see here
        }, (error) => {
          console.log(error)
        })
      }
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
