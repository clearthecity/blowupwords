<template>
  <v-card class='game-history'>
    <v-card-title class='headline'>
      {{ title }}
    </v-card-title>
    <v-card-text>
    <table>
      <tbody>
        <tr v-for='item in resultList' :key='item.id'>
          <td> {{ item.text }} </td>
          <td>
            <v-tooltip right light>
              <template v-slot:activator='{ on }'>
                <span class='explain-link' v-on='on'> {{ item.problem }} </span>
              </template>
              <span>{{ item.explanation }}</span>
            </v-tooltip>
          </td>
        </tr>
      </tbody>
    </table>
    </v-card-text>
  </v-card>
</template>

<style scoped>

td {
  text-align: left;
  padding: 0.25rem;
}

.explain-link {
  text-decoration: underline;
  text-decoration-style: dotted;
  font-weight: bold;
}
.explain-link:hover {
  cursor: pointer;
  text-decoration: none;
  color: #ee44aa;
  font-weight: bold;
}

</style>

<script>

import { mapState } from 'vuex'

export default {
  name: 'GameHistory',
  props: {
    resultGroup: String
  },
  data () {
    return {
      explanation: false
    }
  },
  computed: mapState({
    resultList: function (state) {
      if (this.resultGroup == 'missed') {
        return state.missed
      }
      else if (this.resultGroup == 'caught') {
        return state.caught
      }
    },
    title () {
      return (this.resultGroup == 'missed' ? 'Phrases You Missed' : 'Phrases You Caught')
    }
  })
}

</script>
