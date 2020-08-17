class User {
  constructor(email, password) {
    this.email = email,
    this.password = password;
  }

  isAdmin() {
    return this.admin === true;
  }
}

class Admin extends User {
  constructor() {
    super();
    this.admin = true;
  }
  
}


const User1 = new User('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

