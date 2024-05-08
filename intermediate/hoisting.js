// Global Context and Execution Context

var num = 2 ;

function sayMe() {
    console.log("Say me");
}

sayMe(); 

tipper("85");

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}
tipper(5);
tipper("5");
tipper("a");




//bigTipper("200");

var bigTipper = function (a)
{
    var bill = parseInt(a);
    console.log(bill + 15);
}

bigTipper("200");



console.log(name);
var name = "hitesh";

console.log(name);

function sayName() {
    var name = "Abc";
    console.log(name);
}

sayName();

console.log(name);

