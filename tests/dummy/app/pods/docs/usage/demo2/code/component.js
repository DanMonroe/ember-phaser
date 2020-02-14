// BEGIN-SNIPPET component-demo2.js
import Component from '@ember/component';
import { inject as service } from '@ember/service';
import Phaser from "phaser";
import ExampleScene from "./example-scene2";

export default class Demo2Component extends Component {

  @service('game') emberGameService;

  config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'gameContainer',
    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
        gravity: { y: 500 }
      }
    },
    scene: ExampleScene
  };

}
  // END-SNIPPET
