const fs = require('fs/promises');
const getMangaID = require('../api/getMangaID');
const getMangaInfos = require('../api/getMangaInfos');

async function getAllMangas(details) {
    const allMangas = await fs.readdir(process.env.MANGA_FOLDER);
    const allMangasInfos = [];

    for(const manga of allMangas) {
        try{
            let id = await getMangaID(manga);
            let mangaInfos = await getMangaInfos(id, details);
            allMangasInfos.push(mangaInfos);
        } catch (e) {
            console.log(e);
        }
        
    }

    return allMangasInfos;
    
}

module.exports = getAllMangas;