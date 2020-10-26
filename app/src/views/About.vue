<template>
  <div class='about'>
    <Login />
    <h1>This is an about page</h1>
  </div>
</template>


<script>
import Login from '@/components/Login'
export default {
  name: 'App',
  components: { Login }
}
</script>


<style lang="scss">
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
</style>
