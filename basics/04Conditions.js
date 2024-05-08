// Allow user to access course if he is:
// looged in from Email 
// looged in from google
// logged in from facebook

var email = true;
var facebook = false;
var google = false;

if(email)
{
    console.log("Login success");
}
if(facebook)
{
    console.log("Login success");
}
if(google)
{
    console.log("Login success");
}

if(email || google || facebook)
{
    console.log("Login Succcess");
}
