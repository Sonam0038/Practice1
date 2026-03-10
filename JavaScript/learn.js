// 1 Remove the first element using print the updated array.

 let arr = [10,20,30,40]
 arr.shift();
 console.log(arr);


 //Remove the first element, store it in a variable, and print both the removed value and the updated array.

 let  arr1 = ["Apple","Banana","Mango"]
 let removevalue = arr1;
 console.log(removevalue.shift());
 console.log(arr1);

 // Add Admin at the beginning

 let roles = ["User", "Guest"]
  roles.unshift("Admin") ;
 console.log(roles);

 // Add 1 and 2 at the start of the array and print the new array and its length.
 
 let number = [3,4,5]
number.unshift(1,2);
console.log(number);
console.log(number.length); 


// Create a new array where each value is multiplied by 2 using map().

let number1 = [2,4,6,8]
let multi = number1.map((item)=>
{ return item*2}
);
console.log(multi);
 
 