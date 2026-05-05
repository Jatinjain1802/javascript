// MAking of arry
let arry = [1, 2, 3, 4, 5, 6];
let arry2 = [7, 8, 9, 10, 11, 12];
console.log(arry[1]);

arry[1] = 12; /*Chaging the arry value*/
console.log(arry);
console.log(arry.length); /* Finding the length of arry */ // Output= 6

/* Methords of arry */
console.log(
  arry.push(8),
); /* Adding the at the last. Modify the orginal arry and returned the new arry  */
console.log(
  arry.pop(),
); /* remove the last element fome the array. Update the orginal arry. and return the poped element */
console.log(
  arry.shift(),
); /* remove the first element fome the array and return it */
console.log(arry.unshift(8)); /* Adds the element in the beging of the arry  */
console.log(arry);
console.log(
  arry.splice(2, 3, 3, 9),
); /* Adds the element in the beging of the arry  */
console.log(arry);
let abc = [1, 2, , 4, 5];
let efg = abc.slice(2, 3);/*  */
console.log(efg);
let arry3 = arry.toReversed();
console.log(arry3);
console.log(arry.reverse());

