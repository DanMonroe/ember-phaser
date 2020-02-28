import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  docsRoute(this, function() {
    // this.route('installation');
    this.route('quickstart');

    this.route('usage', function() {
      this.route('demo1');
      this.route('demo2');
    });

    this.route('phaser');
  });

  this.route('not-found', { path: '/*path' });

});

export default Router;
