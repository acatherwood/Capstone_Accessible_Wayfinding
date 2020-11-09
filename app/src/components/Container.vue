<template>
<div class ="center">
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
.center{
  transform: translateX(-50%);
  left: 50%;
  position: relative;
  padding-top: 60px;
}


</style>
