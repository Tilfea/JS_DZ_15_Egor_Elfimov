// Калькулятор
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



// Калькулятор расхода топлива
let CarCalc = function () {
  this.get = function () {
    this.a = prompt(`Средний расход топлива, литров/100 км`)
    this.b = prompt(`Пройденное расстояние, км`)
    this.cost = prompt(`Стоимость топлива, руб./литр`)

    this.total()
  }
  this.total = function () {
    alert(`Для преодоления расстояния в ${this.b}км потребуется ${this.b / 100 * this.a} литров топлива, его стоимость будет составлять ${this.b / 100 * this.a * this.cost}руб.`)
  }

}

let car = new CarCalc();

// Контакты
let NewContact = function () {
  this.getName = function () {
    this.name = prompt(`Введите ФИО`, 'Иванов Иван Иванович')
    this.nameRegexp = /[а-яА-Яa-zA-Z]{1,20} [а-яА-Яa-zA-Z]{1,20} [а-яА-Яa-zA-Z]{1,20}/
    if (this.nameRegexp.test(this.name)) {
      this.getBirthday()
    } else {
      alert(`Не верные данные!`);
      this.getName();
    }
  }

  this.getBirthday = function () {
    this.dateNow = new Date();
    this.opt = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }
    this.birthday = prompt(`Добавьте дату рождения`, this.dateNow.toLocaleDateString('ru', this.opt))
    this.birthRegexp = /[1-9]{1,3}.[1-9]{1,3}.[1-9]{1,3}/
    if (this.birthRegexp.test(this.birthday)) {
      this.getPhone()
    } else {
      alert('Не верно введена дата!')
      this.getBirthday();
    }
  }
  this.getPhone = function () {
    this.phone = prompt(`Добавьте номер телефона`, '+375-29-000-00-00')
    this.phoneRegexp = /\+?[1-9]{1,4}\-?[1-9]{1,3}\-?[1-9]{1,4}\-?[1-9]{1,3}\-?[1-9]{1,3}/

    if (this.phoneRegexp.test(this.phone)) {
      this.getEmail();
    } else {
      alert('Не вернный номер телефона!')
      this.getPhone();
    }
  }
  this.getEmail = function () {
    this.email = prompt(`Добавьте email`, 'email@gmail.com')
    this.mailRegexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/

    if (this.mailRegexp.test(this.email)) {
      alert(`Данные новой записи:
      ФИО - ${this.name}
      Дата рождения - ${this.birthday}
      Телефон - ${this.phone}
      Email - ${this.email}`)
    } else {
      alert('Адрес введен не верно!')
      this.getEmail();
    }
  }
};
let contact = new NewContact();