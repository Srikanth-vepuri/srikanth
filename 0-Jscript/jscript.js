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