"use strict";
//A school roles , staff enum//
var Roles;
(function (Roles) {
    Roles[Roles["teacher"] = 0] = "teacher";
    Roles[Roles["student"] = 1] = "student";
    Roles[Roles["cleaner"] = 2] = "cleaner";
    Roles[Roles["admin"] = 3] = "admin";
})(Roles || (Roles = {}));
console.log(Roles);
console.log(Roles.teacher);
/*'0': 'teacher',
  '1': 'student',
  '2': 'cleaner',
  '3': 'admin',
  teacher: 0,
  student: 1,
  cleaner: 2,
  admin: 3 */
var Roles1;
(function (Roles1) {
    Roles1[Roles1["teacher"] = 1] = "teacher";
    Roles1[Roles1["student"] = 2] = "student";
    Roles1[Roles1["cleaner"] = 3] = "cleaner";
    Roles1[Roles1["admin"] = 4] = "admin";
})(Roles1 || (Roles1 = {}));
console.log(Roles1);
console.log(Roles1.student);
var Roles2;
(function (Roles2) {
    Roles2["teacher"] = "teacher";
    Roles2["student"] = "student";
    Roles2["cleaner"] = "cleaner";
    Roles2["admin"] = "admin";
})(Roles2 || (Roles2 = {}));
console.log(Roles2);
console.log(Roles2.student);
