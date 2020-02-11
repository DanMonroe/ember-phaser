// BEGIN-SNIPPET component-demo1.js
import Component from '@ember/component';
import { inject as service } from '@ember/service';
import Phaser from "phaser";
import ExampleScene from "./example-scene1";

export default class Demo1Component extends Component {

  @service('game') emberGameService;

  config = {
    type: Phaser.AUTO,
    width: 600,
    height: 400,
    parent: 'gameContainer',
    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
        gravity: { y: 0 }
      }
    },
    scene: ExampleScene
  };

}
  // END-SNIPPET
