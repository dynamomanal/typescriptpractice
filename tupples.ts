const user:(string | number)[] = [1,"honda"];//
console.log(typeof user);
  //When we will see the type of this array it will show as object //
  //Tupples are special type of arrays that can be given different datatypes for example in above code we want to specify 1 position to be as Number and other one should be as string strictly//
  //Lets modify the code by creating tupples//
 let firstUser:[String,Number,Boolean];//Always use let for creating a tuuple as if we use const it will take it as the first value and const does'nt allows it to change//
 firstUser=["hoc", 12, true]//Incase of Tupples the order of array matters a lot//
 //Creating a data type format bu using Tupples //
 type User = [number,string];
 let newUser : User = [112,"example@gmail.com"]
 console.log(newUser);
 //we can also over ride the number and string//
 newUser[1] = "hy.com"
 newUser[0] = 23;
 console.log(newUser);
 console.log(newUser);
 // define our tuple
let ourTuple: [number, boolean];

// initialize correctly
ourTuple = [5, false];

// We have no type safety in our tuple  when add something like this
ourTuple.push(true);

console.log(ourTuple);
//Output : 5, false, true 
