(function(o){function r(r){for(var e,n,c=r[0],d=r[1],s=r[2],l=0,m=[];l<c.length;l++)n=c[l],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&m.push(a[n][0]),a[n]=0;for(e in d)Object.prototype.hasOwnProperty.call(d,e)&&(o[e]=d[e]);f&&f(r);while(m.length)m.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var o,r=0;r<i.length;r++){for(var t=i[r],e=!0,n=1;n<t.length;n++){var c=t[n];0!==a[c]&&(e=!1)}e&&(i.splice(r--,1),o=d(d.s=t[0]))}return o}var e={},n={app:0},a={app:0},i=[];function c(o){return d.p+"js/"+({about:"about",game:"game"}[o]||o)+"-legacy."+{about:"fede1d01",game:"c8aeaa7b"}[o]+".js"}function d(r){if(e[r])return e[r].exports;var t=e[r]={i:r,l:!1,exports:{}};return o[r].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(o){var r=[],t={about:1};n[o]?r.push(n[o]):0!==n[o]&&t[o]&&r.push(n[o]=new Promise((function(r,t){for(var e="css/"+({about:"about",game:"game"}[o]||o)+"."+{about:"47801676",game:"31d6cfe0"}[o]+".css",a=d.p+e,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===e||l===a))return r()}var m=document.getElementsByTagName("style");for(c=0;c<m.length;c++){s=m[c],l=s.getAttribute("data-href");if(l===e||l===a)return r()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=r,f.onerror=function(r){var e=r&&r.target&&r.target.src||a,i=new Error("Loading CSS chunk "+o+" failed.\n("+e+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=e,delete n[o],f.parentNode.removeChild(f),t(i)},f.href=a;var u=document.getElementsByTagName("head")[0];u.appendChild(f)})).then((function(){n[o]=0})));var e=a[o];if(0!==e)if(e)r.push(e[2]);else{var i=new Promise((function(r,t){e=a[o]=[r,t]}));r.push(e[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=c(o);var m=new Error;s=function(r){l.onerror=l.onload=null,clearTimeout(f);var t=a[o];if(0!==t){if(t){var e=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;m.message="Loading chunk "+o+" failed.\n("+e+": "+n+")",m.name="ChunkLoadError",m.type=e,m.request=n,t[1](m)}a[o]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(r)},d.m=o,d.c=e,d.d=function(o,r,t){d.o(o,r)||Object.defineProperty(o,r,{enumerable:!0,get:t})},d.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},d.t=function(o,r){if(1&r&&(o=d(o)),8&r)return o;if(4&r&&"object"===typeof o&&o&&o.__esModule)return o;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:o}),2&r&&"string"!=typeof o)for(var e in o)d.d(t,e,function(r){return o[r]}.bind(null,e));return t},d.n=function(o){var r=o&&o.__esModule?function(){return o["default"]}:function(){return o};return d.d(r,"a",r),r},d.o=function(o,r){return Object.prototype.hasOwnProperty.call(o,r)},d.p="/",d.oe=function(o){throw console.error(o),o};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=r,s=s.slice();for(var m=0;m<s.length;m++)r(s[m]);var f=l;i.push([0,"chunk-vendors"]),t()})({0:function(o,r,t){o.exports=t("56d7")},3803:function(o,r,t){"use strict";var e=t("a37f"),n=t.n(e);n.a},3951:function(o,r,t){},5385:function(o,r,t){},"56d7":function(o,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var e=t("2b0e"),n=t("5f5b"),a=t("b1e0"),i=function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("navbar")],1),t("router-view")],1)},c=[],d=function(){var o=this,r=o.$createElement,e=o._self._c||r;return e("body",[e("b-navbar",{attrs:{id:"header",toggleable:"lg",type:"dark",variant:"danger",fixed:"top"}},[e("link",{attrs:{rel:"stylesheet",href:"https://pro.fontawesome.com/releases/v5.10.0/css/all.css",integrity:"sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p",crossorigin:"anonymous"}}),e("b-navbar-brand",[e("i",{staticClass:"fab fa-accessible-icon fa-3x",staticStyle:{color:"#fff"}})]),e("div",{staticClass:"brand"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e("img",{staticClass:"img-fluid",attrs:{src:t("c12c"),alt:"Header Logo"}})])],1),e("div",{staticClass:"container-fluid d-flex justify-content-end"},[e("b-button-group",[o.user.loggedIn?[e("a",{staticClass:"nav-item btn btn-danger",on:{click:function(r){return r.preventDefault(),o.signOut(r)}}},[o._v("Sign Out")])]:[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"btn btn-danger",attrs:{to:"Signin"}},[o._v("Sign in")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"btn btn-danger",attrs:{to:"register"}},[o._v("Register")])],1)]],2),e("b-button-group",[e("div",{staticClass:"dropdown"},[e("button",{staticClass:"btn btn-danger dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("i",{staticClass:"fas fa-bars fa-1x",staticStyle:{color:"#ffffff"}})]),e("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"dropdownMenuButton"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"About"}},[o._v("About Us")]),e("a",{staticClass:"dropdown-item",attrs:{href:"https://github.com/acatherwood/Capstone_Accessible_Wayfinding/issues",target:"_blank"}},[o._v("Report Issues")])])])])],1)],1)],1)},s=[],l=(t("ac1f"),t("5319"),t("5530")),m=t("2f62"),f=t("8aa5"),u=t.n(f),p={computed:Object(l["a"])({},Object(m["b"])({user:"user"})),methods:{signOut:function(){var o=this;u.a.auth().signOut().then((function(){o.$router.replace({name:"home"}),window.location.href="/"}))}}},v=p,h=(t("ff98"),t("2877")),g=Object(h["a"])(v,d,s,!1,null,"973ac1e6",null),b=g.exports,C={name:"App",components:{navbar:b},methods:{updateMessage:function(o){this.childData=o}}},_=C,w=(t("3803"),Object(h["a"])(_,i,c,!1,null,"ea1e694c",null)),A=w.exports,y=(t("d3b7"),t("8c4f")),E=function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",{staticClass:"home"},[t("Container")],1)},x=[],B=function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",{staticClass:"center"},[t("div",{staticClass:"card text-white bg-dark mb-3",staticStyle:{"max-width":"25rem"}},[t("div",{staticClass:"card-header bg-danger"},[o._v("Find your route")]),t("div",{staticClass:"card-body text-center"},[t("div",{staticClass:"row justify-content-center"},[t("Directions")],1)])]),t("Game")],1)},k=[],S=function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",[o.downloaded?t("div",{attrs:{id:o.containerId}}):t("div",{staticClass:"placeholder"},[o._v(" Downloading ... ")])])},$=[],D=(t("96cf"),t("1da1")),O={name:"Game",data:function(){return{downloaded:!1,gameInstance:null,containerId:"game-container"}},mounted:function(){var o=this;return Object(D["a"])(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.e("game").then(t.bind(null,"8fd0"));case 2:e=r.sent,o.downloaded=!0,o.$nextTick((function(){o.gameInstance=e.launch(o.containerId)}));case 5:case"end":return r.stop()}}),r)})))()},destroyed:function(){this.gameInstance.destroy(!1)},watch:{showFromLocation:function(){window.showFromLocation=this.showFromLocation},showToLocation:function(){window.showToLocation=this.showToLocation}},computed:{showFromLocation:function(){return this.$store.state.directions.from},showToLocation:function(){return this.$store.state.directions.to}}},I=O,P=(t("bc39"),Object(h["a"])(I,S,$,!1,null,"13fc6d09",null)),T=P.exports,j=function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",{attrs:{id:"directions"}},[t("div",[t("div",[t("label",[o._v("Start")]),t("b-form-select",{attrs:{type:"text",id:"From",options:o.options},on:{change:o.storeInput},model:{value:o.selectedFrom,callback:function(r){o.selectedFrom=r},expression:"selectedFrom"}})],1),t("label",[o._v("End")]),t("b-form-select",{attrs:{id:"To",name:"routeSelect",options:o.options},on:{change:o.storeInput},model:{value:o.selectedTo,callback:function(r){o.selectedTo=r},expression:"selectedTo"}})],1)])},R=[],F=(t("4160"),t("b64b"),t("159b"),{name:"modal",data:function(){return{selectedTo:null,selectedFrom:null,options:[],inputTo:""}},mounted:function(){var o=this,r=[{room:"101A",floor:1,coordinate1:120,coordinate2:300},{room:"101B",floor:1,coordinate1:170,coordinate2:300},{room:"101C",floor:1,coordinate1:220,coordinate2:300},{room:"101D",floor:null,coordinate1:225,coordinate2:330},{room:"101",floor:1,coordinate1:225,coordinate2:330},{room:"110A",floor:1,coordinate1:281,coordinate2:288},{room:"110B",floor:1,coordinate1:281,coordinate2:242},{room:"110C",floor:1,coordinate1:285,coordinate2:182},{room:"110D",floor:1,coordinate1:289,coordinate2:150},{room:"110E",floor:1,coordinate1:288,coordinate2:84},{room:"110F",floor:1,coordinate1:341,coordinate2:56},{room:"110G",floor:1,coordinate1:388,coordinate2:65},{room:"110H",floor:1,coordinate1:443,coordinate2:69},{room:"110J",floor:1,coordinate1:513,coordinate2:100},{room:"110K",floor:1,coordinate1:512,coordinate2:160},{room:"110M",floor:1,coordinate1:518,coordinate2:222},{room:"110N",floor:1,coordinate1:494,coordinate2:286},{room:"110P",floor:1,coordinate1:418,coordinate2:242},{room:"110Q",floor:1,coordinate1:418,coordinate2:174},{room:"110R",floor:1,coordinate1:369,coordinate2:174},{room:"110S",floor:1,coordinate1:369,coordinate2:245},{room:"110",floor:1,coordinate1:385,coordinate2:295},{room:"112",floor:1,coordinate1:481,coordinate2:330},{room:"114",floor:1,coordinate1:720,coordinate2:314},{room:"114.01",floor:1,coordinate1:674,coordinate2:324},{room:"114.02",floor:1,coordinate1:755,coordinate2:320},{room:"114A",floor:1,coordinate1:616,coordinate2:326},{room:"114B",floor:1,coordinate1:627,coordinate2:254},{room:"114C",floor:1,coordinate1:691,coordinate2:256},{room:"114D",floor:1,coordinate1:749,coordinate2:256},{room:"115",floor:1,coordinate1:805,coordinate2:322},{room:"115A",floor:1,coordinate1:804,coordinate2:262},{room:"116",floor:1,coordinate1:897,coordinate2:298},{room:"116A",floor:1,coordinate1:968,coordinate2:334},{room:"119",floor:1,coordinate1:1184,coordinate2:326},{room:"119A",floor:1,coordinate1:1085,coordinate2:320},{room:"119B",floor:1,coordinate1:1085,coordinate2:320},{room:"119C",floor:1,coordinate1:1196,coordinate2:268},{room:"120",floor:1,coordinate1:1285,coordinate2:330},{room:"120A",floor:1,coordinate1:1256,coordinate2:272},{room:"120B",floor:1,coordinate1:1309,coordinate2:262},{room:"120C",floor:1,coordinate1:1361,coordinate2:329},{room:"120CA",floor:1,coordinate1:1361,coordinate2:280},{room:"121",floor:1,coordinate1:1409,coordinate2:314},{room:"121A",floor:1,coordinate1:1409,coordinate2:252},{room:"122",floor:1,coordinate1:1590,coordinate2:317},{room:"123",floor:1,coordinate1:1520,coordinate2:280},{room:"124",floor:1,coordinate1:1577,coordinate2:282},{room:"127",floor:1,coordinate1:1645,coordinate2:163},{room:"128",floor:1,coordinate1:1717,coordinate2:247},{room:"129",floor:1,coordinate1:1767,coordinate2:245},{room:"130",floor:1,coordinate1:1870,coordinate2:315},{room:"131",floor:1,coordinate1:1708,coordinate2:298},{room:"137",floor:1,coordinate1:1742,coordinate2:498},{room:"137A",floor:1,coordinate1:1742,coordinate2:552},{room:"137B",floor:1,coordinate1:1729,coordinate2:440},{room:"137C",floor:1,coordinate1:1782,coordinate2:442},{room:"137D",floor:1,coordinate1:1885,coordinate2:468},{room:"137DA",floor:1,coordinate1:1817,coordinate2:435},{room:"137DB",floor:1,coordinate1:1888,coordinate2:420},{room:"140",floor:1,coordinate1:1607,coordinate2:491},{room:"140A",floor:1,coordinate1:1605,coordinate2:450},{room:"140B",floor:1,coordinate1:1610,coordinate2:550},{room:"143",floor:1,coordinate1:1525,coordinate2:460},{room:"144",floor:1,coordinate1:1420,coordinate2:444},{room:"144.01",floor:1,coordinate1:1384,coordinate2:449},{room:"144.02",floor:1,coordinate1:1350,coordinate2:449},{room:"144A",floor:1,coordinate1:1473,coordinate2:506},{room:"144B",floor:1,coordinate1:1401,coordinate2:504},{room:"144C",floor:1,coordinate1:1348,coordinate2:504},{room:"145",floor:1,coordinate1:1271,coordinate2:458},{room:"145A",floor:1,coordinate1:1299,coordinate2:500},{room:"145B",floor:1,coordinate1:1252,coordinate2:500},{room:"146",floor:1,coordinate1:1197,coordinate2:445},{room:"146B",floor:1,coordinate1:1197,coordinate2:497},{room:"146C",floor:1,coordinate1:1150,coordinate2:483},{room:"146D",floor:1,coordinate1:1125,coordinate2:435},{room:"147",floor:1,coordinate1:796,coordinate2:446},{room:"147.01",floor:1,coordinate1:796,coordinate2:514},{room:"147.02",floor:1,coordinate1:835,coordinate2:445},{room:"147.03",floor:1,coordinate1:875,coordinate2:445},{room:"147.04",floor:1,coordinate1:912,coordinate2:445},{room:"147A",floor:1,coordinate1:852,coordinate2:510},{room:"147B",floor:1,coordinate1:901,coordinate2:504},{room:"149",floor:1,coordinate1:694,coordinate2:450},{room:"149.01",floor:1,coordinate1:749,coordinate2:454},{room:"149.02",floor:1,coordinate1:636,coordinate2:454},{room:"149A",floor:1,coordinate1:744,coordinate2:510},{room:"149B",floor:1,coordinate1:669,coordinate2:504},{room:"149C",floor:1,coordinate1:617,coordinate2:504},{room:"149D",floor:1,coordinate1:568,coordinate2:504},{room:"150",floor:1,coordinate1:507,coordinate2:438},{room:"151",floor:1,coordinate1:438,coordinate2:470},{room:"151A",floor:1,coordinate1:425,coordinate2:535},{room:"151Z",floor:1,coordinate1:404,coordinate2:465},{room:"155",floor:1,coordinate1:250,coordinate2:450},{room:"155A",floor:1,coordinate1:300,coordinate2:530},{room:"155B",floor:1,coordinate1:130,coordinate2:470},{room:"155BA",floor:1,coordinate1:225,coordinate2:420},{room:"155BB",floor:1,coordinate1:130,coordinate2:420},{room:"197A",floor:1,coordinate1:521,coordinate2:330},{room:"197B",floor:1,coordinate1:1510,coordinate2:330},{room:"198A",floor:1,coordinate1:130,coordinate2:374},{room:"198B",floor:1,coordinate1:569,coordinate2:344},{room:"198C",floor:1,coordinate1:1469,coordinate2:336},{room:"198D",floor:1,coordinate1:1792,coordinate2:383},{room:"198E",floor:1,coordinate1:1082,coordinate2:432},{room:"198F",floor:1,coordinate1:953,coordinate2:440},{room:"199",floor:1,coordinate1:357,coordinate2:388},{room:"201",floor:2,coordinate1:165,coordinate2:1052},{room:"201A",floor:2,coordinate1:64,coordinate2:1027},{room:"201B",floor:2,coordinate1:105,coordinate2:1166},{room:"201C",floor:2,coordinate1:170,coordinate2:1150},{room:"203",floor:2,coordinate1:248,coordinate2:1440},{room:"205",floor:2,coordinate1:262,coordinate2:929},{room:"205A",floor:2,coordinate1:250,coordinate2:1034},{room:"206",floor:2,coordinate1:384,coordinate2:1296},{room:"206A",floor:2,coordinate1:497,coordinate2:1275},{room:"206B",floor:2,coordinate1:500,coordinate2:1241},{room:"206C",floor:2,coordinate1:435,coordinate2:1224},{room:"206D",floor:2,coordinate1:370,coordinate2:1229},{room:"207",floor:2,coordinate1:490,coordinate2:1382},{room:"208",floor:2,coordinate1:459,coordinate2:1455},{room:"208A",floor:2,coordinate1:407,coordinate2:1509},{room:"209",floor:2,coordinate1:460,coordinate2:1515},{room:"210",floor:2,coordinate1:630,coordinate2:1496},{room:"211",floor:2,coordinate1:740,coordinate2:1487},{room:"212",floor:2,coordinate1:885,coordinate2:1487},{room:"214",floor:2,coordinate1:1070,coordinate2:1511},{room:"214A",floor:2,coordinate1:1008,coordinate2:1510},{room:"214B",floor:2,coordinate1:1e3,coordinate2:1466},{room:"214C",floor:2,coordinate1:1047,coordinate2:1452},{room:"214D",floor:2,coordinate1:1104,coordinate2:1454},{room:"219",floor:2,coordinate1:1154,coordinate2:1490},{room:"220",floor:2,coordinate1:1307,coordinate2:1485},{room:"221",floor:2,coordinate1:1445,coordinate2:1477},{room:"222",floor:2,coordinate1:1535,coordinate2:1475},{room:"223",floor:2,coordinate1:1715,coordinate2:1507},{room:"224",floor:2,coordinate1:1704,coordinate2:1456},{room:"225",floor:2,coordinate1:1732,coordinate2:1249},{room:"225A",floor:2,coordinate1:1682,coordinate2:1410},{room:"225B",floor:2,coordinate1:1675,coordinate2:1357},{room:"225C",floor:2,coordinate1:1667,coordinate2:1305},{room:"225D",floor:2,coordinate1:1665,coordinate2:1249},{room:"225E",floor:2,coordinate1:1665,coordinate2:1205},{room:"227",floor:2,coordinate1:1782,coordinate2:1270},{room:"229",floor:2,coordinate1:1832,coordinate2:1266},{room:"229A",floor:2,coordinate1:1790,coordinate2:1227},{room:"229B",floor:2,coordinate1:1868,coordinate2:1202},{room:"229C",floor:2,coordinate1:1864,coordinate2:1267},{room:"229D",floor:2,coordinate1:1864,coordinate2:1307},{room:"229E",floor:2,coordinate1:1820,coordinate2:1319},{room:"240",floor:2,coordinate1:1880,coordinate2:1360},{room:"241",floor:2,coordinate1:1828,coordinate2:1416},{room:"241A ",floor:2,coordinate1:1825,coordinate2:1489},{room:"244",floor:2,coordinate1:1904,coordinate2:1464},{room:"245",floor:2,coordinate1:1970,coordinate2:1298},{room:"245A",floor:2,coordinate1:1970,coordinate2:1245},{room:"245B",floor:2,coordinate1:2030,coordinate2:1247},{room:"245C",floor:2,coordinate1:2090,coordinate2:1252},{room:"248",floor:2,coordinate1:1902,coordinate2:1664},{room:"248A",floor:2,coordinate1:2084,coordinate2:1436},{room:"249A",floor:2,coordinate1:1865,coordinate2:1518},{room:"249B",floor:2,coordinate1:1912,coordinate2:1515},{room:"249C",floor:2,coordinate1:1870,coordinate2:1434},{room:"250",floor:2,coordinate1:1760,coordinate2:1688},{room:"251",floor:2,coordinate1:1658,coordinate2:1437},{room:"252",floor:2,coordinate1:1544,coordinate2:1461},{room:"253",floor:2,coordinate1:1415,coordinate2:1448},{room:"254",floor:2,coordinate1:1256,coordinate2:1672},{room:"255",floor:2,coordinate1:896,coordinate2:1452},{room:"256",floor:2,coordinate1:758,coordinate2:1449},{room:"257",floor:2,coordinate1:599,coordinate2:1458},{room:"258",floor:2,coordinate1:494,coordinate2:1424},{room:"259",floor:2,coordinate1:302,coordinate2:1648},{room:"259A",floor:2,coordinate1:425,coordinate2:1472},{room:"259B",floor:2,coordinate1:364,coordinate2:1506},{room:"259C",floor:2,coordinate1:320,coordinate2:1513},{room:"259D",floor:2,coordinate1:269,coordinate2:1428},{room:"259E",floor:2,coordinate1:279,coordinate2:1508},{room:"260",floor:2,coordinate1:225,coordinate2:1440},{room:"260A",floor:2,coordinate1:218,coordinate2:1530},{room:"261",floor:2,coordinate1:113,coordinate2:1404},{room:"261A",floor:2,coordinate1:164,coordinate2:1469},{room:"261B",floor:2,coordinate1:122,coordinate2:1461},{room:"261C",floor:2,coordinate1:68,coordinate2:1464},{room:"297A",floor:2,coordinate1:508,coordinate2:1512},{room:"297B",floor:2,coordinate1:1642,coordinate2:1512},{room:"298A",floor:2,coordinate1:144,coordinate2:1568},{room:"298B",floor:2,coordinate1:552,coordinate2:1512},{room:"298C",floor:2,coordinate1:1592,coordinate2:1507},{room:"298D",floor:2,coordinate1:2006,coordinate2:1339},{room:"298E",floor:2,coordinate1:1148,coordinate2:1458},{room:"298F",floor:2,coordinate1:1010,coordinate2:1458},{room:"298G",floor:2,coordinate1:1059,coordinate2:1458},{room:"299",floor:2,coordinate1:1077,coordinate2:1344},{room:"301",floor:3,coordinate1:178,coordinate2:2633},{room:"301A",floor:3,coordinate1:74,coordinate2:2590},{room:"301B",floor:3,coordinate1:129,coordinate2:2586},{room:"301C",floor:3,coordinate1:183,coordinate2:2583},{room:"302",floor:3,coordinate1:320,coordinate2:2600},{room:"303",floor:3,coordinate1:455,coordinate2:2572},{room:"304",floor:3,coordinate1:465,coordinate2:2617},{room:"310",floor:3,coordinate1:743,coordinate2:2622},{room:"310A",floor:3,coordinate1:663,coordinate2:2631},{room:"310B",floor:3,coordinate1:635,coordinate2:2566},{room:"310C",floor:3,coordinate1:695,coordinate2:2560},{room:"310D",floor:3,coordinate1:758,coordinate2:2556},{room:"310E",floor:3,coordinate1:827,coordinate2:2567},{room:"310F",floor:3,coordinate1:796,coordinate2:2633},{room:"310G",floor:3,coordinate1:833,coordinate2:2628},{room:"315",floor:3,coordinate1:1288,coordinate2:2576},{room:"320",floor:3,coordinate1:1076,coordinate2:2622},{room:"320A",floor:3,coordinate1:1025,coordinate2:2627},{room:"320B",floor:3,coordinate1:1004,coordinate2:2588},{room:"320C",floor:3,coordinate1:1052,coordinate2:2548},{room:"320D",floor:3,coordinate1:1103,coordinate2:2562},{room:"320E",floor:3,coordinate1:1156,coordinate2:2561},{room:"320F",floor:3,coordinate1:1166,coordinate2:2624},{room:"322",floor:3,coordinate1:1208,coordinate2:2591},{room:"323",floor:3,coordinate1:1301,coordinate2:2600},{room:"324",floor:3,coordinate1:1427,coordinate2:2610},{room:"325",floor:3,coordinate1:1532,coordinate2:2594},{room:"329",floor:3,coordinate1:1702,coordinate2:2630},{room:"330",floor:3,coordinate1:1768,coordinate2:2600},{room:"331",floor:3,coordinate1:1835,coordinate2:2600},{room:"333",floor:3,coordinate1:1906,coordinate2:2614},{room:"335",floor:3,coordinate1:2020,coordinate2:2639},{room:"335A",floor:3,coordinate1:1976,coordinate2:2576},{room:"335B",floor:3,coordinate1:2036,coordinate2:2587},{room:"335C",floor:3,coordinate1:2096,coordinate2:2606},{room:"340",floor:3,coordinate1:2008,coordinate2:2744},{room:"340A",floor:3,coordinate1:2093,coordinate2:2784},{room:"340B",floor:3,coordinate1:2032,coordinate2:2784},{room:"340C",floor:3,coordinate1:1934,coordinate2:2738},{room:"350",floor:3,coordinate1:1760,coordinate2:2800},{room:"350A",floor:3,coordinate1:1772,coordinate2:2754},{room:"350B",floor:3,coordinate1:1829,coordinate2:2758},{room:"350C",floor:3,coordinate1:1893,coordinate2:2762},{room:"350E",floor:3,coordinate1:1976,coordinate2:2789},{room:"350F",floor:3,coordinate1:1931,coordinate2:2868},{room:"350G",floor:3,coordinate1:1871,coordinate2:2862},{room:"350H",floor:3,coordinate1:1821,coordinate2:2870},{room:"350I",floor:3,coordinate1:1745,coordinate2:2873},{room:"351",floor:3,coordinate1:1664,coordinate2:1768},{room:"351B ",floor:3,coordinate1:1589,coordinate2:2808},{room:"353",floor:3,coordinate1:1382,coordinate2:2752},{room:"353A",floor:3,coordinate1:1397,coordinate2:2826},{room:"353B",floor:3,coordinate1:1455,coordinate2:2834},{room:"353C",floor:3,coordinate1:1522,coordinate2:2826},{room:"353D",floor:3,coordinate1:1469,coordinate2:2751},{room:"354",floor:3,coordinate1:1268,coordinate2:2786},{room:"355",floor:3,coordinate1:1142,coordinate2:2786},{room:"357",floor:3,coordinate1:1001,coordinate2:2784},{room:"358",floor:3,coordinate1:904,coordinate2:2784},{room:"360",floor:3,coordinate1:680,coordinate2:2749},{room:"360A",floor:3,coordinate1:754,coordinate2:2738},{room:"360B",floor:3,coordinate1:827,coordinate2:2822},{room:"360C",floor:3,coordinate1:758,coordinate2:2818},{room:"360D",floor:3,coordinate1:698,coordinate2:2820},{room:"360E",floor:3,coordinate1:638,coordinate2:2818},{room:"360F",floor:3,coordinate1:569,coordinate2:2816},{room:"360G",floor:3,coordinate1:785,coordinate2:2744},{room:"367",floor:3,coordinate1:506,coordinate2:2770},{room:"368",floor:3,coordinate1:384,coordinate2:2824},{room:"368A ",floor:3,coordinate1:418,coordinate2:2734},{room:"369",floor:3,coordinate1:256,coordinate2:2760},{room:"369A",floor:3,coordinate1:293,coordinate2:2848},{room:"369B",floor:3,coordinate1:230,coordinate2:2848},{room:"370",floor:3,coordinate1:119,coordinate2:2734},{room:"370A",floor:3,coordinate1:68,coordinate2:2786},{room:"370B",floor:3,coordinate1:122,coordinate2:2786},{room:"370C",floor:3,coordinate1:176,coordinate2:2784},{room:"397A",floor:3,coordinate1:514,coordinate2:2630},{room:"397B",floor:3,coordinate1:1644,coordinate2:2630},{room:"398A",floor:3,coordinate1:155,coordinate2:2680},{room:"398B",floor:3,coordinate1:569,coordinate2:2627},{room:"398C",floor:3,coordinate1:1594,coordinate2:2624},{room:"398D",floor:3,coordinate1:2e3,coordinate2:2692},{room:"399",floor:3,coordinate1:1049,coordinate2:2685}],t=Object.keys(r).sort((function(o,t){return o=r[o].room.substring(0,r[o].room.length),t=r[t].room.substring(0,r[t].room.length),o<t?-1:o>t?1:0}));t.forEach((function(t){o.options.push({value:[r[t].floor,r[t].coordinate1,r[t].coordinate2],text:"Room ".concat(r[t].room)})}))},methods:{displaySearch:function(o){var r=document.getElementById("search-box");r.style.visibility="visible";document.createElement("div")},storeInput:function(o){var r=document.getElementById("To").value,t=document.getElementById("From").value;this.$store.commit("SET_DIRECTIONS",{from:t,to:r})}}}),G=F,L=Object(h["a"])(G,j,R,!1,null,null,null),N=L.exports,M={name:"Map",components:{Game:T,Directions:N}},U=M,q=(t("82bb"),Object(h["a"])(U,B,k,!1,null,"398fd81f",null)),H=q.exports,W={name:"App",components:{Container:H}},J=W,Y=Object(h["a"])(J,E,x,!1,null,null,null),K=Y.exports,V=function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("Signin")},z=[],Z=function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",[t("link",{attrs:{rel:"stylesheet",href:"https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"}}),t("div",{staticClass:"login-form"},[o.error?t("div",{staticClass:"alert alert-danger"},[o._v(o._s(o.error))]):o._e(),t("form",{attrs:{action:"#"},on:{submit:function(r){return r.preventDefault(),o.submit(r)}}},[t("h2",{staticClass:"text-center"},[o._v("Sign in")]),t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[o._m(0),t("input",{directives:[{name:"model",rawName:"v-model",value:o.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{id:"email",type:"email",name:"email",placeholder:"Email",value:"",required:"",autofocus:""},domProps:{value:o.form.email},on:{input:function(r){r.target.composing||o.$set(o.form,"email",r.target.value)}}})])]),t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[o._m(1),t("input",{directives:[{name:"model",rawName:"v-model",value:o.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{id:"password",type:"password",name:"password",placeholder:"Password",required:""},domProps:{value:o.form.password},on:{input:function(r){r.target.composing||o.$set(o.form,"password",r.target.value)}}})])]),o._m(2),o._m(3),o._m(4),t("div",{staticClass:"text-center social-btn"},[t("button",{staticClass:"btn btn-danger btn-block",on:{click:o.submitGoogle}},[t("i",{staticClass:"fab fa-google"}),o._v(" Sign in with "),t("b",[o._v("Google")])])])]),o._m(5)])])},Q=[function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text"},[t("span",{staticClass:"fa fa-user"})])])},function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text"},[t("i",{staticClass:"fa fa-lock"})])])},function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",{staticClass:"form-group"},[t("button",{staticClass:"btn btn-dark btn-block login-btn",attrs:{type:"submit"}},[o._v("Sign in")])])},function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",{staticClass:"clearfix"},[t("label",{staticClass:"float-left form-check-label"},[t("input",{attrs:{type:"checkbox"}}),o._v(" Remember me")]),t("a",{staticClass:"float-right text-dark",attrs:{href:"Forgotpw"}},[o._v("Forgot Password?")])])},function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",{staticClass:"or-seperator"},[t("i",[o._v("or")])])},function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",{staticClass:"hint-text"},[o._v("Don't have an account? "),t("a",{staticClass:"text-dark",attrs:{href:"Register"}},[o._v("Register now!")])])}],X=(t("b0c0"),{data:function(){return{form:{email:"",password:""},error:null}},methods:{submit:function(){var o=this;u.a.auth().signInWithEmailAndPassword(this.form.email,this.form.password).then((function(r){o.$router.replace({name:"profile"})})).catch((function(r){o.error=r.message}))},submitGoogle:function(){var o=new u.a.auth.GoogleAuthProvider;u.a.auth().signInWithPopup(o).then((function(o){o.credential.accessToken,o.user;window.location.href="profile"})).catch((function(o){o.code,o.message,o.email,o.credential}))},submitFacebook:function(){var o=new u.a.auth.FacebookAuthProvider;u.a.auth().signInWithPopup(o).then((function(o){o.credential.accessToken,o.user;window.location.href="profile"})).catch((function(o){o.code,o.message,o.email,o.credential}))}},passwordReset:function(){var o=u.a.auth(),r="user@example.com";o.sendPasswordResetEmail(r).then((function(){})).catch((function(o){}))},mounted:function(){this.$store.state.user.loggedIn&&"Signin"==this.$route.name&&this.$router.push({name:"Profile"})}}),oo=X,ro=(t("e583"),Object(h["a"])(oo,Z,Q,!1,null,"47ce3448",null)),to=ro.exports,eo={name:"App",components:{Signin:to}},no=eo,ao=Object(h["a"])(no,V,z,!1,null,null,null),io=ao.exports,co=function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("Register")},so=[],lo=function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",[t("link",{attrs:{rel:"stylesheet",href:"https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"}}),t("div",{staticClass:"login-form"},[o.error?t("div",{staticClass:"alert alert-danger"},[o._v(o._s(o.error))]):o._e(),t("form",{attrs:{action:"#"},on:{submit:function(r){return r.preventDefault(),o.submit(r)}}},[t("h2",{staticClass:"text-center"},[o._v("Register")]),t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[o._m(0),t("input",{directives:[{name:"model",rawName:"v-model",value:o.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{id:"email",type:"email",name:"email",placeholder:"Email",value:"",required:"",autofocus:""},domProps:{value:o.form.email},on:{input:function(r){r.target.composing||o.$set(o.form,"email",r.target.value)}}})])]),t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[o._m(1),t("input",{directives:[{name:"model",rawName:"v-model",value:o.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{id:"password",type:"password",name:"password",placeholder:"Password",required:""},domProps:{value:o.form.password},on:{input:function(r){r.target.composing||o.$set(o.form,"password",r.target.value)}}})])]),o._m(2),o._m(3),t("div",{staticClass:"text-center social-btn"},[t("button",{staticClass:"btn btn-danger btn-block",on:{click:o.submitGoogle}},[t("i",{staticClass:"fab fa-google"}),o._v(" Sign in with "),t("b",[o._v("Google")])])])]),o._m(4)])])},mo=[function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text"},[t("span",{staticClass:"fa fa-user"})])])},function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text"},[t("i",{staticClass:"fa fa-lock"})])])},function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",{staticClass:"form-group"},[t("button",{staticClass:"btn btn-dark btn-block login-btn",attrs:{type:"submit"}},[o._v("Register")])])},function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",{staticClass:"or-seperator"},[t("i",[o._v("or")])])},function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",{staticClass:"hint-text"},[o._v("Already have an account? "),t("a",{staticClass:"text-dark",attrs:{href:"Signin"}},[o._v("Sign in now!")])])}],fo={data:function(){return{form:{name:"",email:"",password:""},error:null}},methods:{submit:function(){var o=this;u.a.auth().createUserWithEmailAndPassword(this.form.email,this.form.password).then((function(r){r.user.updateProfile({displayName:o.form.name}).then((function(){})),window.location.href="/"})).catch((function(r){o.error=r.message}))},submitGoogle:function(){var o=new u.a.auth.GoogleAuthProvider;u.a.auth().signInWithPopup(o).then((function(o){o.credential.accessToken,o.user;window.location.href="/"})).catch((function(o){o.code,o.message,o.email,o.credential}))}}},uo=fo,po=(t("795b"),Object(h["a"])(uo,lo,mo,!1,null,"c0aeedc8",null)),vo=po.exports,ho={name:"App",components:{Register:vo}},go=ho,bo=Object(h["a"])(go,co,so,!1,null,null,null),Co=bo.exports,_o=function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",{staticClass:"profilecontainer"},[t("Container")],1)},wo=[],Ao={name:"App",components:{Container:H}},yo=Ao,Eo=Object(h["a"])(yo,_o,wo,!1,null,"50feb29e",null),xo=Eo.exports,Bo=function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("Forgotpw")},ko=[],So=function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",[t("link",{attrs:{rel:"stylesheet",href:"https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"}}),t("div",{staticClass:"login-form"},[o.error?t("div",{staticClass:"alert alert-danger"},[o._v(o._s(o.error))]):o._e(),t("form",{attrs:{action:"#"},on:{submit:function(r){return r.preventDefault(),o.passwordReset(r)}}},[t("h2",{staticClass:"text-center"},[o._v("Password Reset")]),t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[o._m(0),t("input",{directives:[{name:"model",rawName:"v-model",value:o.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{id:"email",type:"email",name:"email",placeholder:"Email",value:"",required:"",autofocus:""},domProps:{value:o.user.email},on:{input:function(r){r.target.composing||o.$set(o.user,"email",r.target.value)}}})])]),o._m(1)]),o._m(2)])])},$o=[function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text"},[t("span",{staticClass:"fa fa-user"})])])},function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",{staticClass:"form-group"},[t("button",{staticClass:"btn btn-dark btn-block login-btn",attrs:{type:"submit"}},[o._v("Reset")])])},function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",{staticClass:"hint-text"},[o._v("Don't have an account? "),t("a",{staticClass:"text-dark",attrs:{href:"Register"}},[o._v("Register Now!")])])}],Do={data:function(){return{user:{email:""}}},methods:{passwordReset:function(){var o=this;u.a.auth().sendPasswordResetEmail(this.user.email).then((function(){alert("Please check your registered email to reset the password"),o.user={email:""}})).catch((function(o){alert(o)}))}}},Oo=Do,Io=(t("c441"),Object(h["a"])(Oo,So,$o,!1,null,"279d2c10",null)),Po=Io.exports,To={name:"App",components:{Forgotpw:Po}},jo=To,Ro=Object(h["a"])(jo,Bo,ko,!1,null,null,null),Fo=Ro.exports;e["default"].use(y["a"]);var Go=[{path:"/",name:"Home",component:K},{path:"/signin",name:"Signin",component:io},{path:"/register",name:"Register",component:Co},{path:"/profile",name:"profile",component:xo},{path:"/forgotpw",name:"Forgotpw",component:Fo},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}}],Lo=new y["a"]({mode:"history",base:"/",routes:Go}),No=Lo;t("4989"),t("ab8b");e["default"].use(m["a"]);var Mo=new m["a"].Store({state:{user:{loggedIn:!1,data:null},directions:{from:"",to:""}},getters:{user:function(o){return o.user}},mutations:{SET_LOGGED_IN:function(o,r){o.user.loggedIn=r},SET_USER:function(o,r){o.user.data=r},SET_DIRECTIONS:function(o,r){o.directions.from=r.from,o.directions.to=r.to}},actions:{fetchUser:function(o,r){var t=o.commit;t("SET_LOGGED_IN",null!==r),t("SET_USER",r?{displayName:r.displayName,email:r.email}:null)}}}),Uo={apiKey:"AIzaSyDhCv3DGIY4Rx_Cg_tJg1T0xL4ewOBb-aU",authDomain:"mcmapping-e2548.firebaseapp.com",databaseURL:"https://mcmapping-e2548.firebaseio.com",projectId:"mcmapping-e2548",storageBucket:"mcmapping-e2548.appspot.com",messagingSenderId:"1062665093950",appId:"1:1062665093950:web:2ea4c9d6df0c3c86f8a26f",measurementId:"G-2T9D31CF99"};u.a.initializeApp(Uo),u.a.auth().onAuthStateChanged((function(o){Mo.dispatch("fetchUser",o)})),e["default"].config.productionTip=!1,e["default"].use(n["a"]),e["default"].use(a["a"]),new e["default"]({router:No,store:Mo,render:function(o){return o(A)},el:"#app",mounted:function(){this.$root.$on("bv::collapse::state",(function(o,r){0==r&&console.log("navbar false:",r),1==r&&console.log("navbar true:",r)}))}})},"795b":function(o,r,t){"use strict";var e=t("e53a"),n=t.n(e);n.a},"82bb":function(o,r,t){"use strict";var e=t("d0d9"),n=t.n(e);n.a},a37f:function(o,r,t){},bc39:function(o,r,t){"use strict";var e=t("5385"),n=t.n(e);n.a},bdca:function(o,r,t){},c12c:function(o,r,t){o.exports=t.p+"img/McMappingLogo.d357b99a.png"},c441:function(o,r,t){"use strict";var e=t("eeac"),n=t.n(e);n.a},d0d9:function(o,r,t){},e53a:function(o,r,t){},e583:function(o,r,t){"use strict";var e=t("3951"),n=t.n(e);n.a},eeac:function(o,r,t){},ff98:function(o,r,t){"use strict";var e=t("bdca"),n=t.n(e);n.a}});
//# sourceMappingURL=app-legacy.faa97d0b.js.map