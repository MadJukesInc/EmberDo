import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr('number'),
  title: DS.attr('string'),
  completed: DS.attr('bool'),
  members: DS.attr('array'),
  owner: DS.attr('int')
});
