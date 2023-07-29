type Book = {
    author: Author;
    name: string;
};
type Author = {
    firstName: string;
    lastName: string;
};


//Lets make an object by considering both types//
//We will make another object inside this object//
const myBook : Book = {
    author: {
        firstName: "Zia",
        lastName: "Khan"
    },
    name: "My Best Book"
}
//when we make an object and we want to nest another object inside it for this syntax is enitrely different for nested object we just add 
console.log(myBook);