import Ember from 'ember';

export default Ember.ArrayController.extend({
  editUsers: false,

  users: model.findAll(),

  actions: {
    deleteUser: function (user) {
      this.model.delete(user);
    },
    addUser: function () {
      var newUser = {};

      this.model.create(newUser);
    }
  }
});
