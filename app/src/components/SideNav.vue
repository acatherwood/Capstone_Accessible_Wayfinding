<template>
  <div>
  <b-collapse visible id="sidebar-fifi-toggle">
    
    <div class="sidebar bg-white scrollable-menu">
      <ul class="list-unstyled">
        <li>
        <a href="javascript:void(0)" role="button" data-toggle="collapse" data-target="#submenu1"><i class="fa fa-fw fa-address-card"></i> MENU 1</a>
          <ul id="submenu1" class="list-unstyled collapse show">
            <li><b-link :to="{name:'home'}">- Home S</b-link></li>
            <li><b-link :to="{name:'about'}">- About S</b-link></li>
            <li><b-link :to="{name:'contact'}">- Contact S</b-link></li>
          </ul>
        </li>
      </ul>
    </div>
  </b-collapse> 
  </div>
</template>