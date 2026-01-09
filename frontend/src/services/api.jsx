const API_URL = "http://localhost:4000";

export const getProducts = async () => (await fetch(`${API_URL}/products`)).json();
export const createProduct = async (product) =>
  (await fetch(`${API_URL}/products`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(product) })).json();
export const updateProduct = async (id, product) =>
  (await fetch(`${API_URL}/products/${id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(product) })).json();
export const deleteProduct = async (id) =>
  (await fetch(`${API_URL}/products/${id}`, { method: "DELETE" })).json();
