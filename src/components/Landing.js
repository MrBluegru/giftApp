import { Link } from "wouter";
import "../styles/landing.css";

export default function Landing() {
  return (
    <div className="Landing">
      <p className="titulo">Bienvenidos</p>
      <p className="subtitulo">APP de gif's</p>
      <Link to={`/home`}>
        <button className="botonG">Go</button>
      </Link>
      <p className="dev">by Mr. Blue</p>
    </div>
  );
}
