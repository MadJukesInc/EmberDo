import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('users');
  this.route('login');
  this.route('task-list');

  this.route('404', {path: '/*404'});
});

export default Router;
