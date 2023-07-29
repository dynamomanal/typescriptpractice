interface Student {
    student_id: number;
    name: string;
  }//creating an interface means object customized data type named as student //
    
interface Teacher {
    teacher_Id: number;
    teacher_name: string;
}//creating an interface means object customized data type named as teacher
    
type intersected_type = Student & Teacher;
//creating another type by using type aliases intersecting both types 
    //creating an object by considering both types
let obj1: intersected_type = {
    student_id: 3232,
    name: "rita",
    teacher_Id: 7873,
    teacher_name: "seema",
};
    //calling properties of the object by using . method
console.log(obj1.teacher_Id);
console.log(obj1.name);