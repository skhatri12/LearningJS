"use strict";
//enum
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    name: "Ram",
    email: "ram@gmail.com",
    password: "ram",
    role: Roles.admin
};
const user2 = {
    name: "Shyam",
    email: "shyam@gmail.com",
    password: "ramshyam",
    role: Roles.user
};
const isAdmin = (user) => {
    const { name, role } = user;
    return role === "admin" ? `${name} is aloow to edit the website` : `${name} is not allow to edit the website`;
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
