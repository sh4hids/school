function addFuel<T extends {new (...args: any[]): {}}>(constructor: T) {
  return class extends constructor {
    fuel = 100;
  }
}

/* Following is a trick to avoid error */

interface WithFuel {
  fuel: string;
}

interface Rocket extends WithFuel {};

/* Trick ends here */

@addFuel
class Rocket {}

const myRocket = new Rocket();
console.log("Rocket fule:", myRocket.fuel);

/* Following is another trick to avoid error */

const Bus = addFuel(class {})

const myBus = new Bus();
console.log("Bus fuel:", myBus.fuel);

