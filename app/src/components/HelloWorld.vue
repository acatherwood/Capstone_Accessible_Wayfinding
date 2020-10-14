<template>
  <div class="hello">
    <SuccessConfirmation />
    <h1>{{ msg }}</h1>
    <p> Let's go do things!!!!!</p>
  </div>
</template>

<script>

import SuccessConfirmation from './SuccessConfirmation.vue'


export default {
  name: 'HelloWorld',
    components: {
    SuccessConfirmation
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 64px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
