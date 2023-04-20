// console.log("Объекты");

// let arr = [123, "Строка", [1, 2, 3], { name: "Alex" }];

// console.log(arr);

// let arr2 = [];
// arr2["name"] = "Alex";
// console.log(arr2);

// let user = {};

// user = {
//   name: "Alex",
//   age: 28,
//   gender: "Male",
// };

// console.log(user);

// console.log(user.name);
// console.log(user.gender);

// user.email = "tilfea@tut.by";
// console.log(user);

// delete user.age;
// console.log(user);

// user.name = "Bob";
// console.log(user);

// if ("name" in user) {
//   console.log("Свойство существует");
// } else {
//   console.log("Свойство отсутствует");
// }

// if ("blablabla" in user) {
//   console.log("Свойство существует");
// } else {
//   console.log("Свойство отсутствует");
// }

// if (user.blablabla === undefined) {
//   console.log("Свойство undefined");
// }

// user.phone = undefined;

// if (user.phone === undefined) {
//   console.log("Свойство phone undefined");
// }
// if ("phone" in user) {
//   console.log("Свойство phone существует");
// } else {
//   console.log("Свойство phone отсутствует");
// }

// console.log(user);

// console.log(user["phone"]);

// user["last-name"] = "Ivanov";
// console.log(user);

// user["Отчество пользователя"] = "Иванов";
// console.log(user);

// let key = "gender";
// console.log(user[key]);

// user.size = {
//   top: 90,
//   middle: 60,
//   button: 90,
// };
// console.log(user);

// console.log(user.size.middle);
// console.log(user["size"]["middle"]);

// for (let keyName in user) {
//   console.log(keyName + ":" + " " + user[keyName]);
// }

// let userClone = user;
// console.log(userClone);

// userClone.name = "Ivan";
// console.log(userClone);
// console.log(user);

// userClone = {};

// for (keyName in user) {
//   userClone[keyName] = user[keyName];
// }
// console.log(userClone);
// userClone.name = "Dim";
// console.log(userClone);
// console.log(user);

console.log("Методы объектов");

// let user = {
//   name: "Иван",
//   email: "tilfea@tut.by",
//   age: 28,
//   hello: function () {
//     alert("Hello");
//   },
// };
// console.log(user);
// console.log(user.email);
// // user.hello();
// user.bye = function () {
//   alert("Bye!");
// };
// console.log(user);
// // user.bye();

// user.hello = function () {
//   alert(`Hello, my name is ${this.name}`);
// };
// // user.hello();

// user.setName = function (name) {
//   this.name = name;
// };
// user.setName("Alex");
// console.log(user);

let User = function () {
  this.name = "NoName";
  this.age = 0;
  this.canWalk = false;
};

let userAlex = new User(),
  userBob = new User(),
  userMike = new User();

userAlex.name = "Alex";
userBob.name = "Bob";
userMike.name = "Mike";

console.log(userAlex, typeof userAlex);
console.log(userBob, typeof userBob);
console.log(userMike, typeof userMike);

let Animal = function (name, walk) {
  this.name = name;
  this.canWalk = walk;
  this.canFly = false;
  this.canSwim = false;
  this.color = "None";
  this.eating = true;
};
let cat = new Animal("Кот", true);
dog = new Animal("Собака", true);

console.log(cat);
console.log(dog);

cat.canTalk = "Meow-meow";
dog.canTalk = "Gaw-gaw!!!";
dog.color = "Brown";

console.log(cat);
console.log(dog);

let Calc = function () {
  this.get = function () {
    this.a = +prompt("Введите число а");
    this.b = +prompt("Введите число b");
    this.oper = prompt("Введите операцию: +, -, *, /, %, **");

    this.operation();
  };
  this.operation = function () {
    switch (this.oper) {
      case "+":
        this.result = this.a + this.b;
        break;
      case "-":
        this.result = this.a - this.b;
        break;
      case "*":
        this.result = this.a * this.b;
        break;
      case "/":
        this.result = this.a / this.b;
        break;
      case "%":
        this.result = (this.a / 100) * this.b;
        break;
      case "**":
        this.result = this.a ** this.b;
        break;
      default:
        this.result = 0;
    }
    this.show();
  };
  this.show = function () {
    alert(this.a + " " + this.oper + " " + this.b + " = " + this.result);
  };
};

let calc = new Calc();
calc.get();
