<template>

<div class="padding">
  <Game/>
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

.padding{
  padding-top: 150px;
}

</style>
