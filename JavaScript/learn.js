 // 1 Remove the first element using print the updated array.

//  let arr = [10,20,30,40]
//  arr.shift();
//  console.log(arr);


  //Remove the first element, store it in a variable, and print both the removed value and the updated array.

//  let  arr1 = ["Apple","Banana","Mango"]
//  let removevalue = arr1;
//  console.log(removevalue.shift());
//  console.log(arr1);

  // Add Admin at the beginning

//  let roles = ["User", "Guest"]
//   roles.unshift("Admin") ;
//  console.log(roles);

 // Add 1 and 2 at the start of the array and print the new array and its length.
 
//  let number = [3,4,5]
// number.unshift(1,2);
// console.log(number);
// console.log(number.length); 


// // Create a new array where each value is multiplied by 2 using map().

// let number1 = [2,4,6,8]
// let multi = number1.map((item)=>
// { return item*2}
// );
// console.log(multi);
 
 
// Convert all names into uppercase using map().
let names = ["john", "doe", "alice"];
let upcase = names.map((item)=>
{
    return item.toUpperCase();
});
console.log(upcase);

//Find the total sum using reduce().
let prices = [100, 200, 300];
let rcase = prices.reduce((pp,total)=>
{
    return total+pp
});
console.log(rcase);

//Find the highest mark using reduce().
let marks = [45, 67, 89, 32, 76];
let highest = marks.reduce((max,current)=>
{
    if(max > current)
    {
        return max;
    }
    else
    {
        return current;
    }
    
})
console.log(highest);


// Filter out only the even numbers.

let nums = [10, 15, 20, 25, 30];
let evennumber = nums.filter((item)=>
{
    return item%2===0;
}) ;
console.log(evennumber);


//Filter ages that are 18 or above.

let ages = [12, 18, 25, 16, 30];
let above18 = ages.filter((ages)=>{
     if(ages >= 18)
        {
            return ages;
        } ;
})
console.log(above18)


// Remove 2 elements starting from index 1 using splice().

let colors = ["Red", "Green", "Blue", "Yellow"];
colors.splice(1,2);
console.log(colors);
