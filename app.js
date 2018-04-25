const express = require('express');
const morgan = require('morgan');
const dbConnection = require('./connection');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'));

app.get('/api/v1/books', (req, res) => {
  dbConnection('book')
    .select('*')
    .then(books => res.status(200).json(books))
    .catch(error => res.status(500).json({ error: error.message, stack: error.stack }));
});

app.get('/api/v1/books/:id', (req, res) => {
  dbConnection('book')
    .select('*')
    .limit(1)
    .where({ id: req.params.id })
    .then(book => res.status(200).json(book))
    .catch(error => res.status(500).json({ error: error.message, stack: error.stack }));
});

app.listen(PORT, () => console.log('Example app running!'));
