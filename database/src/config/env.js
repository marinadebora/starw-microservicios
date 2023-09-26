require("dotenv").config();

module.exports={
    MONGO_URI : process.env.MONGO_URI,
    PORT_CHARACTER : process.env.PORT_CHARACTER,
    PORT_FILM : process.env.PORT_FILM,
    PORT_PLANET : process.env.PORT_PLANET,
    PORT_DATA_BASE : process.env.PORT_DATA_BASE
}