import Input from "../Input/Input";
import logo from "../../assets/sakura-transparent.png";
import loupe from "../../assets/loupe.png";
import parametre from "../../assets/settings.png";
import Bouton from "../Bouton/Bouton";
import { useMediaQuery } from "@mui/material";
import "./NavBar.css";
import { useState } from "react";
import { useEffect } from "react";
import { Fade } from "@mui/material";

function NavBar() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(true);
  const matches = useMediaQuery("(max-width:950px)"); /*Fenetre rétrécie*/

  useEffect(() => {
    setShowHamburgerMenu(false);
  }, []);

  return (
    <>
      <Fade in={true} timeout={400}>
        <div className="navbar">
          <div
            className="hamburger-logo"
            onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
          >
            &#9776;
          </div>
          <img src={logo} alt="Logo Sakura" className="logo-navbar" />
          <div className="menu">
            <Bouton value="Accueil" className="styled-btn navbar-btn" />
            <Bouton value="Favoris" className="styled-btn navbar-btn" />
            <Bouton value="Parcourir" className="styled-btn navbar-btn" />
          </div>
          <div className="options">
            <Input className="styled-input navbar-input" />
            <img src={loupe} alt="recherche" className="loupe-navbar" />
            <img src={parametre} alt="settings" className="settings-navbar" />
          </div>
        </div>
      </Fade>

      <Fade in={true} timeout={400}>
        <div
          className="hamburger-menu"
          style={{ display: matches && showHamburgerMenu ? "flex" : "none" }}
        >
          <Bouton
            value="Accueil"
            className="styled-btn hamburger-btn"
            disabled
          />
          <Bouton
            value="Favoris"
            className="styled-btn hamburger-btn"
            disabled
          />
          <Bouton
            value="Parcourir"
            className="styled-btn hamburger-btn"
            disabled
          />
        </div>
      </Fade>
    </>
  );
}

export default NavBar;
