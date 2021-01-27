<template>

<div class="container-fluid">
  <div class="padding"> 
  <Game/>
  </div>
</div>

</template>

<script>

import Game from './Game.vue'


export default {
  name: 'Map',
    components: {
    Game
}
}
</script>

<style scoped>

.container-fluid{
  max-width: 100%;
}
.padding{
  padding-top: 150px;
}

</style>
