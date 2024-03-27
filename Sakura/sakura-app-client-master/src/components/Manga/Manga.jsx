import "./Manga.css";
import { useNavigate } from "react-router-dom";

function Manga({slug, titre, poster}) {
  const navigate = useNavigate();
/* */
  return (
    <div className="card-manga-container" onClick={() => navigate(`/mangas/${slug}`)}>
        <img className="poster-image" src={poster} alt={titre} />
        <div className="card-manga-name-container">
            <span className="card-manga-name">{titre}</span>
        </div>
    </div>
  )
}

export default Manga