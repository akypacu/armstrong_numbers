let fn = (num) => {
let arr = num.toString().split('')
let sum = 0;
for (let i = 0; i < arr.length; i ++){
    sum += Number(arr[i]) ** arr.length;
}
if (num == sum){console.log(true)}
if (num !== sum){console.log(false)}
}
console.log(fn(1652))