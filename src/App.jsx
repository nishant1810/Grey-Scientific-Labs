import { useState, useEffect } from "react";
import initialProducts from "./data/initialProducts";
import useDebounce from "./hooks/useDebounce";

import SearchBar from "./components/SearchBar";
import ViewToggle from "./components/ViewToggle";
import ProductTable from "./components/ProductTable";
import ProductCardGrid from "./components/ProductCardGrid";
import ProductForm from "./components/ProductForm";
import Pagination from "./components/Pagination";

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [view, setView] = useState("table");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [editing, setEditing] = useState(null);

  const perPage = 10;
  const debouncedSearch = useDebounce(search);

  /* Reset page when search changes */
  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  /* Filter products */
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  /* 🔥 FIX PAGINATION AFTER DELETE / EDIT */
  useEffect(() => {
    const totalPages = Math.ceil(filtered.length / perPage) || 1;
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [filtered.length, page]);

  /* Paginated data */
  const visible = filtered.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <div className="container">
      <div className="content-wrapper">

        <h1>Product Management</h1>

        <SearchBar value={search} onChange={setSearch} />

        <ViewToggle view={view} setView={setView} />

        <ProductForm
          products={products}
          setProducts={setProducts}
          editing={editing}
          setEditing={setEditing}
        />

        {view === "table" ? (
          <ProductTable
            products={visible}
            setProducts={setProducts}
            setEditing={setEditing}
          />
        ) : (
          <ProductCardGrid
            products={visible}
            setEditing={setEditing}
            setProducts={setProducts}
          />
        )}

        <Pagination
          total={filtered.length}
          perPage={perPage}
          page={page}
          setPage={setPage}
        />

      </div>
    </div>
  );
}
