// 1 map

let arr=[1,2,3,4,5,6]

let newarr=arr.map(x => {
    return x*x;
})
console.log(newarr);

newarr[1]=9;
console.log(newarr);
console.log(arr);
//For primitive values (numbers, strings, booleans), the new array is independent; no references are shared.
 let person=[{
    name:"Rahin",
    age:22
 }]

let newperson=person.map(x => {
    return x
})
console.log(newperson);
newperson[0].age = 20;
console.log(newperson);
console.log(person);
//now for non primitive it holds the reference of the object so changing in newperson array affects person array
//{ name: "Rahin", age: 22 } this considered as indexsuch as newperson[0] 
//for example every {},{},{} is considered as index 0,1,2 so now use the index and key to change the value

// 2 Filter

let number=[1,2,3,4,5,6,15]

let newnum=number.filter(x => {
    return x>10;
})
console.log(newnum);

// there no much complex on this it just filter the array based on the condition it does not take reference for primitive datatype


const people = [
    { name: "Rahin", age: 22 },
    { name: "Sukin", age: 23 },
    { name: "Sebin", age: 24 }
];
const newpeople=people.filter(people => {
    return people.age>22;
})
console.log(newpeople);
newpeople[0].age = 20;
console.log(newpeople);
console.log(people);
// for non primitive datatype it has the same example as map()



//Reduce
let num=[1,2,3,4,5]

let sum=num.reduce((x,y) => {
    console.log("accumulator = " + x);
     console.log("currentNumber = " + y);
 
    
    return x+y;
})
console.log(sum);

//Reduce provide a single value
//And it takes two parameter one is accumulator and other is currentnumber (x,y)
//(ex)(accumulator,currentNumber),(x,y)


let number1 = [1, 2, 3, 4, 5, 6, 15];

let newnum1 = number1.filter(x => {
    return x % 2 == 0;
});

console.log(newnum1);
//1

let  fruits=["mango", "orange", "apple"]

let newfruits=fruits.map(x => {
    return x + "s";
})
console.log(newfruits);
 
//2
let greater=[10,11,12,89,35,156,199,25,32,87]
const newgreater=greater.filter(x =>{
    return x>80;
})
console.log(newgreater);

//3
let largest=[10,12,15,16,8,11];
const newlargest=largest.reduce((x,y) => {
    return x>y?x:y

})
console.log(newlargest);



