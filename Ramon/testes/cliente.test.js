const request = require('supertest')
const app = require('../index')

describe('GET /clientes', () =>{
    it('pegar a lista de clientes com sucesso', async () => {
        const res = await request(app).get('/clientes').send();
        expect(res.status).toBe(200);
    
});
it('verificar se a lista de clientes está cheia', async() =>{
    const res = await request (app).get('/clientes').send();
    expect(res.body).toBeDefined()
}); 
})

describe('Criar /clientes', () => {
    it('criar cliente', async () => {
        const res = await request(app).post('/clientes').send(
            {
                nome:'jorel',
                email:'jorel@example.com',
                senha:'@K2VB'
            }
        )
        expect(res.status).toBe(204)
    })
})

describe('Atualizar /clientes/:id', () => {
    it('atualizar o nome do cliente com sucesso', async () => {
        const res = await request(app).post('/clientes/82efbd78-f8bd-47d8-9d53-4829f5b70328').send(
            {
                nome:'alisson update',
            }
        )
        expect(res.status).toBe(200)
    })
})


describe('Deletar /clientes/:id', () => {
    it('deletar cliente', async () => {
        const res = await request(app).delete('/clientes/82efbd78-f8bd-47d8-9d53-4829f5b70328')
        expect(res.status).toBe(204)
    })
})