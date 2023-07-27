//for functions we add the name of function and inside the () we give an input on the other hand inside the curly braces we give set of instructions when the function is called and this function returns number of bottles when it is called 
function calcBottles(startingMoney:number, costPerBottle:number){
    var numberOfBottles = Math.floor(startingMoney/ costPerBottle);
    return numberOfBottles;
}
console.log(`This is LAILA  ${calcBottles(12,2)} everyone`);
//function can also be embedded in javascript & typescript//
//Write a TypeScript function that takes an array of numbers as input and returns the sum of all the elements in the array.//
