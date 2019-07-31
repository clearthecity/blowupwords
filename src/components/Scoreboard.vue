<template>
  <v-layout align-center ml-3 justify-space-around fill-height column id='scoreboard'>
    <div id='score-main'>
      <div>Score</div>
      <div><h2>{{ points }}</h2></div>
    </div>
    <div>
      <v-btn type='button' color='warning' v-on:click='pauseOrResume'>{{ pauseButtonText }}</v-btn>
    </div>
    <div>
      <v-btn type='button' v-on:click='showCaught = true'>Caught</v-btn>
      <v-dialog width='500' v-model='showCaught'>
        <GameHistory resultGroup='caught'></GameHistory>
      </v-dialog>
    </div>
    <div>
      <v-btn type='button' v-on:click='showMissed = true'>Missed</v-btn>
      <v-dialog width='500' v-model='showMissed'>
        <GameHistory resultGroup='missed'></GameHistory>
      </v-dialog>
    </div>
    <div>
      <v-btn type='button' color='danger' v-on:click='resetGame'>Reset</v-btn>
    </div>
  </v-layout>
</template>

<style scoped>

#scoreboard {
  padding: 1.25rem 0.5rem 1rem 0.5rem;
  border: 2px solid #abacc5;
  box-shadow: inset 2px 2px 6px rgba(255,255,255,0.3), inset -2px -2px 6px rgba(255,255,255,0.3);
}

#score-main {
  padding: 0.5rem;
  box-shadow: inset 1px 1px 4px rgba(255,255,255,0.3), inset -1px -1px 4px rgba(255,255,255,0.3);
  border-radius: 2px;
}

#scoreboard > div:not(:first-of-type) {
  margin-top: 1rem;
}

</style>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Scoreboard',
  components: {
    GameHistory: () => import('@/components/GameHistory.vue')
  },
  data () {
    return {
      showMissed: false,
      showCaught: false
    }
  },
  computed: mapState({
    points: (state) => state.points,
    pauseButtonText: (state) => (state.paused ? 'Resume' : 'Pause'),
  }),
  watch: {
    showMissed: function (newState) {
      if (newState && !this.$store.state.paused) {
        this.$store.commit('pauseOrResume')
      }
      else if (!newState && this.$store.state.paused) {
        this.$store.commit('pauseOrResume')
      }
    },
    showCaught: function (newState) {
      if (newState && !this.$store.state.paused) {
        this.$store.commit('pauseOrResume')
      }
      else if (!newState && this.$store.state.paused) {
        this.$store.commit('pauseOrResume')
      }
    }
  },
  methods: {
    pauseOrResume () {
      this.$store.commit('pauseOrResume')
    },
    resetGame () {
      this.$store.dispatch('resetGame')
    }
  }
}

</script>
