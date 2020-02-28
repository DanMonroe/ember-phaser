import Component from '@glimmer/component';
import { action } from '@ember/object';
import Phaser from "phaser";

/**
 A component that renders a container for a Phaser game.

 ```hbs
 <EmberPhaser
    class="board"
    @phaserContainer="gameContainer"
    @config={{this.config}}
    @ember={{this.emberGameService}}
 />
 ```

 @class EmberPhaserComponent
 @public
 */
export default class EmberPhaserComponent extends Component {

  phaser = undefined;

  /**
   An Ember Service that will be embedded within the Phaser game instance.  On the scene object, this will be `this.game.ember`

   @argument emberGame
   @type Service
   */
  ember = undefined;

  /**
   A JSON object containing the Phaser game config options.

   @argument config
   */

  config = undefined;

  /**
   The html target id where the Phaser canvas will be inserted

   @argument phaserContainer
   @type String?
   */
  phaserContainer = 'phaserContainer';

  /**
   A callback executed after the Phaser.Game constructor has been called.  It will pass in the Phaser game instance as a parameter.

   @argument setup
   @type Action
   */
  @action
  setup() {
    this.phaser = new Phaser.Game(this.args.config);

    // This allows us to "inject" an ember service into Phaser classes.
    // Inside the ember service, you can inject pretty much anything
    if (this.args.ember) {
      this.phaser.ember = this.args.ember;
    }

    if (this.args.setup) {
      this.args.setup(this.phaser);
    }
  }

  /**
   A callback executed on teardown.  It will pass in the Phaser game instance as a parameter.

   @argument teardown
   @type Action
   */

  @action
  teardown() {
    if (this.args.teardown) {
      this.args.teardown(this.phaser);
    }
  }

}
