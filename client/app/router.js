import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('task');
  this.route('user');
  this.route('sign-in');
});

export default Router;
