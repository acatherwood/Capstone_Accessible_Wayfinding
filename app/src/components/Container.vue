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
    margin-top: 300px;
    margin-left: 450px;  
    width: 100%;
    height: 100%;
}

</style>
