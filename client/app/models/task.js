import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  completed: DS.attr('boolean'),
  members: DS.hasMany('user'),
  owner: DS.belongsTo('user')
});

DS.Model.reopenClass({
  FIXTURES: [
    {id: 1, title: 'test 1', completed: false, members: [1], owner: 1}
  ]
});
