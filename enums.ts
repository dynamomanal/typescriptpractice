//A school roles , staff enum//
enum Roles {
    teacher,
    student,
    cleaner,
    admin,
}
console.log(Roles);
console.log(Roles.teacher)
/*'0': 'teacher',
  '1': 'student',
  '2': 'cleaner',
  '3': 'admin',
  teacher: 0,
  student: 1,
  cleaner: 2,
  admin: 3 */
  enum Roles1 {
    teacher = 1,
    student,
    cleaner,
    admin,
  }
  console.log (Roles1);
 console.log(Roles1.student);
enum Roles2 {
    teacher = 'teacher',
    student = 'student',
    cleaner = 'cleaner',
    admin = 'admin',
}
console.log(Roles2);
console.log(Roles2.student);


