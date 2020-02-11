'use strict';

module.exports = {
  description: 'Setup ember-phaser',

  normalizeEntityName() {},

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall(/*options*/) {
    return this.addPackagesToProject([
      { name: 'phaser', target: '^3.22.0' }
    ]);
  }
};
