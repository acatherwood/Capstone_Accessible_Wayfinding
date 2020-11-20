import { Scene } from 'phaser'
import floor1iconBTN from '@/game/assets/Floor_1.png'
import FloorMapIcon from '@/game/assets/McM1.jpg'
import tileset from '@/game/assets/bw.png'
import dude from '@/game/assets/phaserguy.png'
import map from '@/game/assets/floor.json'
import moveBTN from '@/game/assets/MoveBTN.png'



export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload ()
  {
      this.load.image('floor1icon', floor1iconBTN);
      this.load.tilemapTiledJSON('map', map);
      this.load.image('floorMap', FloorMapIcon);
      this.load.image('tileset', tileset);
      this.load.image('moveBTN', moveBTN); 
      this.load.image('dude', dude);
  }

  create () {
    this.scene.start('PlayScene')
  }
}
