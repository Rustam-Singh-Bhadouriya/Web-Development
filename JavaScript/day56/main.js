console.log("Hey conditional statments!");
let age = 58;
let yes = "You can drive";
let no = "You can't drive";
if (age > 18 && age < 60) {
  // || or ! might not be used here
  console.log(yes);
} else if (age == 60) {
  console.log("nice");
} else {
  console.log(no);
}

// let arr = [67,89,66,880]
// console.log(typeof arr);
console.log("3" == 3); //true
console.log("3" === 3); //false

// bcz === oprator checks value and type both and == check only value non of type

// ternary oprator

a = 6;
b = 8;
// CONDITION ?[OPRATOR] (OPRATION) : [PRESENTING ELSE] (ELSE OPRATION)
console.log(a > b ? a - b : b - a);
