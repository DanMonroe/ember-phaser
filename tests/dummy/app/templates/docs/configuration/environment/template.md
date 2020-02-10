# Environment options

Set these options via the `ENV['ember-phaser']` variable in your `config/environment.js` file:

```js
// config/environment.js
...
if (environment === 'production') {
  ENV['ember-phaser'] = {
    gameconfig: {
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
        }
      }
    }
}
```
