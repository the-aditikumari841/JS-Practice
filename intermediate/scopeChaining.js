var name = "Abc";
console.log("Line number 2" , name);

function sayName() {
    var name = "Mr. ABC";
    console.log("Line number 6 ", name);
    sayNameTwo();

    function sayNameTwo() {
        console.log("Line number 10", name);
    }
}

sayName();

