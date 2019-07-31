<template>
  <v-container id="about">
    <div>
      <h2>What?</h2>
      <p>This is a game (sort of) about identifying sloppy writing, in the form of <a href='https://www.txstate.edu/philosophy/resources/fallacy-definitions/Unwarranted-Generalization.html'>generalizations</a> and <a href='https://writingcenter.unc.edu/cliches/'>cliches</a>, and <a href='https://writingcenter.unc.edu/tips-and-tools/gender-inclusive-language/'>gender-biased language</a>.</p>
    </div>
    <div>
      <h2>Why?</h2>
      <p>I was grading. And looking for an excuse to practice asynchronous JavaScript and the Django REST Framework.</p>
    </div>
    <div>
      <h3>Credits</h3>
      <p>Explosion sound effect courtesy of <a href='http://soundimage.org/sfx-combat/'>soundimage.org</a>. UI components by <a href='https://vuetifyjs.com/en/'>Vuetify</a>.</p>
    </div>
    <Footer page='about'></Footer>
  </v-container>
</template>

<style scoped>

div {
  margin-bottom: 1rem;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  text-decoration-style: dotted;
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
