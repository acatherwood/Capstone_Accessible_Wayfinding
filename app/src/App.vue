<template>
  <div id="app">
    <div id="login-nav"></div>
    <div id="nav">
      <h3 class="Menu-Header">MENU</h3>
      <hr>
      <router-link to="/">HOME</router-link> <br><br>
      <router-link to="/about">DIRECTIONS</router-link><br><br>
      <router-link to="/Schedule">SCHEDULE</router-link><br><br>
      <router-link to="/Settings">SETTINGS</router-link>
    </div>
    <router-view/>
    <div id="foot"> </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: 500;
  color: #ffffff;
  font-size: 24px;
}

#nav a.router-link-exact-active {
  color: #646464;
}

#nav{
background: rgb(81, 83, 83);
float: left;
width: 250px;
height: 777px;
}
#login-nav{
  background-color: rgb(212, 22, 22);
  height: 80px; 
}
.Menu-header{
  margin-bottom: 0;
}
hr{
  color: white;
  margin-top: 0;
}
#foot{
  background: rgb(44, 44, 44) ;
  height: 80px;
  position: relative;
  bottom: -353px;
}
</style>
