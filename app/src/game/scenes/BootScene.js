import { Scene } from 'phaser'
import floor1iconBTN from '@/game/assets/Floor_1.png'
import floor2iconBTN from '@/game/assets/Floor_2.png'
import floor3iconBTN from '@/game/assets/Floor_3.png'
import FloorMapIcon from '@/game/assets/McM1.jpg'
import tileset from '@/game/assets/bw2.png'
import dude from '@/game/assets/phaserguy.png'
import map from '@/game/assets/mapFinal.json'
import moveBTN from '@/game/assets/MoveBTN.png'
import elevator from '@/game/assets/elevator3.png'
import restroom from '@/game/assets/restroom3.png'
import restroomBTN from '@/game/assets/restroom.png'
import btnCont from '@/game/assets/btnCont.png'
import floor0PNG from '@/game/assets/Floor 0.png'
import floor1PNG from '@/game/assets/Floor 1.png'
import floor2PNG from '@/game/assets/Floor 2.png'
import floor3PNG from '@/game/assets/Floor 3.png'
import floor0PNGv2 from '@/game/assets/Floor0-v2.png'
import floor1PNGv2 from '@/game/assets/Floor1-v2.png'
import floor2PNGv2 from '@/game/assets/Floor2-v2.png'
import floor3PNGv2 from '@/game/assets/Floor3-v2.png'
import floor3PNGv3 from '@/game/assets/Floor3-v3.png'
import floor3PNGv4 from '@/game/assets/Floor3-v4.png'
import floor1PNGv4 from '@/game/assets/Floor1-v4.png'
import floor2PNGv4 from '@/game/assets/Floor2-v4.png'

export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload ()
  {
      this.load.image('floor1icon', floor1iconBTN);
      this.load.image('floor2icon', floor2iconBTN);
      this.load.image('floor3icon', floor3iconBTN);
      this.load.tilemapTiledJSON('map', map);
      this.load.image('floorMap', FloorMapIcon);
      this.load.image('tileset', tileset);
      this.load.image('moveBTN', moveBTN); 
      this.load.image('dude', dude);
      this.load.image('elevator', elevator);
      this.load.image('restroom', restroom);
      this.load.image('restroomBTN', restroomBTN);
      this.load.image('restroomBTN', restroomBTN);
      this.load.image('btnWindow', btnCont);
      this.load.image('floor1PNG',floor1PNG);
      this.load.image('floor2PNG',floor2PNG);
      this.load.image('floor3PNG',floor3PNG);
      this.load.image('floor0PNG',floor0PNG);
      this.load.image('floor0PNGv2',floor0PNGv2);
      this.load.image('floor1PNGv2',floor1PNGv2);
      this.load.image('floor2PNGv2',floor2PNGv2);
      this.load.image('floor3PNGv2',floor3PNGv2);
      this.load.image('floor3PNGv3',floor3PNGv3);
      this.load.image('floor3PNGv4',floor3PNGv4);
      this.load.image('floor1PNGv4',floor1PNGv4);
      this.load.image('floor2PNGv4',floor2PNGv4);
  }

  create () {
    this.scene.start('PlayScene')
  }
}
