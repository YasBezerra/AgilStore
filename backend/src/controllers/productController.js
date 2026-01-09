const productService = require('../services/productService');

const getProducts = (req, res) => {
  const products = productService.getAllProducts();

  console.log('🔥 PRODUTOS ENVIADOS PELA API:', products);

  res.json(products);
};

const createProduct = (req, res) => {
  const { name, category, quantity, price } = req.body;

  if (!name || !category || quantity == null || price == null) {
    return res.status(400).json({
      message: 'Todos os campos são obrigatórios',
    });
  }

  const product = productService.createProduct({
    name,
    category,
    quantity,
    price,
  });

  res.status(201).json(product);
};

const updateProduct = (req, res) => {
  console.log('PUT UPDATE PRODUTO CHAMADO', req.params.id, req.body);

  const { id } = req.params;
  const { name, category, quantity, price } = req.body;

  const updatedProduct = productService.updateProduct(id, {
    name,
    category,
    quantity,
    price,
  });

  if (!updatedProduct) {
    return res.status(404).json({
      message: 'Produto não encontrado',
    });
  }

  res.json(updatedProduct);
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  const success = productService.deleteProduct(id);

  if (!success) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  res.json({ message: 'Produto deletado com sucesso' });

   res.status(204).send();
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct, // adiciona aqui
};
