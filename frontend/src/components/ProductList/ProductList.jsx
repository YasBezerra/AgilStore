import { useState } from "react";
import ProductItem from "../ProductItem/ProductItem.jsx";
import "./ProductList.scss";

export default function ProductList({
  products,
  setEditingId,
  handleDelete,
  showId,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtra produtos pelo termo em múltiplos campos
  const filteredProducts = products.filter((p) => {
    const term = searchTerm.toLowerCase();
    return (
      (showId && p.id.toLowerCase().includes(term)) ||
      p.name.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term) ||
      p.price.toString().includes(term)
    );
  });

  return (
    <div className="product-list">
      {/* Campo de pesquisa */}
      <input
        className="search-input"
        type="text"
        placeholder="Pesquisar por ID, Nome, Categoria ou Valor..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              setEditingId={setEditingId}
              handleDelete={handleDelete}
              showId={showId}
            />
          ))
        ) : (
          <li className="no-results">Nenhum produto encontrado</li>
        )}
      </ul>
    </div>
  );
}
