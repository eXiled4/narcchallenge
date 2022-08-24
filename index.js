
function narc(num) {
    let arr = Array.from(num.toString()).map(Number)
    let toNum = Array.from(String(num), Number);
    // let arrNum = num.toString().split("");
    // console.log(arrNum);
    // console.log(toNum);
    console.log(arr);
    console.log((arr.map((a) => (a ** arr.length))).reduce((a, b) => a + b, 0));
    return (toNum.map((a) => (a ** toNum.length))).reduce((a, b) => a + b, 0) === num ? true : false;
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


function palin(num) {
    let arr = Array.from(String(num), String);
    let ano = arr.map((a) => (a)).reverse()
    let a = arr.toString()
    let b = ano.toString()
    let c = JSON.stringify(arr)
    let d = JSON.stringify(ano)
    let e = num.toString().split("")
    let f = num.toString().split("").reverse()
    let g = num.toString().split("").reverse().join("");
    const result = JSON.stringify(arr) == JSON.stringify(ano)
    var is_same = (arr.length == ano.length) && arr.every(function(element, index) {
        return element === ano[index]; 
    });
    console.log(ano)
    console.log(a)
    console.log(arr)
    console.log(e)
    console.log(f)
    console.log(g)
}

function pal(num){
    var rever = num.toString().split("").reverse().join("");
    console.log(rever)
    return rever == num ? true : false
}

function palint(num) {
    var intin = parseInt(num)
    var digits = (""+intin).split("").reverse().join("");
    return digits == num
}

function test(num){
    return num /= 10
}

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
  }

  //The same index of the array will equal the last index of the array -
  // eg say we are calling the 1st element [0] the absolute === means only the [0] can equal to the first, if another element in the array has the same value
  //IT WONT WORK!


//FIRST SOLVE TO MAKE CODE WORK
// THEN SOLVE THIS WITHOUT CONVERTING INTO A STRING

function removal(nums, val){
    var nums = new Array(Number);
    
    for( var i = 0; i < nums.length; i++){ 
    
        if ( nums[i] === val) { 
    
            nums.splice(i, 1); 
        }
    
    }
}    
    //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]


    // function lastin(args) {
    //     var words = args.split(" ")
    //     console.log(words.length -1)
    // };

    function lastin(args) {
        var words = args.split(" ").map((a) => a.toString())
        console.log(words)
        var last = words.slice(-1).map((a) => a.toString())
        console.log(last)
        let dsect = last
        console.log(dsect)
        };

        function ls(s) {
            let words = s.trim().split(" ")
            // console.log(words)
            let last = words[words.length - 1]
            // console.log(last)
            let dsect = last.split("")
            return dsect.length
        };


function name(x){
    let rem = 0 
    while (x > 0) {
        rem = (x % 10) + (rem * 10)
        Math.trunc( x /= 10 ) 
        console.log(rem) 
    }
    console.log(rem)
    return x == rem ? true : false
}
