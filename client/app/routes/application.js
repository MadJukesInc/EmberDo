export default Ember.Route.extend({
  actions: {
    error: function onError(error, transition) {

      if (error && error.status === 400) {
        // error substate and parent routes do not handle this error
        return this.transitionTo('modelNotFound');
      }

      // Return true to bubble this event to any parent route.
      return true;
    }
  }
});
