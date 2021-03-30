import { Scene } from 'phaser'	
import EasyStar from 'easystarjs'	

var Game = {};	
var graphics;
var canWalk = -1;	
var TilePixelCount = 16;	
var scalerSize = 0.135;
var iconScaler = 0.03;	
var testCoords = [[160, 3824, "01A"]];	
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
    var elevatorIcon = this.add.image(518,318, 'elevator').setScale(iconScaler);	
    elevatorIcon.setDepth(2);	
    	
    var elevatorIconTwo = this.add.image(1512,318,'elevator').setScale(iconScaler);	
    elevatorIconTwo.setDepth(2);	
    var elevatorIconThree = this.add.image(526,1510,'elevator').setScale(iconScaler);	
    elevatorIconThree.setDepth(2);	
    var elevatorIconFour = this.add.image(1526,1510,'elevator').setScale(iconScaler);	
    elevatorIconFour.setDepth(2);	
    var elevatorIconFive = this.add.image(510,2620,'elevator').setScale(iconScaler);	
    elevatorIconFive.setDepth(2);	
    var elevatorIconSix = this.add.image(1505,2620,'elevator').setScale(iconScaler);	
    elevatorIconSix.setDepth(2);	
    var elevatorIconSeven = this.add.image(518,3870,'elevator').setScale(iconScaler);	
    elevatorIconSeven.setDepth(2);	
    var elevatorIconEight = this.add.image(1515,3870,'elevator').setScale(iconScaler);	
    elevatorIconEight.setDepth(2);

    var restroom1 =this.add.image(225,420,'restroom').setScale(iconScaler);	
    restroom1.setDepth(2);	
    var restroom2=this.add.image(1120,430,'restroom').setScale(iconScaler);	
    restroom2.setDepth(2);	
    var restroom3=this.add.image(1575,280,'restroom').setScale(iconScaler);	
    restroom3.setDepth(2);	
    var restroom4=this.add.image(342,1500,'restroom').setScale(iconScaler);	
    restroom4.setDepth(2);	
    	
    var restroom5=this.add.image(1552,1456,'restroom').setScale(iconScaler);	
    restroom5.setDepth(2);	
    var restroom6=this.add.image(320,2600,'restroom').setScale(iconScaler);	
    restroom6.setDepth(2);	
    	
    var restroom7=this.add.image(1550,2578,'restroom').setScale(iconScaler);	
    restroom7.setDepth(2);	
    var restroom9=this.add.image(120,3868,'restroom').setScale(iconScaler);	
    restroom9.setDepth(2);	
    var restroom10=this.add.image(450,3782,'restroom').setScale(iconScaler);	
    restroom10.setDepth(2);	
    var restroom11=this.add.image(1520,3824,'restroom').setScale(iconScaler);	
    restroom11.setDepth(2);
    	
    //load floor maps for 0-3		
    var floor1PNGv4 = this.add.image(1115,164,'floor1PNGv4').setScale(.98);	
    floor1PNGv4.setDepth(1);	
    var floor2PNGv4 = this.add.image(1034,1495,'floor2PNGv4').setScale(.88);	
    floor2PNGv4.setDepth(1);	
    var floor3PNGv4 = this.add.image(1075,2650,'floor3PNGv4').setScale(.88);	
    floor3PNGv4.setDepth(1);	
    var floor0PNGv2 = this.add.image(1034,3834,'floor0PNGv2').setScale(1);	
    floor0PNGv2.setDepth(1);

    var demosWindow = this.add.image(0, 0, 'btnWindow').setOrigin(0).setScale(.19);	
    var moveOnClickBTN = this.add.sprite(50, 10, 'moveBTN', 0).setOrigin(0).setInteractive().setScale(.2).setScrollFactor(0);	//this is only for debugging and should not be used in finsal build
    var floor3icon = this.add.sprite(15, 40, 'floor3icon', 0).setOrigin(0).setInteractive().setScale(0.05).setScrollFactor(0);	
    var floor2icon = this.add.sprite(15, 100, 'floor2icon', 0).setOrigin(0).setInteractive().setScale(0.05).setScrollFactor(0);	
    var floor1icon = this.add.sprite(15, 160, 'floor1icon', 0).setOrigin(0).setInteractive().setScale(0.05).setScrollFactor(0);
    var floor0icon = this.add.sprite(15, 220, 'floor0icon', 0).setOrigin(0).setInteractive().setScale(0.05).setScrollFactor(0);	//this needs to be floor 0icon not 2
    var wayPointerfrom3=this.add.image(65, 40,'fromArrow', 0).setOrigin(0).setInteractive().setScale(0.03).setScrollFactor(0).setVisible(false);
    var wayPointerfrom2=this.add.image(65, 100,'fromArrow', 0).setOrigin(0).setInteractive().setScale(0.03).setScrollFactor(0).setVisible(false);
    var wayPointerfrom1=this.add.image(65, 160,'fromArrow', 0).setOrigin(0).setInteractive().setScale(0.03).setScrollFactor(0).setVisible(false);
    var wayPointerfrom0=this.add.image(65, 220,'fromArrow', 0).setOrigin(0).setInteractive().setScale(0.03).setScrollFactor(0).setVisible(false);
    var wayPointerto3 = this.add.image(65, 40,'toArrow', 0).setOrigin(0).setInteractive().setScale(0.03).setScrollFactor(0).setVisible(false);
    var wayPointerto2 = this.add.image(65, 100,'toArrow', 0).setOrigin(0).setInteractive().setScale(0.03).setScrollFactor(0).setVisible(false);
    var wayPointerto1 = this.add.image(65, 160,'toArrow', 0).setOrigin(0).setInteractive().setScale(0.03).setScrollFactor(0).setVisible(false);
    var wayPointerto0 = this.add.image(65, 220,'toArrow', 0).setOrigin(0).setInteractive().setScale(0.03).setScrollFactor(0).setVisible(false);

    var demosContainer = this.add.container(0, 0, [ demosWindow, /*moveOnClickBTN,*/ //moveonclick only used for mapping and debugging
                                                    floor0icon, floor1icon, floor2icon, floor3icon, 
                                                    wayPointerfrom0, wayPointerfrom1, wayPointerfrom2 , wayPointerfrom3, 
                                                    wayPointerto0, wayPointerto1, wayPointerto2, wayPointerto3
                                                    ]);	
    	
    demosContainer.setInteractive(new Phaser.Geom.Rectangle(0, 0, demosWindow.width*0.19, demosWindow.height*0.19), Phaser.Geom.Rectangle.Contains);	
    	
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
    moveOnClickBTN.on('pointerdown', function () {	//this is only for debugging and should not be used in finsal build
        var i = 0;	
        while(i < testCoords.length){	
        Game.scene.checkCollisionTester(testCoords[i]);	
        i++	
        }console.log(routeMarker1);
        canWalk *= -1;
        floor0PNGv2.alpha = 0.5;
        floor1PNGv4.alpha = 0.5;
        floor2PNGv4.alpha = 0.5;
        floor3PNGv4.alpha = 0.5;
    });	
	
    demosContainer.setDepth(5);	
    demosContainer.setScrollFactor(0);	

    var getRouteBTN = this.add.sprite(screen.width/2 - 3520/2*scalerSize, scalerSize, 'restroomBTN', 0).setOrigin(0).setInteractive().setScale(scalerSize).setScrollFactor(0);	
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
                wayPointerfrom0.setVisible(true);
              break;
            case 1:
                wayPointerfrom1.setVisible(true);
                console.log("from");
              break;
            case 2:
                wayPointerfrom2.setVisible(true);
              break;
            case 3:
                wayPointerfrom3.setVisible(true);
              break;
          }
          switch (parseInt(toData[0])) {
            case 0:
                wayPointerto0.setVisible(true);
              break;
            case 1:
                wayPointerto1.setVisible(true);
                console.log("to");
              break;
            case 2:
                wayPointerto2.setVisible(true);
              break;
            case 3:
                wayPointerto3.setVisible(true);
              break;
          }
        
     });	
    	
    getRouteBTN.setDepth(1);	
    getRouteBTN.setScrollFactor(0);	


