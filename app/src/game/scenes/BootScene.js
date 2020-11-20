import { Scene } from 'phaser'
import floor1iconBTN from '@/game/assets/Floor_1.png'
import FloorMapIcon from '@/game/assets/McM1.jpg'
///import map from '@/game/assets/map.json'
import tiles from '@/game/assets/bw.png'
import dude from '@/game/assets/phaserguy.png'
import map from '@/game/assets/floor.json'


export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload ()
  {
      this.load.image('floor1icon', floor1iconBTN);
      this.load.tilemapTiledJSON('map', map);
      console.warn(map);
      this.load.image('floorMap', FloorMapIcon);
      this.load.image('tileSet', tiles);

      //replace when appropriate
      this.load.image('dude', dude);
  }

  create () {
    this.scene.start('PlayScene')
  }
}
