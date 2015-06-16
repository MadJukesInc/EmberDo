import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  completed: DS.attr('bool'),
  members: DS.attr('array'),
  owner: DS.attr('int')
});

DS.Model.reopenClass({
  FIXTURES: [
    {id: 1, title: 'test 1', completed: false, members: ['kyle'], owner: 1}
  ]
});
