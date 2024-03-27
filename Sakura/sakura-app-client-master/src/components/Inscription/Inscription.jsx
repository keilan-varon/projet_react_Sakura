import React from "react";
import "./Inscription.css";
import logo from "../../assets/sakura-transparent.png";
import Input from "../Input/Input";
import Bouton from "../Bouton/Bouton";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "@mui/material";
import PasswordChecklist from "react-password-checklist";

const PASSWORD_LENGTH = 8;

function Inscription() {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Vérifications
    if (!pseudo || !email || !password || !confirmPassword) {
      return setErrorMessage(
        "Un ou plusieurs champs n'ont pas été correctement remplis."
      );
    } else if (password !== confirmPassword) {
      return setErrorMessage("Les deux mots de passe ne correspondent pas.");
    }
    // Vérification que l'adresse mail n'est pas déjà enregistrée dans la base (pas 2 fois le meme user)
  };

  return (
    <Fade in={true} timeout={400}>
      <div className="main-container-inscription">
        <div className="logo-section">
          <img src={logo} alt="" className="login-logo" />
          <span className="app-title">Sakura</span>
        </div>
        <div className="inscription">
          <form className="login-section" onSubmit={handleSubmit}>
            <div className="username-section">
              <label htmlFor="pseudo">Pseudo : </label>
              <Input
                type="text"
                name="pseudo"
                id="pseudo"
                value={pseudo}
                onChange={(e) => setPseudo(e.target.value)}
                className="styled-input"
              />
            </div>

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

            <div className="password-confirm-section">
              <label htmlFor="password-confirm">
                Confirmez votre mot de passe :{" "}
              </label>
              <Input
                type="password"
                name="password"
                id="password-confirm"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="styled-input"
              />
            </div>

            <Bouton type="submit" value="S'inscrire" className="styled-btn"/>
            <span style={{ color: "red", textAlign: "center" }}>
              {errorMessage}
            </span>
            <span className="text-redirect">
              Déjà inscrit ?{" "}
              <Link to="/login">
                <span className="text-sign-up">Se connecter</span>
              </Link>
            </span>
          </form>
          <PasswordChecklist
          className="password-checklist"
            rules={["minLength", "specialChar", "number", "capital", "match"]}
            minLength={PASSWORD_LENGTH}
            value={password}
            valueAgain={confirmPassword}
            messages={{
              minLength: "Le mot de passe possède au moins 8 caractères.",
              specialChar:
                "Le mot de passe possède au moins 1 caractère spécial.",
              number: "Le mot de passe possède au moins 1 chiffre.",
              capital: "Le mot de passe possède au moins 1 majuscule.",
              match: "Les deux mots de passe doivent correspondre.",
            }}
          />
        </div>
      </div>
    </Fade>
  );
}

export default Inscription;
