/* JS_Strings_Longest_Word

Print the Longest Word in a String

Input Format
string

Constraints
''

Output Format
String

Sample Input 0
The quick brown fox jumped over the lazy dog

Sample Output 0
jumped

*/


function processData(input) {
    
    let arrStr = input.split(" ");
    let max = 0;
    let ans = 0;
    for(let i=0;i<arrStr.length;i++){
        
        if(arrStr[i].length > max){
            ans = arrStr[i];
            max = arrStr[i].length;
        }     
    }
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
