import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  docsRoute(this, function() {
    this.route('introduction');
    this.route('ember-phaser');

    this.route('getting-started', function() {
      this.route('what-is-ember-phaser');
      this.route('installation');
    });

    this.route('configuration', function() {
      this.route('environment');
    });

    this.route('usage', function() {
      this.route('ember-phaser');
    });

    this.route('phaser');
  });

  this.route('not-found', { path: '/*path' });

  // this.route('phaser');
});

export default Router;
