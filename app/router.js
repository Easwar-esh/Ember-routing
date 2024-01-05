import EmberRouter from '@ember/routing/router';
import config from 'routing-practice/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // this.route('about');
  // this.route('favourite');
  // // Nested routes
  // this.route('posts', function () {
  //   this.route('new');
  //   // this.route('index');
  // });
  this.route('completed');
  this.route('active');
});
