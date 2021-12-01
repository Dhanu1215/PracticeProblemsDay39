// Generate 10 three digit random numbers
let a = Math.floor(Math.random()*900+100);
let b = Math.floor(Math.random()*900+100);
let c = Math.floor(Math.random()*900+100);
let d = Math.floor(Math.random()*900+100);
let e = Math.floor(Math.random()*900+100);
let f = Math.floor(Math.random()*900+100);
let g = Math.floor(Math.random()*900+100);
let h = Math.floor(Math.random()*900+100);
let i = Math.floor(Math.random()*900+100);
let j = Math.floor(Math.random()*900+100);
let randomNumbers = [a,b,c,d,e,f,g,h,i,j,h,i]
let arr = randomNumbers.sort();
console.log(arr);
console.log("The second smallest element is "+arr[1]);   
console.log("The second largest element is "+arr[arr.length-2]);      
