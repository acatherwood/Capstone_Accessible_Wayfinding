<template>
  <div>

    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

    <b-navbar toggleable="" variant="danger" fixed="top">
      
      <b-navbar-brand href="index.html"><i class="fab fa-accessible-icon fa-3x" style="color: #fff"></i></b-navbar-brand>
    

      <div class="mx-auto d-block">
        <img src="../assets/McMappenLogo.png" class="img-fluid" alt="Header Logo"> 
      </div>

        <b-button-group> 
          <a href="#" class="btn btn-danger" role="button">Register</a>
          <a href="#" class="btn btn-danger" role="button">Login</a>
        </b-button-group>

        <b-button-group class="btn btn-danger">
          <a href="javascript:void(0)" id="menu-toggle" v-b-toggle="'sidebar-fifi-toggle'">
          <i class="fas fa-bars fa-1x" style="color: #ffffff;"></i></a>
        </b-button-group>
        
    </b-navbar>

  </div>
</template>

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

