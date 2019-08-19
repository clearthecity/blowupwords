<template>
  <v-container id="about">
    <div>
      <h2>What?</h2>
      <p>This is a loud, aggressive way to learn to identify sloppy writing, in the form of <a href='https://www.txstate.edu/philosophy/resources/fallacy-definitions/Unwarranted-Generalization.html'>generalizations</a>, wordiness, imprecise historical markers, <a href='https://writingcenter.unc.edu/cliches/'>cliches</a>, and <a href='https://writingcenter.unc.edu/tips-and-tools/gender-inclusive-language/'>gender-biased language</a>.</p>
    </div>
    <div>
      <h2>Why?</h2>
      <p>I was grading. And looking for an excuse to practice asynchronous JavaScript and the Django REST Framework.</p>
    </div>
    <div>
      <h3>Credits</h3>
      <p>Explosion sound effects courtesy of <a href='http://soundimage.org/sfx-combat/'>soundimage.org</a>, <a href='http://www.sounds.beachware.com/war/kaboom.htm'>BeachWare</a>, and <a href='http://audiosoundclips.com/8-bit-explosion-blast-sound-effects-sfx/'>Audiosoundclips</a>. UI components by <a href='https://vuetifyjs.com/en/'>Vuetify</a>.</p>
    </div>
    <Footer page='about'></Footer>
  </v-container>
</template>

<style scoped>

div {
  margin-bottom: 1rem;
}

</style>

<script>

  export default {
    name: 'About',
    components: {
      Footer: () => import('@/components/Footer.vue')
    }
  }

</script>
