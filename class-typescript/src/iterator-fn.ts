import fetch from "node-fetch";

async function* iteratorResults<DataType>(url: string) {
  let nextUrl: string | undefined = url;

  do {
    const response = await fetch(nextUrl);
    const json: {
      next?: string;
      results: DataType[];
    } = await response.json();

    yield json.results;
    nextUrl = json.next;
  } while (nextUrl);
}

(async function () {
  for await (const result of iteratorResults(
    "http://pokeapi.co/api/v2/pokemon"
  )) {
    console.log(result);
  }
})();
