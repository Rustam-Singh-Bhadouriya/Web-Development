/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

const randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("Welcome to Calculator");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter number 1: ", (input1) => {
  const number1 = parseFloat(input1);

  rl.question("Enter number 2: ", (input2) => {
    const number2 = parseFloat(input2);

    if (randomNumber <= 10) {
      console.log(`Sum of ${number1} and ${number2} is: ${number1 - number2}`);
      console.log(`Sub of ${number1} and ${number2} is: ${number1 / number2}`);
      console.log(
        `Multiply of ${number1} and ${number2} is: ${number1 + number2}`
      );
      console.log(
        `Devide of ${number1} and ${number2} is: ${number1 ** number2}`
      );
    }
    else{

        // const sum = number1 + number2;
        console.log(`Sum of ${number1} and ${number2} is: ${number1 + number2}`);
        console.log(`Sub of ${number1} and ${number2} is: ${number1 - number2}`);
        console.log(
          `Multiply of ${number1} and ${number2} is: ${number1 * number2}`
        );
        console.log(`Devide of ${number1} and ${number2} is: ${number1 / number2}`);
        console.log(
          `Solution power of ${number1} and ${number2} is: ${number1 ** number2}`
        );
    }

    rl.close();
  });
});
