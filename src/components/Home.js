import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import "../styles/home.css";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const handleSubmit = (ent) => {
    ent.preventDefault();
    pushLocation(`/search/${keyword}`)
};
  const handleChange = (ent) => {
    ent.preventDefault();
    setKeyword(ent.target.value);
  };

  return (
    <div className="home">
      <form onSubmit={handleSubmit} className="formBuscador">
        <input type="text" value={keyword} onChange={handleChange} placeholder={`Buscar...`}/>
      </form>

      <h3 className="masB">Más buscados</h3>
      <p>
        <Link className="links" to="/search/csgo">
          Gifs de CSGO
        </Link>
      </p>
      <p>
        <Link className="links" to="/search/valorant">
          Gifs de VAL
        </Link>
      </p>
      <p>
        <Link className="links" to="/search/raft game">
          Gifs de RFT
        </Link>
      </p>
    </div>
  );
}
