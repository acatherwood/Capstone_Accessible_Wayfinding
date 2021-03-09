import { Scene } from 'phaser'	
import EasyStar from 'easystarjs'	
var Game = {};	
var graphics; var line;	
var canWalk = -1;	
var TilePixelCount = 16;	
var scalerSize = 0.15;	
var testCoords = [[1792, 1472, "244"],	
[1888, 1536, "245"],	
[1840, 1472, "245A "],	
[1888, 1488, "245B "],	
[1952, 1504, "245C "],	
[1586, 1648, "248"],	
[2084, 1436, "248A"],	
[1865, 1518, "249A "],	
[1912, 1515, "249B "],	
[1870, 1434, "249C "],	
[1760, 1688, "250"],	
[1658, 1437, "251"],	
[1544, 1461, "252"],	
[1415, 1448, "253"],	
[1256, 1672, "254"],	
[896, 1452, "255"],	
[758, 1449, "256"],	
[599, 1458, "257"],	
[494, 1424, "258"],	
[302, 1648, "259"],	
[425, 1472, "259A "],	
[364, 1506, "259B "],	
[320, 1513, "259C "],	
[269, 1428, "259D "],	
[279, 1508, "259E "],	
[225, 1440, "260"],	
[218, 1530, "260A "],	
[113, 1404, "261"],	
[164, 1469, "261A "],	
[122, 1461, "261B "],	
[68, 1464, "261C "],	
[508, 1512, "297A"],	
[1642, 1512, "297B"],	
[144, 1568, "298A"],	
[552, 1512, "298B"],	
[1592, 1507, "298C"],	
[2006, 1339, "298D"],	
[1148, 1458, "298E"],	
[1010, 1458, "298F"],	
[1059, 1458, "298G"],	
[1077, 1344, "299"],	
[178, 2633, "301"]];	
var routeMarker1 = [[0,0]];	
var routeMarker2 = [[0,0]];	
var fromData = "3,null,null";
var toData = "text goes here";
export default class PlayScene extends Scene {	
  constructor () {	
    super({ key: 'PlayScene' })	
  }	
  preload () {	
    Game.scene = this; // Handy reference to the scene (alternative to `this` binding)	
  }	
  	
