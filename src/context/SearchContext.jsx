import { createContext, useState } from "react";

export const SearchContext = createContext(0);

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  function handleSearch(children){
    setSearch(children)
  }

  return (
    <SearchContext.Provider value={{ search, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;
