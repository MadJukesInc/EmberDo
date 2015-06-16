import Ember from 'ember';
//import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
//
//export default Ember.Controller.extend(LoginControllerMixin, {
//  authenticator: 'simple-auth-authenticator:oauth2-password-grant'
//});
export default Ember.Controller.extend({
  init: function () {
    this.set('userLogin', Ember.Object.create());
  },
  actions: {
    authenticate: function () {
      var user = this.get('userLogin').getProperties('username', 'password');
      var self = this;
      Ember.$.post('http://localhost:8088/external_login', user, function (result) {
        if(result.passport.user) {
          self.transitionTo('task-list');
        }
        console.log(result);
      });
    }
  }
})
