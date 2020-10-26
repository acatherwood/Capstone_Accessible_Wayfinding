<template>
<div class ="center">
  <Login />
            <Game/>
        </div>
</template>

<script>

import Game from './Game.vue'
import Login from './Login.vue'


export default {
  name: 'Map',
    components: {
    Game,
    Login
}
}
</script>

<style scoped>
.center{
    margin-top: 300px;
    margin-left: 400px;  
}

</style>
