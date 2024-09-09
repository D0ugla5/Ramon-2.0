const db = require('../db.json')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const { log } = require('console')


const listProdutos = async (req,res) => {
    var produtos = db.produtos
    res.json(produtos)
}
const getProduto = async (req, res) => {
    const _id = req.params.id
    const lista_produtos = db.produtos
    const produto = lista_produtos.find(
        (produto) => produto.id == _id
        )
    produto ? res.send(produto) : res.status(404).send({error:'not found'})
}
const createProduto = async (req,res) => {
    const dados = req.body
    if(!dados.nome || !dados.preco) {
        return res.status(406).send({error:'Nome e preço deve ser informado'})
    }
    const _id = uuidv4()
    dados.id = _id
    db.produtos.push(dados)
    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
        if (err){
            res.status(500).send({error:'erro no servidor'})
        }
    })
    res.status(204).send("Produto cadastrado com sucesso!")
}
const updateProduto = async (req,res) => {
    const _id = req.params.id
    const dados = req.body
    const lista_produtos = db.produtos
    const produto = lista_produtos.find(
        (produto) => produto.id == _id
        )
    if (!produto || !dados) {
        res.status(404).send({error:'n0ot found'})
    }


    for(const dado in dados){
        if(!(dado in produto)){
            console.log('erro: este dado não existe');
            continue
        }
        produto[dado] = dados[dado]
        res.status(204).send("Produto alterado com sucesso!")
    }
}
const deleteProduto = async (req,res) => {
    const _id = req.params.id
    const lista_produtos = db.produtos
    const produto = lista_produtos.find(
        (produto) => produto.id == _id
        )

    var idx = lista_produtos.indexOf(produto)
        lista_produtos.splice(idx, 1)
    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
        if (err){
            res.status(500).send({error:'erro no servidor'})
        }
    })
    res.status(204).send()
}

module.exports = {listProdutos, getProduto, createProduto, updateProduto, deleteProduto}