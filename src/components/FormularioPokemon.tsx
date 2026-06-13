import { useState } from "react";
import { type Pokemon } from "../types/Pokemon";

type Props = {
    agregarPokemon: (pokemon: Pokemon) => void;
};

function FormularioPokemon({ agregarPokemon }: Props) {
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("Fuego");
    const [nivel, setNivel] = useState("");

    const [error, setError] = useState("");
    const [mensajeExito, setMensajeExito] = useState(""); // <-- Nuevo estado

    const guardarPokemon = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validaciones
        if (!nombre.trim() || !nivel.trim()) {
            setError("Todos los campos son obligatorios.");
            setMensajeExito(""); // Limpiar éxito si hay error
            return;
        }

        if (isNaN(Number(nivel)) || Number(nivel) <= 0) {
            setError("El nivel debe ser un número válido mayor a 0.");
            setMensajeExito("");
            return;
        }

        const nuevoPokemon: Pokemon = {
            id: Date.now(),
            nombre: nombre.trim(),
            tipo: tipo,
            nivel: Number(nivel),
        };

        agregarPokemon(nuevoPokemon);

        // 1. Mostrar el mensaje con el nombre del Pokémon atrapado
        setMensajeExito(`¡Atrapaste un ${nombre.trim()}!`);

        // Limpiar el formulario
        setNombre("");
        setTipo("Fuego");
        setNivel("");
        setError("");

        // 2. Hacer que el mensaje desaparezca después de 3 segundos (3000 milisegundos)
        setTimeout(() => {
            setMensajeExito("");
        }, 3000);
    };

    return (
        <form className="formulario" onSubmit={guardarPokemon}>
            {error && <p className="error">{error}</p>}

            {/* Aquí aplicamos el salto de línea que aprendiste */}
            {mensajeExito && (
                <p className="exito">
                    {mensajeExito}<br />
                    ¡Felicidades!
                </p>
            )}

            <input
                type="text"
                placeholder="Nombre del Pokémon"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />

            <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                <option value="Fuego">Fuego</option>
                <option value="Agua">Agua</option>
                <option value="Planta">Planta</option>
                <option value="Eléctrico">Eléctrico</option>
                <option value="Normal">Normal</option>
            </select>

            <input
                type="number"
                placeholder="Nivel (Ej: 15)"
                value={nivel}
                onChange={(e) => setNivel(e.target.value)}
            />

            <button type="submit" className="btn">
                Registrar Pokémon
            </button>
        </form>
    );
}

export default FormularioPokemon;