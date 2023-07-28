class Users{
    name:string ='manal';
    email:string ='manal@123.gmail.com';
    

    addUser(user:string)
    {
        return`${user} is Added`
        }
        
            removeUser(user:string) {
            console.log(`${user} removed`)
        }
}//THe class works as a template the users is the type of object or class that we created it is not na object
let User1 = new Users;//here we made a new object named as User1 by using classes which is template of object
let result = User1.addUser('Anil')
console.log(result)
let result2 =User1.removeUser('Peter')
console.log(result2)
console.log(User1.name);
console.log(User1.email);