//This is needed setup and should not be changed
    // Handles the clicks on the map to make the character move	
    this.input.on('pointerup',this.handleClick);	
    var camera = Game.scene.cameras.main;	
    camera = this.cameras.main;	
    camera.setBounds(0, 0, 280*TilePixelCount, 470*TilePixelCount);	
    camera.setBackgroundColor('#FFFFFF')

    var phaserGuy = this.add.image(TilePixelCount,TilePixelCount,'dude').setScale(0.05);	
    phaserGuy.setDepth(2);	
    phaserGuy.setOrigin(0,0.5);	
    camera.startFollow(phaserGuy);	
    // Handles the clicks on the map to make the character move	
    this.player = phaserGuy;	
    // Display map	
    this.map = this.make.tilemap({ key: 'map'});	
    // The first parameter is the name of the tileset in Tiled and the second parameter is the key	
    // of the tileset image used when loading the file in preload.	
    var tiles = this.map.addTilesetImage('tiles', 'tileset');	
    this.map.createStaticLayer(0, tiles, 0,0);	
    // Marker that will follow the mouse	
    this.marker = this.add.graphics();	
    this.marker.lineStyle(3, 0xff0000, 1);	
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
        var testerDude = this.add.image( item[0], item[1],'dude').setScale(0.01).setDepth(2);	
        this.add.text(item[0], item[1], item[2], { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', color:'#A52A2A', fontSize:16 }).setDepth(2);
        if(tile.properties.collide == true){		
            console.log(item[2]+" : "+ item[0]+ " / " +item[1] );	
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
        if(canWalk === 1){	
            var x = pointer.camera.scrollX + pointer.x;	
            var y = pointer.camera.scrollY + pointer.y;	
            	
            var toX = Math.floor(x/TilePixelCount);	
            var toY = Math.floor(y/TilePixelCount);	
            var fromX = Math.floor(this.scene.player.x/TilePixelCount);	
            var fromY = Math.floor(this.scene.player.y/TilePixelCount);	
            console.log('going from ('+fromX*16+','+fromY*16+') to ('+toX*16+','+toY*16+')');//debugging and for map design	
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
    var nearestElevator = [[64,40], [32,20] , [32, 94] , [32, 164]];// this takes the integer that is the floor number	to find the array value needed
    if(parseInt(fromData[1])/TilePixelCount > (63)){	
        nearestElevator = [[188,38], [94,20] , [94,94] , [204, 329]];	
    }	  	
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