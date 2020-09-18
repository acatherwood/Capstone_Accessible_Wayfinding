<template>
  <div class='about'>
    <Game />
    <h1>This is an about page</h1>
  </div>
</template>


<script>
import Game from '@/components/Game'
export default {
  name: 'App',
  components: { Game }
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
