function myForEach<T>(items: T[], forEachFn: (v: T) => void): void {
  items.reduce((a, v) => {
    forEachFn(v);
    return undefined;
  }, undefined);
}

myForEach(["a", "b", "c"], (v) => console.log(`forEach ${v}`));

function myFilter<T>(items: T[], filterFn: (v: T) => boolean): T[] {
  return items.reduce((a: T[], v) => (filterFn(v) ? [...a, v] : a), []);
}

console.log(myFilter([1, 2, 3, 4, 5, 6, 7], (v) => v % 2 === 0));

function myMap<T, K>(items: T[], mapFn: (v: T) => K): K[] {
  return items.reduce((a, v) => [...a, mapFn(v)], [] as K[]);
}

console.log(myMap(["one", "two", "three"], (v) => v.toUpperCase()));
