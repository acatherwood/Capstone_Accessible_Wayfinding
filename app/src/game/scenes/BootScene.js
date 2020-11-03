import { Scene } from 'phaser'
import floor1iconBTN from '@/game/assets/Floor_1.png'
import FloorMapIcon from '@/game/assets/McM1.jpg'
import map from '@/game/assets/Floor01TileLayer.json'
import tiles from '@/game/assets/gridtiles.png'


export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload ()
  {
      this.load.image('floor1icon', floor1iconBTN);
      this.load.tilemapTiledJSON('map', map);
      this.load.image('floorMap', FloorMapIcon, { frameWidth: 145, frameHeight: 145 });
      this.load.image('tileSet', tiles);
  }

  create () {
    this.scene.start('PlayScene');
    map.setCollisionBetween(1, 999, true, 'map');
    this.game.add.tilemapTiledJSON('map');
  }
}
