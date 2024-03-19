const express = require('express');
const axios = require('axios');

const app = express();
const port = 8000; // Porta na qual o servidor irá escutar

app.get('/', (req, res) => {
    res.send('Bem-vindo ao meu aplicativo!');
});

app.get('/:variable/:code', async (req, res) => {
    const { variable, code } = req.params;

    try {
        const url = `https://servicebus2.caixa.gov.br/portaldeloterias/api/${variable}/${code}`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        res.status(500).json({ error: 'Erro ao buscar dados da API' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
