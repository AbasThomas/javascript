// // // // // // // // // // let fisrtnum = 4
// // // // // // // // // // // let number = 2
// // // // // // // // // // if (fisrtnum %2 == 0 )  {
// // // // // // // // // //     console.log(" EVEN NUMBER ");
// // // // // // // // // // else 
// // // // // // // // // //     console.log("odd number ");
// // // // // // // // // // }

// // // // // // // // // // to check a vowel letter 
// // // // // // // // // let letters = "a"

// // // // // // // // // if (letters === 'a' || letters === 'e' || letters === 'i' || letters === 'o' || letters === 'u') {
// // // // // // // // //     console.log("Vowel");
// // // // // // // // // } else {
// // // // // // // // //     console.log("Consonant");
// // // // // // // // // }

// // // // // // // // // // // to check if a nubler is positive or negative
// // // // // // // // // let number = 0
// // // // // // // // // if (number < 0  ){
// // // // // // // // //     console.log("Negative");
// // // // // // // // // }else {
// // // // // // // // //     console.log("positive");

// // // // // // // // // div by 3 and 5

// // // // // // // // let number = 45;
// // // // // // // // if (number % 3 == 0 && number % 5 == 0) {
// // // // // // // //     console.log("it can be div by 3 and 5");
// // // // // // // // } else {
// // // // // // // //     console.log("it cannot be div by 3 and 5");
// // // // // // // // }

// // // // // // // // // // to check if a number is prime or not

// // // // // // // // make the first letters of the word capital
// // // // // // // let str = " apple does nt fall far from the tree ";
// // // // // // // let words = str.trim().split(' ');  // Split the string into words

// // // // // // // for (let i = 0; i < words.length; i++) {
// // // // // // //     // Capitalize the first letter of each word and concatenate with the rest of the word
// // // // // // //     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// // // // // // // }

// // // // // // // // Join the words back together into a single string
// // // // // // // let result = words.join(' ');

// // // // // // // console.log(result);  // Output: "Apple Does Nt Fall Far From The Tree"

// // // // // // // explain is detiails what ascir are wand what they are used FileReader

// // // // // // let str = "Community"
// // // // // // let vowelCount = 0;
// // // // // // let consonant = 0;

// // // // // // for (let i = 0; i< str.length; i++) {
// // // // // //    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o'|| str[i] === 'u') {
// // // // // //         vowelCount++;
// // // // // //    }else{
// // // // // //     consonant++;
// // // // // //    }
// // // // // //     }
// // // // // //     console.log(vowelCount);
// // // // // //     console.log(consonant);
    
// // // // // let array = [ 2, 3, 4, 5, 6, 7, 8, 9];
// // // // // for (let i = 0; i < array.length; i++) {
// // // // //         // if (array[i] %2 === 0 ) {
// // // // //         //     console.log(array[i]);
// // // // //         // }
// // // // //     //    to square the numebrs in the array
    
// // // // //         if (array[i] **2 ) {
// // // // //             console.log(array[i] **2);
            
// // // // //         }
    
// // // // // }

// // // // // // write a program to check the max number in an Array
// // // // //  let array = [1, 2, 3, 4, 5];
// // // // //  let max = Math.max(...array);
// // // // //  console.log(max);

// // // // let arr = [3, 15, 30, 45, 75];
// // // // for (let i = 0; i < arr.length; i++){
// // // //     if (arr[i] % 3 === 0) {
// // // //         console.log("fizz");
        
// // // //     }
// // // //     else if (arr[i] % 5 === 0) {
// // // //         console.log("buzz");
// // // //     }
// // // //      else (arr[i] % 3 === 0 && arr % 5 === 0) ;{
// // // //         console.log("fizzBuzz");        
        
// // // //     }
// // // // };

// // // // function
// // // function addTwoNums(a,b) {
// // //     return a + b;
// // // }
// // // console.log(addTwoNums( 2, 3));
// // // function strUpper(str) {
// // //     return str.toUpperCase();
// // // }
// // // console.log(strUpper("class"));

// // function sumNumsArr(numsArr) {
// //     let sumNumsArr = 0;

// //     for (let i = 0; i < numsArr.length; i++) {
// //         sumNumsArr += numsArr[i];

// //     }
// //     return sumNumsArr;
// // }
// // console.log(sumNumsArr([1, 2, 3, 4, 5]));

// // fucntion to count all the vowels in a String

// function vowel(dtr) {
//     for (let i = 0; i< str.length; i++) {
//         let str = "cristiano";
//            if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o'|| str[i] === 'u') {
                
//            }
//             console.log(str[i]);
//     }
//             return vowelCount;
// }
// console.log(vowelCount(["football"]));

// function sumInd(arr) {
//     let sumInd = 0;
//     for (let i = 1; i < arr.length; i += 2) {
//         if (arr[i] % 3 === 0) {
//             sumInd += arr[i];
//         }
//     }
//     return sumInd;  
// }

// console.log(sumInd([]));  
