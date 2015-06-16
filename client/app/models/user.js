import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  password: DS.attr('string'),
  role: DS.attr('string')
});

DS.Model.reopenClass({
  FIXTURES: [
    {id: 1, username: 'pineauk', password: 'blah', role:'admin'}
  ]
});
