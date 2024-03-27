const api = require("../api/apiURL");


async function getMangaInfos(id, details = true) {

    try {
        let res = await api.fetch("manga", {
            params: {
                filter: {
                    id
                }
            }
        })

        res = res.data[0];
        if(details) {
            return {
                id: res.id,
                titre: res.canonicalTitle,
                slug: res.slug,
                synopsis: res.synopsis || null,
                dateDebut: new Date(res.startDate).toLocaleDateString() || null,
                status: res.status === "current" ? "En cours" : "Terminé",
                note: res.averageRating + "%" || null,
                images: {
                    cover: res.coverImage ? res.coverImage.small : null,
                    poster: res.posterImage ? res.posterImage.small : null
                },
            }
        } else {
            return {
                id: res.id,
                titre: res.canonicalTitle,
                slug: res.slug,
                images: {
                    cover: res.coverImage ? res.coverImage.small : null,
                    poster: res.posterImage ? res.posterImage.small : null
                },
            }
        }
        
    } catch (e) {
        console.log(e);
    }
   
    
   
    
    
    
}

module.exports = getMangaInfos;

