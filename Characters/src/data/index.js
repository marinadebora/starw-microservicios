
const axios = require("axios");


module.exports = {
  list: async()=>{
    const character = await axios.get(`http://database:8004/Character`);
    return character.data
  },
  create: async()=>{
    throw Error("Hay un error al momento de crear el personaje")
  }
};