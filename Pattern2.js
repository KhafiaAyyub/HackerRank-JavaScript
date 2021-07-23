/* JS_loops_pattern-2

Take as input a number n, the number of rows  
Print the following pattern 
space is to be used for indentation
*** ***  
**   **  
*     *  
**   **  
*** ***  
for n = 5. 

Input Format
Integer

Constraints
n <= 10 ^ 9 and is odd

Output Format
Pattern for n = 5.
*** ***  
**   **  
*     *  
**   **  
*** ***  

Sample Input 
5

Sample Output 
*** ***
**   **
*     *
**   **
*** ***

*/
function processData(input) {
    let n = input
    let st = Math.floor(n/2)+1;
    let sp = 1;
   for(let i=0;i<n;i++){
       for(let j=0;j<st;j++){
       process.stdout.write("*");
   }
      for(let j=0;j<sp;j++){
       process.stdout.write(" ");
   }
    for(let j=0;j<st;j++){
       process.stdout.write("*");
   }
   console.log();
   if(i>=Math.floor(n/2)){
       st+=1;
       sp-=2;
   }else{
       st--;
       sp+=2;
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
