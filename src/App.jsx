import { useState } from "react";
import "./assets/css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const dvdFilms = [
    { title: "Inception", genre: "Fantascienza" },
    { title: "Il Padrino", genre: "Thriller" },
    { title: "Titanic", genre: "Romantico" },
    { title: "Batman", genre: "Azione" },
    { title: "Interstellar", genre: "Fantascienza" },
    { title: "Pulp Fiction", genre: "Thriller" },
  ];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-4 display-5 fw-bold">🎬 CineFilter</h1>

          {/* Sezione Filtro */}
          <div className="card mb-4">
            <div className="card-body">
              <label className="form-label fw-bold">Genere film:</label>
              <select className="form-select form-select-lg">
                <option value="">Tutti i generi</option>
                <option value="Fantascienza">Fantascienza</option>
                <option value="Azione">Azione</option>
                <option value="Romantico">Romantico</option>
                <option value="Thriller">Thriller</option>
              </select>
            </div>
          </div>

          {/* Sezione Lista */}
          <ul className="list-group ">
            {dvdFilms.map((dvdFilm, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center p-3"
              >
                <span className="fs-5">{dvdFilm.title}</span>
                <span className="badge badge-primary badge-pill bg-primary px-3">
                  {dvdFilm.genre}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
