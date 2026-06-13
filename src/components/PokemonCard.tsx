import { type Pokemon } from "../types/Pokemon";

type Props = {
    pokemon: Pokemon;
    liberarPokemon: (id: number) => void;
};

function PokemonCard({ pokemon, liberarPokemon }: Props) {
    return (
        <article className="card">
            <h3>{pokemon.nombre}</h3>
            <p>
                <span className="badge-tipo">{pokemon.tipo}</span>
            </p>
            <p>Nivel: {pokemon.nivel}</p>

            <button
                className="btn btn-eliminar"
                onClick={() => liberarPokemon(pokemon.id)}
            >
                Liberar
            </button>
        </article>
    );
}

export default PokemonCard;