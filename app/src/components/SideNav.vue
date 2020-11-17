
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
            <li style="padding-bottom: 10px !important"><b-link :to="{name:'about'}" v-on:click="displaySearch" > Directions</b-link></li>
           <div aria-disabled="true" id="search-box" >
             
            <input type="text" class="textInput" id="To" value="From.." />
            <input type="text" class="textInput" id="From" value="To.." />
            <input type="button" value="Enter" v-on:click="storeInput">
            </div>
 
 
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
export default {
  name: 'SideNav',
  props: {
    msg: String
  },
  methods:{
    displaySearch: function(event){
      var block = document.getElementById("search-box")
      block.style.visibility = "visible"
      
      /*change code to dynamically add div with textboxes*/
      var newDiv = document.createElement('div')
      
    },

    storeInput: function(event){

      var inputTo = document.getElementById("To").value;
      alert(inputTo);
      var inputFrom = document.getElementById("From").value;
      alert(inputFrom);
    }
  }
}
</script>
<style scoped>
#search-box{
  visibility: hidden;
}
.textInput{
  padding-top: 5px;
  padding-bottom: 5px;
  width: 75%;
  margin-top: 5px;
  margin-bottom: 5px;
}
.sidebar {
  background: #464646;
   text-align: center;
}

li{
text-decoration: none;
padding-bottom: 15px;
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