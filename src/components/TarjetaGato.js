import "../styles/TarjetaGato.css";

const TarjetaGato = ({ nombreGato, descripcion, imagen }) => {
  return (
    <article className="tarjeta">
      <div className="flex centrado">
        <h2>{nombreGato}</h2>
      </div>
      <div>
        <p>{descripcion}</p>
      </div>

      <div className="img flex centrado">
        <img src={imagen} alt=""></img>
      </div>
    </article>
  );
};

export default TarjetaGato;
