<div align="center">

# 🎴 Pokedex Nacional — React & TypeScript

*Proyecto de Evaluación Práctica — Desarrollo Frontend INACAP*

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![LocalStorage](https://img.shields.io/badge/LocalStorage-ED8B00?style=for-the-badge&logo=google-chrome&logoColor=white)

</div>

---

## 📋 Descripción del Proyecto

Este proyecto consiste en una **Pokedex Nacional** de registro manual, diseñada como una aplicación web SPA (*Single Page Application*) utilizando **React**, **TypeScript** y **Vite**. La aplicación permite a los usuarios gestionar su propia colección de criaturas mediante un flujo CRUD local (Crear, Leer, Eliminar) con persistencia de datos en el navegador.

El enfoque principal de este trabajo es demostrar el dominio en la arquitectura de componentes segmentados, el paso de propiedades (*Props*), el manejo de eventos sintácticos y el control del estado global, prescindiendo del uso de librerías externas de estilos o APIs de terceros.

---

## ✨ Características Técnicas y Funcionalidades

- **Registro Controlado (Formulario):** Captura de datos nativa mediante estados de React (`useState`) para los campos de Nombre, Tipo (mediante un elemento `select`) y Nivel, incluyendo validaciones de tipos de datos (bloqueo de strings en campos numéricos y strings vacíos).
- **Persistencia Local Robusta:** Implementación de *Lazy State Initialization* (inicialización perezosa) en el `useState` principal para optimizar la lectura del `localStorage`, sincronizado automáticamente mediante el ciclo de vida con el hook `useEffect`.
- **Feedback de Experiencia de Usuario (UX):** Inclusión de una alerta dinámica temporal tras una captura exitosa (utilizando saltos de línea adaptados a JSX `<br />` y limpieza de memoria asíncrona mediante `setTimeout` a los 3 segundos).
- **Diseño Temático Adaptado:** Interfaz personalizada basada en los colores corporativos de la franquicia utilizando el paradigma de diseño *Neo-brutalismo* (bordes gruesos, sombras sólidas de alto contraste y la tipografía amigable *Fredoka* importada nativamente en el CSS).

---

## 🛠️ Estructura Arquitectónica del Código

El código fuente se encuentra organizado bajo buenas prácticas de modularidad dentro del directorio `src/`:

```text
src/
├── components/
│   ├── FormularioPokemon.tsx  # Captura de datos, validación y disparo de alertas.
│   ├── ListaPokemon.tsx       # Mapeo del arreglo global y manejo de listas vacías.
│   └── PokemonCard.tsx        # Renderizado de la tarjeta individual y acción de borrado.
├── types/
│   └── Pokemon.ts             # Interfaz de TypeScript que define el contrato del objeto.
├── App.tsx                    # Orquestador del estado global y efectos de LocalStorage.
├── App.css                    # Hoja de estilos nativa con diseño responsivo (Flexbox/Grid).
└── main.tsx                   # Punto de entrada de la aplicación encapsulado en StrictMode.
🧬 Contrato de Datos (TypeScript)
El tipado estricto del núcleo de la aplicación se rige bajo la siguiente estructura exportada en src/types/Pokemon.ts:

TypeScript
export type Pokemon = {
  id: number;
  nombre: string;
  tipo: string;
  nivel: number;
};
🚀 Despliegue Local
Para ejecutar este entorno de desarrollo localmente:

Asegúrese de contar con Node.js instalado en su sistema.

Instale las dependencias declaradas en el package.json:

Bash
npm install
Inicie el servidor de desarrollo de Vite:

Bash
npm run dev
Abra la dirección local provista por la terminal (por defecto http://localhost:5173/).

Desarrollado de forma nativa para el cumplimiento de las competencias académicas de programación Frontend.