import { Scene } from 'phaser'


export default class PlayScene extends Phaser.Scene {

  constructor ()
  {
      super({ key: 'PlayScene' });

      this.count = 0;
  }

  preload ()
  {

      this.load.tilemapTiledJSON('floor01','src/assets/Floor01.json');
  }

  create ()
  {
       this.floor01 = tilemapTiledJSON('floor01');
  }
      

  update ()
  {

  }








