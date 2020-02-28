ember-phaser
==============================================================================

An ember addon for embedding the Phaser3 game framework.  

This addon makes it easier for you to inject the Phaser3 game framework into your Ember application.

Making amazing cross-platform games is now easier than it’s ever been thanks to Phaser, an Open Source JavaScript game development library developed by Richard Davey and his team at Photonstorm. Games developed with Phaser can be played on any (modern) web browser, and can also be turned into native phone apps.

<a href="https://photonstorm.github.io/phaser3-docs/index.html" target="_new">Phaser Documentation</a>



Compatibility
------------------------------------------------------------------------------

* Ember.js v3.8 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

Installation is easy!

```sh
ember install ember-phaser
```


Usage
------------------------------------------------------------------------------

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



Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
