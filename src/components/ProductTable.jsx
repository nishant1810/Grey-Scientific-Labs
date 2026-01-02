export default function ProductTable({ products, setProducts, setEditing }) {

  const deleteProduct = (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="table-container">
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                No products found
              </td>
            </tr>
          ) : (
            products.map(p => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>₹{p.price}</td>
                <td>{p.category}</td>
                <td>{p.stock}</td>
                <td className="actions">
                  <button onClick={() => setEditing(p)}>Edit</button>
                  <button
                    className="danger"
                    onClick={() => deleteProduct(p.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
