import Ember from 'ember';


export default Ember.Component.extend({
  tagName: 'tr',
  addingMember: false,
  editingTitle: false,

  isOwner: function () {
    return this.get('task.owner') === 1;
  },
  //users: store.find('user'),
  //filteredUsers: _.difference(users, task.members),

  actions: {
    toggleAddMember: function () {
      this.set('addingMember', true);
    }
    ,
    toggleTitleEdit: function () {
      this.set('editingTitle', true);
    }
    ,
    toggleCompleted: function (task) {
      task.completed = true;
      this.model.update(task.id, task);
    }
    ,
    addMember: function (task, member) {
      console.log(task);
      console.log(member);
      this.set('addingMember', false);
    }
    ,
    deleteTask: function (task) {
      this.store.deleteRecord(task);
    }
    ,
    removeMember: function (task, member) {
      var members = _.difference(task.members, member);
      //task.members = members;
      this.set('task.members', members);
    }
    ,
    updateTitle: function (title) {
      //task.set('title', title);
      //this.store.push('task', this.store.normalize('task', task));
      this.set('editingTitle', false);
    }
  }
})
;
