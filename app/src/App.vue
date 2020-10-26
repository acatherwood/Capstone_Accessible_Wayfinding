<template>
<div id="app">
  <Header/>>
  <Container />
  <SideNav/>
</div>
</template>

<script>

import Header from './components/Header.vue'
import SideNav from './components/SideNav.vue'
import Container from './components/Container.vue'

export default {
  name: 'App',
  components: {
    Header,
    SideNav,
    Container
  },
}
</script>

<style>
#app {
   width: 500px; 
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
