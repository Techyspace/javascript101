// this keyword refers to the object.if alone, referst to global object

const person = {
  name: 'Alex',
  cars: ['ferrari', 'lambo'],
  toString: function() {
    // log(`${this.name} has ${this.cars}`)
    this.cars.forEach(car => {
      log(`${this.name} has ${car}`);
    }).bind(this);
  }
}

person.toString();
