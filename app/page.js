import Link from "next/link";

const Pokemon = ({pokemon}) => {
  const id = pokemon.url.split("/").filter(x => x).pop()
  return (
    <li><Link href={`pokemones/${id}`}>{pokemon.name}</Link></li>
  )
}


const Pokemones = ({ pokemones }) => {

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

export default Pokemones