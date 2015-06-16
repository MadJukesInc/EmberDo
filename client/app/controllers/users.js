import Ember from 'ember';

export default Ember.ArrayController.extend({
  editUsers: false,

  actions: {
    deleteUser: function (user) {
      //this.model.delete(user);
    },
    addUser: function () {
      //var newUser = {};
      //
      //this.model.create(newUser);
    }
  }
});
