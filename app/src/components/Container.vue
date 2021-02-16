<template>
<div class ="container-fluid">



<div class="mx-auto mb-3" style="max-width: 30rem">
  <b-card no-body>
    <b-tabs card>
      <b-tab title="Directions" active>
        <b-card-text><Directions/></b-card-text>
      </b-tab>
      <b-tab title="Saved Routes">
        <b-card-text>Saved Routes content</b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
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
    max-width: 100%;
    padding-top: 150px;
}
.card {
  transform: translateX(-50%);
  left: 50%;
  position: relative;
}

</style>
