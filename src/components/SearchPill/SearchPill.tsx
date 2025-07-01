import { useState, type JSX } from "react";
import "./SearchPill.scss";
import search from "../../assets/search2.svg";

function SearchPill(): JSX.Element {
    const [query, setQuery] = useState('');
  return (
    <div className="search_pill">
      <div className="search_pill_container flex flex-row justify-between">
        <img
          className="search_pill_container_search hover:brightness-75"
          style={{ cursor: "pointer" }}
          src={search}
          alt=""
        />
        <div className="search_pill_container_input_container flex flex-row align-center justify-start">
          <input
          value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search_pill_container_input"
            placeholder="Search within sheet"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchPill;
