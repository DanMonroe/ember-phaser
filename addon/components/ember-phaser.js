import Component from '@glimmer/component';
import { action } from '@ember/object';
import Phaser from "phaser";

export default class EmberPhaserComponent extends Component {

  // The Phase game class
  game = undefined;

  phaserContainer = 'phaserContainer';

  @action
  setup() {
    this.game = new Phaser.Game(this.args.config);

    // This allows us to "inject" an ember service into Phaser classes.
    // Inside the ember service, you can inject pretty much anything
    if (this.args.emberGame) {
      this.game.emberGame = this.args.emberGame;
    }

    if (this.args.onSetup) {
      this.args.onSetup(this.game);
    }
  }

  @action
  teardown() {
    if (this.args.onTeardown) {
      this.args.onTeardown(this.game);
    }
  }

}
