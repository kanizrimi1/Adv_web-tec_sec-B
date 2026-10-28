/*console.log("one");
console.log("two");
console.log("three");


function hello{
    console.log("hello");
}

setTimeout("hello", 4000);

console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("hello");
}), 4000;

console.log("three");
console.log("four");*/



function calculator (a,b,sumCallback)
{
    sumCallback(a,b);
}

//calculator(1,2,sum);

calculator(1,2,(a,b)=>{
console.log(a-b);
});


const hi =()=>{
    console.log("hiii!");
}

setTimeout(hi,3000);
