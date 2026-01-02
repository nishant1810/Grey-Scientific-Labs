export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        placeholder="Search by product name..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
