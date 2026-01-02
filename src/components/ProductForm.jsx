import { useState } from "react";

export default function ProductForm({ setProducts, products }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    description: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name) e.name = "Name required";
    if (!form.price) e.price = "Price required";
    if (!form.category) e.category = "Category required";
    return e;
  };

  const submit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) return setErrors(v);

    setProducts([
      ...products,
      { ...form, id: Date.now(), price: Number(form.price) }
    ]);

    setForm({ name: "", price: "", category: "", stock: "", description: "" });
    setErrors({});
  };

  return (
    <form onSubmit={submit}>

  <div className="form-field">
    <label>
      Name <span className="required">*</span>
    </label>
    <input
      value={form.name}
      onChange={e => setForm({ ...form, name: e.target.value })}
    />
    {errors.name && <span className="error">{errors.name}</span>}
  </div>

  <div className="form-field">
    <label>
      Price <span className="required">*</span>
    </label>
    <input
      type="number"
      value={form.price}
      onChange={e => setForm({ ...form, price: e.target.value })}
    />
    {errors.price && <span className="error">{errors.price}</span>}
  </div>

  <div className="form-field">
    <label>
      Category <span className="required">*</span>
    </label>
    <input
      value={form.category}
      onChange={e => setForm({ ...form, category: e.target.value })}
    />
    {errors.category && <span className="error">{errors.category}</span>}
  </div>

  <div className="form-field">
    <label>Stock <span className="required">*</span> 
    </label>
    <input
      type="number"
      value={form.stock}
      onChange={e => setForm({ ...form, stock: e.target.value })}
    />
    {errors.category && <span className="error">{errors.category}</span>}
  </div>

  {/* Description – Full Width */}
  <div className="description-section">
    <label>
      Description(Optional)
    </label>
    <textarea
      value={form.description}
      onChange={e =>
        setForm({ ...form, description: e.target.value })
      }
    />
  </div>

  <button>Add Product</button>
</form>

  );
}
