<template>
  <div class="profilecontainer">
    <Container />
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  }
};
</script>

<script>
import Container from '../components/Container'

export default {
  name: 'App',
  components: {
    Container
  },
}

</script>

<style scoped>

</style>