<template>
  <div class='about'>
    <div class="container-fluid">


    <div class = "mapContainer">
      <h2>Map Legend</h2>
    <div class="div-container">

      <div class="left">
      <div class="clearfix">
      
   <img class="img2" width="87px" height="60px" :src="require('@/assets/Elevator.png')"  alt="Locates elevator assistance for accessibility" />
   <div class="text-containter">
  <h4>Elevator Icon</h4>
  <h5>Represents elevator assistance for accessibility.</h5>
 </div>
</div>

      <div class="clearfix1">
        <img class="img1" :src="require('@/assets/Input.png')" alt="Search for routes using the text fields" width="432" height="263"/>
        <div class="text-containter1">
  <h4>Start/End Route Text Field</h4>
   <h5>Search for routes using the text field.</h5>
   </div>
</div>

<div class="clearfix">
  <img class="img2" :src="require('@/assets/Go.png')"  alt="Navigate to a designated route" width="260" height="83"/>
  <div class="text-containter">
 <h4>Navigation Button</h4>
  <h5>Navigate to a designated route.</h5>
  </div>
</div>
      </div>
      <div class="left">
<div class="clearfix">
  <img class="img2" :src="require('@/assets/RR.png')"  alt="Represents restroom loacations" width="90" height="72"/>
  <div class="text-containter">
 <h4>Restroom Icon</h4>
  <h5>Represents restroom loacations.</h5>
  </div>

</div>      

<div class="clearfix1">
  <img class="img1" :src="require('@/assets/Saved.png')" alt="Displays routes saved by user" width="432" height="258"/>
  <div class="text-containter1">
   <h4>Saved Routes Field</h4> 
    <h5>Displays routes saved by user.</h5>
    </div>
</div>

<div class="clearfix">
  <img class="img2" :src="require('@/assets/Save.png')"  alt="Click to save a designated path" width="261" height="66"/>
  <div class="text-containter">
  <h4>Save Route Button</h4>
   <h5>Click to save a designated path.</h5>
   </div>
</div>
      </div>
    </div>
    <h4> Need additional assistance? <a href="https://github.com/acatherwood/Capstone_Accessible_Wayfinding/issues" target="_blank">Click Here</a></h4>
    </div>
    </div>
  </div>

</template>
    
<style scoped>
h4{
margin-bottom: 20px;
color: white;
}
h4 a { 
margin-bottom: 20px;
color: white;
}
h5{
color: white;
}
.text-containter1{
  background: #dc3545;
  position: relative; 
  bottom: -2px;
  height: auto;
  padding: 15px;
  border: 3px solid black;
}
.text-containter{
  background: #dc3545;
  position: relative; 
  bottom: -81px;
  height: auto;
  padding: 15px;
  border: 3px solid black;
}
.div-container{
  text-align: center;
  height: 100%;
  width: 100%;
}
.img1 {
 display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  margin-bottom: 25px;
  border: 3px solid black;
}
.img2 {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 85px;
  margin-bottom: 65px;
}
.left{
    display: inline-flex;
      padding: 25px;
      text-align: center;
}
.right{
  float: right;
    display: inline-flex;
      padding: 25px;
      text-align: center;
}
.clearfix {
  overflow: auto;
  border: 4px solid #dc3545 ;
  padding: 5px;
  width: 400px;
  margin-left: 85px;
background: white;
border: 4px solid black;
}
.clearfix1 {
  overflow: auto;
  border: 4px solid #dc3545 ;
  padding: 5px;
  width: 432;
  margin-left: 85px;
background: white;
border: 4px solid black;
}
.container-fluid{
  padding-top: 125px;
  max-width: 75%;
}
.mapContainer{
  margin: auto;
  width: 100%;
  border: 5px solid black;
  padding: 5px;
  text-align: center;
background: #dc3545;
margin-bottom: 15px;
}
h2{
font-weight: 700;
color: white;
padding-top: 15px;
}

</style>

