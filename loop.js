// Print number form 1 to 10 using for loop
// for (let i = 1; i < 11; i++) {
//    console.log([i]);
// }

// Number form 10 to 1 using while

// let j = 10;
// while (j > 0) {
//     j--;
//     console.log([j]);
// }

// Print even number form 1 to 20 using for loop

// for (let number = 1; number < 21; number++) {
//    if(number%2==0){
//      console.log([number]);
//    }

// }

// Printing odd number usign while loop form 1 to 15

// let number=16
// while (number>0) {
//     if (number%2!==0) {
//         console.log(number)
//     }
//     number--;
// }

// Tabler of 5

// let num = 5;
// for (let i = 1; i < 11; i++) {
//     console.log(`${num} * ${i} = ${num * i}`);

// }

// Sum of number form 1 to 100
// let sum=0;
// for (let i = 1; i < 101; i++) {
//     sum=sum+i
// }
//  console.log(sum);

// All number which are divisible by 3 between 1 to 50
// let number=1
// while (number<51) {
//     if (number%3==0) {
//         console.log(number)
//     }
//     number++;
// }

//
// let val = prompt("Enter the number");

// for (i = 1; i < val; i++) {
//   if (i % 2 == 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }
// }
// // console.log(val);

// Count the nukmber between 1 to 50 divisible by 3 and 5
// let count = 0;
// for (let i = 1; i < 101; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     count = count + 1;
//   }
// }
// console.log(
//   `Total number between 1 to 101 that are divisbler by 3 and 5 are ${count}`,
// );

// .

// Q1: Stop at First Multiple of 7
// Write a loop from 1 to 100 that:
// Prints each number
// Stops completely when it finds the first number
// divisible by 7

// for (let index = 1; index < 101; index++){
//     if (index%7==0){
//         console.log(`We found first divisble of 7 that is ${index}`)
//         break;
//     }
// }

// Skips mulple of 3

// for (let i = 1; i < 21; i++) {
//     if (i%3==0) {
//         continue;
//     }
//     console.log(i)
// }

// Print first 5 odd number between 1 to 100
let count = 0;
for (let i = 1; i < 101; i++) {
  if (i%2 !==0 ) {
    count = count + 1;
    if(count==6) break;
    console.log(
  `First 5 number are   ${i}`,
);
  }
}

