import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import ProjectButtons from "./ProjectButtons";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import BookClubCard from "./ProjectCards/BookClubCard";
import ChandlerTrackCard from "./ProjectCards/ChandlerTrackCard";
import LifeRouteCard from "./ProjectCards/LifeRouteCard";

const useStyles = makeStyles({
  card: {
    textAlign: "center",
    width: "500px",
    height: "360px",
    margin: "0 auto",
    background: "#34343b",
    color: "#d9d9d9",
  },
  services: {
    color: "#05639e",
    paddingTop: "0px",
    fontSize: "25px",
  },
  button: {
    color: "white",
    marginBottom: "10px",
  },
});

export default function Projects() {
  const styles = useStyles();

  const [imageGal, toggleGal] = useState(false);
  const [galImages, setImages] = useState([]);

  const bookclubImages = [
    {
      original:
        "https://res.cloudinary.com/kinsleybphoto/image/upload/v1628092243/Screen_Shot_2021-08-04_at_9.41.39_AM_zyrfsz.png",
      thumbnail:
        "https://res.cloudinary.com/kinsleybphoto/image/upload/c_thumb,w_200,g_face/v1628092243/Screen_Shot_2021-08-04_at_9.41.39_AM_zyrfsz.png",
    },
    {
      original:
        "https://res.cloudinary.com/kinsleybphoto/image/upload/v1628092882/Screen_Shot_2021-08-04_at_9.10.01_AM_hl2zox.png",
      thumbnail:
        "https://res.cloudinary.com/kinsleybphoto/image/upload/c_thumb,w_200,g_face/v1628092882/Screen_Shot_2021-08-04_at_9.10.01_AM_hl2zox.png",
    },
    {
      original:
        "https://res.cloudinary.com/kinsleybphoto/image/upload/v1628092887/Screen_Shot_2021-08-04_at_9.42.03_AM_bwvm3c.png",
      thumbnail:
        "https://res.cloudinary.com/kinsleybphoto/image/upload/c_thumb,w_200,g_face/v1628092887/Screen_Shot_2021-08-04_at_9.42.03_AM_bwvm3c.png",
    },
  ];

  const chandlertrackImages = [
    {
      original:
        "https://res.cloudinary.com/kinsleybphoto/image/upload/v1628703726/Screen_Shot_2021-08-11_at_12.32.03_PM_nmflio.png",
      thumbnail:
        "https://res.cloudinary.com/kinsleybphoto/image/upload/c_thumb,w_200,g_face/v1628703726/Screen_Shot_2021-08-11_at_12.32.03_PM_nmflio.png",
    },
  ];

  const liferouteImages = [
    {
      original:
        "https://res.cloudinary.com/kinsleybphoto/image/upload/v1628804376/Screen_Shot_2021-08-12_at_4.31.47_PM_kfcqzt.png",
      thumbnail:
        "https://res.cloudinary.com/kinsleybphoto/image/upload/c_thumb,w_200,g_face/v1628804376/Screen_Shot_2021-08-12_at_4.31.47_PM_kfcqzt.png",
    },
    {
      original:
        "https://res.cloudinary.com/kinsleybphoto/image/upload/v1628804376/Screen_Shot_2021-08-12_at_4.38.08_PM_xiiz6o.png",
      thumbnail:
        "https://res.cloudinary.com/kinsleybphoto/image/upload/c_thumb,w_200,g_face/v1628804376/Screen_Shot_2021-08-12_at_4.38.08_PM_xiiz6o.png",
    },
    {
      original:
        "https://res.cloudinary.com/kinsleybphoto/image/upload/v1628804376/Screen_Shot_2021-08-12_at_4.38.26_PM_foak9a.png",
      thumbnail:
        "https://res.cloudinary.com/kinsleybphoto/image/upload/c_thumb,w_200,g_face/v1628804376/Screen_Shot_2021-08-12_at_4.38.26_PM_foak9a.png",
    },
    {
      original:
        "https://res.cloudinary.com/kinsleybphoto/image/upload/v1628804376/Screen_Shot_2021-08-12_at_4.38.34_PM_q0lrz0.png",
      thumbnail:
        "https://res.cloudinary.com/kinsleybphoto/image/upload/c_thumb,w_200,g_face/v1628804376/Screen_Shot_2021-08-12_at_4.38.34_PM_q0lrz0.png",
    },
    {
      original:
        "https://res.cloudinary.com/kinsleybphoto/image/upload/v1628804376/Screen_Shot_2021-08-12_at_4.38.54_PM_giwtju.png",
      thumbnail:
        "https://res.cloudinary.com/kinsleybphoto/image/upload/c_thumb,w_200,g_face/v1628804376/Screen_Shot_2021-08-12_at_4.38.54_PM_giwtju.png",
    },
  ];

  const selectGallery = (name) => {
    if (name === "book-club") {
      setImages(bookclubImages);
      toggleGal(true);
    } else if (name === "chandler-track") {
      setImages(chandlertrackImages);
      toggleGal(true);
    } else if (name === "life-route") {
      setImages(liferouteImages);
      toggleGal(true);
    }
  };

  const removeGal = () => {
    toggleGal(false);
  };

  if (imageGal) {
    return (
     <div className="images">
      <div className="gallery-cont">
        <div className="images-gallery">
          <Button className={styles.button} size="medium" onClick={removeGal}>
            EXIT
          </Button>
          <ImageGallery items={galImages} />
        </div>
      </div>
     </div>
    );
  } else {
    return (
     <div className="images">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner text-center">
          <div className="carousel-item active">
            <BookClubCard selectGal={selectGallery} />
          </div>

          <div class="carousel-item">
            <ChandlerTrackCard selectGal={selectGallery} />
          </div>

          <div class="carousel-item">
            <LifeRouteCard selectGal={selectGallery} />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> 
     </div>
    );
  }
}
