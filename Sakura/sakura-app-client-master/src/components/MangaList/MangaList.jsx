import "./MangaList.css";
import Manga from "../Manga/Manga";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
};

function MangaList({ mangaDataList }) {
  return (
    <div className="manga-list">
      <Slider {...settings}>
        {mangaDataList.map((manga) => (
          <Manga
            key={manga.id}
            slug={manga.slug}
            poster={manga.images.poster}
            titre={manga.titre}
          />
        ))}
      </Slider>
    </div>
  );
}

export default MangaList;
