import Component from '@glimmer/component';
import { action } from '@ember/object';
import Phaser from "phaser";

export default class EmberPhaserComponent extends Component {

  game = undefined;

  config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: 'emberPhaserContainer',
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 },
        debug: false
      }
    },
    scene: {
      preload: this.preload,
      create: this.create
    },
    //  Open the Dev Tools
    //  The version of your game appears after the title in the banner
    title: 'Ember Phaser',
    version: '1.0'

    // scene: [BootScene, GameboardScene],
    // plugins: {
    //   scene: [{
    //     key: 'rexBoard',
    //     plugin: rexBoardPlugin,
    //     mapping: 'rexBoard'
    //   }]
    // },
    // pixelArt: true
  };

  preload() {
    console.log('preload');
  }

  create() {
    console.log('create');
    const text = this.add.text(80, 550, '', { font: '16px Courier', fill: '#ffffff' });

    text.setText([
      'Game Title: ' + this.game.config.gameTitle,
      'Version: ' + this.game.config.gameVersion
    ]);
  }

  @action
  setup() {

    this.game = new Phaser.Game(this.config);

    console.log('game', this.game)
    // new PhaserGame(this.game, element.clientHeight - 68, element.clientWidth);

    if (this.onSetup) {
      this.onSetup();
    }
  }

  @action
  teardown(element) {
    if (this.onTeardown) {
      this.onTeardown();
    }

  }

}
