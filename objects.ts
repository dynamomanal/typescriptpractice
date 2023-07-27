//Making an object with having a function as well
let car = {
    model:2015,
    car_name: "Vitz",
    rates: function(a:number,b:number) 
    {
return (a*b)
    }
}
//this function with inputs a and b takes in 100 and 50 as inputs 
console.log(car.rates(1000000,50)),
console.log(car.car_name),
console.log(car.model)


// Type Declaration
let student : {
    name: string,
    age: number,
    rollno: number,
}

student = {
    name: "Hira",
    age: 30,
    rollno:1217,
}

console.log(student["name"]);
console.log(student.age);

        
