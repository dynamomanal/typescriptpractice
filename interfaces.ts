// Try creating a new interface using it below
//interfaces are only applied to objects unlike aliases which are applied to both objects and declaring variables
interface Rectangle {
    height: number,
    width: number
  };
  //declaring object considering interfaces
  const rectangle: Rectangle = {
    height: 20,
    width: 10
  };
  
  console.log(rectangle);
  // Try creating a new interface and extending it like below
  // we can ceate and we can extend it to create new interface with some additional properties 
interface Rectangle {
    height: number,
    width: number
  }
  
  interface ColoredRectangle extends Rectangle {
    color: string
  }
  
  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };
  
  console.log(coloredRectangle);