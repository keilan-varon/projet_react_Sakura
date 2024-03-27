import { useQuery } from "@tanstack/react-query";
import MangaList from "../MangaList/MangaList";
import NavBar from "../NavBar/NavBar";
import Splashscreen from "../Splashscreen/Splashscreen";
import { Fade } from "@mui/material";
import "./Accueil.css";

function Accueil() {
  // Récupérer les mangas 
  const { isInitialLoading, error, data } = useQuery(["getAllMangas"], () =>
    fetch(`${process.env.API_BASE_URL}/api/mangas/`, {  
      method: "GET",
    }).then((res) => res.json()),
    {
      staleTime: 60_000, // Le composant ne fera plus de requête au serveur pendant 1mn, il utilisera le cache pour renvoyer les infos
      refetchOnWindowFocus: false // Pas de requête quand le focus est sur la page
    }
  );

  if (isInitialLoading) return <Splashscreen loadingScreen={true} />;
  if (error) console.log("Erreur");

  return (
    <>
      <NavBar />
      <Fade in={true} timeout={400}>
        <div className="accueil-container">
          <h1 className="page-title">Recommandations</h1>
          <MangaList mangaDataList={data} />
          <h1 className="page-title">Tendances</h1>
          <MangaList mangaDataList={data} />
        </div>
      </Fade>
    </>
  );
}

export default Accueil;
