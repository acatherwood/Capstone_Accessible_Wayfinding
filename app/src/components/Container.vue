<template>
<div class ="container-fluid">

    <div class="card text-white bg-dark mb-3" style="max-width: 25rem;">
      <div class="card-header bg-danger font-weight-bold">Find your route</div>
      <div class="card-body text-center">
          <div class="row justify-content-center">
          <Directions/>
          </div>
      </div>
    </div>

  <Game/>
</div>
</template>

<script>

import Game from './Game.vue'
import Directions from './directions.vue'


export default {
  name: 'Map',
    components: {
    Game,
    Directions
}
}
</script>

<style scoped>
.container-fluid{
  padding-top: 150px;
    max-width: 100%;
}
.card {
  transform: translateX(-50%);
  left: 50%;
  position: relative;
}
</style>
