//write a program to find the biggest number in an array

let a = [1,4, 2, 9, 0, 7];
let temp = a[0];

for(let i = 0 ; i<a.length; i++)
{
    if (a[i] > temp)
    {
        temp = a[i];
    }
}

console.log("Biggest Number = " , temp);