const api = require("../api/apiURL");

async function getMangaID(query) {
    try {
        const res = await api.fetch("manga", {
            params: {
              filter: {
                text: query,
              },
            },
          });
          if (!res.data.length) {
            return null;
          } else {
            return res.data[0].id;
          }
    } catch (e) {
        console.log(e);
    }
 

  
}

module.exports = getMangaID;
