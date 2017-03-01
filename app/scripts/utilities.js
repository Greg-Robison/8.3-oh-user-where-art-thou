var $ = require('jquery');

function setupAjax(user){
  $.ajaxSetup({
    beforeSend: function(xhr){
      xhr.setRequestHeader("X-Parse-Application-Id", "tiygvl");
      xhr.setRequestHeader("X-Parse-REST-API-Key", "slumber");
      if(user){
        xhr.setRequestHeader("X-Parse-Session-Token", user.sessionToken)
      }
    }
});
}
setupAjax();
module.exports = setupAjax
// });
// var apiUrl = 'https://tiny-parse-server.herokuapp.com';
//
// $('#signup').on('submit', function(e){
//   e.preventDefault();
//   var username = $('#signup-email').val();
//   var password = $('#signup-password').val();
//   var user = {
//     username: username,
//     password: password
//   };
//
// $.post(apiUrl + '/users', user).then(function(data){
// });
//
// });
// $('#login').on('submit', function(e){
//   e.preventDefault();
//   var username = $('#login-email').val();
//   var password = $('#login-password').val();
//   var user = {
//     username: username,
//     password: password
//   };
// });
// module.exports = {
//
// }
