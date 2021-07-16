/*  IsPrime

Take as input a number n. Determine whether it is prime or not. If it is prime, 
print "Prime" otherwise print "Not Prime".

Input Format
Integer

Constraints
n <= 10 ^ 9

Output Format
Prime Not Prime

Sample Input 0
7

Sample Output 0
Prime

*/
function processData(input) {
    //Enter your code here\
      let isPrime = true;
    for(let div = 2; div * div<=input;div++){
        if(input % div == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime ==  true){
        console.log("Prime");
    }else{
        console.log("Not Prime")
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
