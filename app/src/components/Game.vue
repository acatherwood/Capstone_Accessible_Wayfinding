<template>
<div>
  <div :id="containerId" v-if="downloaded" > 
  </div>
  <div class="placeholder" v-else>
    Downloading ...
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
      console.log("hi")
      console.log(this.showFromLocation)
      window.showFromLocation = this.showFromLocation;
    },
    showToLocation() {
      console.log(this.showToLocation)
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


<style lang="scss" scoped>
.placeholder {
  font-size: 2rem;
  font-family: 'Courier New', Courier, monospace;
}
</style>
