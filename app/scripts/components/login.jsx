var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');



var User = require('../models/user').User;
var UserCollection = require('../models/user').UserCollection;
var setupAjax = require('../utilities');
var apiUrl = 'https://tiny-parse-server.herokuapp.com';

console.log(setupAjax);

class LoginLayout extends React.Component{
  handleSignUp(e){
    e.preventDefault();
    console.log('hey idiot');
    var user = {
      username: $('#signup-email').val(),
      password: $('#signup-password').val(),
    }

    console.log(user);
    $.post(apiUrl + '/users', user).then(function(data){
      console.log(data);
      setupAjax(data);
    });

  }
  handleLogin(e){
    e.preventDefault();
    var username = $('#email-login').val(),
        password = $('#password-login').val();


    var url = apiUrl + '/login?username=' +
            encodeURIComponent(username) + '&' +
            'password=' + encodeURIComponent(password);
console.log(url);
    $.get(url).then(function(data){
      console.log(data);
      var userData = JSON.stringify(data);
      localStorage.setItem('user', userData);
      console.log(userData);
      setupAjax(data);
    });

  };
  render(){
    return(
      <div className="container login-layout">
          <div className="row">
              <div className="col-md-6 text-center">
                  <h1>Log In to Tell Your Fish Tail</h1>
                  <form onSubmit={this.handleLogin.bind(this)} id="login">
                      <div className="form-group">
                          <label htmlFor="email-login">E-mail Address</label>
                          <input className="form-control" name="email" id="email-login" type="email" placeholder="email" />
                      </div>
                      <div className="form-group">
                          <label htmlFor="">Password</label>
                          <input id="password-login" className="form-control" type="text" name="email" placeholder="dont share this" />
                      </div>
                      <input className="btn btn-primary" type="submit" name="" value="Log In" />
                  </form>
            </div>
              <div className="col-md-6 text-center">
                  <h1>No Account??? Sign up Now!!</h1>
                  <form onSubmit={this.handleSignUp.bind(this)} id="signup">
                      <div className="form-group">
                          <label htmlFor="">E-mail Address</label>
                          <input id="signup-email" className="form-control" type="text" name="email" placeholder="email address" />
                      </div>
                      <div className="form-group">
                          <label htmlFor="">Password</label>
                          <input id="signup-password" className="form-control" type="text" name="email" placeholder="dont share this" />
                      </div>
                      <input className="btn btn-primary" type="submit" name="" value="sign up" />
                  </form>
              </div>
          </div>
      </div>
    )
  }
};
module.exports = {
  LoginLayout
};
