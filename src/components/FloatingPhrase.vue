<template>
  <div id='floating-phrase-outer' style='width: 100%; height: 100%'>

    <svg width='90%' height='90%' style='margin: 0 auto'>

      <filter class='svg-filter' id='filterCorrect'>
        <feGaussianBlur id='GaussianBlur' in='SourceGraphic' stdDeviation='0' />
      </filter>

      <filter class='svg-filter' id='filterIncorrect'>
      </filter>

      <text :x='randomXCoords' :y='randomYCoords' :fill='randomColor' id='svgText' v-on:click='judgeClick' :style='svgFilter'>
        {{ phraseText }}
      </text>
      Your browser does not support SVG.
    </svg>

  </div>
</template>

<style scoped>
#svgText {
  font-size: 1.5rem;
}
#svgText:hover {
  cursor: crosshair;
}

</style>

<script>

import { TimelineLite, TweenLite, Expo } from 'gsap'
import { mapState } from 'vuex'

const MAX_TIME = 7000
const COLORS = ['#000', '#ee44aa', '#424242', '#FF3D00', '#3E2723', '#263238', '#0e685f', '#d1054e', '#000099', '#336600', '#3366cc']

export default {
  name: 'FloatingPhrase',
  data () {
    return {
      phraseObj: null,
      phraseText: '',
      phraseID: '',
      phraseProblem: '',
      timer: null,
      randomXCoords: 25,
      randomYCoords: 25,
      randomColor: 'black',
      svgFilter: ''
    }
  },
  computed: mapState({
    playAudio: (state) => state.audio
  }),
  watch: {
    phraseObj: function (newPhraseObj) {
      this.phraseText = newPhraseObj.text
      this.phraseID = newPhraseObj.id
      this.phraseProblem = newPhraseObj.problem
      this.randomXCoords = Math.floor(Math.random() * 400)
      this.randomYCoords = Math.floor(Math.random() * 400)
      this.randomColor = this.pickRandomColor()
      this.svgFilter = ''
    },
  },
  created () {
    this.init()
  },
  mounted () {
    this.createGreensockAnimations()
  },
  methods: {
    init () {
      this.$store.dispatch('retrieveRandomFromAPI')
        .then(() => {
          this.$store.dispatch('getPhrase')
            .then((phraseObj) => {
              if (typeof(phraseObj) != 'undefined') {
                this.phraseObj = phraseObj
                this.setTimer()
              }
            }, (error) => {
              console.log(error)
          })

         }, (error) => {
           this.load_error = true
           console.log(error)
         })
    },
    setTimer () {
      let SPEED = MAX_TIME / this.$store.state.difficulty
      this.timer = setTimeout(this.noClick, SPEED)
    },
    stopTimer () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
    },
    judgeClick () {
      this.stopTimer()
      if (this.phraseObj.problem) {
        this.$store.commit('addToCaught', this.phraseObj)
        this.$store.commit('incrementPoints')
        this.svgFilter = 'filter: url(#filterCorrect); -webkit-filter: url(#filterCorrect)'
        if (this.playAudio) {
          this.playExplosion()
        }
      }
      else {
        this.$store.commit('decrementPoints')
        this.svgFilter = 'filter: url(#filterIncorrect); -webkit-filter: url(#filterIncorrect)'
      }
      this.init()
    },
    noClick () {
      if (!this.$store.state.paused) {
        if (this.phraseObj.problem) {
          this.$store.commit('addToMissed', this.phraseObj)
          this.$store.commit('decrementPoints')
        }
        this.init()
      }
    },
    pickRandomColor () {
      let rand = Math.floor(Math.random() * COLORS.length)
      return COLORS[rand]
    },
    createGreensockAnimations () {

      var blur = document.getElementById('GaussianBlur')
      var svgText = document.getElementById('svgText')
      var stdDev = { val: 0 }
      var timeline = new TimelineLite({
        paused: true,
        onUpdate: () => {
          blur.setAttribute('stdDeviation', stdDev.val)
        }
      })
      timeline.to(stdDev, 2, {val: 8, ease: Expo.easeInOut})
        .to(stdDev, 0.5, {val: 0})

      svgText.addEventListener('click', () => {
        stdDev = { val: 0 }
      })

      TweenLite.to("#GaussianBlur", 2, {
        attr: { stdDeviation: 8 },
        ease: Expo.easeInOut
      })
    }
  }
}

</script>
