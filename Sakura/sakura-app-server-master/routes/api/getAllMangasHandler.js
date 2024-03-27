const getAllMangas = require("../../functions/api/getAllMangas");

async function getAllMangasHandler(req, res) {
    let allMangasInfos = await getAllMangas(false);
    res.json(allMangasInfos);
}

module.exports = getAllMangasHandler;


