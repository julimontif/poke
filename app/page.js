import Link from "next/link";

const Pokemon = ({pokemon}) => {
  const id = pokemon.url.split("/").filter(x => x).pop()
  return (
    <li><Link href={`pokemones/${id}`}>{pokemon.name}</Link></li>
  )
}


export default async function Pokemones() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();
  const pokemones = data.results;

  return (
    <div>
      <h1>Mi App de Pokemones</h1>
      <ul>
        {pokemones.map(pokemon => (
          <Pokemon pokemon={pokemon} key={pokemon.name} />
        ))}
      </ul>
    </div>
  );
}
