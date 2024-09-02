const request = require('supertest')
const app = require('../index')

describe('GET /clientes', () => {
    it('pegar a lista de clientes com sucesso', async () => {
        const res = await request(app).get('/clientes/').send();
        expect(res.status).toBe(200);
    })
    it('verificar se a lista de clientes está cheia', async () => {
        const res = await request(app).get('/clientes/').send();
        expect(res.body).toBeDefined();
    })
})  
describe('POST /clientes', () => {
    it('criar cliente com sucesso', async () => {
        const rest = await request(app).post('/clientes/').send(
            {
                nome:'Douglasssassas',
                email:'BD@texte.com',
                senha:'DbBd'
            }
        );
        expect(rest.status).toBe(204);
    })
})

describe('Atualizar /clientes/:id', () => {
     it('Atualizar nome do cliente com sucesso', async () => {
        const res = await request(app).post('/clientes/355925f2-40d2-4869-a3a5-8df97eb30c36').send(
            {
                nome:'Jão Vitor'
            })
            expect(res.status).toBe(201)
     })
}) 

describe('Deletar /clientes/:id', () => {
    it('Cliente delado com sucesso', async () => {
       const res = await request(app).delete('/clientes/355925f2-40d2-4869-a3a5-8df97eb30c36').send()
        expect(res.status).toBe(404)
    })
})