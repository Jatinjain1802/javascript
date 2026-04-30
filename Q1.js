function GetGrade(Score) {
  if (Score < 0 || Score > 100) {
    return console.log("invalid Score");
  } else if (Score < 32) {
    return console.log("You are Fail Grade");
  } else if (Score < 59) {
    return console.log("You got D Grade");
  } else if (Score < 69) {
    return console.log("You got C Grade");
  } else if (Score < 79) {
    return console.log("You got B Grade");
  } else if (Score < 89) {
    return console.log("You got A Grade");
  } else if (Score < 100) {
    return console.log("You got A+ Grade");
  }
}

GetGrade(23);
GetGrade(63);
GetGrade(93);
GetGrade(123);
GetGrade(-5);
