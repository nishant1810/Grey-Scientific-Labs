export default function ViewToggle({ view, setView }) {
  return (
    <div className="view-toggle">
      <button
        className={view === "table" ? "active" : ""}
        onClick={() => setView("table")}
      >
        Table View
      </button>
      <button
        className={view === "card" ? "active" : ""}
        onClick={() => setView("card")}
      >
        Card View
      </button>
    </div>
  );
}
