// for (let i = 0; i <= 1000; i++) {
//     console.log(i)
// }

let Details = {
    name : "Rustam",
    age:15,
    "Extra Skills":"Developer (Programmer)"
};

for(let keys in Details){
    console.log(keys,": " +Details[keys])
    // or
    // console.log(keys,": " , Details[keys])
}

// let i = 0;
// while (i in Details) {
//     console.log(i , ": "+ Details[i]);
//     i++;
// }

let i = 1;
while (i <= 1000) {
    console.log(i)
    i++;
}
console.log("CHECK")
console.log(i)
//  here i become 1001

let a = 1;

do {
    console.log(a)
    a++;
} while (a <=100);

/*
    hey looops
*/