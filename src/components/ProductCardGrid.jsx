export default function ProductCardGrid({ products }) {
  return (
    <div className="card-grid">
      {products.map((p) => (
        <div className="card" key={p.id}>
          <h3>{p.name}</h3>
          <p><strong>Price:</strong> ₹{p.price}</p>
          <p><strong>Category:</strong> {p.category}</p>
          <p><strong>Stock:</strong> {p.stock}</p>
          {p.description && <p>{p.description}</p>}
        </div>
      ))}
    </div>
  );
}
