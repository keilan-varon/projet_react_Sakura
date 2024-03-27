require('dotenv').config();

const express = require("express");
const app = express();

const registerHandler = require('./routes/auth/registerHandler');
const loginHandler = require('./routes/auth/loginHandler');
const getMangaHandler = require("./routes/api/getMangaHandler");
const getAllMangasHandler = require("./routes/api/getAllMangasHandler");
const getMangaPage = require('./functions/api/getMangaPage');


app.use(express.json());


app.listen(5000, () => console.log("Serveur en marche ! "));


// Gestion des routes de l'api

// sécurité api



app.get("/api/mangas", getAllMangasHandler);
app.get("/api/mangas/:query", getMangaHandler);
app.get("/api/mangas/read/:slugManga/:numChapOrVol/:numPage", getMangaPage);

// Partie Utilisateurs (à faire) (fonction verifyCredentials pour login)
app.post("/auth/register", registerHandler);
app.post("/auth/login", loginHandler);
    


