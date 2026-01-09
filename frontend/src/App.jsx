import { useState, useEffect } from "react";
import { getProducts, deleteProduct } from "./services/api";
import ProductForm from "./components/ProductForm/ProductForm.jsx";
import ProductList from "./components/ProductList/ProductList.jsx";
import "./App.scss";

export default function App() {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [showInventory, setShowInventory] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Deseja realmente excluir este produto?")) return;
    await deleteProduct(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="app-container">
      <h1>AgilStore</h1>

      {/* Formulário de cadastro */}
      <ProductForm
        products={products}
        setProducts={setProducts}
        editingId={editingId}
        setEditingId={setEditingId}
      />

      {/* Botão para mostrar/esconder inventário */}
      <button
        className="toggle-btn"
        onClick={() => setShowInventory(!showInventory)}
      >
        {showInventory ? "Fechar Inventário" : "Ver Inventário"}
      </button>

      {/* Inventário */}
      {showInventory && (
        <div className="inventory-section">
          <h2>Inventário Completo</h2>
          <ProductList
            products={products}
            setProducts={setProducts}
            setEditingId={setEditingId}
            handleDelete={handleDelete}
            showId={true} // mostra ID
          />
        </div>
      )}
    </div>
  );
}
