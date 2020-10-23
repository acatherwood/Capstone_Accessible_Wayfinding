<template>
  <div>
  <b-collapse visible id="sidebar-fifi-toggle">
    
    <div class="sidebar scrollable-menu">
      <ul class="list-unstyled">
        <br>
        <a href="javascript:void(0)" role="button" data-toggle="collapse" data-target="#submenu1"><i class="fa fa-fw fa-address-card"></i> MENU</a>
          <hr>
        <li>
        
          <ul id="submenu1" class="list-unstyled collapse show">
            <li><b-link :to="{name:'home'}"> Home</b-link></li>
            <li id="directions" ><input type="button" name="directions" value="Directions"/></li>
            <input type="text" class="textInput" value="From.." hidden/>
            <input type="text" class="textInput" value="From.." hidden/>
            <li><b-link :to="{name:'about'}"> Directions</b-link></li>
            <li><b-link :to="{name:'contact'}">Schedule</b-link></li>
            <li><b-link :to="{name:'contact'}"> Settings </b-link></li>
            <!--add logic for: if logged in/ logout-->
          </ul>
        </li>
      </ul>
    </div>
  </b-collapse> 
  </div>
</template>


<script src="https://unpkg.com/vue@2.4.2"></script>
<script>
/*new Vue({
  el: '#submenu1',
  methods:{
    show: function(){
      alert("test")
    }
  }
})
*/
</script>

<style scoped>
.sidebar {
  background: #464646;
   text-align: center;
}

li{
text-decoration: none;
padding-bottom: 25px;
border-width: 10px;
border:black;
}

hr{
  background-color: white;
  width: 90%;
  height: 1.25px;
}

a{
  color: white;
 font-weight: 700;
 font-size: 24px;
 margin-top:10px;
}
a:hover{
  color: grey;
  text-decoration: none;
}
</style>