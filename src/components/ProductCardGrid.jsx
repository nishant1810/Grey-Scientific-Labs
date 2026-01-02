export default function ProductCardGrid({ products, setEditing, setProducts }) {
  const deleteProduct = (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="card-grid">
      {products.map(p => (
        <div className="card" key={p.id}>
  {/* Action Icons (Right Middle) */}
  <div className="card-actions-vertical">
    <span
      className="card-icon edit"
      title="Edit"
      onClick={() => setEditing(p)}
    >
      ✏️
    </span>

    <span
      className="card-icon delete"
      title="Delete"
      onClick={() => deleteProduct(p.id)}
    >
      🗑️
    </span>
  </div>

  <h3>{p.name}</h3>
  <p><strong>Price:</strong> ₹{p.price}</p>
  <p><strong>Category:</strong> {p.category}</p>
  <p><strong>Stock:</strong> {p.stock}</p>
  <p>{p.description}</p>
</div>

      ))}
    </div>
  );
}
