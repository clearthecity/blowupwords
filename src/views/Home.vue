<template>
  <v-container class="home">

    <v-layout row wrap>
      <Game></Game>
      <Scoreboard></Scoreboard>
    </v-layout>

    <Footer page='home'></Footer>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  components: {
    Game: () => import('@/components/Game.vue'),
    Scoreboard: () => import('@/components/Scoreboard.vue'),
    Footer: () => import('@/components/Footer.vue')
  }
}
</script>
