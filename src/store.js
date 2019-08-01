import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  name: 'store',
  strict: process.env.NODE_ENV !== 'production',
  state: {
    paused: false,
    points: 0,
    difficulty: 2,
    phraseObjects: [],
    caught: [],
    missed: [],
    audio: true
  },
  getters: {
    arraySize: (state) => state.phraseObjects.length,
    phraseTexts: (state) => state.phraseObjects.map(phraseObj => phraseObj.text),
  },
  mutations: {
    pauseOrResume (state) {
      state.paused = !state.paused
    },
    changeAudioPrefs (state) {
      state.audio = !state.audio
    },
    incrementPoints (state) {
      state.points += 10
    },
    decrementPoints (state) {
      state.points -= 10
    },
    resetPoints (state) {
      state.points = 0
    },
    changeDifficulty (state, val) {
      state.difficulty = val
    },
    addPhraseObject (state, phraseObj) {
      state.phraseObjects.push(phraseObj)
    },
    deleteFirstPhraseObject (state) {
      state.phraseObjects.splice(0, 1)
    },
    addToCaught (state, phraseObj) {
      for (let i = 0; i < state.caught.length; i++) {
        if (state.caught[i]['id'] == phraseObj['id']) {
          return
        }
      }
      state.caught.push(phraseObj)
    },
    addToMissed (state, phraseObj) {
      for (let i = 0; i < state.missed.length; i++) {
        if (state.missed[i]['id'] == phraseObj['id']) {
          return
        }
      }
      state.missed.push(phraseObj)
    },
    clearAllArrays (state) {
      state.phraseObjects = []
      state.caught = []
      state.missed = []
    }
  },
  actions: {
    populateFromAPI (context, PHRASE_COUNT=5) {
      return new Promise ((resolve, reject) => {
        for (let i = 0; i < PHRASE_COUNT; i++) {
          axios.get('https://badwritingapi.herokuapp.com/snippets/random.json')
            .then(response => {
              context.commit('addPhraseObject', response.data)
            })
            .catch(error => reject(error))
        }
        resolve()
      })
    },

    retrieveRandomFromAPI (context) {
      return new Promise((resolve, reject) => {
        axios.get('https://badwritingapi.herokuapp.com/snippets/random.json')
          .then(response => {
            context.commit('addPhraseObject', response.data)
            resolve()
          })
          .catch(error => reject(error))
      })
    },

    getPhrase (context) {
      return new Promise ((resolve, reject) => {
        if (this.state.phraseObjects.length > 0) {
          if (typeof(this.state.phraseObjects[0]) == 'undefined') {
            reject(Error('getPhrase: object is undefined'))
          }
          let phraseObj = {}
          phraseObj['id'] = this.state.phraseObjects[0].id
          phraseObj['text'] = this.state.phraseObjects[0].text
          if (this.state.phraseObjects[0].problems.length > 0) {
            phraseObj['problem'] = this.state.phraseObjects[0].problems[0].name // fix: map?
            phraseObj['explanation'] = this.state.phraseObjects[0].problems[0].explanation
          }
          else {
            phraseObj['problem'] = ''
          }
          context.commit('deleteFirstPhraseObject')
          resolve(phraseObj)
        }
        else {
          reject(Error('phraseObjects is empty'))
        }
      })
    },

    resetGame (context) {
      return new Promise ((resolve, reject) => {
        try {
          context.commit('resetPoints')
          context.commit('clearAllArrays')
        }
        catch (err) {
          reject(Error(err))
        }
        resolve()
      })
    }
  }
})
