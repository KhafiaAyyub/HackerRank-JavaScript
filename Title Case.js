/* JS_Strings_Title_case

Title Case a Sentence. Input:I'm a little tea pot" Output: I'm A Little Tea Pot.

Input Format
String

Constraints
no as such

Output Format
String

Sample Input 0
I'm a little tea pot

Sample Output 0
I'm A Little Tea Pot

*/

function processData(input) {
    let str = input;
    str = str.toLowerCase();
    let strArr = str.split(" ");
    for(let i =0;i<strArr.length;i++){
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    }
    str = strArr.join(" ");
    console.log(str);
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

