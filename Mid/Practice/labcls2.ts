interface Istudent{
    name:string;
    age:number;
    grade:number;
}
let studentName:string = "John Doe";
let studentAge:number = 20;
let studentGrade:number=3.00;

console.log("Name: " , studentName);
console.log("Age: " , studentAge);
console.log("Grade: " , studentGrade);

let a:number =10;
let b:number =20;
let sum:number = a+b;
console.log("Sum: " , sum);
console.log("Addition",a+b);
console.log("Sub",a-b);


function getStudentName():string{
    return "John Doe";
}

function getStudentAge():number{
    return 20;
}
function getStudentGrade():number{
    return 3.00;
}

function getStudentInfo():Istudent{
    const student:Istudent = {
        name: getStudentName(),
        age: getStudentAge(),
        grade: getStudentGrade()
    };
    console.log(  )
    console.log("Student Name: " , student.name);
    console.log("Student Age: " , student.age);
    console.log("Student Grade: " , student.grade);
    return student;
}