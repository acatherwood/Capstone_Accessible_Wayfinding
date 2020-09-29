<template>
  <div id="app">
    <header>
      <Header />
    </header>

    

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
   

          <Container />
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Container from './components/Container.vue'

export default {
  name: 'App',
  components: {
    Header,
    Container
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
