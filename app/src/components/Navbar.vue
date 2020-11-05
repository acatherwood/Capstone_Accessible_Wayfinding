<template>
  <b-navbar id="header" toggleable="lg" type="dark" variant="danger" fixed="top">
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    
         <b-navbar-brand href="index.html"><i class="fab fa-accessible-icon fa-3x" style="color: #fff"></i></b-navbar-brand>

    <div class="brand">
        <router-link to="/" class = "nav-link">
        <img src="../assets/McMappenLogo.png" class="img-fluid" alt="Header Logo"> 
     </router-link>
      </div>

    <div class="container-fluid d-flex justify-content-end">
      <!-- <router-link to="/" class="navbar-brand">Accessible Wayfinding</router-link> -->
      
      
        <b-button-group>
          <template v-if="user.loggedIn">
            <a class="nav-link btn btn-danger" @click.prevent="signOut">Sign out</a>
          </template>

          <template v-else>
            <li class="nav-item">
              <router-link to="login" class="btn btn-danger">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="register" class="btn btn-danger">Register</router-link>
            </li>
          </template>

        <b-button-group class="btn btn-danger">
          <a href="javascript:void(0)" id="menu-toggle" v-b-toggle="'sidebar-fifi-toggle'">
          <i class="fas fa-bars fa-1x" style="color: #ffffff;"></i></a>
        </b-button-group>
        </b-button-group>



    </div>
  </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
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

.nav-item {
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  color: #fff;
  height: 20px;
}

.btn {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  overflow: hidden;
}
.navbar-menu {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  color: #fff;
  height: 20px;
}
.btn-danger:hover, .btn-danger:focus, .btn-danger:active, .btn-danger.active, .open>.dropdown-toggle.btn-danger {
    color: #fff;
    background-color: #00000010 !important;
    border-color: #00000000 !important;
    outline: none !important;
    box-shadow: none !important;
    list-style-type: none !important;
}

.brand {
    transform: translateX(-50%);
    left: 50%;
    position: absolute;
}

@media screen and (max-width:480px) {  
  .img-fluid img {
    display: none;
  }
}
</style>