const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/', (req, res) => {
    res.send('Isso é uma requisição POST');
});

// app.get('/pudim', (req, res) => {
//     res.send({
//         sabor: 'leite',
//         cobertura: 'Caramelo',
//         frescura: 'Uva passa'
//     });
// });

app.get('/pudim', (req, res) => {
    res.send("<a href='pagina2'>clique aqui</a>");
});

app.get('/pagina2', (req, res) => {
    res.send("pagina 2");
});


app.listen(3000);