import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function (controller) {
    controller.set('title', 'User List');
    controller.set('users', this.store.find('user'));

  },
  model: function () {
    return this.store.find('user');
  }
});
