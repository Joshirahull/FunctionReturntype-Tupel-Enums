//tupels 
// condidate => 1
// Admin => 2
// Recruter => 3
var p2 = {
    fname: 'jone',
    lname: 'doe',
    age: 30,
    hobbies: ['cooking', 'coding', 'cricket'],
    child: {
        fname: 'jen',
        lname: 'doe',
        age: 5
    },
    role: [1, 'condidate'] // length === 2
};
// p2.role[0] = 'admin';  error // 'string' is not assignable to type 'number'
// p2.role[1] = 1;    error //'number' is not assignable to type 'string'
p2.role.push("can read");
p2.role.unshift("can read");
// p2.role[2] ="hello"; not assignable 3rd length. not change the fix length. 
console.log(p2.role);
// ROLE_NO, ROLE_NUM, CAN_SEE_OTHER_CAND, CAN_SEE_COMP.
// Candidate => 1, Candidate, false,true.
// Admin => 2, admin, true, false.
// Recruter => 3, Recruter , true, true.
var p3 = {
    fname: 'raj',
    lname: 'patil',
    age: 45,
    hobbies: ['cooking', 'coding', 'cricket', 123],
    child: {
        fname: 'veer',
        lname: 'patil',
        age: 16
    },
    role: [1, 'condidate', false, true] // length === 3
};
console.log(p3.role);
// ENUMS
// Candidate >> 1, CANDIDATE,false,true
// Admin >> 2, ADMIN, true,false.
// Recruter >> 3, RECRUTER , true, true.
var p4 = {
    fname: 'raj',
    lname: 'patil',
    age: 45,
    hobbies: ['cooking', 'coding', 'cricket', 123],
    child: {
        fname: 'veer',
        lname: 'patil',
        age: 16
    },
    role: [1, 'CANDIDATE', false, true] // length === 3
};
console.log(p4.role);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 100] = "ADMIN";
    Role[Role["ROLE_ONLY_USER"] = 101] = "ROLE_ONLY_USER";
    Role[Role["RECRUTER"] = 102] = "RECRUTER";
})(Role || (Role = {}));
;
var can1 = {
    fname: 'ram',
    lame: 'biradar',
    email: 'ram12@gmail.com',
    usrType: Role.ROLE_ONLY_USER,
    usrno: Role.ROLE_ONLY_USER
};
console.log(p4.role);
console.log("User Type", can1.usrType);
console.log("User Number", can1.usrno);
// console.log(Role.ADMIN)
if (can1.usrType === Role.ROLE_ONLY_USER) {
    console.log('please Order your fr8 dish');
}
