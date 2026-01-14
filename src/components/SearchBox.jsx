function SearchBox({ city, onCityChange, onSearch }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
      />

      <input
        type="button"
        value="Search"
        onClick={onSearch}
      />
    </div>
  );
}

export default SearchBox;
