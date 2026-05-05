// // // function sum(val1=0, val2=0) {
// // //   let add = val1 + val2 + val1 * val2;
// // //   //    console.log(add);
// // //   return function () {
// // //     while (val1 < 20) {
// // //       let sub = add - val1;
// // //       val1++;
// // //       val2--;
// // //      if(val1==val2){
// // //         break;
// // //      }
// // //       console.log(val1,val2)
// // //       console.log(`Add ho chuka hai or value aai hai ${add}`);
// // //       console.log(`sub ho chuka hai or value aai hai ${sub}`);
// // //     }
// // //   };
// // // }

// const { number } = require("prop-types");

// // // let other = sum(10, 20);
// // // other();
// // // // console.log(other);

// // // SUm of arry and many paramerther
// // function sum(...val) {
// //   //   console.log(val);
// //   let sum = 0;
// //   val.forEach(function (val) {
// //     sum = sum + val;
// //   });
// //   return sum;
// // }

// // console.log(sum(1, 2, 3, 5, 6, 7, 8, 98, 6, 7, 0));

// // Mking of BMI calculater

// function bmi(weight,height){

// }

// Making Of Faulty Claculatore

// Discopunt cal;ulatore using the (HOF)

function discopuntCalculatore(discount) {
  return function (price) {
    return price - price * (discount / 100);
  };
}
let a = Number(prompt("Enter the disocunt in %"));
let b = Number(prompt("Enter the abount you want to discount"));
let discount = discopuntCalculatore(a);
let price = discount(b);

alert(
  `You have applide ${a}% of dicount on ${b} amount and your final discount was ${price}`,
);
 