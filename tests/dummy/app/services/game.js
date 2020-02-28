import Service from '@ember/service';
import Phaser from "phaser";

export default class GameService extends Service {

  bulletFired(bullet) {
    console.log("Look out, it's a", bullet);
  }

  // Demo 2 ============================================================
  // BEGIN-SNIPPET service-demo2.js
  scene = undefined;

  createDemo2Scene(scene) {
    this.scene = scene;

    this.createGroundAndLedges();

    this.createPlayer();

    this.createStars();

    this.createBombs();

    this.createScoreAndLevel();

    this.setupKeyboardControls();

    this.addCollisions();
  }

  createGroundAndLedges() {
    //  A simple background for our game
    this.scene.add.image(400, 300, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    this.scene.platforms = this.scene.physics.add.staticGroup();

    //  Here we create the ground.
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    this.scene.platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    //  Now let's create some ledges
    this.scene.platforms.create(600, 400, 'ground');
    this.scene.platforms.create(50, 250, 'ground');
    this.scene.platforms.create(750, 220, 'ground');
  }

  createPlayer() {
    // The player and its settings
    this.player = this.scene.physics.add.image(100, 450, 'hero-texture');
    this.player.setScale(0.1);

    //  Player physics properties. Give the little guy a slight bounce.
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
  }

  createStars() {
    //  Make stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
    this.scene.stars = this.scene.physics.add.group({
      key: 'star',
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 }
    });

    this.scene.stars.children.iterate( (child) => {

      //  Give each star a slightly different bounce
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });
  }

  createBombs() {
    this.scene.bombs = this.scene.physics.add.group();
  }

  createScoreAndLevel() {
    //  The score
    this.scene.score = 0;
    this.scene.scoreText = this.scene.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });

    // The level
    this.scene.level = 1;
    this.scene.levelText = this.scene.add.text(630, 16, 'Level: 1', { fontSize: '32px', fill: '#000' });
  }

  setupKeyboardControls() {
    //  Input Events
    this.scene.cursors = this.scene.input.keyboard.addKeys('W,A,D,space');
  }

  addCollisions() {
    //  Collide the player and the stars with the platforms
    this.scene.physics.add.collider(this.player, this.scene.platforms);
    this.scene.physics.add.collider(this.scene.stars, this.scene.platforms);
    this.scene.physics.add.collider(this.scene.bombs, this.scene.platforms);

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    this.scene.physics.add.overlap(this.player, this.scene.stars, this.collectStar, null, this);

    this.scene.physics.add.collider(this.player, this.scene.bombs, this.hitBomb, null, this);
  }


  collectStar(player, star) {
    star.disableBody(true, true);

    //  Add update the score
    this.scene.score += 10;
    this.scene.scoreText.setText('Score: ' + this.scene.score);

    if (this.scene.stars.countActive(true) === 0) {

      //  Update the level
      this.scene.level += 1;
      this.scene.levelText.setText('Level: ' + this.scene.level);


      //  A new batch of stars to collect
      this.scene.stars.children.iterate((child) => {

        child.enableBody(true, child.x, 0, true, true);

      });

      const x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

      const bomb = this.scene.bombs.create(x, 16, 'bomb');
      bomb.setBounce(1);
      bomb.setCollideWorldBounds(true);
      bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    }
  }

  hitBomb (player) {
    this.scene.physics.pause();

    player.setTint(0xdd0000);

    this.scene.gameOver = true;
  }

  moveTomster() {
    if (this.gameOver) {
      return;
    }

    if (this.scene.cursors.A.isDown) {
      this.player.setVelocityX(-260);
    } else if (this.scene.cursors.D.isDown) {
      this.player.setVelocityX(260);
    } else {
      this.player.setVelocityX(0);
    }

    if ((this.scene.cursors.W.isDown || this.scene.cursors.space.isDown) && this.player.body.touching.down) {
      this.player.setVelocityY(-450);
    }
  }

  // END-SNIPPET
  // Demo 2 ============================================================
}
