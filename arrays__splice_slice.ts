const balls = ["Pink","Yelllow","Blue","Black"];
balls.splice(1,1,"White","Red"); //method is used to add and remove elements position 1 defines from where these elements should be added on the other hand second parameter defines how many elements should be removed//
console.log(balls); 
//slice method creates a new array 
const pizzaPieces = ['P1','P2','P3','P4','P5','P6','P7','P8'];
const sheela_pizzaPieces = pizzaPieces.slice(4);
//THis means in the over all array first four members will be eradicated and remaining will be Sheela Pieces//
console.log(sheela_pizzaPieces);
const naila_pizzaPieces= pizzaPieces.slice(8);
console.log(naila_pizzaPieces);
const sehar_pizzaPieces=pizzaPieces.slice(0,4);
console.log(sehar_pizzaPieces);
const gulzar_pizzaPieces=pizzaPieces.slice(1,8);
console.log(gulzar_pizzaPieces);

