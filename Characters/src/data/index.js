
const axios = require("axios");


module.exports = {
  list: async()=>{
    const character = await axios.get(`http://database:8004/Character`);
    return character.data.data
  },
  getId: async(id)=>{
    const characterId = await axios.get(`http://database:8004/Character/${id}`);
    return characterId.data
  },
  insert: async(character)=>{    
    return await axios.post(`http://database:8004/Character`,character);
      
  }
};