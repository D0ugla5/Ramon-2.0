const request = require('supertest')
const app = require('../index')

describe('GET /produtos', () => {
    it('pegar a lista de produtos com sucesso', async () => {
        const res = await request(app).get('/produtos/').send();
        expect(res.status).toBe(200);
    })
    it('verificar se a lista de produtos está cheia', async () => {
        const res = await request(app).get('/produtos/').send();
        expect(res.body).toBeDefined();
    })
})  
describe('POST /produtos', () => {
    it('criar cliente com sucesso', async () => {
        const rest = await request(app).post('/produtos/').send(
            {
                nome: "Svasco",
                descricao: "Svasco",
                preco: 1500,
                imagem: "vasco.jpg"
            }
        );
        expect(rest.status).toBe(201);
    })
})

describe('Atualizar /produtos/:id', () => {
     it('Atualizado com sucesso', async () => {
        const res = await request(app).post('/produtos/65788773-2558-4eb2-9595-6706cacd4930').send(
            {
                nome:'vasco',
                preço:123
            })
            expect(res.status).toBe(200)
     })
})

describe('Deletar /produtos/:id', () => {
    it('Cliente delado com sucesso', async () => {
       const res = await request(app).delete('/produtos/65788773-2558-4eb2-9595-6706cacd4930').send()
        expect(res.status).toBe(201)
    })
})