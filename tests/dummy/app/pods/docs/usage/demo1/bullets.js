// BEGIN-SNIPPET bullets.js
import Phaser from "phaser";
import Bullet from './bullet';

export default class Bullets extends Phaser.Physics.Arcade.Group {
  constructor (scene) {
    super(scene.physics.world, scene);

    this.createMultiple({
      frameQuantity: 6,
      key: 'bullet',
      active: false,
      visible: false,
      classType: Bullet
    });
  }

  fireBullet (x, y) {
    let bullet = this.getFirstDead(false);

    if (bullet) {
      bullet.fire(x, y);
    }
  }
}
// END-SNIPPET
