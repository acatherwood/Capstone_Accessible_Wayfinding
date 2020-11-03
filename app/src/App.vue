<template>


  <div id="app">
    <div>
      <SideNav/>

    </div>
    <div id="nav">
      <navbar></navbar>
    </div>
    <router-view/>
  </div>

</template>

<script>
import SideNav from './components/SideNav.vue'
import navbar from "./components/Navbar"


export default {
  name: 'App',
  components: {
    navbar,
    SideNav
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


.content {
  margin-left: 185px;
  top: 50px;
}

.sidebar {
    position: fixed;
    top: 51px;
    bottom: 0;
    left: 0;
    width: 190px;
    z-index: 1000;
    padding: 5px;
    overflow-x: hidden;
    overflow-y: auto;
    border-right: 1px solid #eee;
    padding-left: 0;
    padding-right: 0;
    min-height: calc(100vh - 56px);
    transition: all 0.3s;
}
</style>
