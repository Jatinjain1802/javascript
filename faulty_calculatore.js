// let val = prompt("Enter the number");

// for (i = 1; i < val; i++) {
//   if (i % 2 == 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }
// }
// // console.log(val);

let a = prompt("Enter the number");
let b = prompt("Enter the number");
let orp = prompt("Enter the opreation ");
let random = Math.random();
console.log(random);
function faulty(a, b, orp) {
  a = Number(a);
  b = Number(b);
  let c = 0;
  if (random < 0.1) {
    if (orp == "+") {
      return (c = a - b);
    } else if (orp == "*") {
      return (c = a + b);
    } else if (orp == "-") {
      return (c = a / b);
    } else if (orp == "/") {
      return (c = a ** b);
    }
  } else {
    if (orp == "+") {
      return (c = a + b);
    } else if (orp == "*") {
      return (c = a * b);
    } else if (orp == "-") {
      return (c = a - b);
    } else if (orp == "/") {
      return (c = a / b);
    }
  }
}
let result = faulty(a, b, orp);
alert("Result is" + result);
