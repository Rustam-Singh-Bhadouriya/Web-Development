arr = [345,36,34,78];
console.log(typeof arr);

// Recursion logic in JavaScript
function Factorial(x){
    if (x === 0) {
        return 1;
    }
    else{
        return x * Factorial(x-1)
    }
}

console.log(Factorial(5))