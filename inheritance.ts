//Inheritance refers to the properties which can be inherited from one class to another
class Animal {
    name:string;
    constructor(theName: string) { 
        this.name = theName; 
    }//to initialize classes values methods
    move(meters: number = 0) {
        console.log(this.name + " moved " + meters + "m.");
    }

}

class Snake extends Animal {
    constructor(name: string) { 
        super(name); 
    }
    // the super keyword is used to call methods or access properties of a parent class (the superclass) within a subclass (the derived or child class).
    move(meters = 5) {
        console.log("Slithering...");
        super.move(meters);
    }
    bite(){
        console.log("bites");
    }
}
class Horse extends Animal {
    constructor(name: string) { 
        super(name); 
    }
    move(meters = 45) {
        alert("Galloping...");
        super.move(meters);
    }
}
