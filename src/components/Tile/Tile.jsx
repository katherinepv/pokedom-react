import "./Tile.scss";

const Tile = ({ name, id, image, types }) => {
  return (
    <div className="tile">
      <img className="tile__image" src={image} alt="" />
      <div className="tile__content">
        <h2 className="tile__heading">{name}</h2>
        <p className="tile__text">
          {name} (#{id}) is a {types} type pokemon.
        </p>
      </div>
    </div>
  );
};

export default Tile;
