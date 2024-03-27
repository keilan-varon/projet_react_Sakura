const getMangaInfos = require("../../functions/api/getMangaInfos");
const getMangaID = require("../../functions/api/getMangaID");
const fs = require('fs/promises');

async function getMangaHandler(req, res) {
    // Récupérer les paramètres
    const query = req.params.query;

    // Vérifier si notre manga est disponible en base
    const allMangas = await fs.readdir(process.env.MANGA_FOLDER);
    if(!allMangas.includes(query)) return res.status(404).json({errorMessage: "Manga introuvable."});

    // Les donner à la fonction en dessous puis l'exécuter en renvoyant le résultat
    const mangaID = await getMangaID(query);
    if(!mangaID) return res.status(404).json({errorMessage: "Manga introuvable."});
    const manga = await getMangaInfos(mangaID);
    res.json(manga);
}

module.exports = getMangaHandler;
