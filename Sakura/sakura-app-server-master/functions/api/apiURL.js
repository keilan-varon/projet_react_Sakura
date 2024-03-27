const Kitsu = require("kitsu");
const api = new Kitsu({
    baseURL: process.env.BASE_URL
})

module.exports = api;