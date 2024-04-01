const { Router } = require("express")
const { getCategorias, addCategoria, updateCategoria, deleteCategoria, getCategoriaPorId } = require("../controllers/categoria_c")

const rotasCategorias = new Router();
rotasCategorias.route('/categoria').get(getCategorias)
rotasCategorias.route('/categoria/add').post(addCategoria)
rotasCategorias.route('/categoria/update').post(updateCategoria)

rotasCategorias.route('/categoria/:id').get(getCategoriaPorId)
rotasCategorias.route('/categoria/delete/:id').delete(deleteCategoria)

module.exports = { rotasCategorias }