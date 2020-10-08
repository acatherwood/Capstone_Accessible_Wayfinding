<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/saved">Saved Routes</router-link> | 
      <router-link to="/about">Recent Routes</router-link> | 
      <router-link to="/about">Schedule</router-link> | 
      <router-link to="/about">Community</router-link> | 
      <router-link to="/about">Settings</router-link> | 
      <router-link to="/about">Profile</router-link>
    </div>
    <router-view/>
    <div class="footer-container">
      <div class= "footer">
      <div class="footer-child">
        <router-link to="/saved" class="fas fa-directions fa-3x"></router-link>
      </div>
        <div class="footer-child">
          <router-link to="/saved" class="fas fa-route fa-3x"></router-link>
      </div>
      <div class="footer-child">
          <router-link to="/saved" class="fas fa-clipboard-list fa-3x"></router-link>
      </div>
    </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #E00122;
  margin-bottom: 25px;
}
 
#nav a {
  font-weight: bold;
  color: #c5c5c5;
}

#nav a.router-link-exact-active {
  color: #4e4e4e;
}

#body{
  padding-bottom: 30px;
}
.footer-container{
  position: absolute;
  width: 100%;
  bottom: 0px;
  height: 150px;
  padding: 30px;
  background-color: #232323;
}
.footer-child{
padding: 20px;
width: 33%;
display: inline-block;
}
.footer-child a{
  color: #c5c5c5;
  text-decoration: none;
}
</style>

