class Worker {
  name;
  surname;
  rate;
  days;

  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getName() {
    return this.name;
  }

  getSurname() {
    return this.surname;
  }

  getRate() {
    return this.rate;
  }

  getDays() {
    return this.days;
  }

  // setter methods
  setRate(rate) {
    this.rate = rate;
  }

  setDays(days) {
    this.days = days;
  }

  getSalary() {
    return this.rate * this.days;
  }
}

// Example
const worker = new Worker("Ivan", "Ivanov", 10, 31);
console.log(worker.getRate()); //outputs 10
console.log(worker.getDays()); //outputs 31
console.log(worker.getSalary()); //outputs 310

worker.setRate(20);
worker.setDays(10);
console.log(worker.getSalary()); //outputs 200
