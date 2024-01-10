//enum

enum Roles {
  user = "user",
  admin = "admin"
}

type LoginDetails = {
  name: string;
  email: string;
  password: string;
  role: Roles;
}

const user1: LoginDetails = {
  name: "Ram",
  email: "ram@gmail.com",
  password: "ram",
  role: Roles.admin
}

const user2: LoginDetails = {
  name: "Shyam",
  email: "shyam@gmail.com",
  password: "ramshyam",
  role: Roles.user
}

const isAdmin: (user: LoginDetails) => string = (user: LoginDetails): string => {
  const { name, role } = user;
  return role === "admin" ? `${name} is aloow to edit the website` : `${name} is not allow to edit the website`;
}

console.log(isAdmin(user1));
console.log(isAdmin(user2));
