// Create an application with following rules:
// admin - gets full access 
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests 
// user - gets access to consume content 

var user = "abc";
switch (user)
{
    case "admin" :
        console.log("You get full access");
        break;
    case "subadmin" :
        console.log("gets access to create/delete courses");
        break;
    case "testprep" :
        console.log("You can get access to create/delete tests");
        break;
    case "user" :
        console.log("You get access to consume content");
        break;
    default :
        console.log("Trial User");
        break;
}

