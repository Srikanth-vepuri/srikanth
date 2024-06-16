"keyword let"

/*let simpliflyconcept;
let value = true;
let name = 'jonas';
let anotherName = 'jonas';
simpliflyconcept = false ;
let salary_credited = 50000;

console.log(value);
console.log(name);
console.log(simpliflyconcept);

console.log('simplifyconcept: ' + simpliflyconcept);
console.log('firstname : ' +name+ " lastName : " +anotherName);
console.log(` salary : ${salary_credited}`);*/

"keyword const"

// const value = "okay";
// const name = "jonas";
// const lastName = " king";
// const $salary = "52000";
// const boolean = true;

// console.log('hi : ' +value);
// console.log("firstName : " +name+ " lastName :"+lastName);
// console.log(`salary : ${$salary}`);

"typeof keyword"

// const value = "okay";
// const number = 500;
// const content = true;
// console.log( "value : " + value+ " type of keyword : "+typeof value);
// console.log(typeof value);
// console.log(typeof number);
// console.log(typeof content);

"operator math"

// const now = 2000;
// const ageJonas = now - 1999;
// const ageKing = now - 1998;

// console.log("jonas age : " + ageJonas);
// console.log("ageKing : " + ageKing);
// console.log(ageJonas+ageKing);
// console.log(ageJonas/2, ageJonas*2,)
// console.log(2 ** 4);

// const firstName = "jonas";
// const lastName = "king";

// console.log(firstName+" "+ lastName);

"operator assigning"

// let x = 10 + 5;
// x += 10;
// x *= 2;
// x++;
// x--;
// console.log(x);

" comparsion operators "
//  console.log(21>20);
//  console.log(17>=18);
//  console.log(18!=10);
//  console.log(18===18);
//  console.log(18==18);

" operator presedence "
// const now = 20;
// const ageJonas = now - 18;
// const ageKing =  now - 17;

// console.log(ageJonas > ageKing);

// let x,y;
//  x = y = 25 - 10 - 5;
//  console.log(x,y);

//  const averageAge = ((ageJonas+ageKing)/2);
//  console.log(ageJonas,ageKing,averageAge);

 " strings and template literals"

// const firstName = "jonas";
// const job = 'teacher';
// const birthyear = 1991;
// const year = 1999;

// const data = "im "+ firstName + ' a '+ job + " and my age is "+ (year-birthyear);

// console.log(data);

// const JonasNew = `im ${firstName}, a ${job}`;
// console.log(JonasNew);

// console.log( `hi \n
//             hello \n
//            `)

"if/else statements"

// const age = 15;

// if (age > 18)
//     console.log("king start driving");
// else{
//     const yearsLeft = (18-age);
//     console.log(` king start driving after ${yearsLeft}`);
// }

// const birthYear = 2020;
// let value = 20;

// if (value == 2000){
//     value=19;
// }
// else{
//     value = 22;
// }
// console.log(value);

// let value = 20;

// if (value != 2000){
//     value = 19;
// }
// else{
//     value = 22;
// }
// console.log(value);

' type conversion and corecion '
// const inputYear = 1991;
// console.log(inputYear, typeof inputYear);
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// console.log(Number(19));
// console.log(typeof NaN);
// console.log(String('23'));

// console.log('im ' + 21+ 'years old');
// console.log('20'-'10'-5);

// " coerc "
// let n =  '1' + 1 ;
// n = n - 1;
// console.log(n, typeof n);

" truthy and falsy values "

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100; //here change the value(100) into zero
// if (money) console.log("dont spend all");
// else console.log("you get a job");

" Equality operators "

// const age = '18';
// if (age == 18)console.log('yes it is 18');
// if (age ===18)console.log("no age is 18");

// const favorite = Number(prompt("what is your number "));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite===21){
//     console.log("yes bro 21");
// }
// else if (favorite===19){
//     console.log("no its 19");
// }
// else {
//     console.log("none of above bro");
// }

" logical operators "

// const license = true;
// const vision = true;

// console.log(license&&!vision);
// console.log(license||!vision);
// console.log(!license);

// if (license&&vision) console.log("yes");
// else console.log("no");

" switch statement "

// let day = "friday";

// switch(day){
//     case "monday":
//         console.log("yes monday");
//         break;

//     case "tuesday":
//         console.log("yes tuesday");
//         break;

//     case "friday":
//         console.log("yay friday");
//         break;

//     default:
//         console.log("not day");
// }

"terinary operator "

// const age = 21; //in this (21>18) so first part executes.
// age >= 18 ? console.log('i have to ') : console.log('car console');

// check = true;
// console.log(check);
// let license = true;
// let test = false;

// if(!test){
//     console.log(license);
// }
// if(license) console.log("i can");


" functions "
" function definition "
// here logger() is used to call/ run/ invoking 
// function logger(){
//     console.log("this is function ")
// }

// function fruitmixer(apple,orange){
//     const juice = `juice with ${apple} apples and ${orange} oranges`;
//     return juice;
// }

// const applejuice = fruitmixer(5,0);
// console.log(applejuice);

