export type MutationFunction = (input: number) => number;

export function mutateArray(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}

console.log(mutateArray([1, 2, 3, 4, 5], (n) => n * 5));

export type AdderFunction = (v: number) => number;

export const createAdder = (num: number): AdderFunction => {
  return (val: number) => num + val;
};

const addOne = createAdder(1);

console.log(addOne(49));
