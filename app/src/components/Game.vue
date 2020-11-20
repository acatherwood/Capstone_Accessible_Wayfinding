<template>
<div>
  <div :id="containerId" v-if="downloaded" > 
  </div>
  <div class="placeholder" v-else>
    Downloading ...
  </div>

     <div class="card text-white bg-dark mb-3" style="max-width: 25rem;">
      <div class="card-header bg-danger">Directions</div>
      <div class="card-body text-center">
          <div class="row justify-content-center">
      <div class="from mx-auto">
    <label>From: </label> {{ showFromLocation }}
      </div>
      <div class="to mx-auto">
    <label>To: </label> {{ showToLocation }}
      </div>
    </div>
      </div>
    </div>



</div>

</template>



<script>


export default {
  name: 'Game',
  data() {
    return {
      downloaded: false,
      gameInstance: null,
      containerId: 'game-container'
    }
  },
  async mounted() {
    const game = await import(/* webpackChunkName: "game" */ '@/game/game')
    this.downloaded = true
    this.$nextTick(() => {
      this.gameInstance = game.launch(this.containerId)
    })
  },
  destroyed() {
    this.gameInstance.destroy(false)
  },
  // watch will allow us to look at a reactive property 
  // (showFromLocation and showToLocation) and then run some 
  // code any time that data changes
  // this just takes the values and pushes them onto the 'window' object 
  // which is accessible anywhere in the application
  watch: {
    showFromLocation() {
      window.showFromLocation = this.showFromLocation;
    },
    showToLocation() {
      window.showToLocation = this.showToLocation;
    },
  },
  computed: {
    showFromLocation(){
      return this.$store.state.directions.from 
    },
     showToLocation(){
      return this.$store.state.directions.to 
    }
  }
}
</script>


<style scoped>
.placeholder {
  font-size: 2rem;
  font-family: 'Courier New', Courier, monospace;
}

.card {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
}
</style>
