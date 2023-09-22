const store = require("../dataBase");
const { response } = require("../utils");
const { selectObj } = require("../helpers")

module.exports = async (req, res) =>
{
  const { model } = req.params;
  const objetoBody = req.body;
  const result = selectObj(objetoBody, model)
  const resp = await store[model].insert(result);
  response(res, 200, resp)
}
