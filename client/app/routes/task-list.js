import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function (controller, model) {
    controller.set('title', 'Task List');
    controller.set('tasks', this.store.find('task'));
    controller.set('users', this.store.find('user'));
  }
});
