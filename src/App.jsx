import { useState, useEffect } from "react";
import "./assets/css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const dvdFilms = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

export default function App() {
  //note SELECT --> stato della select: Sezione filtro
  const [selectedGenre, setSelectedGenre] = useState("");
  console.log("genere:", selectedGenre);

  //note LISTA --> stato della lista
  const [filteredFilm, setFilteredFilm] = useState(dvdFilms);

  //note stato del testo
  const [inputWord, setInputWord] = useState("");

  useEffect(() => {
    const filtrati = dvdFilms.filter((film) => {
      // Verifica del genere: se selectedGenre è "" sono validi tutti, altrimenti solo quelli uguali
      const matchesGenre = selectedGenre === "" || film.genre === selectedGenre;

      // Verifica del titolo -->  .includes controlla se la parola scritta è contenuta nel titolo.
      const matchesTitle = film.title
        .toLowerCase()
        .includes(inputWord.toLowerCase());

      return matchesGenre && matchesTitle; // Il film deve passare entrambi i controlli --> il film deve avere il genere giusto e il titolo giusto
    });

    setFilteredFilm(filtrati);
  }, [selectedGenre, inputWord]); // Esegui se cambia il genere O il testo cercato

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-4 display-5 fw-bold">🎬 CineFilter</h1>

          {/* Sezione Filtro */}
          <div className="card mb-4">
            <div className="card-body">
              {/* INPUT DI RICERCA TESTUALE */}
              <div className="mb-3">
                <label className="form-label fw-bold">Cerca per titolo:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="che film stai cercando...?"
                  value={inputWord}
                  onChange={(e) => setInputWord(e.target.value)}
                />
              </div>
              <label className="form-label fw-bold">Genere film:</label>
              {/*//note collegamento stato alla select */}
              <select
                className="form-select form-select-lg"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
              >
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
            {/*//note sostituire l'array fisso per renderlo dinamico  */}
            {filteredFilm.map((dvdFilm, index) => (
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
            {/* se nn ci sono risultati */}
            {filteredFilm.length === 0 && (
              <li className="list-group-item text-center p-4 text-muted">
                Nessun film che corrisponde alla ricerca trovato.
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
