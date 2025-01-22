// a method is a functions inside an object

// let student = {
//     Firstname:"Victor",
//     LastName:"Adekoya",
//     age:30,
//     Gender:"Male",
//     isstudent: true,
//     address:{
//         city:"portharcourt",
//         zip:500102
//     },
//     greet:function(){
//         return "hello" + this.Firstname
//     }

// }
// console.log(student);
// let fName = student.Firstname
// console.log(fName);
// student.Firstname = "victory"
// student.age = 75
// console.log(student);


// keys

let person = {
    name: "thomas",
    age : 75,
    gender : "male",
}
let keys = Object.keys(person);
// console.log(keys);
let number = keys.length
console.log(number);

// let str = "TheSonaOfMan?"
// let count = str.length
// console.log(count);