// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

function reve(x) {
    let n = Math.abs(x)
    let y = 0
    while (n > 0) {

        y = y * 10 + (n % 10)
        n = Math.trunc(n / 10)
        console.log(y)
        console.log("break")
        console.log(n)
        console.log("start new loop/terminate loop if 0")
    };

    return (Math.sign(x) * y) == x ? true : false
};

// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

 

// Example 1:

// Input: n = 27
// Output: true
// Example 2:

// Input: n = 0
// Output: false
// Example 3:

// Input: n = 9
// Output: true
 

// Constraints:

// -231 <= n <= 231 - 1
 

// Follow up: Could you solve it without loops/recursion?

// console.log(Math.log(n) / Math.log(3))
    // let result = Math.log10(n) / Math.log10(3)
    // console.log(result)

function tree(n) {    
    return (Math.log10(n) / Math.log10(3)) % 1 == 0 ? true : false
};

// DONE!!! RUNS FASTER THAN 70-80% OF SOLUTIONS AND USES 50-60% LESS MEMORY THAN OTHER SOLUTIONS