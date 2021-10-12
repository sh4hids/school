import fetch from "node-fetch";

interface Pokemon {
  name: string;
  url: string;
}

class VisitAllPages<DataType> {
  constructor(private baseUrl: string) {}

  async visit(visitor: (results: DataType[]) => void) {
    let nextUrl: string | undefined = this.baseUrl;

    do {
      const response = await fetch(nextUrl);
      const json: { next?: string; results: DataType[] } =
        await response.json();
      visitor(json.results);
      nextUrl = json.next;
    } while (nextUrl);
  }
}

const visitor = new VisitAllPages<Pokemon[]>(
  "https://pokeapi.com/api/v2/pokemon/"
);

visitor.visit((results) => {
  console.log(results);
});
