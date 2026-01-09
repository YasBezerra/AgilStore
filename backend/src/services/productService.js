const { v4: uuidv4 } = require('uuid');
const fileHandler = require('../utils/fileHandler');

const getAllProducts = () => {
  return fileHandler.readFile();
};

const createProduct = (productData) => {
  const products = fileHandler.readFile();

  const newProduct = {
    id: uuidv4(),
    name: productData.name,
    category: productData.category,
    quantity: Number(productData.quantity),
    price: Number(productData.price),
  };

  products.push(newProduct);
  fileHandler.writeFile(products);

  return newProduct;
};

const updateProduct = (id, updatedData) => {
  const products = fileHandler.readFile();

  const productIndex = products.findIndex(
    (product) => product.id === id
  );

  if (productIndex === -1) {
    return null;
  }

  const product = products[productIndex];

  const updatedProduct = {
    ...product,
    name: updatedData.name ?? product.name,
    category: updatedData.category ?? product.category,
    quantity:
      updatedData.quantity != null
        ? Number(updatedData.quantity)
        : product.quantity,
    price:
      updatedData.price != null
        ? Number(updatedData.price)
        : product.price,
  };

  products[productIndex] = updatedProduct;
  fileHandler.writeFile(products);

  return updatedProduct;
};

const deleteProduct = (id) => {
  const products = fileHandler.readFile();
  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex === -1) {
    return false; // Produto não encontrado
  }

  products.splice(productIndex, 1); // Remove o produto
  fileHandler.writeFile(products);

  return true;
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct, // adiciona aqui
};