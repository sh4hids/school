import fetch from "node-fetch";

interface PokemonResults {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
}

type fetchURLReturn<T> = T extends undefined ? Promise<PokemonResults> : void;

function fetchPokemon<T extends undefined | ((data: PokemonResults) => void)>(
  url: string,
  cb?: T
): fetchURLReturn<T> {
  if (cb) {
    fetch(url)
      .then((data) => data.json())
      .then((data) => cb(data as PokemonResults));
    return undefined as fetchURLReturn<T>;
  } else {
    return fetch(url).then((data) => data.json()) as fetchURLReturn<T>;
  }
}
const url = "https://pokeapi.co/api/v2/pokemon?limit=10";

// fetchPokemon(url, (data) => {
//   data.results.forEach(({ name }) => console.log(name));
// });

(async function () {
  const data = (await fetchPokemon(url)) as PokemonResults;
  data.results.forEach(({ name }) => console.log(name));
})();
