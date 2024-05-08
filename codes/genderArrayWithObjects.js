const allusers = [{
    firstName : "abc1" ,
    gender : "male"
} , { firstName : "abc2" , 
gender : "male"} , 
{ firstName : "abc3" ,
gender : "female"}];

for(let i = 0 ; i<allusers.length; i++)
{
    if(allusers[i]["gender"] == "male")
    {
        console.log(allusers[i]["firstName"]);
    }
}