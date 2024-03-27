import NavBar from "../NavBar/NavBar";
import { Fade } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Splashscreen from "../Splashscreen/Splashscreen";
import ErrorPage from "../ErrorPage/ErrorPage";
import "./MangaDetail.css";

function MangaDetail() {
  const { slug } = useParams();
  const { isInitialLoading, error, data } = useQuery(
    ["mangas", slug],
    () =>
      fetch(`${process.env.API_BASE_URL}/api/mangas/${slug}`, {
        method: "GET",
      }).then((res) => res.json()),
    {
      staleTime: 60_000,
      refetchOnWindowFocus: false,
    }
  );

  if (isInitialLoading) return <Splashscreen loadingScreen={true} />;
  if (error) console.log("Erreur");

  console.log(data);

  return (
    <>
      <NavBar />
      {data.errorMessage ? (
        <ErrorPage />
      ) : (
        <Fade in={true} timeout={400}>
          <div className="manga-detail-container">
            <h2 className="manga-detail-title">{data.titre}</h2>
            <div className="manga-detail-section">
              <div className="manga-detail-section-left">
              <img
                src={data.images.poster}
                alt={data.titre}
                className="manga-detail-poster"
              />
              </div>
              <div className="manga-detail-section-right">
                <p className="manga-detail-synopsis">{data.synopsis}</p>
              </div>
            </div>

            <span className="manga-detail-chapters-label">Chapitres : </span>
            <select name="chapitre" className="manga-detail-chapters" id="">
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
              <option value="1">6</option>
            </select>
          </div>
        </Fade>
      )}
    </>
  );
}

export default MangaDetail;
