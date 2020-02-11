import Phaser from 'phaser';

export class <%= camelizedModuleName %>Scene extends Phaser.Scene {

  constructor() {
    super({
      key: '<%= camelizedModuleName %>'
    });
  }
}
