function useStateGenerics<T>(initial: T): [() => T, (v: T) => void] {
  let value = initial;

  return [
    () => value,
    (v: T) => {
      value = v;
    },
  ];
}

const [getStr, setStr] = useStateGenerics("Hello");
console.log(getStr());
setStr("This is generics");
console.log(getStr());

const [getNum, setNum] = useStateGenerics<number | null>(null);
console.log(getNum());
setNum(87);
console.log(getNum());

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));
  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemons: Pokemon[] = [
  {
    name: "Gingasour",
    hp: 7,
  },
  {
    name: "Pedasour",
    hp: 3,
  },
];

console.log(ranker(pokemons, ({ hp }) => hp));

function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const cats = [
  {
    name: "Tom",
    age: 50,
  },
  {
    name: "Mii",
    age: 10,
  },
];

console.log(pluck(cats, "name"));

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productId: string };
  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data]);
}

sendEvent("addToCart", {
  time: 345,
  user: "john",
  productId: "3sdsa",
  quantity: 5,
});

sendEvent("checkout", {
  time: 3345,
  user: "gohn",
});
