// let studentName:string="Rimi";
// let age:number=22;
// let cgpa:number=3.53;
// let isStudent:boolean=true;


// let dept ="CSE";

// let names:string[]=["Rimi","Princess"];
// names.push("rimi");
// let marks:number[]=[20,30,40];
// ///////////////object//

// const student ={
//     name:"Rimi",
//     id:25,
//     cgpa:3.53,

// };

// console.log(student.name);

/////interface-blupeprint//////////

// interface Student{
//     name:String;
//     id:number;
//     cgpa?:number;

// }


// const student:Student={
//     name:"Rimi",
//     id:23,
//     cgpa:3.53,
// };

// console.log(student.cgpa);

///////Function
// function add(a:number,b:number):number
// {
//     return a+b;
// }

// let sum:number=add(10,4)
// console.log(sum);

// function printName(name:string):void{
//     console.log(name);
// }

// printName("Rimi");

// ////////function in interface

// interface Student
// {
//     name:string;
//     id:number;
//     cgpa:number;
// }

// function displayStudent(student:Student):void{
//     console.log(student.name);
//     console.log(student.id);
//     console.log(student.cgpa);
// }

// const student:Student=
// {
//     name:"Rimi",
//     id:23,
//     cgpa:3.53,

// };

// displayStudent(student);


////////////////Union

// let id:number|string;
// id=23;
// id="23";

// console.log(id);


// function Student(Id:number|string):void
// {

//     console.log(id);
// }

// Student("23");

// type  Status="active"|"inactive";

// let student:Status;

// student= "active";
// console.log(student);

// class student
// {
//     name:string;
//     id:number;
//     cgpa:number;


//     constructor(name:string,id:number,cgpa:number){
//         this.name=name;
//         this.id=id;
//         this.cgpa=cgpa;
//     }

//     displayinfo():void{
//         console.log("Name:",this.name);
//         console.log("Id:",this.id);
//         console.log("Cgpa",this.cgpa);
//     }

    
// }
// const s1=new student("rimi",23,3.54);

// s1.displayinfo();


// class BankAccount{
//     private balance:number;

//     constructor(balance:number)
//     {
//         this.balance=balance;

//     }

//     deposite(amount:number):void
// {
//     this.balance+=amount;
// }

// getBalance():number
// {
//     return this.balance;
// }



// }

// const account1=new BankAccount(10000);
// account1.deposite(500);
// console.log(account1.getBalance);


/////////Async and await

// async function getName():Promise<string>
// {
//     return "RImi";
// }
// async function main():Promise<void>

// {
//     let name= await getName();
//     console.log(name);
// }

// main();



// interface Student
// {
//     name:string;
//     id:number;
// }

// async function getStudent():Promise<Student>
// {
//     return {
//         id:23,
//         name:"rimi",
//     }
// }


// console.log(getStudent());

//////type parameter(GEneric)

// function getData<T>(data:T):T
// {
//     return data;
// }

// const Name = getData("Rimi");
// const age=getData(2);
// const Ok=getData(false);


// console.log(Name);
// console.log(age);
// console.log(Ok);


//////////Generic with interface///////////////////////
// interface Apiresponse<T>
// {
//     success:boolean;
//     data:T;

// }


// interface Student
// {
//     name:string;
//     id:number;
// }

// const response:Apiresponse<Student>=
// {
//     success:true,
//     data:{id:1,name:"rimi"}
// };

// console.log(response);




// type Student=
// {
//     id:number;
// }

// const s1:Student=
// {
//     id:10
// }

// console.log(s1);

    

///////////////////Alllllllllllllllllllllll/////////////////

interface Student
{
    name:string;
    id:number;
    cgpa:number;
}


async function getStudent():Promise<Student[]>
{
    return[
        {name:"rimi",
            id:23,
            cgpa:3.4,
        },
        {
            name:"Rimi",
            id:23,
            cgpa:3.5,
        }
    ];
}
console.log(getStudent());