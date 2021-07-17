/*  JS_Getting_Started_Fib_till_N

Take as input a number n.
Print all terms of Fibonacci sequence smaller than equal to n where
0th Fibonacci is 0 and 1st Fibonacci is 1. Here is a sample
0 1 1 2 3 5 8 13 21 34 55

Input Format
Integer

Constraints
n <= 10 ^ 9

Output Format
Space separated integers

Sample Input 0
56

Sample Output 0
0 1 1 2 3 5 8 13 21 34 55

*/


function processData(input) {
    let a = 0;
    let b = 1;
    while(a<=input){
        process.stdout.write(a + " " );
        let c = a+b;
        a = b;
        b = c;
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
