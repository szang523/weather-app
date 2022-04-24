import "./search.css";

const Search = ({ onChangeFunction, value, onKeyPress }) => {
  return (
    <div className="container">
      <input
        type="text"
        className="input"
        placeholder="Search city"
        onChange={onChangeFunction}
        value={value}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default Search;
