function cutSlice(str, start, end)
{
    console.log("Sliced String : ", str.slice(start, end));
}

function cutSubstr(str, start, end)
{
    console.log("Substring string : ", str.substr(start, end));
}

let stringToCut = "Helloooo World"
console.log("Original String : ", stringToCut);     //Original String :  Helloooo World

cutSlice(stringToCut, 0, 5);    //Sliced String :  Hello
cutSubstr(stringToCut, 0, 5);   //Substring string :  Hello

cutSlice(stringToCut, 2, 5);    //Sliced String :  llo
cutSubstr(stringToCut, 2, 5);   //Substring string :  llooo

function cutIt(str, start, end)
{
    let newStr= "";
    for (let i = 0; i < str.length; i++)
    {
        if (i >= start && i < end)
        {
            newStr = newStr + str[i];
        }
    }
    return newStr;
}


let functionCut = cutIt(stringToCut, 0, 5); 
console.log(functionCut);               //Hello
console.log(stringToCut.slice(0,5));    //Hello
