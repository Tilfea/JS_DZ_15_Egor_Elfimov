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
let CarCalc = function(){
    this.get = function(){
      this.a = prompt(`Средний расход топлива, литров/100 км`)
      this.b = prompt(`Пройденное расстояние, км`)
      this.cost = prompt(`Стоимость топлива, руб./литр`)

      this.total()
    }
    this.total = function(){
      alert(`Для преодоления расстояния в ${this.b}км потребуется ${this.b/100*this.a} литров топлива, его стоимость будет составлять ${this.b/100*this.a*this.cost}руб.`)
    }

}

let car = new CarCalc();
