import { useState } from "react";
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

  const debouncedSearch = useDebounce(search);
  const perPage = 10;

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const visible = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="container">
      <h1>Product Management</h1>

      <SearchBar value={search} onChange={setSearch} />
      <ViewToggle view={view} setView={setView} />
      <ProductForm products={products} setProducts={setProducts} />

      {view === "table"
        ? <ProductTable products={visible} />
        : <ProductCardGrid products={visible} />}

      <Pagination total={filtered.length} perPage={perPage} page={page} setPage={setPage} />
    </div>
  );
}
