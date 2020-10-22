import { Scene } from 'phaser'
import Phaser from 'phaser';

//

export default class PlayScene extends Phaser.Scene {

  constructor ()
  {
      super({ key: 'PlayScene' });

      this.count = 0;
  }

  preload ()
  {
       
  }

  create ()
  {

      this.add.image(0, 0, 'bg').setOrigin(0);
               //const map = this.scene.make.tilemap({ key: 'map'});

      var demosWindow = this.add.image(0, 0, 'demosWindow').setOrigin(0);
      var floor0icon = this.add.image(32, 30, 'floor1icon', 0).setOrigin(0).setInteractive().setScale(0.05);
      var floor1icon = this.add.image(32, 80, 'floor1icon', 0).setOrigin(0).setInteractive().setScale(0.05);
      var floor2icon = this.add.image(32, 130, 'floor1icon', 0).setOrigin(0).setInteractive().setScale(0.05);
      var floor3icon = this.add.image(32, 180, 'floor1icon', 0).setOrigin(0).setInteractive().setScale(0.05);
      var demosContainer = this.add.container(32, 70, [ demosWindow, floor0icon, floor1icon, floor2icon, floor3icon ]);

      demosContainer.setInteractive(new Phaser.Geom.Rectangle(0, 0, demosWindow.width, demosWindow.height), Phaser.Geom.Rectangle.Contains);

      this.input.setDraggable(demosContainer);

      demosContainer.on('drag', function (pointer, dragX, dragY) {

          this.x = dragX;
          this.y = dragY;

      });

      floor0icon.on('pointerup', function () {

          this.createWindow(Floor_01_Map);

      }, this);
        
      floor1icon.on('pointerup', function () {

          this.createWindow(Floor_01_Map);

      }, this);

      floor2icon.on('pointerup', function () {

          this.createWindow(Floor_01_Map);

      }, this);


      floor3icon.on('pointerup', function () {

          this.createWindow(Floor_01_Map);

      }, this);
  }

  createWindow (func)
  {
      var x = Phaser.Math.Between(400, 600);
      var y = Phaser.Math.Between(64, 128);

      var handle = 'window' + this.count++;

      var win = this.add.zone(x, y, func.WIDTH, func.HEIGHT).setInteractive().setOrigin(0);

      var demo = new func(handle, win);

      this.input.setDraggable(win);

      win.on('drag', function (pointer, dragX, dragY) {

          this.x = dragX;
          this.y = dragY;

          demo.refresh()

      });

      this.scene.add(handle, demo, true);
  }

  resize (width, height)
  {
      if (width === undefined) { width = this.this.config.width; }
      if (height === undefined) { height = this.this.config.height; }

      this.cameras.resize(width, height);
  }

}


class Floor_01_Map extends Phaser.Scene{ 
    
  constructor (handle, parent)
    {
        super(handle);
        
        this.parent = parent;
    }

    create ()
    {
        
        var bg = this.add.image(0, 0, 'floorMap', 0).setOrigin(0).setScale(1);
        this.map = this.make.tilemap({ key: 'map'});
        //The first parameter is the name of the tileset in Tiled and the second parameter is the key
        // of the tileset image used when loading the file in preload.
        var tiles = this.map.addTilesetImage('tiles', 'tileSet');
        this.map.createStaticLayer(0, tiles, 0,0);
        
        this.cameras.main.setViewport(this.parent.x, this.parent.y, Floor_01_Map.WIDTH, Floor_01_Map.HEIGHT);
        this.map.createStaticLayer(0, tiles, 0,0);

        

    }

    refresh ()
    {

        var worldPoint = this.input.activePointer.positionToCamera(this.cameras.main);

        this.cameras.main.setPosition(this.parent.x, this.parent.y);

        this.scene.bringToTop();

    }

}

Floor_01_Map.WIDTH = 10000;
Floor_01_Map.HEIGHT = 10000;

var config = {
  type: Phaser.WEBGL,
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: '#0055aa',
  parent: 'phaser-example',
  scene: PlayScene,
  physics: {
      default: 'arcade',
      arcade: {
          debug: false,
          gravity: { y: 0 }
      }
  }
};
