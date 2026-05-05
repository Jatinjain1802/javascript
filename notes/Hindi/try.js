import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your year : ', (year) => {
  if (year % 4 == 0) {
    console.log("Leap year");
  } else {
    console.log("Not a leap year");
  }
  rl.close();
});