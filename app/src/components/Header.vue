<template>
<div>

  <b-navbar toggleable="" type="dark" variant="danger" fixed="top">
    <b-navbar-brand href="index.html" class="hidden-xs"><img src="../assets/LogoWayfinder.png" alt="Logo" height="50px"></b-navbar-brand>
    <a href="javascript:void(0)" id="menu-toggle" v-b-toggle="'sidebar-fifi-toggle'">
    <span class="navbar-toggler-icon" aria-hidden="true"></span></a>
    
     <div class="ml-auto mr-3">
      <b-button-group>
        <a href="#" class="btn btn-danger" role="button">Register</a>
        <a href="#" class="btn btn-danger" role="button">Login</a>
      </b-button-group>

    </div>
  </b-navbar>

</div>
</template>

<style scoped>

.navbar-brand {
  font-size: 15px;
  margin: 0px;
}

.btn-danger:hover, .btn-danger:focus, .btn-danger:active, .btn-danger.active, .open>.dropdown-toggle.btn-danger {
    color: #fff !important;
    background-color: #00000010 !important;
    border-color: #00000000 !important;
    outline: none !important;
    box-shadow: none !important;
}
</style>

