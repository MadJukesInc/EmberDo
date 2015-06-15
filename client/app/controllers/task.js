import Ember from 'ember';
import 'lodash';
export default Ember.Controller.extend({
  addingMember: false,
  editingTitle: false,

  tasks: this.model.findAll(),

  actions: {
    toggleAddMember: function (task) {

    },
    toggleTitleEdit: function (task) {
      var title = task.get('title');
      this.model.update(task.id, task);
    },
    toggleCompleted: function (task) {
      task.completed = true;
      this.model.update(task.id, task);
    },
    addMember: function (task) {

    },
    addTask: function (task) {

    },
    deleteTask: function (task) {
      this.model.delete(task);
    },
    deleteMember: function (task, member) {
      var members = lodash.difference(task.members, member);
      task.members = members;
      this.model.update(task.id, task);
    },
    updateTitle: function (task) {

    }
  }
});
