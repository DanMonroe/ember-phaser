import config from '../../../../../config/environment';
// BEGIN-SNIPPET example-scene2.js
import Phaser from "phaser";

export default class ExampleScene extends Phaser.Scene {

  preload () {
    this.load.image('hero-texture', `${config.rootURL}/images/construction.png`);
    this.load.image('sky', `${config.rootURL}/images/sky.png`);
    this.load.image('ground', `${config.rootURL}/images/platform.png`);
    this.load.image('star', `${config.rootURL}/images/star.png`);
    this.load.image('bomb', `${config.rootURL}/images/bomb.png`);
  }

  create () {
    this.game.ember.createDemo2Scene(this);
  }

  update() {
    this.game.ember.moveTomster();
  }

}
// END-SNIPPET
