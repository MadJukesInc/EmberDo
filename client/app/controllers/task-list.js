import Ember from 'ember';
//import lodash from 'lodash';


export default Ember.ArrayController.extend({
  init: function () {
    this.set('formTask', Ember.Object.create());
    //this.set('taskStore', this.get('tasks'));
    //console.log(this.store.find('task'))
  },

  actions: {
    addTask: function () {
      //console.log(this.get('formTask'));
      var newTask = {};
      newTask.title = this.get('formTask.title');

      newTask.owner = 1;
      newTask.members = ['pineau'];
      newTask.completed = false;
      //console.log(this.store)
      this.store.createRecord('task',newTask);
      this.set('formTask.title', '');
    }
  }
});
