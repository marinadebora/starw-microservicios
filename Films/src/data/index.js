const films = require("./films.json");

module.exports = {
  list: ()=>{
    return films
  },
  create: async()=>"creando films"
  
}