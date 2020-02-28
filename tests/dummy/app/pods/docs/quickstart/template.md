# Quickstart

## 1. Install ember-phaser

```
ember install ember-phaser
```

## 2. Create a new Phaser scene

```
ember generate phaser-scene test-scene
```

## 3. Insert the EmberPhase component into one of your templates. Pass in the Phaser config json object and a reference to an Ember service.

<aside><a href="https://photonstorm.github.io/phaser3-docs/Phaser.Core.Config.html" target="_new">https://photonstorm.github.io/phaser3-docs/Phaser.Core.Config.html</a></aside>

```hbs
<EmberPhaser
        @phaserContainer="gameContainer"
        @config={{this.emberGameService.config}}
        @ember={{this.emberGameService}}
/>
```

```js
@service('game') emberGameService;
```
