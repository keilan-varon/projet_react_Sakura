import React from "react";
import "./ErrorPage.css";
import NavBar from "../NavBar/NavBar";
import Bouton from "../Bouton/Bouton";
import { Fade } from "@mui/material";


function ErrorPage() {
  //
  return (
    <>
      <NavBar />
      <Fade in={true} timeout={400}>
      <div className="main-container-errorpage">
        <h1 className="error-title">Erreur 404 !</h1>
      </div>
      <div className="error">
        <span className="error-phrase">Désolé, la page que vous recherchez n'existe pas...</span>
      </div>
      <Bouton type="submit" value="Retour" className="styled-btn"/>
      </Fade>
    </>
  );
}

export default ErrorPage;
