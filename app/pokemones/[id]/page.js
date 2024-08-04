// app/pokemones/[id]/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

async function PokemonPage({ params }) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    const data = await response.json();

    return (
        <div>
            <h1>{data.name} numero #{data.id}</h1>
            <Image src={data.sprites.front_default} width={400} height={400} alt="" />
            <Link href="/">Volver al inicio</Link>
        </div>
    );
}

export default PokemonPage;
