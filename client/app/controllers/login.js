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
        //http://stackoverflow.com/questions/24963677/can-i-use-ember-simple-auth-with-express-passport-session-domain-cookies
        //This is a magical link of goodness
        if(result.passport.user) {
          self.transitionTo('task-list');
        }
        console.log(result);
      });
    }
  }
})
