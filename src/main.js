import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './registerServiceWorker'
import './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    playExplosion () {
      const sounds = ['/audio/Explosion1.mp3', '/audio/Explosion2.mp3', '/audio/Explosion3.mp3']
      let rand = Math.floor(Math.random() * sounds.length)
      let explosion_path = sounds[rand]
      let explosion = new Audio(explosion_path)
      var promise = explosion.play()
      if (promise !== undefined) {
        promise.then(() => {
          // nothing to see here
        }, (error) => {
          /* eslint-disable no-alert, no-console */
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
