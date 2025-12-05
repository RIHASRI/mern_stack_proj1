/*console.log("1"+2);
console.log("5"-2);
console.log("5"/2);
console.log(true-1);
console.log("explicit conversion:");
console.log(Number("123"));
console.log(Number("abc"));
console.log(String(123));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("hi"));
console.log(Boolean("123"));
console.log(5=="5");
console.log(true==1);

console.log(5==="5");
console.log(true===1);
;

let age=25;
age=30;//redeclare can t be done with let
console.log(age);//reassignment is possible

var age1=35;
var age1=40;//redeclare is possible with var
age1=45;//reassignment is possible
console.log(age1);

const age2=45;//redeclare and reassignment both are not possible with const
//age2=50; //error
console.log(age2);

console.log("hoisting will occur in var");
let z;
console.log(z);
z=5;
console.log(z);

function greet() {
    if(1){
        var count=20;//function scope
        let count1=30;//block scope
        const count2=40;//block scope
    }
    console.log(count2);
    
    
}
greet();

function greet1(){
    console.log("hello,this is a func declaration");
    
}
greet1();
sayhello();
function sayhello(){
    console.log("hello,this is a hoisted func declaration");
    

};
const greet2=function(){
    console.log("hello,this is a func expression");};
greet2();//func expression is not hoisted,call after declaration

const greetExp=function(){
    console.log("Hello,this is a func expression");
    
};
greetExp();//func expression is not hoisted,call after declaration


const greetNamed= function greetNamed(){
    console.log("Hello, this is a named func expression");

};
greetNamed();
    
function process(callback){
    console.log("processing");// calling the callback function
    callback();
}
function done(){
    console.log("done processing");
    
}
process(done);// passing function as an argument

//higher order function
function higherorder(func){
    console.log("processing");// calling the func passed
    func();
}
function sayhi(){
    console.log("done processing");
    
}
higherorder(sayhi);


//normal function
const greet1=function(name){
    return "Hello "+name;
}
//arrow function
console.log("---Arrow Function---");
const greetArrows = (name)=>{
    return "Hello "+name;
};
console.log(greet1("Max"));
console.log(greetArrows("Max"));


const friuts=["apple","banana","mango"];
const newlength=friuts.unshift("orange");//mutating method
console.log(friuts);
console.log(newlength);

const friuts1=["apple","banana","mango"];
const newlength1=friuts.shift();//remove first element mutating method
console.log(friuts);
console.log(newlength);

const friuts2=["apple","banana","mango"];
const newlength2=friuts.pop();//remove last element mutating method
console.log(friuts);
console.log(newlength);

let fruits=["apple","banana","mango","grapes","orange"];

//extracting a portion of an array
let sliced=fruits.slice(1,4);//non mutating method
console.log(fruits);
console.log(sliced);
//negative index count from end
let lasttwo=fruits.slice(-2);//non mutating method
console.log(lasttwo);//["grapes","orange"]

let fruitd=["apple","banana","mango","orange"];
console.log(fruitd.includes("banana"));
console.log(fruitd.includes("grapes"));



let numbers=[10,25,30,45,60];
//find first element greater than 40
let found=numbers.find(num=>num>40);
console.log(found);//45,first element satisfying the condition

let number1=[5,12,8,130,44];
let found1=number1.find(num=>num%2===0);
console.log(found1);//12  first even number

let numbers=[10,25,30,45,60]; 

let found=numbers.map(num=>num>40);
console.log(found);

let numbers2=[10,25,30,45,60];
let num=numbers2.map(num=>num+300);
console.log(num);

let persons=["kumar","arjun","hari"];
const addmr=persons.map(name=>"Mr. "+name);//transforming each element
console.log(addmr);

let age=[5,12,18,25,30];
let adults=age.filter(age=>age>=18);//filtering elements based on condition
console.log(adults);

let students=[
    {name:"kumar",age:20,grade:"A",},
    {name:"arjun",age:18,grade:"B"},
    {name:"hari",age:25,grade:"A"},
    {name:"sai",age:15,grade:"C"}
];
console.log(students);
const names=students.map(student=>student.name);
console.log(names);

let fr=["apple","banana","mango","orange"];
for(let f of fr){
    console.log(f);
    
}

let named=["kumar","arjun","hari"];
named.forEach(n => {
    
});
console.log("hello "+n);

let n=[10,20,30];
let t=n.reduce((sum,current)=>sum+current,0);
console.log(t);//60
*/

