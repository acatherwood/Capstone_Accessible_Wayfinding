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
    margin-top: 100px;
    margin-left: 400px;  
}


</style>
