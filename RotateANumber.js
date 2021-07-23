/* JS_Getting_started_Rotate_A_Number

A rotation (or circular shift) is an operation similar to shift except that the digits that fall off at one end are put back to the other end.
In left rotation, the digits that fall off at left end are put back at right end.
In right rotation, the digits that fall off at right end are put back at left end.
For Example, r=2 n=12345 result=45123
r=-2 n=12345 result=34512
Take as input 1. Number of rotation: r 2. A Number: n
Let us assume result is desired answer after all operation.
Print result in next line.

Input Format
Integer representing r
Integer representing n

Constraints
1 <= r <= 10 ^ 18
1 <= n <= 10000

Output Format
result

Sample Input 0
2
562984

Sample Output 0
845629

*/


function processData(input) {
    let inputArr = input.split("\n");
    let r = Number(inputArr[0]);
    let num = Number(inputArr[1]);
    let sum = 0
    let n = num;
    while(num!=0){
        sum++;
        num = Math.floor(num/10);
    }
    
    r = r % sum;
    if(r<0){
        r = r+sum;
    }
    
    let div = Math.pow(10,r);
    let mul = Math.pow(10,sum-r);
    
    let rem = n% div;
    let q = Math.floor(n/div);
    
    let ans = rem * mul  + q;
    console.log(ans);
    
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
