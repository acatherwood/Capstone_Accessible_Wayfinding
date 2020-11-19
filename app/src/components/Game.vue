<template>
<div>
  <div :id="containerId" v-if="downloaded" > 
  </div>
  <div class="placeholder" v-else>
    Downloading ...
  </div>
   <div>
     <p>show directions</p>
    <label>From</label> {{ showFromLocation }}
    <label>To</label> {{ showToLocation }}
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
