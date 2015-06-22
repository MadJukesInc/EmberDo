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
    addMember: function (task) {
      this.get('task.members').addObject(this.get('selectedMember'));
      this.get('task').save();
      this.set('addingMember', false);
    },
    deleteTask: function (task) {
      //task.destroy();
      //var self = this;
      //_.forEach(this.get('task.members'), function (member) {
      //  self.get('task.members').removeObject(member);
      //});
      //this.get('task').save();
      this.store.deleteRecord(task);
      task.save();
    },
    removeMember: function (member) {
      this.get('task.members').removeObject(member);
      this.get('task').save();
    },
    updateTitle: function (task) {
      task.save();
      this.set('editingTitle', false);
    }
  }
})
;
