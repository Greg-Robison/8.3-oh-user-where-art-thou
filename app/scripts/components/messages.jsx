var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');



var User = require('../models/user').User;
var UserCollection = require('../models/user').UserCollection;
var Tail = require('../models/message').Tail;
var TailCollection = require('../models/message').TailCollection;
var setupAjax = require('../utilities');
var apiUrl = 'https://tiny-parse-server.herokuapp.com';

class TailLayout extends React.Component{

  constructor(props){
    super(props);
    this.handleTailChange = this.handleTailChange.bind(this);
    this.addTail = this.addTail.bind(this);

    var self = this;
    var tailCollection = new TailCollection();
    tailCollection.fetch().done(function(){
      self.setState({tailCollection: tailCollection});
    });
    this.state = {
      tailCollection: tailCollection,
      message: ""
    };
  }

  handleTailChange(e){
    this.setState({message: e.target.value});
  }

  addTail(e){
    e.preventDefault();
    var user = (JSON.parse(localStorage.getItem('user')).username)

    this.state.tailCollection.create({message: this.state.message, user: user});

    this.setState({message: ''});
  }
  render(){
    var tails = this.state.tailCollection.map(function(tail){
      return(
        <li key={tail.cid}>{tail.get('message')}</li>
      )
    })

    return(
      <div className="container message-layout">
          <div className="row">
              <div className="col-md-12 text-center">
                  <h1>Submit Your Fish Tail</h1>
                  <form id="tail">
                      <div className="form-group col-md-6">
                          <input value={this.state.message} onChange={this.handleTailChange} className="form-control" type="text" name="Fish Tail" placeholder="Fishy Tail" />

                          <input onClick={this.addTail}className="btn btn-default" type="submit" name="" value="Submit Fish Tail" />
                      </div>
                </form>
                <form id="tail">
                    <ul className="form-group well col-md-6">
                      {tails}
                    </ul>
              </form>
              </div>
          </div>


          <div className="container footer">
              <div className="row">
                  <div className="col-md-12 text-center">
                      <img className="myfish" src="./images/myfish.jpg" alt="" />
                  </div>
              </div>
          </div>
      </div>
    )
  }

}

module.exports = {
  TailLayout
};
