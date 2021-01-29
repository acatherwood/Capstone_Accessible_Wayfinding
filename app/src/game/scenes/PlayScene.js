import { Scene } from 'phaser'
import EasyStar from 'easystarjs'

var Game = {};
var canWalk = -1;
var TilePixelCount = 16;
var scalerSize = 0.15;
var bathroomCoords = [[225, 420], [1125, 435] , [1520,280]]
export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene' })
  }

  preload () {
    Game.scene = this; // Handy reference to the scene (alternative to `this` binding)

  }
  

  create = function(){
    var elevatorIcon = this.add.image(520,328, 'elevator').setScale(1.5);
    elevatorIcon.setDepth(1);
    
    var elevatorIconTwo = this.add.image(1512,328,'elevator').setScale(1.5);
    elevatorIconTwo.setDepth(1);

    //load restroom icon one, two, three, four and five
    var restroom1 =this.add.image(224,420,'restroom').setScale(1);
    restroom1.setDepth(1);

    var restroom2=this.add.image(1128,436,'restroom').setScale(1);
    restroom2.setDepth(1);

    var restroom3=this.add.image(1520,280,'restroom').setScale(1);


    restroom3.setDepth(1);
    var demosWindow = this.add.image(0, 0, 'btnWindow').setOrigin(0).setScale(.6);
    var floor0icon = this.add.sprite(50, 340, 'moveBTN', 0).setOrigin(0).setInteractive().setScale(.2).setScrollFactor(0);
    var floor3icon = this.add.sprite(15, 30, 'floor3icon', 0).setOrigin(0).setInteractive().setScale(0.05).setScrollFactor(0);
    var floor2icon = this.add.sprite(15, 90, 'floor2icon', 0).setOrigin(0).setInteractive().setScale(0.05).setScrollFactor(0);
    var floorGicon = this.add.sprite(15, 210, 'floor2icon', 0).setOrigin(0).setInteractive().setScale(0.05).setScrollFactor(0);
    var johnRouteIcon = this.add.sprite(40, 280, 'restroomBTN', 0).setOrigin(0).setInteractive().setScale(0.15).setScrollFactor(0);
    var floor1icon = this.add.sprite(15, 150, 'floor1icon', 0).setOrigin(0).setInteractive().setScale(0.05).setScrollFactor(0);
    var demosContainer = this.add.container(0, 0, [ demosWindow, floor0icon, floor1icon, floor2icon, floor3icon, floorGicon, johnRouteIcon]);
    demosContainer.setInteractive(new Phaser.Geom.Rectangle(0, 0, demosWindow.width, demosWindow.height), Phaser.Geom.Rectangle.Contains);
    
    this.input.setDraggable(demosContainer);

    demosContainer.on('drag', function (pointer, dragX, dragY) {
        this.x = dragX;
        this.y = dragY;

      });

    floor3icon.on('pointerdown', function () {
        phaserGuy.setPosition(133*8, 337*8);

    });
      
    floor2icon.on('pointerdown', function () {
        phaserGuy.setPosition(141*8, 196*8);


    });

    floor1icon.on('pointerdown', function () {
        phaserGuy.setPosition(127*8, 47*8);


    });

    floorGicon.on('pointerdown', function () {
        phaserGuy.setPosition(141*8, 196*8);


    });

    floor0icon.on('pointerdown', function () {
       canWalk *= -1;

    });

    johnRouteIcon.on('pointerdown', this.routeToRestroom );
    demosContainer.setDepth(1);
    demosContainer.setScrollFactor(0);
    
    var getRouteBTN = this.add.sprite(screen.width/2, scalerSize, 'restroomBTN', 0).setOrigin(0).setInteractive().setScale(scalerSize).setScrollFactor(0);
    getRouteBTN.on('pointerdown', this.routeToRestroom );
    getRouteBTN.setDepth(1);
    getRouteBTN.setScrollFactor(0);
/*
this.add.image( 120, 300,'dude').setScale(0.5).setDepth(1);
this.add.image(160, 288,'dude').setScale(0.5).setDepth(1);//
this.add.image(220, 300 ,'dude').setScale(0.5).setDepth(1);
this.add.image(240, 336 ,'dude').setScale(0.5).setDepth(1);//
this.add.image( 223,330,'dude').setScale(0.5).setDepth(1);
this.add.image( 270, 288 ,'dude').setScale(0.5).setDepth(1);
this.add.image( 270,  242 ,'dude').setScale(0.5).setDepth(1);
this.add.image(280,  182 ,'dude').setScale(0.5).setDepth(1);
this.add.image( 288,  144 ,'dude').setScale(0.5).setDepth(1);//
this.add.image( 288,  84 ,'dude').setScale(0.5).setDepth(1);


clear
this.add.image(341,  56 ,'dude').setScale(0.5).setDepth(1);
                                                this.add.image(388,  65 ,'dude').setScale(0.5).setDepth(1);
                                                    this.add.image(442,  48 ,'dude').setScale(0.5).setDepth(1);///
                                                        this.add.image( 513,  100,'dude').setScale(0.5).setDepth(1);
                                                            this.add.image( 512,160 ,'dude').setScale(0.5).setDepth(1);
                                                                this.add.image( 518,  222 ,'dude').setScale(0.5).setDepth(1);
                                                                    this.add.image( 494,  286 ,'dude').setScale(0.5).setDepth(1);
                                                                    this.add.image(  418,  242 ,'dude').setScale(0.5).setDepth(1);
                                                                    this.add.image(  418,  174 ,'dude').setScale(0.5).setDepth(1);
                                                                    this.add.image(  369,  174 ,'dude').setScale(0.5).setDepth(1);
                                                                    this.add.image(  369,  245 ,'dude').setScale(0.5).setDepth(1);
                                                                    this.add.image(  385,  295 ,'dude').setScale(0.5).setDepth(1);
                                                                    this.add.image(  480,  320 ,'dude').setScale(0.5).setDepth(1);//
                                                                    this.add.image( 720,  314 ,'dude').setScale(0.5).setDepth(1);
                                                                    this.add.image( 674,  324 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  735,  320 ,'dude').setScale(0.5).setDepth(1);///
clear


this.add.image(  616,  326 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  627,  254 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  691,  256 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  736,  256 ,'dude').setScale(0.5).setDepth(1);/////
this.add.image(  805,  322 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  804,  262 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  897,  298 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  960,  320 ,'dude').setScale(0.5).setDepth(1);////
this.add.image(  1184,  326 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1085,  320 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1085,  320 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1184,  240 ,'dude').setScale(0.5).setDepth(1);/////
this.add.image(  1285,  330 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1232,  256 ,'dude').setScale(0.5).setDepth(1);////
this.add.image(  1280,  256 ,'dude').setScale(0.5).setDepth(1);////
this.add.image(  1360,  320 ,'dude').setScale(0.5).setDepth(1);////
this.add.image(  1361,  280 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1409,  314 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1409,  252 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1590,  317 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1520,  272 ,'dude').setScale(0.5).setDepth(1);///
this.add.image(  1536,  224 ,'dude').setScale(0.5).setDepth(1);/////
clear */
this.add.image(  1645,  163 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1717,  247 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1767,  245 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1870,  315 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1708,  298 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1742,  498 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1742,  552 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1729,  440 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1782,  442 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1885,  468 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1817,  435 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1888,  420 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1607,  491 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1605,  450 ,'dude').setScale(0.5).setDepth(1);
 this.add.image(  1610,  550 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1420,  444 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1384,  449 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1350,  449 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1473,  506 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1401,  504 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1348,  504 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1271,  458 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1299,  500 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1252,  500 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1197,  445 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1197,  497 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1150,  483 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  1125,  435 ,'dude').setScale(0.5).setDepth(1);
this.add.image(  796,  446 ,'dude').setScale(0.5);
this.add.image(  796,  514 ,'dude').setScale(0.5);
this.add.image(  835,  445 ,'dude').setScale(0.5);
this.add.image(  875,  445 ,'dude').setScale(0.5);
this.add.image(  912,  445 ,'dude').setScale(0.5);
this.add.image(  852,  510 ,'dude').setScale(0.5);
this.add.image(  901,  504 ,'dude').setScale(0.5);
this.add.image(  694,  450 ,'dude').setScale(0.5);
this.add.image(  749,  454 ,'dude').setScale(0.5);
this.add.image(  636,  454 ,'dude').setScale(0.5);
this.add.image(  744,  510 ,'dude').setScale(0.5);
/*
    { room: "149B", floor: 1, this.add.image(  669,  504 ,'dude').setScale(0.5);
    { room: "149C", floor: 1, this.add.image(  617,  504 ,'dude').setScale(0.5);
    { room: "149D", floor: 1, this.add.image(  568,  504 ,'dude').setScale(0.5);
    { room: "150", floor: 1, this.add.image(  507,  438 ,'dude').setScale(0.5);
    { room: "151", floor: 1, this.add.image(  438,  470 ,'dude').setScale(0.5);
    { room: "151A", floor: 1, this.add.image(  425,  535 ,'dude').setScale(0.5);
    { room: "151Z", floor: 1, this.add.image(  404,  465 ,'dude').setScale(0.5);
    { room: "155", floor: 1, this.add.image(  250,  450 ,'dude').setScale(0.5);
    { room: "155A", floor: 1, this.add.image(  300,  530 ,'dude').setScale(0.5);
    { room: "155B", floor: 1, this.add.image(  130,  470 ,'dude').setScale(0.5);
    { room: "155BA", floor: 1, this.add.image(  225,  420 ,'dude').setScale(0.5);
    { room: "155BB", floor: 1, this.add.image(  130,  420 ,'dude').setScale(0.5);
    { room: "197A", floor: 1, this.add.image(  521,  330 ,'dude').setScale(0.5);
    { room: "197B", floor: 1, this.add.image(  1510,  330 ,'dude').setScale(0.5);
    { room: "198A", floor: 1, this.add.image(  130,  374 ,'dude').setScale(0.5);
    { room: "198B", floor: 1, this.add.image(  569,  344 ,'dude').setScale(0.5);
    { room: "198C", floor: 1, this.add.image(  1469,  336,'dude').setScale(0.5);
    { room: "198D", floor: 1, this.add.image(  1792,  383 ,'dude').setScale(0.5);
    { room: "198E", floor: 1, this.add.image(  1082,  432 ,'dude').setScale(0.5);
    { room: "198F", floor: 1, this.add.image(  953,  440 ,'dude').setScale(0.5);
    { room: "199", floor: 1, this.add.image(  357,  388 ,'dude').setScale(0.5);
    { room: "201", floor: 2, this.add.image(  165,  1052 ,'dude').setScale(0.5);
    { room: "201A", floor: 2, this.add.image(  64,  1027 ,'dude').setScale(0.5);
    { room: "201B", floor: 2, this.add.image(  105,  1166 ,'dude').setScale(0.5);
    { room: "201C", floor: 2, this.add.image(  170,  1150 ,'dude').setScale(0.5);
    { room: "203", floor: 2, this.add.image(  248,  1440 ,'dude').setScale(0.5);
    { room: "205", floor: 2, this.add.image(  262,  929 ,'dude').setScale(0.5);
    { room: "205A", floor: 2, this.add.image(  250,  1034 ,'dude').setScale(0.5);
    { room: "206", floor: 2, this.add.image(  384,  1296 ,'dude').setScale(0.5);
    { room: "206A", floor: 2, this.add.image(  497,  1275 ,'dude').setScale(0.5);
    { room: "206B", floor: 2, this.add.image(  500,  1241 ,'dude').setScale(0.5);
    { room: "206C", floor: 2, this.add.image(  435,  1224 ,'dude').setScale(0.5);
    { room: "206D", floor: 2, this.add.image(  370,  1229 ,'dude').setScale(0.5);
    { room: "207", floor: 2, this.add.image(  490,  1382 ,'dude').setScale(0.5);
    { room: "208", floor: 2, this.add.image(  459,  1455 ,'dude').setScale(0.5);
    { room: "208A", floor: 2, this.add.image(  407,  1509 ,'dude').setScale(0.5);
    { room: "209", floor: 2, this.add.image(  460,  1515 ,'dude').setScale(0.5);
    { room: "210", floor: 2, this.add.image(  630,  1496 ,'dude').setScale(0.5);
    { room: "211", floor: 2, this.add.image(  740,  1487 ,'dude').setScale(0.5);
    { room: "212", floor: 2, this.add.image(  885,  1487 ,'dude').setScale(0.5);
    { room: "214", floor: 2, this.add.image(  1070,  1511 },
    { room: "214A", floor: 2, this.add.image(  1008,  1510 },
    { room: "214B", floor: 2, this.add.image(  1000,  1466 },
    { room: "214C", floor: 2, this.add.image(  1047,  1452 },
    { room: "214D", floor: 2, this.add.image(  1104,  1454 },
    { room: "219", floor: 2, this.add.image(  1154,  1490 },
    { room: "220", floor: 2, this.add.image(  1307,  1485 },
    { room: "221", floor: 2, this.add.image(  1445,  1477 },
    { room: "222", floor: 2, this.add.image(  1535,  1475 },
    { room: "223", floor: 2, this.add.image(  1715,  1507 },
    { room: "224", floor: 2, this.add.image(  1704,  1456 },
    { room: "225", floor: 2, this.add.image(  1732,  1249 },
    { room: "225A", floor: 2, this.add.image(  1682,  1410 },
    { room: "225B", floor: 2, this.add.image(  1675,  1357 },
    { room: "225C", floor: 2, this.add.image(  1667,  1305 },
    { room: "225D", floor: 2, this.add.image(  1665,  1249 },
    { room: "225E", floor: 2, this.add.image(  1665,  1205 },
    { room: "227", floor: 2, this.add.image(  1782,  1270 },
    { room: "229", floor: 2, this.add.image(  1832,  1266 },
    { room: "229A", floor: 2, this.add.image(  1790,  1227 },
    { room: "229B", floor: 2, this.add.image(  1868,  1202 },
    { room: "229C", floor: 2, this.add.image(  1864,  1267 },
    { room: "229D", floor: 2, this.add.image(  1864,  1307 },
    { room: "229E", floor: 2, this.add.image(  1820,  1319 },
    { room: "240", floor: 2, this.add.image(  1880,  1360 },
    { room: "241", floor: 2, this.add.image(  1828,  1416 },
    { room: "241A ", floor: 2, this.add.image(  1825,  1489 },
    { room: "244", floor: 2, this.add.image(  1904,  1464 },
    { room: "245", floor: 2, this.add.image(  1970,  1298 },
    { room: "245A", floor: 2, this.add.image(  1970,  1245 },
    { room: "245B", floor: 2, this.add.image(  2030,  1247 },
    { room: "245C", floor: 2, this.add.image(  2090,  1252 },
    { room: "248", floor: 2, this.add.image(  1902,  1664 },
    { room: "248A", floor: 2, this.add.image(  2084,  1436 },
    { room: "249A", floor: 2, this.add.image(  1865,  1518 },
    { room: "249B", floor: 2, this.add.image(  1912,  1515 },
    { room: "249C", floor: 2, this.add.image(  1870,  1434 },
    { room: "250", floor: 2, this.add.image(  1760,  1688 },
    { room: "251", floor: 2, this.add.image(  1658,  1437 },
    { room: "252", floor: 2, this.add.image(  1544,  1461 },
    { room: "253", floor: 2, this.add.image(  1415,  1448 },
    { room: "254", floor: 2, this.add.image(  1256,  1672 },
    { room: "255", floor: 2, this.add.image(  896,  1452 },
    { room: "256", floor: 2, this.add.image(  758,  1449 },
    { room: "257", floor: 2, this.add.image(  599,  1458 },
    { room: "258", floor: 2, this.add.image(  494,  1424 },
    { room: "259", floor: 2, this.add.image(  302,  1648 },
    { room: "259A", floor: 2, this.add.image(  425,  1472 },
    { room: "259B", floor: 2, this.add.image(  364,  1506 },
    { room: "259C", floor: 2, this.add.image(  320,  1513 },
    { room: "259D", floor: 2, this.add.image(  269,  1428 },
    { room: "259E", floor: 2, this.add.image(  279,  1508 },
    { room: "260", floor: 2, this.add.image(  225,  1440 },
    { room: "260A", floor: 2, this.add.image(  218,  1530 },
    { room: "261", floor: 2, this.add.image(  113,  1404 },
    { room: "261A", floor: 2, this.add.image(  164,  1469 },
    { room: "261B", floor: 2, this.add.image(  122,  1461 },
    { room: "261C", floor: 2, this.add.image(  68,  1464 },
    { room: "297A", floor: 2, this.add.image(  508,  1512 },
    { room: "297B", floor: 2, this.add.image(  1642,  1512 },
    { room: "298A", floor: 2, this.add.image(  144,  1568 },
    { room: "298B", floor: 2, this.add.image(  552,  1512 },
    { room: "298C", floor: 2, this.add.image(  1592,  1507 },
    { room: "298D", floor: 2, this.add.image(  2006,  1339 },
    { room: "298E", floor: 2, this.add.image(  1148,  1458 },
    { room: "298F", floor: 2, this.add.image(  1010,  1458 },
    { room: "298G", floor: 2, this.add.image(  1059,  1458 },
    { room: "299", floor: 2, this.add.image(  1077,  1344 },
    { room: "301", floor: 3, this.add.image(  178,  2633 },
    { room: "301A", floor: 3, this.add.image(  74,  2590 },
    { room: "301B", floor: 3, this.add.image(  129,  2586 },
    { room: "301C", floor: 3, this.add.image(  183,  2583 },
    { room: "302", floor: 3, this.add.image(  320,  2600 },
    { room: "303", floor: 3, this.add.image(  455,  2572 },
    { room: "304", floor: 3, this.add.image(  465,  2617 },
    { room: "310", floor: 3, this.add.image(  743,  2622 },
    { room: "310A", floor: 3, this.add.image(  663,  2631 },
    { room: "310B", floor: 3, this.add.image(  635,  2566 },
    { room: "310C", floor: 3, this.add.image(  695,  2560 },
    { room: "310D", floor: 3, this.add.image(  758,  2556 },
    { room: "310E", floor: 3, this.add.image(  827,  2567 },
    { room: "310F", floor: 3, this.add.image(  796,  2633 },
    { room: "310G", floor: 3, this.add.image(  833,  2628 },
    { room: "315", floor: 3, this.add.image(  1288,  2576 },
    { room: "320", floor: 3, this.add.image(  1076,  2622 },
    { room: "320A", floor: 3, this.add.image(  1025,  2627 },
    { room: "320B", floor: 3, this.add.image(  1004,  2588 },
    { room: "320C", floor: 3, this.add.image(  1052,  2548 },
    { room: "320D", floor: 3, this.add.image(  1103,  2562 },
    { room: "320E", floor: 3, this.add.image(  1156,  2561 },
    { room: "320F", floor: 3, this.add.image(  1166,  2624 },
    { room: "322", floor: 3, this.add.image(  1208,  2591 },
    { room: "323", floor: 3, this.add.image(  1301,  2600 },
    { room: "324", floor: 3, this.add.image(  1427,  2610 },
    { room: "325", floor: 3, this.add.image(  1532,  2594 },
    { room: "329", floor: 3, this.add.image(  1702,  2630 },
    { room: "330", floor: 3, this.add.image(  1768,  2600 },
    { room: "331", floor: 3, this.add.image(  1835,  2600 },
    { room: "333", floor: 3, this.add.image(  1906,  2614 },
    { room: "335", floor: 3, this.add.image(  2020,  2639 },
    { room: "335A", floor: 3, this.add.image(  1976,  2576 },
    { room: "335B", floor: 3, this.add.image(  2036,  2587 },
    { room: "335C", floor: 3, this.add.image(  2096,  2606 },
    { room: "340", floor: 3, this.add.image(  2008,  2744 },
    { room: "340A", floor: 3, this.add.image(  2093,  2784 },
    { room: "340B", floor: 3, this.add.image(  2032,  2784 },
    { room: "340C", floor: 3, this.add.image(  1934,  2738 },
    { room: "350", floor: 3, this.add.image(  1760,  2800 },
    { room: "350A", floor: 3, this.add.image(  1772,  2754 },
    { room: "350B", floor: 3, this.add.image(  1829,  2758 },
    { room: "350C", floor: 3, this.add.image(  1893,  2762 },
    { room: "350E", floor: 3, this.add.image(  1976,  2789 },
    { room: "350F", floor: 3, this.add.image(  1931,  2868 },
    { room: "350G", floor: 3, this.add.image(  1871,  2862 },
    { room: "350H", floor: 3, this.add.image(  1821,  2870 },
    { room: "350I", floor: 3, this.add.image(  1745,  2873 },
    { room: "351", floor: 3, this.add.image(  1664,  1768 },
    { room: "351B ", floor: 3, this.add.image(  1589,  2808 },
    { room: "353", floor: 3, this.add.image(  1382,  2752 },
    { room: "353A", floor: 3, this.add.image(  1397,  2826 },
    { room: "353B", floor: 3, this.add.image(  1455,  2834 },
    { room: "353C", floor: 3, this.add.image(  1522,  2826 },
    { room: "353D", floor: 3, this.add.image(  1469,  2751 },
    { room: "354", floor: 3, this.add.image(  1268,  2786 },
    { room: "355", floor: 3, this.add.image(  1142,  2786 },
    { room: "357", floor: 3, this.add.image(  1001,  2784 },
    { room: "358", floor: 3, this.add.image(  904,  2784 },
    { room: "360", floor: 3, this.add.image(  680,  2749 },
    { room: "360A", floor: 3, this.add.image(  754,  2738 },
    { room: "360B", floor: 3, this.add.image(  827,  2822 },
    { room: "360C", floor: 3, this.add.image(  758,  2818 },
    { room: "360D", floor: 3, this.add.image(  698,  2820 },
    { room: "360E", floor: 3, this.add.image(  638,  2818 },
    { room: "360F", floor: 3, this.add.image(  569,  2816 },
    { room: "360G", floor: 3, this.add.image(  785,  2744 },
    { room: "367", floor: 3, this.add.image(  506,  2770 },
    { room: "368", floor: 3, this.add.image(  384,  2824 },
    { room: "368A ", floor: 3, this.add.image(  418,  2734 },
    { room: "369", floor: 3, this.add.image(  256,  2760 },
    { room: "369A", floor: 3, this.add.image(  293,  2848 },
    { room: "369B", floor: 3, this.add.image(  230,  2848 },
    { room: "370", floor: 3, this.add.image(  119,  2734 },
    { room: "370A", floor: 3, this.add.image(  68,  2786 },
    { room: "370B", floor: 3, this.add.image(  122,  2786 },
    { room: "370C", floor: 3, this.add.image(  176,  2784 },
    { room: "397A", floor: 3, this.add.image(  514,  2630 },
    { room: "397B", floor: 3, this.add.image(  1644,  2630 },
    { room: "398A", floor: 3, this.add.image(  155,  2680 },
    { room: "398B", floor: 3, this.add.image(  569,  2627 },
    { room: "398C", floor: 3, this.add.image(  1594,  2624 },
this.add.image(  2000,  2692 },
this.add.image(  1049,  2685 },
*/



    // Handles the clicks on the map to make the character move
    this.input.on('pointerup',this.handleClick);
    var camera = Game.scene.cameras.main;
    camera = this.cameras.main;
    camera.setBounds(0, 0, 280*TilePixelCount, 470*TilePixelCount);
    var phaserGuy = this.add.image(TilePixelCount,TilePixelCount,'dude').setScale(0.5);
    phaserGuy.setDepth(2);
    phaserGuy.setOrigin(0,0.5);
    camera.startFollow(phaserGuy);
    // Handles the clicks on the map to make the character move
    //this.input.on('pointerup',this.handleClick);
    this.player = phaserGuy;

    // Display map
    this.map = this.make.tilemap({ key: 'map'});
    // The first parameter is the name of the tileset in Tiled and the second parameter is the key
    // of the tileset image used when loading the file in preload.
    var tiles = this.map.addTilesetImage('tiles', 'tileset');
    this.map.createStaticLayer(0, tiles, 0,0);

    // Marker that will follow the mouse
    this.marker = this.add.graphics();
    this.marker.lineStyle(3, 0xffffff, 1);
    this.marker.strokeRect(0, 0, this.map.tileWidth, this.map.tileHeight);

    // ### Pathfinding stuff ###
    // Initializing the pathfinder
    this.finder = new EasyStar.js();

    // We create the 2D array representing all the tiles of our map
    var grid = [];
    for(var y = 0; y < this.map.height; y++){
        var col = [];
        for(var x = 0; x < this.map.width; x++){
            // In each cell we store the ID of the tile, which corresponds
            // to its index in the tileset of the map ("ID" field in Tiled)
            col.push(this.getTileID(x,y));
        }
        grid.push(col);
    }
    this.finder.setGrid(grid);

    var tileset = this.map.tilesets[0];
    var properties = tileset.tileProperties;
    var acceptableTiles = [];

    // We need to list all the tile IDs that can be walked on. Let's iterate over all of them
    // and see what properties have been entered in Tiled.
    for(var i = tileset.firstgid-1; i < tiles.total; i++){ // firstgid and total are fields from Tiled that indicate the range of IDs that the tiles can take in that tileset
        if(!properties.hasOwnProperty(i)) {
            // If there is no property indicated at all, it means it's a walkable tile
            acceptableTiles.push(i+1);
            continue;
        }
        if(!properties[i].collide) acceptableTiles.push(i+1);
        if(properties[i].cost) this.finder.setTileCost(i+1, properties[i].cost); // If there is a cost attached to the tile, let's register it
    }
    this.finder.setAcceptableTiles(acceptableTiles);
};

    update = function(){
        var worldPoint = this.input.activePointer.positionToCamera(Game.scene.cameras.main);

        // Rounds down to nearest tile
        var pointerTileX = this.map.worldToTileX(worldPoint.x);
        var pointerTileY = this.map.worldToTileY(worldPoint.y);
        this.marker.x = this.map.tileToWorldX(pointerTileX);
        this.marker.y = this.map.tileToWorldY(pointerTileY);
        this.marker.setVisible(true);
    };

    checkCollision = function(x,y){
        var tile = this.map.getTileAt(x, y);
        return tile.properties.collide == true;
    };

    getTileID = function(x,y){
        var tile = this.map.getTileAt(x, y);
        return tile.index;
    };

    handleClick = function(pointer){
        //pointer.camera.setZoom(.5);
        if(canWalk === 1){
            var x = pointer.camera.scrollX + pointer.x;
            var y = pointer.camera.scrollY + pointer.y;
            
            var toX = Math.floor(x/TilePixelCount);
            var toY = Math.floor(y/TilePixelCount);
            var fromX = Math.floor(this.scene.player.x/TilePixelCount);
            var fromY = Math.floor(this.scene.player.y/TilePixelCount);
            console.log('going from ('+fromX+','+fromY+') to ('+toX*16+','+toY*16+')');//debugging and for map design
            Game.scene.finder.findPath(fromX, fromY, toX, toY, function( path ) {
                if (path === null) {
                    console.warn("Path was not found.");
                } else {
                    console.log(path);
                    Game.scene.moveCharacter(path);
                    console.log(path.length);
                }
            });
            this.scene.finder.calculate(); // don't forget, otherwise nothing happens
        }
    };

    routeToRestroom = function(){
    var fromData = window.showFromLocation.split(',');
    var toData = window.showToLocation.split(',');
    var nearestElevator = [[0,0], [64,40] , [64,188] , [64, 329]];
    if(parseInt(fromData[1])/TilePixelCount > (127)){
        nearestElevator = [[0,0], [190,40] , [205,188] , [204, 329]];
    }
    var tweenNumbers;
  
        if (parseInt(fromData[0]) === parseInt(toData[0])){
            var toX = Math.floor(parseInt(toData[1])/TilePixelCount);
            var toY = Math.floor(parseInt(toData[2])/TilePixelCount);
            var fromX = Math.floor(parseInt(fromData[1])/TilePixelCount);
            var fromY = Math.floor(parseInt(fromData[2])/TilePixelCount);
            console.log('going from ('+fromX+','+fromY+') to ('+toX+','+toY+')');//debugging and for map design
            Game.scene.finder.findPath(fromX, fromY, toX, toY, function( path ) {
                if (path === null) {
                    console.warn("Path was not found.");
                } else {
                    console.log(path);
                    Game.scene.moveCharacter(path);
                    console.log(path.length);
                }
            });
            this.scene.finder.calculate();
        }else{
            var toX = Math.floor(nearestElevator[parseInt(fromData[0])][0]);
            var toY = Math.floor(nearestElevator[parseInt(fromData[0])][1]);
            var fromX = Math.floor(parseInt(fromData[1])/TilePixelCount);
            var fromY = Math.floor(parseInt(fromData[2])/TilePixelCount);
            console.log('going from ('+fromX+','+fromY+') to ('+toX+','+toY+')');//debugging and for map design
            Game.scene.finder.findPath(fromX, fromY, toX, toY, function( path ) {
                if (path === null) {
                    console.warn("Path was not found.");
                } else {
                    console.log(path);
                    tweenNumbers = path;
                }
            })
            var fromX2 = Math.floor(nearestElevator[parseInt(toData[0])][0]);
            var fromY2 = Math.floor(nearestElevator[parseInt(toData[0])][1]);
            var toX2 = Math.floor(toData[1]/TilePixelCount);
            var toY2 = Math.floor(toData[2]/TilePixelCount);
            console.log('going from ('+fromX2+','+fromY2+') to ('+toX2*16+ ','+toY2*16+')');//debugging and for map design
            Game.scene.finder.findPath(fromX2, fromY2, toX2, toY2, function( path2 ) {
                if (path2 === null) {
                    console.warn("Path was not found.");
                } else {
                    console.log(path2);
                    tweenNumbers = tweenNumbers.concat(path2);
                    Game.scene.moveCharacter(tweenNumbers);
                }
            });
            this.scene.finder.calculate();
        }
    };


    moveCharacter = function(path){
        // Sets up a list of tweens, one for each tile to walk, that will be chained by the timeline
        var tweens = [];
        ///Game.scene.graphics.clear();// not sure what to actually clear with
        for(var i = 0; i < path.length-1; i++){
            var ex = path[i+1].x;
            var ey = path[i+1].y;

            
            if(Math.abs(path[i+1].y - path[i].y) < 100 ){
                var line = new Phaser.Geom.Line( (path[i].x*TilePixelCount),(path[i].y*TilePixelCount),  (path[i+1].x*TilePixelCount),(path[i+1].y*TilePixelCount));

                Game.graphics = this.add.graphics({ lineStyle: { width: TilePixelCount, color: 0x0000FF } });//change line width and color here
                Game.graphics.strokeLineShape(line);
            }
            
            tweens.push({
                targets: this.player,
                x: {value: ex*this.map.tileWidth, duration: 50},
                y: {value: ey*this.map.tileHeight, duration: 50}
            });
        }
        Game.scene.tweens.timeline({
            tweens: tweens
        });
    };

}
