<template>
  <div id="app">
    <v-app dark>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-app>
  </div>
</template>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
  text-decoration-style: dotted;
}

</style>
