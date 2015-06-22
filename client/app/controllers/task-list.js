import Ember from 'ember';

export default Ember.ArrayController.extend({
  init: function () {
    this.set('formTask', Ember.Object.create());

  },

  actions: {
    addTask: function () {
      var newTask = {};

      newTask.title = this.get('formTask.title');
      newTask.owner = this.get('formTask.owner');
      newTask.completed = false;

      var record = this.store.createRecord('task',newTask).save();
      this.set('formTask.title', '');
    }
  }
});
