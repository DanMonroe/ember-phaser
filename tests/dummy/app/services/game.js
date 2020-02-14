import Service from '@ember/service';
import Phaser from "phaser";

export default class GameService extends Service {

  bulletFired(bullet) {
    console.log("Look out, it's a", bullet);
  }

  // Demo 2 ============================================================
  // BEGIN-SNIPPET service-demo2.js
  demo2Scene = undefined;

  createDemo2Scene(scene) {
    this.demo2Scene = scene;

    //  A simple background for our game
    this.demo2Scene.add.image(400, 300, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    this.demo2Scene.platforms = this.demo2Scene.physics.add.staticGroup();

    //  Here we create the ground.
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    this.demo2Scene.platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    //  Now let's create some ledges
    this.demo2Scene.platforms.create(600, 400, 'ground');
    this.demo2Scene.platforms.create(50, 250, 'ground');
    this.demo2Scene.platforms.create(750, 220, 'ground');

    // The player and its settings
    this.demo2Scene.player = this.demo2Scene.physics.add.image(100, 450, 'tomster');
    this.demo2Scene.player.setScale(0.1);

    //  Player physics properties. Give the little guy a slight bounce.
    this.demo2Scene.player.setBounce(0.2);
    this.demo2Scene.player.setCollideWorldBounds(true);


    //  Input Events
    this.demo2Scene.cursors = this.demo2Scene.input.keyboard.addKeys('W,A,D,space');

    //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
    this.demo2Scene.stars = this.demo2Scene.physics.add.group({
      key: 'star',
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 }
    });

    this.demo2Scene.stars.children.iterate( (child) => {

      //  Give each star a slightly different bounce
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    this.demo2Scene.bombs = this.demo2Scene.physics.add.group();

    //  The score
    this.demo2Scene.scoreText = this.demo2Scene.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });

    // The level
    this.demo2Scene.levelText = this.demo2Scene.add.text(630, 16, 'Level: 1', { fontSize: '32px', fill: '#000' });

    //  Collide the player and the stars with the platforms
    this.demo2Scene.physics.add.collider(this.demo2Scene.player, this.demo2Scene.platforms);
    this.demo2Scene.physics.add.collider(this.demo2Scene.stars, this.demo2Scene.platforms);
    this.demo2Scene.physics.add.collider(this.demo2Scene.bombs, this.demo2Scene.platforms);

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    this.demo2Scene.physics.add.overlap(this.demo2Scene.player, this.demo2Scene.stars, this.collectStar, null, this);

    this.demo2Scene.physics.add.collider(this.demo2Scene.player, this.demo2Scene.bombs, this.hitBomb, null, this);
  }


  collectStar(player, star) {
    star.disableBody(true, true);

    //  Add update the score
    this.demo2Scene.score += 10;
    this.demo2Scene.scoreText.setText('Score: ' + this.demo2Scene.score);

    if (this.demo2Scene.stars.countActive(true) === 0) {

      //  Update the level
      this.demo2Scene.level += 1;
      this.demo2Scene.levelText.setText('Level: ' + this.demo2Scene.level);


      //  A new batch of stars to collect
      this.demo2Scene.stars.children.iterate((child) => {

        child.enableBody(true, child.x, 0, true, true);

      });

      const x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

      const bomb = this.demo2Scene.bombs.create(x, 16, 'bomb');
      bomb.setBounce(1);
      bomb.setCollideWorldBounds(true);
      bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    }
  }

  hitBomb (player) {
    this.demo2Scene.physics.pause();

    player.setTint(0xdd0000);

    this.demo2Scene.gameOver = true;
  }
  // END-SNIPPET
  // Demo 2 ============================================================
}
