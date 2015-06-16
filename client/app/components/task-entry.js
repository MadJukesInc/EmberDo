import Ember from 'ember';


export default Ember.Component.extend({
  tagName: 'tr',
  addingMember: false,
  editingTitle: false,
  selectedMember: '',

  isOwner: function () {
    return this.get('task.owner') === 1;
  },

  actions: {
    toggleAddMember: function () {
      this.set('addingMember', true);
    },
    toggleTitleEdit: function () {
      this.set('editingTitle', true);
    },
    toggleCompleted: function (task) {
      var completed = !task.completed;
      this.set('task.completed', completed).save();
    },
    addMember: function (task) {
      this.get('task.members').addObject(this.get('selectedMember')).save();
      this.set('addingMember', false);
    },
    deleteTask: function (task) {
      this.store.deleteRecord(task);
    },
    removeMember: function (task, member) {
      this.get('task.members').removeObject(member).save();
    },
    updateTitle: function (task) {
      task.save();
      this.set('editingTitle', false);
    }
  }
})
;
