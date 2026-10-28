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

/*
function getData(Id)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            console.log("Id",Id);
            if(Id>10){resolve("Success");}
            else{reject("reject");}
        },9000);
    });
}
*/

/*
function getData(Id)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            console.log("Id:",Id);
            
                resolve("Found");
            
        },7000);
    });
}*/

// const getPromise=()=>
// {
//     return new Promise((resolve,reject)=>
//     {
//         console.log("Promise Started");
//         resolve("promise resolved");

//     });
// };

// let promise = getPromise();
// promise.then((res)=>
// {
//     console.log("Promise fullfilled",res);
// });


// promise.catch((err)=>
// {
//     console.log("promise rejected",err);
// });



//-----------Promise Chain-------------

// function async1()
// {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>
//         {
//             console.log("Data 1");
//             resolve("Data1 Resolved Successfully");
//         },4000 );

//        });
// };


// function async2()
// {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>{
//             console.log("Data2");
//             resolve("Data2 Resolved Successfully");
//         },4000);
//     });
// };

// console.log("Data Fetching........")
// let d1= async1();
// d1.then((res)=>
// {
//     console.log("Resolved",res);
//     console.log("Fetching 2 started");
// let d2=async2();
// d2.then((res)=>
// {
//     console.log("Resolved",res);
// });

// });

// function getData(ID){
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>
//         {
//             console.log("Data:",ID);
//             resolve("Success");
//         },4000);
//     });
// };

// getData(1).then((res)=>
// {
//     console.log(res);
//     getData(2).then((res)=>
//     {
//         console.log(res);
//     });

// });

// getData(1).then((res)=>
// {
//     return getData(2);
// }).then((res)=>
// {
//     return getData(3);
// }).then ((res)=>
// {
//     console.log(res);
// })
/////////////async await//////////////////////////////////////////

// function api(){
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>{

//         console.log("Weather Data");
//         resolve("Success");
//     },2000);
// });
// };


// async function getapi()
// {
//     await api();
//     await api();
// }


// function getdata(Id)

// {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>
//         {
//             console.log("data",Id);
//             resolve("success");
//         },4000);
//     });
// };



// async function getAsync()
// {
//     await getdata(1);
    
//     await getdata(2);
// };


// console.log(1);

// setTimeout(()=>{
//     console.log(2);
// },2000);

// console.log(3);

function getStudentData(){
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
        const success = false;

        if(success)
        {
            resolve({
                id:23,
                name:"Rimi",
                dept:"cse",
                cgpa:3.53,
            });
        }
            else{
                reject("Failed ");
            }
        
    },4000);
});
}

async function displayStudent()
{
    try{
        console.log("Getting student data....");
        const result =await getStudentData();
        console.log("Student Info:");
        console.log("ID",result.id);
        console.log("NAme:",result.name);
        console.log("department:",result.dept);
        console.log("Cgpa:",result.cgpa);
    
    }

    catch(error){
        console.log("Error:",error);
    }


}

displayStudent();