/* FizzBuzz

You are given a number starting from 1 to that number you need to print for multiples of
'3' print "Fizz"
'5' print "Buzz" '3' and '5' both print "FizzBuzz" else number itself

Input Format
A number n

Constraints
2 <= n < 10^9

Output Format
Fizz
Buzz
FizzBuzz
number

Sample Input 0
10

Sample Output 0
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz

*/

function processData(input) {
    for(let i=1;i<=input;i++){
        if ( (i%3==0) && (i%5 == 0) ){
            console.log("FizzBuzz");
        }
        else if ( i%3 == 0 ) {
            console.log("Fizz");
        }
        else if ( i%5 == 0 ){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
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




