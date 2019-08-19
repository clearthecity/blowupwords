<template>
  <v-footer absolute id='footer'>
    <v-layout justify-space-around row>
      <div>
        <span @click='resetFromNav'><router-link :to='link'> {{ linkText }} </router-link></span>
      </div>
      <div> &copy; 2019 nice derangements, inc. </div>
    </v-layout>
  </v-footer>
</template>

<script>

export default {
  name: 'Footer',
  props: {
    page: String
  },
  computed: {
    link: function () {
      return (this.page == 'home' ? '/about' : '/')
    },
    linkText: function () {
      return (this.page == 'home' ? 'About' : 'Blow Up!')
    }
  },
  methods: {
    resetFromNav: function () {
      if (this.page == 'home') {
        if (!this.$store.state.paused) {
          this.$store.commit('pauseOrResume')
          this.$store.commit('resetPoints')
        }
      }
    }
  }
}

</script>
