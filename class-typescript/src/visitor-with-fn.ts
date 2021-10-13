import fetch from "node-fetch";

interface Pokemon {
  name: string;
  url: string;
}

async function visit<DataType>(
  baseUrl: string,
  visitor: (results: DataType[]) => void
) {
  let nextUrl: string | undefined = baseUrl;

  do {
    const response = await fetch(nextUrl);
    const json: { next?: string; results: DataType[] } = await response.json();
    visitor(json.results);
    nextUrl = json.next;
  } while (nextUrl);
}

visit<Pokemon[]>("https://pokeapi.co/api/v2/pokemon/", (results) => {
  console.log(results);
});
