import { Scene } from 'phaser'
import floor0iconBTN from '@/game/assets/Floor_0.png'
import floor1iconBTN from '@/game/assets/Floor_1.png'
import floor2iconBTN from '@/game/assets/Floor_2.png'
import floor3iconBTN from '@/game/assets/Floor_3.png'
import FloorMapIcon from '@/game/assets/McM1.jpg'
import tileset from '@/game/assets/bw2.png'
import dude from '@/game/assets/phaserguy.png'//change
import map from '@/game/assets/mapFinal.json'
import moveBTN from '@/game/assets/MoveBTN.png'
import elevator from '@/game/assets/elevator3.png'//change
import restroom from '@/game/assets/restroom3.png'//change
import restroomBTN from '@/game/assets/routeBtn.png'
import btnCont from '@/game/assets/phaserUIbox.png'
import floor0PNGv2 from '@/game/assets/Floor0-v2.png'
import floor3PNGv4 from '@/game/assets/Floor3-v4.png'
import floor1PNGv4 from '@/game/assets/Floor1-v4.png'
import floor2PNGv4 from '@/game/assets/Floor2-v4.png'
import toArrow from '@/game/assets/toArrow.png'
import fromArrow from '@/game/assets/fromArrow.png'

export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload ()
  {
      this.load.image('floor0icon', floor0iconBTN);
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
      this.load.image('floor0PNGv2',floor0PNGv2);
      this.load.image('floor3PNGv4',floor3PNGv4);
      this.load.image('floor1PNGv4',floor1PNGv4);
      this.load.image('floor2PNGv4',floor2PNGv4);
      this.load.image('fromArrow',fromArrow);
      this.load.image('toArrow',toArrow);
  }

  create () {
    this.scene.start('PlayScene')
  }
}
