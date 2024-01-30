console.log("Hi my name is Martin");

let name = "Frank"
let age = 30
console.log(`Hi my name is ${name} and i am ${age} years old`)
    //console.log( Hi, my name is "+ name + and "i am"+ age + "old")


let players = ["Martin", "Thomas", "Peter", "mathias", "Niki"]
console.log(players[2])

let autos = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"]
autos.sort()
console.log(autos)

let fruit = ["apple", "banana", "kiwi", "mango", "pear"]
fruit.push("orange");
console.log(fruit);

fruit.shift()
console.log(fruit)

fruit.unshift("apple");
fruit.pop()
console.log(fruit)

fruit.shift()
fruit.unshift("strawberry")
console.log(fruit)

let animals = ["monkey", "horse", "dog", "elephant", "giraffe"]
animals.shift()
console.log(animals)

animals.unshift("cat")
console.log(animals)

animals.pop()
console.log(animals)

animals.push("tiger")
console.log(animals)

animals.sort().reverse()
console.log(animals)

let fruits = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon"
let fruitsArr = fruits.split("/")
console.log(fruitsArr)

let joinedArr = fruitsArr.join("\n")
console.log(joinedArr)



let a = 7;

let b = 14;

let c = "21";

let d = '36';

let e = 42;
let sum = a + b + parseInt(c) + parseInt(d) + e



let f = '1';

let g = 15;

let h = 8;

let i = "1";
let sum2 = parseInt(f) + g + h + parseInt(i)


let multi = sum * sum2;
console.log(multi / sum);
console.log(multi / sum2);




let people = ["Greg”", "“Mary", "Devon", "James"];
people.shift()
console.log(people)

people.unshift("Matt")
console.log(people)

people.pop()
console.log(people)

people.push("Frank")
console.log(people)

let newPeople = people.slice(2);
console.log(newPeople);

console.log(people.indexOf('foo'));

people.splice(0, 4, "Greg”", "“Mary", "Devon", "James");
console.log(people)

people.splice(2, 1, "Elizabeth", "Anna")
console.log(people);

let arry = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 25, 7],
    [21, 4, 6, 17],
    [3, 5, 26, 3]
];
console.log(arry[1][1], arry[4][2], arry[5][3], arry[2][3], arry[2][1]);

let frank = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up"

let newFrank = frank.split("$").join(" ")
console.log(newFrank);