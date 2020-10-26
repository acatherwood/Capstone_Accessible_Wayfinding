<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/McMicken.jpg" height="300" width="1000">
    <HelloWorld msg="Accessible Wayfinding"/>
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Login
  }
}
</script>
