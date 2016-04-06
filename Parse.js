var Observable = require("FuseJS/Observable");
var Parse = require("Parse").Parse;

Parse.initialize("IgpcXNJM4eQYXkJN6F2fMMS2g7MIFM1zuXFwyMoI", "xbwRAD6thmNAN9EnRp9iqeZ8MPac54TN1Y6HFXtl");

var username = Observable("");
var password = Observable("");
var email = Observable("");

function signup(){
    var user = new Parse.User();
    user.set("username", username.value);
    user.set("password", password.value);
    user.set("email", email.value)
    user.signUp(null, {
        success: function(user){
            debug_log("Signed up user");
        },
        error: function(user, eror){
            debug_log("error while signing up");
        }
    });
}

module.exports = {
    username: username,
    password: password,
    email: email,
    signup: signup
};