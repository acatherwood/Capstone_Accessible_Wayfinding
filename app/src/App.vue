<template>
  <div id="app">
<div class="container">
    <div id="nav">
      <navbar></navbar>
    </div>
</div>

    <router-view/>
  </div>

</template>

<script>
import navbar from "./components/Navbar.vue"


export default {
  name: 'App',
  components: {
    navbar
  },
  methods: {
    updateMessage(variable) {
      this.childData= variable;
    }
  }
};

</script>

<style scoped>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  margin-left: 185px;
  top: 50px;
}
</style>
