import express from "express";
import cors from "cors";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(cors());
app.use(express.json());

const FILE_PATH = "./products.json";

// Carregar produtos do JSON
const loadProducts = () => {
  try {
    const data = fs.readFileSync(FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
};

// Salvar produtos no JSON
const saveProducts = (products) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(products, null, 2));
};

let products = loadProducts();

// Listar produtos
app.get("/products", (req, res) => {
  res.json(products);
});

// Criar produto
app.post("/products", (req, res) => {
  const { name, category, quantity, price } = req.body;
  if (!name || !category || quantity == null || price == null)
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });

  const newProduct = { id: uuidv4(), name, category, quantity, price };
  products.push(newProduct);
  saveProducts(products);
  res.json(newProduct);
});

// Atualizar produto
app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, category, quantity, price } = req.body;
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return res.status(404).json({ error: "Produto não encontrado" });
  if (!name || !category || quantity == null || price == null)
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });

  products[index] = { id, name, category, quantity, price };
  saveProducts(products);
  res.json(products[index]);
});

// Excluir produto
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return res.status(404).json({ error: "Produto não encontrado" });

  products.splice(index, 1);
  saveProducts(products);
  res.json({ success: true });
});

app.listen(4000, () => console.log("Backend rodando na porta 4000"));
