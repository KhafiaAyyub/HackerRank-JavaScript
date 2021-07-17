/* JS_Loops_Pattern_1

Take as input a number n, the number of rows  
Print the following pattern  
*  
*	*  
*	*	*  
*	*	*	*  
*	*	*	*	*  
for n = 5.

Input Format
Integer

Constraints
n <= 10 ^ 9

Output Format
Pattern for n = 5.
*
* *
* * *
* * * *
* * * * *

*/

function processData(input) {
    
    for(let i=1;i<=input;i++){
        for(let j=1;j<=i;j++){
            process.stdout.write("*" + " ");
        }
        console.log();
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

