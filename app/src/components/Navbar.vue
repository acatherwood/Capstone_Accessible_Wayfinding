<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <a href="javascript:void(0)" id="menu-toggle" v-b-toggle="'sidebar-fifi-toggle'"><span class="navbar-toggler-icon mb-1 mr-sm-1" aria-hidden="true"></span></a>
    <!-- <b-navbar-brand href="index.html">brand
    </b-navbar-brand> -->
    <div>

    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

    <b-navbar toggleable="" variant="danger" fixed="top">

      <b-navbar-brand href="index.html"><i class="fab fa-accessible-icon fa-3x" style="color: #fff"></i></b-navbar-brand>
    <div class="mx-auto d-block">
        <img src="../assets/McMappenLogo.png" class="img-fluid" alt="Header Logo"> 
      </div>
    </b-navbar>

  </div>
    <div class="container">
      <router-link to="/" class="navbar-brand">Accessible Wayfinding</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <ul class="navbar-nav ml-auto">
          <template v-if="user.loggedIn">
            <div class="nav-item">{{user.data.displayName}}</div>
            <li class="nav-item">
              <a class="nav-link" @click.prevent="signOut">Sign out</a>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <router-link to="login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="register" class="nav-link">Register</router-link>
            </li>
          </template>
        </ul>
      </div>
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
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
};
</script>

<style scoped>
.btn {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
}
.navbar-menu {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  color: #fff;
}
.btn-danger:hover, .btn-danger:focus, .btn-danger:active, .btn-danger.active, .open>.dropdown-toggle.btn-danger {
    color: #fff;
    background-color: #00000010 !important;
    border-color: #00000000 !important;
    outline: none !important;
    box-shadow: none !important;
}
@media screen and (max-width:480px) {  
  .img-fluid img {
    display: none;
  }
}
</style>