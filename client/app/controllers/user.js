import Ember from 'ember';

export default Ember.Controller.extend({
  editUsers: false,

  users: this.model.findAll(),

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
