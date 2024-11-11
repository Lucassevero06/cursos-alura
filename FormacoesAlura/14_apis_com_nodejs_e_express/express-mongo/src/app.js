import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import livro from './models/Livro.js';

const conexao = await conectaNaDatabase();

conexao.on('error', (erro) => {
    console.log("Erro ao conectar ao banco de dados: " + erro);
})

conexao.once('open', () => {
    console.log("Conectado ao banco de dados com sucesso!");
})

const app = express(); //framework Express
app.use(express.json()); //middleware para transformar o corpo da requisição em JSON pois o req.body vem em formato de string


app.get('/', (req, res) => {
    res.status(200).send('Curso de Node.js'); //retorna uma string
});

app.get('/livros', async (req, res) => {
    const listaLivros = await livro.find({}); //buscando todos os livros no banco de dados
    res.status(200).json(listaLivros); //retorna um json
});

app.get('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso!');
});

app.put('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso!");
});

export default app;