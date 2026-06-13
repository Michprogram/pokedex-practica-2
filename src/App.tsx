import { useEffect, useState } from "react";
import FormularioPokemon from "./components/FormularioPokemon";
import ListaPokemon from "./components/ListaPokemon";
import { type Pokemon } from "./types/Pokemon";
import "./App.css";

function App() {
  // Inicialización perezosa de LocalStorage (Fundamental para la evaluación)
  const [pokemons, setPokemons] = useState<Pokemon[]>(() => {
    const datosGuardados = localStorage.getItem("pokedex_manual");
    if (datosGuardados) {
      return JSON.parse(datosGuardados);
    }
    return [];
  });

  // Efecto para sincronizar con LocalStorage cada vez que cambie el arreglo
  useEffect(() => {
    localStorage.setItem("pokedex_manual", JSON.stringify(pokemons));
  }, [pokemons]);

  const agregarPokemon = (nuevoPokemon: Pokemon) => {
    setPokemons([...pokemons, nuevoPokemon]);
  };

  const liberarPokemon = (id: number) => {
    const nuevaLista = pokemons.filter((pokemon) => pokemon.id !== id);
    setPokemons(nuevaLista);
  };

  return (
    <div className="app-contenedor">
      <header>
        <h1>Pokedex</h1><br />

        <p>¡Captura, registra y libera tus Pokémon favoritos!</p>
      </header>

      <main className="layout-principal">
        <section className="panel panel-formulario">
          <h2>Nuevo Registro</h2>
          <FormularioPokemon agregarPokemon={agregarPokemon} />
        </section>

        <section className="panel panel-lista">
          <h2>Pokémon Capturados ({pokemons.length})</h2>
          <ListaPokemon pokemons={pokemons} liberarPokemon={liberarPokemon} />
        </section>
      </main>
    </div>
  );
}

export default App;