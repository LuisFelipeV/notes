const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 8080;

// UTILIZE OS MÉTODOS DE notesController.js
// SE QUISER COLOCAR MELHORIAS FIQUE A VONTADE!!! :))

// GET, POST, PUT, DELETE
// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação e edição)

// UTILIZAR Postman ou Insomnia PARA ENVIAR AS REQUISIÇỖES

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send({ 'message': 'Hello World' }));

app.post('/note', (req, res) => {
    //CRIAR NOTA ENVIANDO UM JSON
    //EX: {"title": "titulo da nota", "body": "conteudo da nota"}
    res.json(note);
});

app.get('/notes', (req, res) => {
    //BUSCAR TODAS AS NOTAS
    res.json(note);
});

app.get('/note', (req, res) => {
    //BUSCAR NOTA PELO TITULO
    res.json(note);
});

app.put('/note', (req, res) => {
    //ATUALIZAR NOTA 
    //Como não vamos ter id você pode buscar pelo título e atualizar somente o conteúdo da nota
    res.json(note);
});

app.delete('/note/:title', (req, res) => {
    //INFORMAR O TITULO DA NOTA A SER DELETADA
    //DEVE RETORNAR UMA MENSAGEM DE SUCESSO QUANDO A NOTA FOR REMOVIDA
    //DEVE RETORNAR UMA MENSAGEM CASO NÃO TENHA ENCONTRADO A NOTA
    res.json({ 'message': message });
})

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));