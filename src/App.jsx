import "./App.scss";
import Tile from "./components/Tile/Tile";
import pokemonArray from "./data/pokemon";

const App = () => {
  // show only the pokemon where the id>=130
  const bigIdjsx = pokemonArray
    .filter((pokemon) => pokemon.id > 130)
    .map(({ id, name, types, sprite }) => (
      <Tile key={id} name={name} id={id} types={types} image={sprite} />
    ));

  // show only ground type pokemon
  const groundTypesJsx = pokemonArray
    .filter((pokemon) => pokemon.types.includes("ground"))
    .map(({ id, name, types, sprite }) => (
      <Tile key={id} name={name} id={id} types={types} image={sprite} />
    ));

  // show all pokemon
  const pokemonTileJSX = pokemonArray.map(({ id, name, types, sprite }) => (
    <Tile key={id} name={name} id={id} types={types} image={sprite} />
  ));

  return (
    <div>
      <h1>Pokedom</h1>
      <main className="tile-container">{groundTypesJsx}</main>
    </div>
  );
};

export default App;
