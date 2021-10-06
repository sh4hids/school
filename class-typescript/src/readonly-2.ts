class Kitty {
  constructor(public readonly name: string, public readonly age: number) {}
}

const myCat1 = new Kitty("Tom", 5);
console.log({ name: myCat1.name, age: myCat1.age });

class CatList {
  private cats: Kitty[] = [];

  static instance: CatList = new CatList();

  private constructor() {}

  static addCat(cat: Kitty) {
    CatList.instance.cats.push(cat);
  }

  getCats() {
    return this.cats;
  }
}

console.log(CatList.instance.getCats());
CatList.addCat(new Kitty("Mini", 3));
console.log(CatList.instance.getCats());

// const myCatList = new CatList();
