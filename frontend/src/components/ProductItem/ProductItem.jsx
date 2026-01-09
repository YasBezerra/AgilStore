export default function ProductItem({
  product,
  setEditingId,
  handleDelete,
  showId,
}) {
  return (
    <li className="product-item">
      <ul className="product-details">
        {showId && <li><strong>ID:</strong> {product.id}</li>}
        <li><strong>Nome do Produto:</strong> {product.name}</li>
        <li><strong>Valor:</strong> R$ {product.price}</li>
        <li><strong>Categoria:</strong> {product.category}</li>
        <li><strong>Quantidade:</strong> {product.quantity}</li>
      </ul>

      <div className="product-actions">
        <button onClick={() => setEditingId(product.id)}>Editar</button>
        <button onClick={() => handleDelete(product.id)}>Excluir</button>
      </div>
    </li>
  );
}
