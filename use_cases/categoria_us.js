const { pool } = require("../config")
const Categoria = require("../entities/categoria")

const getCategoriasDB = async () => {
    try {
        const { rows } = await pool.query("SELECT id, nome from categorias ORDER BY id")
        return rows.map((categoria) => new Categoria(categoria.id, categoria.nome))
    } catch(e) {
        throw "Erro ao retornar lista: " + e
    }
}
const addCategoriasDB = async (body) => {
    try {
        const { nome } = body
        const results = await pool.query('INSERT INTO categorias(nome) VALUES ($1) returning id, nome', [nome])
        const categoria = results.rows[0]
        return new Categoria(categoria.id, categoria.nome)
    } catch(e) {
        throw "Erro ao adicionar: " + e
    }
}
const updateCategoriasDB = async (body) => {
    try {
        const { id, nome } = body
        console.log(id)
        const results = await pool.query('UPDATE categorias set nome = $2 WHERE id = $1 returning id, nome', [id, nome])
        if(results.rowCount == 0) throw `Nenhum registro encontrado com o código ${id} para ser alterado`
        const categoria = results.rows[0]
        return new Categoria(categoria.id, categoria.nome)
    } catch(e) {
        throw "Erro ao atualizar: " + e
    }
}
const deleteCategoriasDB = async (params) => {
    try {
        const { id } = params
        const results = await pool.query('DELETE from categorias WHERE id = $1', [id])
        if(results.rowCount == 0) throw `Nenhum registro encontrado com o código ${id} para ser removido`
        else return "Categoria removida com sucesso"
    } catch(e) {
        throw "Erro ao atualizar: " + e
    }
}
const getCategoriaPorIdDB = async (params) => {
    try {
        const { id } = params
        const results = await pool.query('SELECT * FROM categorias WHERE id = $1', [id])
        if(results.rowCount == 0) throw `Nenhum registro encontrado com o código ${id}`
        else {
            const categoria = results.rows[0]
            return new Categoria(categoria.id, categoria.nome)
        }
    } catch(e) {
        throw "Erro ao retornar: " + e
    }
}
module.exports = { getCategoriasDB, addCategoriasDB, updateCategoriasDB, deleteCategoriasDB, getCategoriaPorIdDB }