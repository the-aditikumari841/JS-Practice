function replaceStr(str, target, replacement)
{
    console.log(str.replace(target, replacement));
}

let originalStr = "Hello World";

replaceStr(originalStr, "World", "Javasript");      //Hello Javasript
replaceStr(originalStr, "He", "Javascript");        //Javascriptllo World
replaceStr(originalStr, "Wofjkhsdlckwrld", "Javascript");       //Hello World