  create = function(){	
    //load elevator icons one through six	
    var elevatorIcon = this.add.image(540,330, 'elevator').setScale(1);	
    elevatorIcon.setDepth(2);	
    	
    var elevatorIconTwo = this.add.image(1455,330,'elevator').setScale(1);	
    elevatorIconTwo.setDepth(2);	
    var elevatorIconThree = this.add.image(573,1495,'elevator').setScale(1);	
    elevatorIconThree.setDepth(2);	
    var elevatorIconFour = this.add.image(1594,1495,'elevator').setScale(1);	
    elevatorIconFour.setDepth(2);	
    var elevatorIconFive = this.add.image(510,2620,'elevator').setScale(1);	
    elevatorIconFive.setDepth(2);	
    var elevatorIconSix = this.add.image(1528,2620,'elevator').setScale(1);	
    elevatorIconSix.setDepth(2);	
    var elevatorIconSeven = this.add.image(510,3888,'elevator').setScale(1);	
    elevatorIconSeven.setDepth(2);	
    	
    var elevatorIconEight = this.add.image(1510,3888,'elevator').setScale(1);	
    elevatorIconEight.setDepth(2);	
    	
    	
    //load floor maps for 0-3	
    var floor1PNGv4 = this.add.image(1090,190,'floor1PNGv4').setScale(.9);	
    floor1PNGv4.setDepth(1);	
    var floor2PNGv4 = this.add.image(1090,1480,'floor2PNGv4').setScale(.9);	
    floor2PNGv4.setDepth(1);	
    var floor3PNGv4 = this.add.image(1090,2645,'floor3PNGv4').setScale(.9);	
    floor3PNGv4.setDepth(1);	
    var floor0PNGv2 = this.add.image(1028,3850,'floor0PNGv2').setScale(1);	
    floor0PNGv2.setDepth(1);	
    //load restroom icon one through ten	
    var restroom1 =this.add.image(272,420,'restroom').setScale(1);	
    restroom1.setDepth(2);	
    var restroom2=this.add.image(1092,430,'restroom').setScale(1);	
    restroom2.setDepth(2);	
    var restroom3=this.add.image(1510,295,'restroom').setScale(1);	
    restroom3.setDepth(2);	
    var restroom4=this.add.image(342,1440,'restroom').setScale(1);	
    restroom4.setDepth(2);	
    	
    var restroom5=this.add.image(1625,1456,'restroom').setScale(1);	
    restroom5.setDepth(2);	
    var restroom6=this.add.image(320,2600,'restroom').setScale(1);	
    restroom6.setDepth(2);	
    	
    var restroom7=this.add.image(1550,2578,'restroom').setScale(1);	
    restroom7.setDepth(2);	
    var restroom8=this.add.image(100,3450,'restroom').setScale(1);	
    restroom8.setDepth(2);	
    var restroom9=this.add.image(138,3880,'restroom').setScale(1);	
    restroom9.setDepth(2);	
    var restroom10=this.add.image(450,3790,'restroom').setScale(1);	
    restroom10.setDepth(2);	
    var restroom11=this.add.image(1520,3845,'restroom').setScale(1);	
    restroom11.setDepth(2);	
    var demosWindow = this.add.image(0, 0, 'btnWindow').setOrigin(0).setScale(.6);	
    var floor0icon = this.add.sprite(50, 340, 'moveBTN', 0).setOrigin(0).setInteractive().setScale(.2).setScrollFactor(0);	
    var floor3icon = this.add.sprite(15, 30, 'floor3icon', 0).setOrigin(0).setInteractive().setScale(0.05).setScrollFactor(0);	
    var floor2icon = this.add.sprite(15, 90, 'floor2icon', 0).setOrigin(0).setInteractive().setScale(0.05).setScrollFactor(0);	
    var floorGicon = this.add.sprite(15, 210, 'floor2icon', 0).setOrigin(0).setInteractive().setScale(0.05).setScrollFactor(0);	
    var johnRouteIcon = this.add.sprite(40, 280, 'restroomBTN', 0).setOrigin(0).setInteractive().setScale(0.15).setScrollFactor(0);	
    var floor1icon = this.add.sprite(15, 150, 'floor1icon', 0).setOrigin(0).setInteractive().setScale(0.05).setScrollFactor(0);	
    var wayPointerto1=this.add.image(55, 30,'restroom', 0).setOrigin(0).setInteractive().setScale(1).setScrollFactor(0).setVisible(false);
    var wayPointerto2=this.add.image(55, 90,'restroom', 0).setOrigin(0).setInteractive().setScale(1).setScrollFactor(0).setVisible(false);
    var wayPointerto3=this.add.image(55, 150,'restroom', 0).setOrigin(0).setInteractive().setScale(1).setScrollFactor(0).setVisible(false);
    var wayPointerfrom1 = this.add.image(55, 30,'elevator', 0).setOrigin(0).setInteractive().setScale(1).setScrollFactor(0).setVisible(false);
    var wayPointerfrom2 = this.add.image(55, 90,'elevator', 0).setOrigin(0).setInteractive().setScale(1).setScrollFactor(0).setVisible(false);
    var wayPointerfrom3 = this.add.image(55, 150,'elevator', 0).setOrigin(0).setInteractive().setScale(1).setScrollFactor(0).setVisible(false);
    var demosContainer = this.add.container(0, 0, [ demosWindow, floor0icon, floor1icon, floor2icon, floor3icon, johnRouteIcon, wayPointerfrom1, wayPointerfrom2 , wayPointerfrom3, wayPointerto1, wayPointerto2, wayPointerto3]);	
    	
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
    floor0icon.on('pointerdown', function () {	
        phaserGuy.setPosition(120*8, 490*8);	
    });	
    floorGicon.on('pointerdown', function () {	
        var i = 0;	
        while(i < testCoords.length){	
        Game.scene.checkCollisionTester(testCoords[i]);	
        i++	
        }console.log(routeMarker1);	
    });	
    		
    floor0icon.on('pointerdown', function () {	
       canWalk *= -1;	
    });	
    	
    johnRouteIcon.on('pointerdown', this.routeToRestroom );	
    demosContainer.setDepth(1);	
    demosContainer.setScrollFactor(0);	
    	
    var getRouteBTN = this.add.sprite(screen.width/2, scalerSize, 'restroomBTN', 0).setOrigin(0).setInteractive().setScale(scalerSize).setScrollFactor(0);	
    getRouteBTN.on('pointerdown', function () {		
        Game.scene.routeToRestroom();	
        wayPointerfrom1.setVisible(false);
        wayPointerfrom2.setVisible(false);
        wayPointerfrom3.setVisible(false);
        wayPointerto1.setVisible(false);
        wayPointerto2.setVisible(false);
        wayPointerto3.setVisible(false);
        switch (parseInt(fromData[0])) {
            case 0:
                floor0icon.setVisible(false);
                console.log(window.showToLocation);
              break;
            case 1:
                wayPointerfrom1.setVisible(true);
                console.log(window.showToLocation);
              break;
            case 2:
                wayPointerfrom2.setVisible(true);
                console.log("Start on floor 2");
              break;
            case 3:
                wayPointerfrom3.setVisible(false);
                window.alert("sometext");
              break;
          }
          switch (parseInt(toData[0])) {
            case 0:
                wayPointerto1.setVisible(true);
                console.log("Start on floor 0");
              break;
            case 1:
                wayPointerto1.setVisible(true);

                console.log("Start on floor 1");
              break;
            case 2:
                wayPointerto2.setVisible(true);

                console.log("Start on floor 2");
              break;
            case 3:
                wayPointerto3.setVisible(true);

                window.alert("sometext");
              break;
          }
        
     });	
    	
    getRouteBTN.setDepth(1);	
    getRouteBTN.setScrollFactor(0);	
    // Handles the clicks on the map to make the character move	
    this.input.on('pointerup',this.handleClick);	
    var camera = Game.scene.cameras.main;	
    camera = this.cameras.main;	
    camera.setBounds(0, 0, 280*TilePixelCount, 470*TilePixelCount);	
    camera.setBackgroundColor('#FFFFFF')

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
    graphics = this.add.graphics({ lineStyle: { width: TilePixelCount, color: 0x0000FF } });//needs to be declared here to become visible on map, here specifically because it breaks earlier in the create function	
};	
    update = function(){	
        var worldPoint = this.input.activePointer.positionToCamera(Game.scene.cameras.main);	
        // Rounds down to nearest tile and marks it (for move on click mode only)	
        var pointerTileX = this.map.worldToTileX(worldPoint.x);	
        var pointerTileY = this.map.worldToTileY(worldPoint.y);	
        this.marker.x = this.map.tileToWorldX(pointerTileX);	
        this.marker.y = this.map.tileToWorldY(pointerTileY);	
        this.marker.setVisible(true); 	
        //adds route lines after clearing 	
        graphics.clear();	
        graphics.beginPath();	
        graphics.moveTo(routeMarker1[0][0], routeMarker1[0][1]);	
        for(var i = 0; i < routeMarker1.length; i++){	
            graphics.lineTo(routeMarker1[i][0], routeMarker1[i][1]);	
        }	
        graphics.moveTo(routeMarker2[0][0], routeMarker2[0][1]);	
        for(var i = 0; i < routeMarker2.length; i++){	
            graphics.lineTo(routeMarker2[i][0], routeMarker2[i][1]);	
        }	
        graphics.strokePath(); 	
        graphics.setDepth(3);	
        	
            	
    };	
    checkCollisionTester = function(item){	
        var tile = this.map.getTileAt(Math.floor(item[0]/16), Math.floor(item[1]/16));	
        var testerDude = this.add.image( item[0], item[1],'dude').setScale(0.5).setDepth(2);	
        this.add.text(item[0], item[1], item[2], { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', color:'#A52A2A', fontSize:16 }).setDepth(2);	
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
                    Game.scene.moveCharacter(path, 1);	
                    console.log(path.length);	
                }	
            });	
            this.scene.finder.calculate(); // don't forget, otherwise nothing happens	
        }	
    };	
    routeToRestroom = function(){	
    fromData = window.showFromLocation.split(',');	
    toData = window.showToLocation.split(',');	
    var pathCheck, path2Check;	
    var nearestElevator = [[64,40], [32,20] , [32, 94] , [32, 164]];// this takes the integer that is the floor number	
    if(parseInt(fromData[1])/TilePixelCount > (63)){	
        nearestElevator = [[188,38], [94,20] , [94,94] , [204, 329]];	
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
                    Game.scene.moveCharacter(path, 1);	
                    console.log(path.length);	
                }	
            });	
            Game.scene.finder.calculate();	
        }else{	
            var toX = Math.floor(nearestElevator[parseInt(fromData[0])][0]);	
            var toY = Math.floor(nearestElevator[parseInt(fromData[0])][1]);	
            var fromX = Math.floor(parseInt(fromData[1])/TilePixelCount);	
            var fromY = Math.floor(parseInt(fromData[2])/TilePixelCount);	
            console.log('going from startpoint to elevator 1 ('+fromX+','+fromY+') to ('+toX+','+toY+')');//debugging and for map design	
            Game.scene.finder.findPath(fromX, fromY, toX, toY, function( path ) {	
                if (path === null) {	
                    console.warn("Path was not found.");	
                } else {	
                    pathCheck = path;	
                }	
            })	
            var fromX2 = Math.floor(nearestElevator[parseInt(toData[0])][0]);	
            var fromY2 = Math.floor(nearestElevator[parseInt(toData[0])][1]);	
            var toX2 = Math.floor(toData[1]/TilePixelCount);	
            var toY2 = Math.floor(toData[2]/TilePixelCount);	
            console.log('going from start to elevator 2 ('+fromX2+','+fromY2+') to ('+toX2+ ','+toY2+')');//debugging and for map design	
            Game.scene.finder.findPath(fromX2, fromY2, toX2, toY2, function( path2 ) {	
                if (path2 === null) {	
                    console.warn("Path was not found.");	
                } else {	
                    path2Check = path2;	
                    Game.scene.moveCharacter(pathCheck,path2Check);	
                }	
            });	
            Game.scene.finder.calculate();	
        }	
    };	
    moveCharacter = function(startPath, endPath){	
        console.log(startPath);	
        var tempRouteMarker = [ [(startPath[0].x*TilePixelCount),(startPath[0].y*TilePixelCount)] ]	
        // Sets up a list of tweens, one for each tile to walk, that will be chained by the timeline	
        var tweens = [];	
        for(var i = 0; i < startPath.length-1; i++){	
            var ex = startPath[i+1].x;	
            var ey = startPath[i+1].y;	
            tempRouteMarker.push( [(startPath[i].x*TilePixelCount),(startPath[i].y*TilePixelCount)] );	
            tweens.push({	
                targets: this.player,	
                x: {value: ex*this.map.tileWidth, duration: 50},	
                y: {value: ey*this.map.tileHeight, duration: 50}	
            });	
        }	
        routeMarker1 = tempRouteMarker;	
        routeMarker2 = tempRouteMarker;	
        if(endPath != 1){//elevators get called on anything but 1	
            tempRouteMarker = [ [(endPath[0].x*TilePixelCount),(endPath[0].y*TilePixelCount)] ]	
            for(var i = 0; i < endPath.length-1; i++){	
                var ex = endPath[i+1].x;	
                var ey = endPath[i+1].y;	
                tempRouteMarker.push( [(endPath[i].x*TilePixelCount),(endPath[i].y*TilePixelCount)] );	
                tweens.push({	
                    targets: this.player,	
                    x: {value: ex*this.map.tileWidth, duration: 50},	
                    y: {value: ey*this.map.tileHeight, duration: 50}	
                });	
            }	
            routeMarker2 = tempRouteMarker;	
        }	
        Game.scene.tweens.timeline({	
            tweens: tweens	
        });	
    };	
}