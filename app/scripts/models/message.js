var Backbone = require('backbone');

var Tail = Backbone.Model.extend({
  idAttribute: 'objectId',
});

var TailCollection = Backbone.Collection.extend({
  model: Tail,
  url: 'https://tiny-parse-server.herokuapp.com/classes/Message'
});

module.exports = {
  Tail,
  TailCollection
};

// var tail = new Tail({message: 'here i am'});
//
// tailCollection.create(tail);
