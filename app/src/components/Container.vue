<template>
<div class ="container-fluid">

  <div class="card text-white bg-danger mb-3" style="max-width: 30rem">
    <div class="card-header">
  <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
     
     <template v-if="user.loggedIn">
    <li class="nav-item">
        <a class="nav-link active text-white font-weight-bold" id="directions-tab" data-toggle="tab" href="#directions" role="tab" aria-controls="directions" aria-selected="true">Directions</a>
      </li>
        <li class="nav-item">
        <a class="nav-link text-white font-weight-bold" id="savedroutes-tab" data-toggle="tab" href="#savedroutes" role="tab" aria-controls="savedroutes" aria-selected="false">Saved Routes</a>
      </li>
     </template>

      <template v-else>
            <li class="nav-item">
        <a class="nav-link active text-white font-weight-bold" id="directions-tab" data-toggle="tab" href="#directions" role="tab" aria-controls="directions" aria-selected="true">Directions</a>
      </li>
      </template>
  </ul>
    </div>
  <div class="card-body rounded bg-dark">
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="directions" role="tabpanel" aria-labelledby="directions-tab"><Directions/></div>
            <div class="tab-pane fade" id="savedroutes" role="tabpanel" aria-labelledby="savedroutes-tab">...</div>
        </div>
  </div>
</div>


  <Game/>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
import Game from './Game.vue'
import Directions from './directions.vue'


export default {
  name: 'Map',
    components: {
    Game,
    Directions
},
 computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({name: "home" });
            window.location.href = "/"
        });
    }
  }
};

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
  border: transparent !important;
}

.nav-link {
  border: transparent !important;

}
.nav-tabs .nav-item .nav-link.active{  
  background-color:#343a40 !important;
}

</style>
