import Ember from 'ember';

export default Ember.ArrayController.extend({
  init: function () {
    this.set('formTask', Ember.Object.create());

  },

  actions: {
    addTask: function () {
      var newTask = {};
      newTask.title = this.get('formTask.title');

      //newTask.owner = 1;
      //newTask.members = ['pineau'];
      newTask.completed = false;
      this.store.createRecord('task',newTask);
      this.set('formTask.title', '');
    }
  }
});
