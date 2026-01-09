/*
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
*/

// Array
let arr = [10, 20, 30];
let [first, second] = arr;
console.log(first, second); // 10 20

// Object
let hero = {name: "Aria", level: 5};
let {name, level} = hero;
console.log(name, level); // Aria 5