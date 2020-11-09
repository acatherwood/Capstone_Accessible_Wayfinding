import { Scene } from 'phaser'
import EasyStar from 'easystarjs'


import tileset from '@/game/assets/gridtiles.png'
import map from '@/game/assets/map.json'
import dude from '@/game/assets/phaserguy.png'


var Game = {};

export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene' })
  }

  preload () {
    Game.scene = this; // Handy reference to the scene (alternative to `this` binding)
    this.load.image('tileset', tileset);
    this.load.tilemapTiledJSON('map', map);
    this.load.image('phaserguy', dude); 
  }
  

  create = function(){
    // Handles the clicks on the map to make the character move
    this.input.on('pointerup',this.handleClick);

    var camera = Game.scene.cameras.main;

    camera = this.cameras.main;
    camera.setBounds(0, 0, 20*32, 20*32);

    var phaserGuy = this.add.image(32,32,'phaserguy');
    phaserGuy.setDepth(1);
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
    this.marker.setVisible(!this.checkCollision(pointerTileX,pointerTileY));
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
    console.log(pointer)
    var x = pointer.camera.scrollX + pointer.x;
    var y = pointer.camera.scrollY + pointer.y;
    var toX = Math.floor(x/32);
    var toY = Math.floor(y/32);
    // var fromX = Math.floor(this.player.x/32);
    // var fromY = Math.floor(this.player.y/32);
    var fromX = Math.floor(this.scene.player.x/32);
    var fromY = Math.floor(this.scene.player.y/32);
    console.log('going from ('+fromX+','+fromY+') to ('+toX+','+toY+')');
    Game.scene.finder.findPath(fromX, fromY, toX, toY, function( path ) {
        if (path === null) {
            console.warn("Path was not found.");
        } else {
            console.log(path);
            Game.scene.moveCharacter(path);
        }
    });
    this.scene.finder.calculate(); // don't forget, otherwise nothing happens
};

moveCharacter = function(path){
    // Sets up a list of tweens, one for each tile to walk, that will be chained by the timeline
    var tweens = [];
    
    for(var i = 0; i < path.length-1; i++){
        var ex = path[i+1].x;
        var ey = path[i+1].y;
        tweens.push({
            targets: this.player,
            x: {value: ex*this.map.tileWidth, duration: 200},
            y: {value: ey*this.map.tileHeight, duration: 200}
        });
    }
    Game.scene.tweens.timeline({
        tweens: tweens
    });
};
}
