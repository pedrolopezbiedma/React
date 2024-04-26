import { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const history = useHistory();
  const [term, setTerm] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/search?term=${term}`);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search" />
        <input
          type="text"
          id="search"
          required
          onChange={(event) => setTerm(event.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
