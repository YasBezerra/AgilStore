import { useState, useEffect } from "react";
import { createProduct, updateProduct } from "../../services/api.jsx";
import "./ProductForm.scss";

export default function ProductForm({ products, setProducts, editingId, setEditingId }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    quantity: "",
    price: "",
  });

  useEffect(() => {
    if (editingId) {
      const prod = products.find((p) => p.id === editingId);
      if (prod) setFormData(prod);
    }
  }, [editingId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateProduct(editingId, formData);
    } else {
      await createProduct(formData);
    }
    setFormData({ name: "", category: "", quantity: "", price: "" });
    setEditingId(null);
    const data = await getProducts();
    setProducts(data);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Nome do produto" value={formData.name} onChange={handleChange} required />
      <input name="category" placeholder="Categoria" value={formData.category} onChange={handleChange} required />
      <input name="quantity" type="number" placeholder="Quantidade" value={formData.quantity} onChange={handleChange} required />
      <input name="price" type="number" placeholder="Preço" value={formData.price} onChange={handleChange} required />
      <button type="submit">{editingId ? "Salvar alterações" : "Cadastrar"}</button>
    </form>
  );
}
