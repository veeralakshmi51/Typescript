"use strict";
let Day = 'kjhgfd';
console.log(Day);
let userArray1 = ['karthi', 25, true];
console.log(userArray1);
userArray1[0] = 30;
console.log(userArray1);
let userArray = ['karthi', 25, true]; //Typed Array or Tuples
console.log(userArray);
userArray[0] = 'gayathri';
userArray[2] = false;
console.log(userArray);
let userTuple = ['kausik', 25, false]; //without using readonly
userTuple.push(5);
console.log(userTuple);
let userTuple1 = ['raju', 22, true]; // using readonly
//userTuple1.push(1)                                             //Property 'push' does not exist on type 'readonly [string, number, boolean]'.
console.log(userTuple1);
//named
let userTuple2 = ['ramu', 29, false];
console.log(userTuple2);
//Accessing named tuples /destructuring
let [username, age, isPresent] = userTuple2;
console.log(username);
let userName = "karthiga";
console.log(userName);
let userNames = ['mani', 'raji', 'rahul'];
console.log(userNames);
let user = { name: 'abi', age: 24, isPresent: true };
console.log(user);
let errorCode = '401';
errorCode = 401;
console.log(errorCode);
let userTuple3 = ['ramu', 29, true];
console.log(userTuple3);
//Typecasting
// in react use as keyword others use <>
//unknown string to string
let a = 'available';
console.log(a.length);
console.log(a.length);
//unknown number to string 
let b = 800;
console.log(b.length); //in number type we cannot use length property
console.log(b.length); // It prints the output as undefined because we cannnot typecasting the number into string
//Enums - Group of constants
//we can create enums using with number and string
//when we using enums in number the value will be automatically stores
//In this thing we can change the value too
//  enum Direction{
//     East,
//     South,
//     West,
//     North
//  }
// console.log(Direction.East);
var Direction;
(function (Direction) {
    Direction[Direction["East"] = 205] = "East";
    Direction[Direction["South"] = 206] = "South";
    Direction[Direction["West"] = 207] = "West";
    Direction[Direction["North"] = 208] = "North";
})(Direction || (Direction = {}));
console.log(Direction.East);
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["Unautherized"] = 401] = "Unautherized";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.ServerError);
//enums using with string
var Direction1;
(function (Direction1) {
    Direction1["East"] = "East";
    Direction1["West"] = "West";
    Direction1["South"] = "South";
    Direction1["North"] = "North";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.North);
const userinterface = {
    name: "Gayathri",
    age: 25
};
console.log(userinterface);
let add = (p1, p2) => {
    return p1 + p2;
};
console.log(add(4, 8));
const employee = {
    employeeId: 10,
    name: 'rahul',
    age: 27
};
console.log(employee);
//Typescript Classes
//simple class
class User1 {
    constructor(a) {
        this.id = a;
    }
}
let userobject = new User1(15); //object creation
console.log(userobject.id);
class Person {
    constructor(id, name) {
        this.getName = () => {
            return this.name;
        };
        this.id = id;
        this.name = name;
    }
}
let person = new Person(15, 'mahi'); //object creation
console.log(person.id);
console.log(person.getName());
class Person1 {
    constructor(age, department, id, name) {
        this.getDepartment = () => {
            return this.department;
        };
        this.getId = () => {
            return this.id;
        };
        this.age = age;
        this.department = department;
        this.name = name;
        this.id = id;
    }
}
let per = new Person1(25, 'Finance', 12, 'veera');
console.log(per.getDepartment());
console.log(per.name);
console.log(per.id);
// entends classes
class Student extends Person {
    constructor() {
        super(...arguments);
        this.studentId = 100;
    }
    print() {
        console.log(`The Student Name is ${this.name} and Id is ${this.studentId}`);
    }
}
let student = new Student(100, 'Kalpana');
student.print();
//Abstract Class
class Person2 {
}
class Student1 extends Person2 {
    constructor(x) {
        super();
        this.print = () => {
            console.log(this.name);
        };
        this.name = x;
    }
}
let studentobject = new Student1('bhavana');
studentobject.print();
//data modifier
//public, private and protected
//when we using public data modifier, we can access the parameter through out the program
//when we using protected keyword,we can access only inside the main class and subclasses
//when we using the private keyword, we can access only inside the class where we use that keyword
class Employee1 {
    constructor(x) {
        this.name = x;
    }
}
class Employee2 extends Employee1 {
    constructor() {
        super(...arguments);
        this.print = () => {
            console.log(this.name);
        };
        this.changeName = (name) => {
            this.name = name;
        };
    }
}
let empobject = new Employee2('kavi');
empobject.print();
empobject.changeName('kamini');
empobject.print();
empobject.name = 'yazhini';
empobject.print();