// const orangejuice = fruitmixer(0,9);
// console.log(orangejuice);

" function declaration vs expressions "
//function declaration
// function calcAge(birthyear){
//     //function express
//     return 2000 - birthyear;
// }

// const age1 = calcAge(1991);
// console.log(age1);

" arrow functions "

// const yearsremain = (birthyear,firstname) =>{
//     const age = 2000 - birthyear;
//     const retirement = 65 - age;
//     return `${firstname} retire in ${retirement}`;
// }

// console.log(yearsremain(1951,'jonas'));

" reviewing functions "

// const calcAge = function (birthYear){
//     return 2000 - birthYear;
// }
// const remain = (birthYear,firstname) =>{
//     age = calcAge(birthYear);
//     retire = 66 - age;

//     if (retire>0){
//         return `${firstname} retires in ${retire}`;
//     } else{
//         return `${firstname}`;
//     }
// }
// console.log(remain(1951,'jonas'));

" intro arrays "

// const friends = ["one", "two", "three"];
// console.log(friends);
// console.log(friends[1]);

// const years = Array( 20, 30, 40, 50);
// console.log(years);
// console.log(years[3]);

// console.log(friends.length);
// console.log(friends.length-1);

// friends[2]= "king"
// console.log(friends);

" basic array operations / adding "
// const friends = [ "one", "two", "three"];
// console.log(friends);

// const newFriends = friends.push("four");
// console.log(newFriends);
// console.log(friends);

// console.log(friends.unshift("five"));
// console.log(friends);
// " removing elements "
// console.log(friends.pop());
// console.log(friends);

// console.log(friends.shift());
// console.log(friends);

// console.log(friends.indexOf("six"));
// console.log(friends.includes("seven"));

" intro ton objects "

// const array =[
//     'jonas',
//     'king',
//     2000-1991,
//     [ 'king', 'don', 'three']
// ];
// console.log(array);

// const jonas = {
//     firstName : 'one',
//     lastName : 'king',
//     age : 2000 - 1991,
//     friends: [ 'two', 'three', 'five']
// };
// console.log(jonas.firstName);
// console.log(jonas['lastName']);//  we can write like this also jonas['last'+'Name']
// console.log(jonas['friends']);

// const above = prompt('above content');
// if (jonas[above]){
//     console.log(jonas[above]);
// }else{
//     console.log('another cont');
// }
" declaring new property "
// jonas.location = 'here'; 
// jonas['odName'] = 'odi';

" object methods "

// const jonas = {
//     firstName : 'one',
//     lastName : 'king',
//     birthYear : 1991,
//     friends: [ 'two', 'three', 'five'],


// calc:function(){
//     this.age = 2000 - this.birthYear;
//     return this.age;
// },
// }
// console.log(jonas.calc());

" loops for " 
// for (let jonas = 1; jonas<=9; jonas++){
//     console.log(`jonas ${jonas}`);
// }
// const jonas = [ 'king','bong',
//                   2000-1991,
//                   true,
//                 ];

// for (let i = 0; i < jonas.length; i++){
//     console.log(jonas[i], typeof jonas[i]);
// }

// const years = [ 1997, 1991, 1996, 1998];
// const ages = [];
// for (let i = 0; i < years.length; i++){
//     ages.push (2000 - years[i]);
// }
// console.log(ages);


//Write a function that takes a single argument and returns the type of the argument. Test this function with different data types and log the results
//Write a function that takes an object and a new value, then updates the `name` property of the object to the new value. Test this function on the `student` object
//Write a while loop that prints numbers from 1 to 10
//Using a while loop, print the subjects in the `student` object until you find a specific subject (e.g., "Math"). Stop the loop when you find this subject
/*Create a program that uses a `for` loop to iterate from 1 to 20, a `while` loop inside it to print numbers until 10, and a `nested loop` to create a pattern like:
```
1
22
333
4444
...
``` */
//Write a function that takes a single argument and returns the type of the argument. Test this function with different data types and log the results
function findType(arg) {
    return typeof arg;
}

console.log(findType(5));
console.log(findType("Hello"));         
console.log(findType(5000));            
console.log(findType(null));             
console.log(findType(['jonas','king']));
console.log(findType({}));


//Write a function that takes an object and a new value, then updates the `name` property of the object to the new value. Test this function on the `student` object
function update(obj, newValue) {
    obj.name = newValue;
}

const student = {
    name: "John",
    age: 20,
    grade: "A"
};

console.log("Before update:", student.name);
update(student, "king");
console.log("After update:", student.name);    

//Using a while loop, print the subjects in the `student` object until you find a specific subject (e.g., "Math"). Stop the loop when you find this subject
const subject = {
    name: 'king',
    subjects:['machines','english','maths','anm'],
}

let i = 0;
while (i < subject.subjects.length){
    console.log(subject.subjects[i]);
    if(subject.subjects[i] === 'maths'){
        break;
    }
    i++;
}
//Write a while loop that prints numbers from 1 to 10
 let king = 1;

 while(king<=10){
    console.log('king :' + king);
    king++
 }