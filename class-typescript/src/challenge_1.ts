// Challenge 01
// https://gist.github.com/jherr/cd442b46070b39e99dd8bedc9eecff5c

const houses = [
  { name: "Atreides", planets: "Calladan" },
  { name: "Corrino", planets: ["Kaitan", "Salusa Secundus"] },
  { name: "Harkonnen", planets: ["Giedi Prime", "Arrakis"] },
];

type Planets = string | string[];

interface House {
  name: string;
  planets: Planets;
}

interface HouseWithID extends House {
  id: string;
}

type FilterMethod = (house: House) => boolean;

function findHouses(houses: string): HouseWithID[];

function findHouses(houses: string, filter: FilterMethod): HouseWithID[];

function findHouses(houses: House[]): HouseWithID[];

function findHouses(houses: House[], filter: FilterMethod): HouseWithID[];

function findHouses(arg1: unknown, arg2?: unknown): HouseWithID[] {
  let housesWithId: HouseWithID[] = [];

  if (typeof arg1 === "string") {
    const data: House[] = JSON.parse(arg1 as string);

    data.forEach((house: House): void => {
      housesWithId.push({
        ...house,
        id: new Date().toISOString(),
      });
    });
  }

  if (Array.isArray(arg1)) {
    arg1.forEach((house: House): void => {
      housesWithId.push({
        ...house,
        id: new Date().toISOString(),
      });
    });
  }

  if (!arg2) return housesWithId;

  housesWithId = housesWithId.filter(arg2 as FilterMethod);

  return housesWithId;
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
console.log(findHouses(houses));
console.log(findHouses(JSON.stringify(houses)));
