import { Scene } from 'phaser'
import EasyStar from 'easystarjs'

var Game = {};
var canWalk = -1;
var TilePixelCount = 16;
var scalerSize = 0.15;
var bathroomCoords = [[225, 420], [1125, 435] , [1520,280]];
export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene' })
  }

  preload () {
    Game.scene = this; // Handy reference to the scene (alternative to `this` binding)

  }
  

  create = function(){

    //load elevator icons one through six
    var elevatorIcon = this.add.image(521,330, 'elevator').setScale(1.5);
    elevatorIcon.setDepth(1);
    
    var elevatorIconTwo = this.add.image(1510,330,'elevator').setScale(1.5);
    elevatorIconTwo.setDepth(1);

    var elevatorIconThree = this.add.image(508,1512,'elevator').setScale(1.5);
    elevatorIconThree.setDepth(1);

    var elevatorIconFour = this.add.image(1642,1512,'elevator').setScale(1.5);
    elevatorIconFour.setDepth(1);

    var elevatorIconFive = this.add.image(514,2630,'elevator').setScale(1.5);
    elevatorIconFive.setDepth(1);

    var elevatorIconSix = this.add.image(1644,2630,'elevator').setScale(1.5);
    elevatorIconSix.setDepth(1);


    //load restroom icon one through ten


    var restroom1 =this.add.image(225,420,'restroom').setScale(1.5);
    restroom1.setDepth(1);

    var restroom2=this.add.image(1125,435,'restroom').setScale(1.5);
    restroom2.setDepth(1);

    var restroom3=this.add.image(1520,280,'restroom').setScale(1.5);
    restroom3.setDepth(1);

    var restroom4=this.add.image(248,1440,'restroom').setScale(1.5);
    restroom4.setDepth(1);
    
    var restroom5=this.add.image(1704,1456,'restroom').setScale(1.5);
    restroom5.setDepth(1);

    var restroom6=this.add.image(320,2600,'restroom').setScale(1.5);
    restroom6.setDepth(1);
    
    var restroom7=this.add.image(1768,2600,'restroom').setScale(1.5);
    restroom7.setDepth(1);

     
    var restroom8=this.add.image(100,3450,'restroom').setScale(1.5);
    restroom8.setDepth(1);

    var restroom9=this.add.image(440,3400,'restroom').setScale(1.5);
    restroom9.setDepth(1);

    var restroom10=this.add.image(1475,3420,'restroom').setScale(1.5);
    restroom10.setDepth(1);



    var demosWindow = this.add.image(0, 0, 'btnWindow').setOrigin(0).setScale(.6);
    //var mapOverlay = this.add.image(0,0,'mapOverlay').setOrigin(0).setInteractive().setScale(1).setScrollFactor(0);
    var floor0icon = this.add.sprite(15, 210, 'floor1icon', 0).setOrigin(0).setInteractive().setScale(0.05).setScrollFactor(0);
    //var floor0icon = this.add.sprite(50, 280, 'moveBTN', 0).setOrigin(0).setInteractive().setScale(.2).setScrollFactor(0);
    var floor3icon = this.add.sprite(15, 30, 'floor3icon', 0).setOrigin(0).setInteractive().setScale(0.05).setScrollFactor(0);
    var floor2icon = this.add.sprite(15, 90, 'floor2icon', 0).setOrigin(0).setInteractive().setScale(0.05).setScrollFactor(0);
    var johnRouteIcon = this.add.sprite(40, 220, 'restroomBTN', 0).setOrigin(0).setInteractive().setScale(0.15).setScrollFactor(0);
    var floor1icon = this.add.sprite(15, 150, 'floor1icon', 0).setOrigin(0).setInteractive().setScale(0.05).setScrollFactor(0);
    var demosContainer = this.add.container(0, 0, [ demosWindow, floor0icon, floor1icon, floor2icon, floor3icon, johnRouteIcon]);
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
       canWalk *= -1;

    });

    johnRouteIcon.on('pointerdown', this.routeToRestroom );
    demosContainer.setDepth(1);
    demosContainer.setScrollFactor(0);
    
    var getRouteBTN = this.add.sprite(screen.width/2, 90*8 - 327*scalerSize, 'restroomBTN', 0).setOrigin(0).setInteractive().setScale(scalerSize).setScrollFactor(0);
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

    checkCollision = function(x,y){
        var tile = this.map.getTileAt(x, y);
        return tile.properties.collide == true;
    };

    getTileID = function(x,y){
        var tile = this.map.getTileAt(x, y);
        return tile.index;
    };

    handleClick = function(pointer){
        //pointer.camera.setZoom(.8);
        if(canWalk === 1){
            var x = pointer.camera.scrollX + pointer.x;
            var y = pointer.camera.scrollY + pointer.y;
            
            var toX = Math.floor(x/TilePixelCount);
            var toY = Math.floor(y/TilePixelCount);
            var fromX = Math.floor(this.scene.player.x/TilePixelCount);
            var fromY = Math.floor(this.scene.player.y/TilePixelCount);
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
            console.log('going from ('+fromX2+','+fromY2+') to ('+toX2+','+toY2+')');//debugging and for map design
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
