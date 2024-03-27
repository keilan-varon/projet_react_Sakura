import React from "react";
import "./Login.css";
import logo from "../../assets/sakura-transparent.png";
import { useState } from "react";
import Input from "../Input/Input";
import Bouton from "../Bouton/Bouton";
import { Link } from "react-router-dom";
import { Fade } from "@mui/material";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (!email || !password)
      return setErrorMessage("Identifiants incorrects. Veuillez réessayer.");

    // Si les deux champs sont remplis, on commence à vérifier les logins (useEffect).
    if (email && password) {
      console.log("Non vide");
    }
  };

  return (
    <Fade in={true} timeout={400}>
      <div className="main-container-login">
        <div className="logo-section">
          <img src={logo} alt="" className="login-logo" />
          <span className="app-title">Sakura</span>
        </div>
        <form className="login-section" onSubmit={handleSubmit}>
          <div className="email-section">
            <label htmlFor="email">E-mail : </label>
            <Input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="styled-input"
            />
          </div>

          <div className="password-section">
            <label htmlFor="password">Mot de passe : </label>
            <Input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="styled-input"
            />
          </div>
          <Bouton type="submit" value="Se connecter" className="styled-btn" />
          <span style={{ color: "red", textAlign: "center" }}>
            {errorMessage ? errorMessage : null}
          </span>
          <span className="text-redirect">
            Pas encore de compte ?{" "}
            <Link to="/signup">
              <span className="text-sign-up">S'inscrire</span>
            </Link>
          </span>
        </form>
      </div>
    </Fade>
  );
}

export default Login;
