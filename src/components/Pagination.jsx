export default function Pagination({ total, perPage, page, setPage }) {
  const pages = Math.ceil(total / perPage);

  return (
    <div className="pagination-wrapper">
      <div className="pagination">
        {[...Array(pages)].map((_, i) => (
          <button
            key={i}
            className={page === i + 1 ? "active" : ""}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
