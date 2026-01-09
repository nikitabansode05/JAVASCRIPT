
console.log("*******************FOR LOOP****************************");
for(let i=0;i<=5;i++){
    console.log(i);
}

console.log("*****************WHILE LOOP****************************");
var i=0;
while(i<=4){
    console.log(i);
    i++;
}

console.log("*******************FUNCTIONS****************************");
function add(a,b){
    return a+b;
}
console.log(add(1,3));

console.log("*******************ARROW FUNCTION***********************");
const sum = (a,b)=>a+b;
console.log(sum(8,2));

console.log("********************ARRAY*******************************");
var number=[1,2,3,4];
console.log(number);

var namelist=["Nikita","Mrunmayee","Arti"];
console.log(namelist);

namelist.forEach(n=>console.log(n));

console.log("*******************OBJECT******************************");
let person={
    age:15,
    name:"Nikita",
    nationality:"Indian",
    state:"Maharashtra"
};
console.log(person);
console.log(person.name);

console.log("**************************MINI CODE**************************");

let users = [
    {id:1,name:"Nikita",age:15,active:true},
    {id:2,name:"Pranita",age:20,active:false},
    {id:3,name:"Rutuja",age:21,active:true}
]

users.forEach(user =>{
    if(user.active){
    console.log(user.name+" is active");
}
})


// Array
let array=[10,20,30];
let [first,second,third] = array;
console.log(first,second,third);



// Object
let persondata={name:"Ariana Grande",age:30,location:"Seatle"}
let {name,age,location}=persondata;
console.log(name,age,location);


let nums = [1,2,3];
let doubled = nums.map(n => n*2);
console.log(doubled);

let numbers=[1,2,3,4,5,6,7,8,9,10];
let table = numbers.map(n=>n*3)
console.log(table);

let table_21 = numbers.map(n=>n*21);
console.log(table_21);


// Array spread
let arr1 = [1,2];
let arr2 = [...arr1, 3,4]; // [1,2,3,4]
console.log(arr2);

let namesOfStudent=["Nikita","Tina","Ariana","Selena"];
let additionalName=[...namesOfStudent,"Rohan","Justin"];
console.log(additionalName);



// Object spread
let obj1 = {x:1, y:2};
let obj2 = {...obj1, z:3}; // {x:1, y:2, z:3}
console.log(obj2);


// main.js
import { fire, ice } from './Spell.js';
fire(); // Casting Fire!
ice();  // Casting Ice!


let numbers = [1,2,3,4,5];

// map
let squared = numbers.map(n => n*n); // [1,4,9,16,25]

// filter
let even = numbers.filter(n => n%2===0); // [2,4]

// reduce
let sum = numbers.reduce((acc,n)=>acc+n,0); // 15