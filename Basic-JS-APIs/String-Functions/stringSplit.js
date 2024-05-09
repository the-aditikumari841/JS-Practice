function strSplit(str, separator)
{
    return str.split(separator);
}

str = "Hello, my name is Code";
console.log(strSplit(str, " "));        //[ 'Hello,', 'my', 'name', 'is', 'Code' ]
console.log(strSplit(str, ","));        //[ 'Hello', ' my name is Code' ]

