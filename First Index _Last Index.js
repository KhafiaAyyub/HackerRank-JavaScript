/* JS_Arrays_First_Index_Last_Index

You are given a number n, representing the size of array a.
You are given n numbers, representing elements of array a.
Asssumption - Array is sorted. Array may have duplicate values.
Find first and last index of an element

Input Format
A number n n1 n2 .. n number of elements A number d

Constraints
1 <= n <= 1000 1 <= n1, n2, .. n elements <= 100 1 <= d <= 100

Output Format
A number representing first index A number representing last index

Sample Input 0
15
1
5
10
15
22
33
33
33
33
33
40
42
55
66
77
33

Sample Output 0
5
9

*/
function processData(input) {
      let arr = input.split("\n");
    let size = Number(arr[0]);
    let ele = Number(arr[arr.length-1]);
      for(let i=1;i<arr.length-1;i++){
          arr[i]=Number(arr[i]);
      }
    let last =-1;
    let first =-1;
     for(let i=1;i<arr.length-1;i++){
         if(arr[i]==ele){
              first=i;
              break;
          }
      }
      for(let i=arr.length-2;i>=1;i--){
          if(arr[i]==ele){
              last=i;
              break;
          }
      }
    console.log(first-1);
    console.log(last-1);
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


