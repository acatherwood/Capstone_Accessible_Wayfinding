import { Scene } from 'phaser'
// import sky from '@/game/assets/sky.png'
// import bomb from '@/game/assets/bomb.png'
// import thudMp3 from '@/game/assets/thud.mp3'
// import thudOgg from '@/game/assets/thud.ogg'

import tileset from '@/game/assets/bw.png'
import map from '@/game/assets/floor.json'
import dude from '@/game/assets/phaserguy.png'
import elevator from '@/game/assets/elevator2.png'
import restroom from '@/game/assets/restroom2.png'


export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    //this.scene = this; // Handy reference to the scene (alternative to `this` binding)
    this.load.image('tileset', tileset);
    this.load.tilemapTiledJSON('map', map);
    this.load.image('phaserguy', dude); 
    this.load.image('elevator', elevator);
    this.load.image('restroom', restroom);}

  create () {
    this.scene.start('PlayScene')
  }
}
