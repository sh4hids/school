interface Cat {
  name: string;
  breed: string;
}

const makeCat = (name: string, breed: string): Readonly<Cat> => {
  return {
    name,
    breed,
  };
};

const myCat = makeCat("Mimi", "Deshi");
myCat.name = "Tom";

function getCoordinates(
  x: number,
  y: number,
  z: number
): readonly [number, number, number] {
  return [x, y, z];
}

const c1 = getCoordinates(45, 84, 64);
c1[2] = 74;

const reallyConstArray = [1, 2, 3, 4, 5] as const;
reallyConstArray[1] = 50;
