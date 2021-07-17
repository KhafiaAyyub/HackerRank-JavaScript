/* Prime_till_N

Take as input n. Determine all prime numbers till n and print them on the same line with 
spaces in between

Input Format
Integer

Constraints
n <= 10 ^ 9

Output Format
Space separated integers on the same line

Sample Input 0
7

Sample Output 0
2 3 5 7

*/
function processData(input) {
    
    
    for(let i = 2;i<=input;i++){
        let count = 0;
        for(let div = 2;div*div<=i;div++){
            if(i%div == 0 ){
                count++;
                break;
            }
        }
        
        if(count == 0){
            process.stdout.write(i + " ");
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
