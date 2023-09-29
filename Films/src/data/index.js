const axios = require("axios");

module.exports = {
  list: async()=>{
    const films =await axios.get(`http://database:8004/Film`);
    return films.data
  },
  getId:async(id)=>{
    const films =await axios.get(`http://database:8004/Film/${id}`);
    return films.data
  },
  create: async(films)=>{
    return await axios.post(`http://database:8004/Film`,films);
  }
  
}