/* JS_Arrays_Reverse_Arr

Given a array first=[1,2,3,4,5]. Write a JavaScript program that fill second array in reverse order of first narr=[5,4,3,2,1] without using extra

Input Format
Array

Constraints
0<=arr.length< 10^4

Output Format
Array

Sample Input 0
[1,2,3,4,5]

Sample Output 0
[ 5, 4, 3, 2, 1 ]

*/
function processData(input) {
    let arr = JSON.parse(input);
    let low = 0;
    let high = arr.length - 1;
    
    while(low<high){
        let temp = arr[low];
        arr[low] = arr[high];
        arr[high] = temp;
        low++;
        high--;
    }
    console.log(arr);
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

