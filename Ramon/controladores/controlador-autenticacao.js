
const db = require('../db.json')
const bcrypt = require('bcryptjs')

const login = async (req, res) =>{
    try{
        const {email, senha} = req.body;
        const lista_clientes = db.cliente    

        if (!email || !senha){
            res.send({erro:'email ou senha não enviado'})
        }  

        const cliente = lista_clientes.find(
            (cliente) => cliente?.email == email
            )

        if(!cliente){
            res.status(404).send({error:'not found'})
        }

        const senhaValida = bcrypt.compareSync(senha, cliente.senha)


        res.send({massage:'Vasco'})
    }catch(e){
        console.log(e)
    }
}

module.exports = {login}