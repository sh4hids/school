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

function fetchPokemon(url: string): Promise<PokemonResults>;
function fetchPokemon(
  url: string,
  callback: (data: PokemonResults) => void
): void;
function fetchPokemon<T extends undefined | ((data: PokemonResults) => void)>(
  url: string,
  cb?: T
) {
  if (cb) {
    fetch(url)
      .then((data) => data.json())
      .then((data) => cb(data as PokemonResults));
    return undefined;
  } else {
    return fetch(url).then((data) => data.json());
  }
}
const url = "https://pokeapi.co/api/v2/pokemon?limit=10";

fetchPokemon(url, (data) => {
  data.results.forEach(({ name }) => console.log(name));
});

// (async function () {
//   const data = (await fetchPokemon(url)) as PokemonResults;
//   data.results.forEach(({ name }) => console.log(name));
// })();
