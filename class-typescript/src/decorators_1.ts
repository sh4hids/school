function addFuel<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    fuel = 100;
  };
}

const execTime = (
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Launching start: ${new Date().getTime()}`);
    const result = originalMethod.apply(this, args);
    console.log(`Launching end: ${new Date().getTime()}`);
    return result;
  };

  return descriptor;
};

const changeValue = (value: any) => (target: Object, propertyKey: string) => {
  console.log(target);
  console.log(propertyKey);
  Object.defineProperty(target, propertyKey, { value });
};

/* Following is a trick to avoid error */

interface WithFuel {
  fuel: string;
}

interface Rocket extends WithFuel {}

/* Trick ends here */

@addFuel
class Rocket {
  @changeValue(1)
  version = 0;

  @execTime
  launch() {
    console.log(`Launching in 3... 2... 1... 🚀`);
  }
}

const myRocket = new Rocket();
console.log("Rocket fule:", myRocket.fuel);
myRocket.launch();

/* Following is another trick to avoid error */

const Bus = addFuel(class {});

const myBus = new Bus();
console.log("Bus fuel:", myBus.fuel);
