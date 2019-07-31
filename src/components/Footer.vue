<template>
  <v-footer absolute id='footer'>
    <v-layout justify-space-around row>
      <div>
        <router-link :to='link'> {{ linkText }} </router-link>
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
  }
}

</script>
