var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var LoginLayout = require('./components/login.jsx').LoginLayout;
var TailLayout = require('./components/messages.jsx').TailLayout;

var AppRouter = Backbone.Router.extend({
  routes:{
    "": 'index',
    'tail/': 'tail'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(LoginLayout),
      document.getElementById('app')
    );
  },
  tail: function(){
    ReactDOM.render(
      React.createElement(TailLayout),
      document.getElementById('app')
    );
  },
});
var appRouter = new AppRouter();

module.exports = appRouter;
