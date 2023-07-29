type Client =
{
    name:String;
    depart:String;
    rollNo:Number;
}//This is how we make a type alias they are used to define types 
//This is how we make our custom datatypes//
function Cdata(client:Client){
    return Cdata
}//Here we are saying that function takes an input as customly created data type alias
//
console.log(Cdata({name:"Manal", depart:"Applied Physics",rollNo:45}));
type SchoolName = string
type SchoolYear = number
type School = {
  Name: SchoolName,
  Year: SchoolYear,
}

const NameSchool: SchoolName = "St.Patricks"
const YearSchool: SchoolYear = 1997
const school:School = {
  Name: NameSchool,
  Year: YearSchool,
};
console.log(school.Name);
console.log(school);
