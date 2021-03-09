<template>

<body>
  <b-navbar id="header" toggleable="lg" type="dark" variant="danger" fixed="top" class="shadow p-3 mb-5">
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <div class="container-fluid">
         <b-navbar-brand><i class="fab fa-accessible-icon fa-3x" style="color: #fff"></i></b-navbar-brand>

    <div class="brand">
        <router-link to="/" class="nav-link">
        <img src="../assets/McMappingLogo.png" class="img-fluid" alt="Header Logo"> 
     </router-link>
      </div>


     
        <div class="btn-group">
          
          <template v-if="user.loggedIn">
            <a class="nav-item btn btn-danger font-weight-bold" @click.prevent="signOut">Sign Out</a>
          </template>

          <template v-else>
            <li class="nav-item">
              <router-link to="Signin" class="btn btn-danger font-weight-bold">Sign in</router-link>
            </li>
            <li class="nav-item">
              <router-link to="register" class="btn btn-danger font-weight-bold">Register</router-link>
            </li>
          </template>
          
          <div class="dropdown">
            <button class="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-bars fa-1x" style="color: #ffffff;"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
            
              <a class="dropdown-item" href="About">About Us</a>
              <a class="dropdown-item" href="https://github.com/acatherwood/Capstone_Accessible_Wayfinding/issues" target="_blank">Report Issues</a>
              <a class="dropdown-item" href="Legend">Legend</a>
            
          </div>
          </div>
        </div>
    </div>
  </b-navbar>  


</body>
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

.modal-backdrop {
  display: none;
}

.dropdown {
  font-size: 25px;
}

.nav-item {
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  color: #fff;
}

.btn {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
 
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

.dropdown-item.active, .dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #dc3545;
}

.brand {
    transform: translateX(-50%);
    left: 50%;
    position: absolute;
}

@media (max-width: 768px) {
  .btn {
    font-size:12px;
    padding:14px 2px;
  }
}

@media (min-width: 768px) {
  .btn {
    font-size:18px;
    padding:8px 12px;
  }
}

@media (min-width: 992px) {
  .btn {
    font-size:18px;
    padding:8px 12px;
  }
}

@media (min-width: 1200px) {
  .btn {
    padding:10px 16px;
    font-size:18px;
  }
  
}


</style>