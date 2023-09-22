const { catchedAsync }= require("../utils")


module.exports={
  getAll:catchedAsync(require("./getAll")),
  getId: catchedAsync(require("./getId")),
  createTodo:catchedAsync(require("./createTodo"))
}