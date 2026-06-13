import { type Pokemon } from "../types/Pokemon";
import PokemonCard from "./PokemonCard";

type Props = {
    pokemons: Pokemon[];
    liberarPokemon: (id: number) => void;
};

function ListaPokemon({ pokemons, liberarPokemon }: Props) {
    if (pokemons.length === 0) {
        return <p>La Pokedex está vacía. Registra tu primer Pokémon.</p>;
    }

    return (
        <div className="grilla-pokemon">
            {pokemons.map((pokemon) => (
                <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon}
                    liberarPokemon={liberarPokemon}
                />
            ))}
        </div>
    );
}

export default ListaPokemon;