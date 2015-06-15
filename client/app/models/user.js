import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr('number'),
  username: DS.attr('string'),
  password: DS.attr('string'),
  role: DS.attr('string')
});
