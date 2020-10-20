<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
  <a href="javascript:void(0)" id="menu-toggle" v-b-toggle="'sidebar-fifi-toggle'"><span class="navbar-toggler-icon mb-1 mr-sm-1" aria-hidden="true"></span></a>
    <b-navbar-brand href="index.html">brand
    </b-navbar-brand>
    
    <b-nav-form>
      <b-form-input type="text" class="mb-1 mr-sm-1 mb-sm-0" placeholder="Username"></b-form-input>
      <b-form-input type="password" class="mb-1 mr-sm-1 mb-sm-0" placeholder="Password"></b-form-input>
      <b-button type="submit" variant="danger" class="my-2 my-sm-0">Login</b-button>
    </b-nav-form> 

  </b-navbar>
</div>
</template>
