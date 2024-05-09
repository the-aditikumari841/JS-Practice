function findIndexofString(str1, str2) {
    console.log("",);
    console.log("Index of string '",str2, "' in ", "the string '", str1 , "' is :" , str1.indexOf(str2) );
}

findIndexofString("Hello World", "World");
findIndexofString("Hello World World", "World");
findIndexofString("Hello World", "Hello");
findIndexofString("Hello World", "dhfkwWorld");

function findLastIndexofString(str1, str2) {
    console.log("",);
    console.log("Index of last string '",str2, "' in ", "the string '", str1 , "' is :" , str1.lastIndexOf(str2) );
}

findLastIndexofString("Hello World World", "World");
findLastIndexofString("Hello World World World", "World");

