<template>
  <div id="app">

    <div id="nav">
      <navbar></navbar>
    </div>
  
    <router-view/>
    <div>
      <directions @inputData="updateMessage" />
    </div>
  </div>

</template>

<script>
import navbar from "./components/Navbar.vue"
import directions from "@/modals/directions.vue"

export default {
  name: 'App',
  components: {
    navbar,
    directions
  },
  // data: function() {
  //   return {
  //     childData: ""
  //   };
  // },
  // methods: {
  //   updateMessage(variable) {
  //     this.childData= variable;
  //   }
  // }
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

.container{
  padding-top: 100px;
}
</style>
