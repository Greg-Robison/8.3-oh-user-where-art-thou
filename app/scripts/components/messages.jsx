var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');



var User = require('../models/user').User;
var UserCollection = require('../models/user').UserCollection;
var setupAjax = require('../utilities');
var apiUrl = 'https://tiny-parse-server.herokuapp.com';

class MessageLayout extends React.Component{
  render(){
    return(
      <div className="container message-layout">
          <div className="row">
              <div className="col-md-12 text-center">
                  <h1>Submit Your Fish Tail</h1>
                  <form id="tail">
                      <div className="form-group">
                          <input className="form-control" type="text" name="Fish Tail" placeholder="Fish Tail" />
                      </div>
                      <input className="btn btn-default" type="text" name="" value="Submit Fish Tail" />
                  </form>
              </div>
          </div>


          <div className="container footer">
              <div className="row">
                  <div className="col-md-12 text-center">
                      <img className="myfish" src="./images/myfish.jpg" alt="">
                  </div>
              </div>
          </div>
      </div>
    )
  }

};
