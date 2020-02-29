import config from '../../../../../config/environment';
// BEGIN-SNIPPET example-scene1.js
import Phaser from "phaser";
import Bullets from './bullets';

export default class ExampleScene extends Phaser.Scene {
  constructor () {
    super();

    this.bullets;
    this.ship;
  }

  preload () {
    this.load.image('bullet', `${config.rootURL}/images/bullet7.png`);
    this.load.image('ship', `${config.rootURL}/images/bsquadron2.png`);
  }

  create () {
    this.bullets = new Bullets(this);

    this.ship = this.add.image(400, 350, 'ship');

    this.input.on('pointermove', (pointer) => {

      this.ship.x = pointer.x;

    });

    this.input.on('pointerdown', (/*pointer*/) => {

      this.bullets.fireBullet(this.ship.x, this.ship.y);

    });
  }
}
// END-SNIPPET
