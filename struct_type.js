// These two interfaces are completely
// transferrable in a structural type system:
var ball = { diameter: 10 };
var sphere = { diameter: 20 };
sphere = ball; //This means sphere value will be equal to ball value//
ball = sphere; //This means ball value will assigned  same as sphere value
var tube = {
    diameter: 12,
    length: 3
};
//tube = ball; //Error //this means assign the value of ball to the tube//
ball = tube; //now ball will be equal to tube conyaining two properties 
console.log(ball);
//consider as a person having chocolate and ice cream cannot have one thing
//but a person named as ball have only chocolate but that person can buy ice cream and become the one with chocolate and icecream
//Main set can never be a subset like a father can never be a son again if his mother his death , but son can be a father//
// Because a ball does not have a length, then it cannot be
// assigned to the tube variable. However, all of the members
// of Ball are inside tube, and so it can be assigned.
// TypeScript is comparing each member in the type against
// each other to verify their equality.
