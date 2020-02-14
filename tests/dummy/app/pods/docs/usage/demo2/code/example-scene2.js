// BEGIN-SNIPPET example-scene2.js
import Phaser from "phaser";

export default class ExampleScene extends Phaser.Scene {

  player;
  stars;
  bombs;
  platforms;
  cursors;
  score = 0;
  level = 1;
  gameOver = false;
  scoreText;

  preload () {
    this.load.image('tomster', '/images/construction.png');
    this.load.image('sky', '/images/sky.png');
    this.load.image('ground', '/images/platform.png');
    this.load.image('star', '/images/star.png');
    this.load.image('bomb', '/images/bomb.png');
  }

  create () {
    this.game.emberGame.createDemo2Scene(this);
  }

  update() {
    if (this.gameOver) {
      return;
    }

    if (this.cursors.A.isDown) {
      this.player.setVelocityX(-260);
    } else if (this.cursors.D.isDown) {
      this.player.setVelocityX(260);
    } else {
      this.player.setVelocityX(0);
    }

    if ((this.cursors.W.isDown || this.cursors.space.isDown) && this.player.body.touching.down) {
      this.player.setVelocityY(-450);
    }
  }

}
// END-SNIPPET
