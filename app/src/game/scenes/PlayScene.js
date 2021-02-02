import { Scene } from 'phaser'
import EasyStar from 'easystarjs'

var Game = {};
var canWalk = -1;
var TilePixelCount = 16;
var scalerSize = 0.15;
var bathroomCoords = [[225, 420], [1125, 435] , [1520,280]]
var testCoords = [[1645,  163 ],
[ 1717,  247 ],
[ 1767,  245 ],
[ 1870,  315 ],
[ 1708,  298 ],
[ 1742,  498 ],
[ 1742,  552 ],
[ 1729,  440 ],
[ 1782,  442 ],
[ 1885,  468 ],
[ 1817,  435 ],
[ 1888,  420 ],
[ 1607,  491 ],
[ 1584,  432 ],
 [ 1610,  550 ],
[ 1420,  444 ],
[ 1384,  449 ],
[ 1350,  449 ],
[ 1473,  506 ],
[ 1401,  504 ],
[ 1348,  504 ],
[ 1271,  458 ],
[ 1299,  500 ],
[ 1252,  500 ],
[ 1197,  445 ],
[ 1197,  497 ],
[ 1150,  483 ],
[ 1125,  435 ],
[ 796,  446 ],
[ 796,  514 ],
[ 835,  445 ],
[ 875,  445 ],
[ 896,  448 ],
[ 852,  510 ],
[ 901,  504 ],
[ 694,  450 ],
[ 749,  454 ],
[ 636,  454 ],
[ 744,  510 ],
  [ 669,  504 ],
   [ 617,  504 ],
  [ 568,  504 ],
     [ 507,  438 ],
     [ 438,  470 ],
    [ 425,  535 ],
    [ 404,  465 ],
  [ 250,  450 ],
    [ 300,  530 ],
     [ 130,  470 ],
    [ 225,  420 ],
    [ 130,  420 ],
    [ 521,  330 ],
 [ 1510,  330 ],
   [ 130,  374 ],
    [ 569,  344 ],
    [ 1469,  336],
    [ 1792,  383 ],
[ 1082,  432 ],
 [ 953,  440 ],
[ 357,  388 ],
[ 165,  1052 ],
 [ 64,  1027 ],
[ 105,  1166 ], [ 170,  1150 ],
   [ 248,  1440 ],
  [ 262,  929 ],
    [ 250,  1034 ],
  [ 384,  1296 ],
   [ 497,  1275 ],
   [ 500,  1241 ],
   [ 435,  1224 ],
 [ 370,  1229 ],
   [ 490,  1382 ],
  [ 459,  1455 ],
  [ 407,  1509 ],
    [ 460,  1515 ],
 [ 630,  1496 ],
  [ 740,  1487 ],
  [ 885,  1487 ],
   [ 1070,  1511 ],
    [ 1008,  1510 ],
   [ 1000,  1466 ],
   [ 1047,  1452 ],
     [ 1104,  1454 ],
  [ 1154,  1490 ],
 [ 1307,  1485 ],
  [ 1445,  1477 ],
 [ 1535,  1475 ],
 [ 1715,  1507 ],
 [ 1704,  1456 ],
   [ 1732,  1249 ],
   [ 1682,  1410 ],
[ 1675,  1357 ],
 [ 1667,  1305 ],
 [ 1665,  1249 ],
 [ 1665,  1205 ],
 [ 1782,  1270 ],
 [ 1832,  1266 ],
 [ 1790,  1227 ],
 [ 1868,  1202 ],
[ 1864,  1267 ],
 [ 1864,  1307 ],
 [ 1820,  1319 ],
   [ 1880,  1360 ],
[ 1828,  1416 ],
[ 1825,  1489 ],
[ 1904,  1464 ],
 [ 1970,  1298 ],
 [ 1970,  1245 ],
 [ 2030,  1247 ],
 [ 2090,  1252 ],
 [ 1902,  1664 ],
 [ 2084,  1436 ],
 [ 1865,  1518 ],
 [ 1912,  1515 ],
 [ 1870,  1434 ],
 [ 1760,  1688 ],
 [ 1658,  1437 ],
 [ 1544,  1461 ],
 [ 1415,  1448 ],
     [ 1256,  1672 ],
 [ 896,  1452 ],
 [ 758,  1449 ],
 [ 599,  1458 ],
 [ 494,  1424 ],
 [ 302,  1648 ],
 [ 425,  1472 ],
 [ 364,  1506 ],
[ 320,  1513 ],
 [ 269,  1428 ],
 [ 279,  1508 ],
 [ 225,  1440 ],
 [ 218,  1530 ],
 [ 113,  1404 ],
 [ 164,  1469 ],
 [ 122,  1461 ],
 [ 68,  1464 ],
 [ 508,  1512 ],
 [ 1642,  1512 ],
 [ 144,  1568 ],
 [ 552,  1512 ],
 [ 1592,  1507 ],
 [ 2006,  1339 ],
 [ 1148,  1458 ],
 [ 1010,  1458 ],
 [ 1059,  1458 ],
 [ 1077,  1344 ],
 [ 178,  2633 ],
 [ 74,  2590 ],
 [ 129,  2586 ],
 [ 183,  2583 ], 
 [ 320,  2600 ], 
 [ 455,  2572 ],
 [ 465,  2617 ],
 [ 743,  2622 ],
 [ 663,  2631 ],
 [ 635,  2566 ],
 [ 695,  2560 ],
[ 758,  2556 ],
[ 827,  2567 ],
 [ 796,  2633 ],
[ 833,  2628 ],
 [ 1288,  2576 ],
 [ 1076,  2622 ],
 [ 1025,  2627 ],
 [ 1004,  2588 ],
 [ 1052,  2548 ],
 [ 1103,  2562 ],
 [ 1156,  2561 ],
 [ 1166,  2624 ],
[ 1208,  2591 ],
 [ 1301,  2600 ],
 [ 1427,  2610 ],
[ 1532,  2594 ],
[ 1702,  2630 ],
 [ 1768,  2600 ],
 [ 1835,  2600 ],
 [ 1906,  2614 ],
 [ 2020,  2639 ],
 [ 1976,  2576 ],
 [ 2036,  2587 ],
 [ 2096,  2606 ],
 [ 2008,  2744 ],
[ 2093,  2784 ],
[ 2032,  2784 ],
 [ 1934,  2738 ],
 [ 1760,  2800 ],
[ 1772,  2754 ],
[ 1829,  2758 ],
[ 1893,  2762 ],
[ 1976,  2789 ],
[ 1931,  2868 ],
[ 1871,  2862 ],
 [ 1821,  2870 ],
 [ 1745,  2873 ],
[ 1664,  1768 ],

[ 1589,  2808 ],
 [ 1382,  2752 ],
[ 1397,  2826 ],
  [ 1455,  2834 ],
[ 1522,  2826 ],
[ 1469,  2751 ],
 [ 1268,  2786 ],
 [ 1142,  2786 ],
  [ 1001,  2784 ],
  [ 904,  2784 ],
 [ 680,  2749 ],
 [ 754,  2738 ],
 [ 827,  2822 ],
[ 758,  2818 ],
 [ 698,  2820 ],
 [ 638,  2818 ],
[ 569,  2816 ],
 [ 785,  2744 ],
 [ 506,  2770 ],
   [ 384,  2824 ],
   [ 418,  2734 ],
  [ 256,  2760 ],
   [ 293,  2848 ],
   [ 230,  2848 ],
  [ 119,  2734 ],
 [ 68,  2786 ],
 [ 122,  2786 ],
 [ 176,  2784 ],
 [ 514,  2630 ],
[ 1644,  2630 ],
 [ 155,  2680 ],
[ 569,  2627 ],
  [ 1594,  2624 ],
[ 2000,  2692 ],
[ 1049,  2685 ]];
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
        var i = 0;
        while(i < testCoords.length){
        Game.scene.checkCollisionTester(testCoords[i]);
        i++
        }
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
    checkCollisionTester = function(item){
        var tile = this.map.getTileAt(Math.floor(item[0]/16), Math.floor(item[1]/16));
        var testerDude = this.add.image( item[0], item[1],'dude').setScale(0.5).setDepth(1);
        if(tile.properties.collide == true){
            console.log(tile.properties.collide+" : "+ item[0]+ " / " +item[1] );
            testerDude.setTint(0xff0000);
        }


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
