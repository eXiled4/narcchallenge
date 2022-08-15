
function narc(num) {
    let arr = Array.from(num.toString()).map(Number)
    let toNum = Array.from(String(num), Number);
    // let arrNum = num.toString().split("");
    // console.log(arrNum);
    console.log(toNum);
    console.log(arr);
    console.log((arr.map((a) => (a ** arr.length))).reduce((a, b) => a + b, 0));
    return (arr.map((a) => (a ** arr.length))).reduce((a, b) => a + b, 0) === num ? true : false;
}

function prac() {
    let ra = [100, 8, 6, 4, 2]

    var rare = ra.reduce((a, b) => a - b, 200)

    return rare
    
}

// console.log(n);
// console.log(arr);
// console.log(arr.length);
// console.log("Break");
// console.log(arr.forEach((a) => console.log(a)));
// console.log(arr.forEach((a) => Math.pow(a, arr.length)));
// console.log("BREAK");
// console.log(arr.map((a) => a ** arr.length));
// arr.reduce((a, b) => a + b)
// above sum all elements in array javascript
// return Math.pow(n, arr.length) === n ? true : false
//narc(35641594208964132) - highest number that my function will recognise as a narc!
// narc(35875699062250035) and above wont work!! problems lies with the map method!!! - 35875699062250035 returns as  3, 5, 8, 7, 5, 6, 9, 9, 0, 6, 2, 2, 5, 0, 0, 3, 6 ]
// Last number returns 1 higher than above - noted tried one below (35875699062250034) and returned a different last digit too!!!




// A Narcissistic Number is a positive number which is the sum of its own digits, 
// each raised to the power of the number of digits in a given base. In this challenge
// we will restrict it to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// and 1652 (4 digits), which isn't:

// 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

// The Challenge:
// Solve in 2 lines of code
// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.