const server = require("./src/server");
const {PORT_DATA_BASE} = require("./src/config/env")


server.listen(PORT_DATA_BASE,()=>{
    console.log(`database server on port ${PORT_DATA_BASE}`);
})

