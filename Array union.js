/* JS_Arrays_Union

Write a JavaScript program to compute the union of two arrays . Input array will only have unique elements in there respective array. Input arr1= [1, 2, 3] arr2= [100, 2, 1,10] Output: [1,2,3,100,10]

Input Format
arr1= [1, 2, 3] arr2= [100, 2, 1,10]

Constraints
0<=arr1.length < 10^4 0<=arr2.length < 10^4

Output Format
[1,2,3,100,10]

Sample Input 0
[1, 2, 3] 
[100, 2, 1,10]

Sample Output 0
[ 1, 2, 3, 100, 10 ]

*/

function processData(input) {
   let intarr =  input.split('\n');
   let first = JSON.parse(intarr[0]);
   let second = JSON.parse(intarr[1]);
    
   for(let i = 0;i<second.length;i++){
       if(!first.includes(second[i])){
           first.push(second[i]);
       }
       
   }
    console.log(first);
    
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
