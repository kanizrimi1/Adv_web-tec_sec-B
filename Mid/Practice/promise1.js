/*console.log("Starting..")

function call()
{
    console.log("Hello world");
}

setTimeout  (call,4000);
console.log("The last line");

setTimeout(()=>{
    console.log("Inside function");
},2000);*/

//callbackfunction
/*
function sum(a,b){
    console.log(a+b);
}

function Calculator(a,b,Callback)
{
    Callback(a,b);
}

Calculator(1,2,sum);*/
/*
function Calculator(a,b,Callback)
{
    Callback(a,b);
}

Calculator(1,2,(a,b)=>
{
    console.log(a+b);
});

*/

/*function getData(dataId,getNextId)
{
    console.log("Getting data",dataId,"...")
    setTimeout(()=>
    {
        console.log("Data:",dataId)
        if(getNextId)
            {
                getNextId();
            }
        
    },4000);
}

getData(1,()=>
{ 
    console.log("Getting data 2.");
    getData(2,()=>
    {
        console.log("getting data 3.");
        getData(3);
    });
});*/

/*let promise=new Promise ((resolve,reject)=>
{
    console.log("I am a Promise");
    resolve(123);
})*/


function getData(Id)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            console.log("Id",Id);
            resolve("Success")
        },3000);
    });
}
