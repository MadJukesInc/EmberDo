import Ember from 'ember';

export default Ember.ArrayController.extend({
  init: function () {
    this.set('newUser', Ember.Object.create());

  },

  actions: {
    createUser: function () {
      var newUser = {};
      newUser.username = this.get('newUser.username');
      newUser.password = this.get('newUser.password');
      newUser.role = this.get('newUser.role');
      this.store.createRecord('user',newUser).save();
      this.set('newUser.username', '');
      this.set('newUser.password', '');
      this.set('newUser.role', '');
    }
  }
});
