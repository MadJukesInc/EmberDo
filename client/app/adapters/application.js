import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: 'http://localhost:8088'
});

//export default DS.FixtureAdapter;
