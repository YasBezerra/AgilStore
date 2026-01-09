const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware para ler JSON do body
app.use(express.json());

// Rotas
app.use('/products', productRoutes);

// Rota inicial simples
app.get('/', (req, res) => {
  res.send('Backend funcionando!');
});


module.exports = app;
