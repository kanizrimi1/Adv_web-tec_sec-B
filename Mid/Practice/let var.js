var x=5;
var x=10;
console.log(x);

let y=10;
console.log(y);

const z=15;
console.log(z);


if(true)
{
    let a=20;
    console.log(a); // This will log 20
}
// This will throw an error because 'a' is not defined outside the block scope

if(true )
{
    var b=25;
    
}
console.log(b); 

if(true)
    {
        const c=30;
        console.log(c); // This will log 30
    }
    
