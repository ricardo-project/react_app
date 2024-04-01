const { getCategoriasDB, addCategoriasDB, updateCategoriasDB, deleteCategoriasDB, getCategoriaPorIdDB } = require("../use_cases/categoria_us")

const getCategorias = async (req, res) => {
    await getCategoriasDB()
        .then(data => res.status(200).json(data))
        .catch(e => res.status(400).json({
            status: "error",
            message: "Erro ao consultar as categorias: " + e
        }))
}
const addCategoria = async (req, res) => {  
    await addCategoriasDB(req.body)
        .then(data => res.status(200).json({
            status: "success",
            message: "Categoria criada com sucesso",
            object: data
        }))
        .catch(e => res.status(400).json({
            status: "error",
            message: "Erro ao adicionar a categoria: " + e
        }))
}
const updateCategoria = async (req, res) => {  
    await updateCategoriasDB(req.body)
        .then(data => res.status(200).json({
            status: "success",
            message: "Categoria alterada com sucesso",
            object: data
        }))
        .catch(e => res.status(400).json({
            status: "error",
            message: "Erro ao atualizar a categoria: " + e
        }))
}
const deleteCategoria = async (req, res) => {
    await deleteCategoriasDB(req.params)
        .then(data => res.status(200).json({
            "status": "success",
            "message": data
        }))
        .catch(e => res.status(400).json({
            status: "error",
            message: "Erro ao deletar a categoria: " + e
        }))
}
const getCategoriaPorId = async (req, res) => {
    await getCategoriaPorIdDB(req.params)
        .then(data => res.status(200).json(data))
        .catch(e => res.status(400).json({
            status: "error",
            message: "Erro ao retornar a categoria: " + e
        }))
}

module.exports = { getCategorias, addCategoria, updateCategoria, deleteCategoria, getCategoriaPorId }