import Ember from 'ember';


export default Ember.Component.extend({
  classNameBindings: ['isCompleted:success:danger'],
  tagName: 'tr',
  addingMember: false,
  editingTitle: false,
  selectedMember: '',
  isCompleted: undefined,

  isOwner: function () {
    return this.get('task.owner') === 1;
  },

  initialize: function () {
    this.set('isCompleted', this.get('task.completed'));
    console.log(this.get('task'));
  }.on('init'),

  toggleCompleted: function () {
    this.set('task.completed', this.get('isCompleted'));
    this.get('task').save();
  }.observes('isCompleted'),

  actions: {
    toggleAddMember: function () {
      this.set('addingMember', true);
    },
    toggleTitleEdit: function () {
      this.set('editingTitle', true);
    },
    toggleCheckboc: function () {
      console.log(this.get('task.completed'));
      this.get('task').save();
    },
    addMember: function (task) {
      this.get('task.members').addObject(this.get('selectedMember'));
      this.get('task').save();
      this.set('addingMember', false);
    },
    deleteTask: function (task) {
      this.store.deleteRecord(task);
      task.save();
    },
    removeMember: function (task, member) {
      this.get('task.members').removeObject(member);
      task.save();
    },
    updateTitle: function (task) {
      task.save();
      this.set('editingTitle', false);
    }
  }
})
;
