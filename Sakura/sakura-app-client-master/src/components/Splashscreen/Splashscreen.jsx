import React from "react";
import "./Splashscreen.css";
import logo from "../../assets/sakura-transparent.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Fade } from "@mui/material";

function Splashscreen({loadingScreen}) {
  const navigate = useNavigate();

  useEffect(() => {
    if(loadingScreen) return;
    const timeout = setTimeout(() => navigate("/login"), 4000);
    return () => clearTimeout(timeout);
  });

  return (
    <Fade in={true} timeout={400}>
      <div className="main-container-splash">
        <div className="loading-section">
          <img src={logo} alt="Logo" className="splashscreen-logo" />
          <div className="loading"></div>
        </div>
      </div>
    </Fade>
  );
}

export default Splashscreen;
