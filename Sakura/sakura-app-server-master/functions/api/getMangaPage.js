const fs = require("fs/promises");
const path = require("path");

async function getMangaPage(req, res) {
  const { slugManga, numChapOrVol, numPage } = req.params;
  let formattedNumPage = numPage.padStart(3, "0");

  const path = `${process.env.MANGA_FOLDER}/${slugManga}/${numChapOrVol}`;

  try {
    let page = await fs.readFile(`${path}/${formattedNumPage}.png`, {
      encoding: "base64",
    });
    res.json({ page });
  } catch (err) {
    res.status(404).json({errorMessage: "Page introuvable."});
  }
  
}

module.exports = getMangaPage;
