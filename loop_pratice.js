/* Q1) Print 1 to 100. */
for (let i = 0; i < 101; i++) {
  console.log(i);
}

/* Q2 Print all Odd numbers from 1 to 100. */

for (let i = 0; i < 101; i++) {
  if (i % 2 !== 0) {
    console.log(`This is odd number ${i}`);
  }
}

/* Q3 Print all Even numbers from 1 to 100. */
for (let i = 0; i < 101; i++) {
  if (i % 2 == 0) {
    console.log(`This is even number ${i}`);
  }
}

/* Q4 Print all numbers which are divisible of 5 in 1 to 100. */
for (let i = 0; i < 101; i++) {
  if (i % 5 == 0) {
    console.log(`This number are divisivle of 5  ${i}`);
  }
}
/* Q5 Print all numbers which are divisible of 5 and 15 in 1 to 100. */
for (let i = 0; i < 101; i++) {
  if (i % 5 == 0 && i % 15 == 0) {
    console.log(`This number are divisivle of 5 and 15  ${i}`);
  }
}

/* Q6 Print 2's table. */
function table() {
  let a = 2;
  for (let i = 1; i < 11; i++) {
    console.log(`${a}*${i}=${a * i}`);
  }
}
table();

/* Q7 Ask user a question "How many times do you want to print Hello World?" and then print Hello World that number of times. */

// function print(a) {
//   for (let i = 0; i < a; i++) {
//     console.log("Hello WOrld");
//   }
// }
// let a = Number(prompt("How many times do you want to print Hello World?"));
// print(a);

/* Q8 Calculate sum of all numbers from 1 to 100.  */
function sum() {
  let sum = 0;
  for (let i = 0; i < 101; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
sum();

/* Q9 Calculate sum of all odd numbers from 1 to 100. */
function oddsum() {
  let sum = 0;
  for (let i = 0; i < 101; i++) {
    if (i % 2 !== 0) {
      sum = sum + i;
    }
  }
  console.log("Odd sum is", sum);
}
oddsum();

/* Q10 Calculate sum of all even numbers from 1 to 100. */
function evensum() {
  let sum = 0;
  for (let i = 0; i < 101; i++) {
    if (i % 2 == 0) {
      sum = sum + i;
    }
  }
  console.log("Even sum is", sum);
}
evensum();

/*Q11 Print 1,2,4,8,16,32,64.......upto 2048. */

function print(a = 1) {
  for (let i = 1; i <= 2048; i = i * 2) {
    console.log(i);
  }
}
print();

/* Q13 
Print 1 to 100, but with a specific condition. If a number is divisible by both 3 and 5, it logs "fizzbuzz" to the console instead of the number itself. */

for (let i = 0; i < 101; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizzbuzz");
  }
}
/*  Q14 print 10's table like this
2*1=2
2*2=4
2*3=6
2*4=8
2*5=10
.
.
.
2*10=20

``` */
function twotable() {
  let a = 2;
  for (let i = 1; i < 11; i++) {
    console.log(`${a}*${i}=${a * i}`);
  }
}
twotable();

/* Q15 Run a loop from 1 to 50
```
From 1 to 10 print "A"
From 11 to 20 print "B"
From 21 to 30 print "C"
From 31 to 40 print "D"
From 41 to 50 print "E" */

for (let i = 0; i < 51; i++) {
  if (i <= 10) {
    console.log("A");
  } else if (i <= 20) {
    console.log("B");
  } else if (i <= 30) {
    console.log("C");
  } else if (i <= 40) {
    console.log("D");
  } else if (i <= 50) {
    console.log("E");
  }
}

/* Q17 Print below series:
5 25 125.. till number is less than equal to 10000
  */
function fiveprint(a = 1) {
  for (let i = 5; i <= 10000; i = i * 5) {
    console.log(i);
  }
}
fiveprint();


