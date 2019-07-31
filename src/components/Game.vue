<template>
  <v-flex xs12 sm10 id='game'>
    <v-layout row wrap id='game-main'>

    <!-- <transition name='fade1'> -->
    <v-layout v-if='start' align-center justify-center column>
      <div id='game-info'>
        <p>Find bad academic writing. Then blow it up.</p>
        <div style='text-align: center'>
          <v-btn type='button' fab color='success' v-on:click='initializeGame'>Go</v-btn>
          <router-link to="/about"><v-btn type='button' fab color='warning'><span style='font-size:1.25rem'>?</span></v-btn></router-link>
        </div>
      </div>
    </v-layout>
    <!-- </transition> -->

    <div v-if='gameInProgress && !start'>
      <AsyncFloatingPhrase></AsyncFloatingPhrase>
    </div>

    </v-layout>
    <v-layout justify-space-around row id='controls'>
      <div>
        Level: <strong id='difficulty-text'>{{ difficultyText }}</strong>
        <v-slider :value='difficulty' @input='changeDifficulty' min='1' max='3' step='1' ticks='always'></v-slider>
      </div>
      <div id='vol-control' v-on:click='changeAudioPrefs'>
        <p>Sound: <strong id='vol-text'>{{ volumeText }}</strong></p>
        <svg style="width:32px;height:32px" viewBox="0 0 32 32">
          <path id='vol-icon' fill="lightgrey" :d='volumeSVG' alt='Change audio setting' />
        </svg>

      </div>
    </v-layout>
  </v-flex>
</template>

<style scoped>

#game-main {
  border: 2px solid #abacc5;
  background-color: white;
  height: 500px;
}

#game-info {
  color: black;
  text-align: left;
}

#controls {
  margin-top: 1rem;
}

#vol-control:hover {
  cursor: pointer;
}
#vol-control:hover path {
  fill: #ee44aa;
}
#vol-text:hover {
  color: #ee44aa;
}

.fade1-enter-active, .fade1-leave-active {
  transition: opacity 1s;
}
.fade1-enter, .fade1-leave-to {
  opacity: 0;
}

</style>

<script>

import { mapState } from 'vuex'
import FPLoading from '@/components/FPLoading.vue'
const FloatingPhrase = import('@/components/FloatingPhrase.vue')

const SVGVolumeMute = 'M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z'
const SVGVolumeHigh = 'M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z'

export default {
  name: 'Game',
  components: {
    AsyncFloatingPhrase: () => ({
      component: FloatingPhrase,
      loading: FPLoading,
      error: () => import('@/components/FPError.vue'),
      delay: 200,
      timeout: 2000
    })
  },
  data () {
    return {
      start: true,
      load_error: false
    }
  },
  computed: mapState({
    gameInProgress: state => !state.paused,
    difficulty: state => state.difficulty,
    difficultyText (state) {
      switch(state.difficulty) {
        case 1:
          return 'Easy'
        case 2:
          return 'Medium'
        case 3:
          return 'Hard'
        default:
          return ''
      }
    },
    volumeSVG (state) {
      return (state.audio ? SVGVolumeHigh : SVGVolumeMute)
    },
    volumeText (state) {
      return (state.audio ? 'On' : 'Off')
    }
  }),
  methods: {
    initializeGame () {
      /*
      this.$store.dispatch('populateFromAPI')
        .then(() => {
          this.loading = false
        }, (error) => {
          console.log(error)
          this.load_error = true
        }) */
      this.start = false
      if (!this.gameInProgress) {
        this.$store.commit('pauseOrResume')
      }
    },
    changeDifficulty ($event) {
      this.$store.commit('changeDifficulty', $event)
    },
    changeAudioPrefs () {
      this.$store.commit('changeAudioPrefs')
    }
  }
}

</script>
