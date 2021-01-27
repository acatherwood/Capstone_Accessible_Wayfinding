import Phaser from 'phaser'
import BootScene from './scenes/BootScene'
import PlayScene from './scenes/PlayScene'



function launch(containerId) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
        parent: containerId,
        width: '100%',
        height: 90*8
    },
    
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: false
      }
    },
    scene: [BootScene, PlayScene]
  })
}

export default launch
export { launch }
