// BEGIN-SNIPPET example-scene2.js
import Phaser from "phaser";

export default class ExampleScene extends Phaser.Scene {

  preload () {
    this.load.image('hero-texture', '/images/construction.png');
    this.load.image('sky', '/images/sky.png');
    this.load.image('ground', '/images/platform.png');
    this.load.image('star', '/images/star.png');
    this.load.image('bomb', '/images/bomb.png');
  }

  create () {
    this.game.ember.createDemo2Scene(this);
  }

  update() {
    this.game.ember.moveTomster();
  }

}
// END-SNIPPET
