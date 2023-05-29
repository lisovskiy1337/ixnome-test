import React, { useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setSearchResults, setSearchTerm } from "../../app/slices/searchSlice";
import "./search.scss";
const Search = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.tableRowData.data);
  const searchTerm = useAppSelector((state) => state.search.searchTerm);

  const handleSearch = useCallback(
    (searchTerm: string) => {
      if (searchTerm.trim() === "") {
        dispatch(setSearchResults(data));
      }
      const filteredResults = data.filter(
        (row) =>
          row.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.pickup.toLowerCase().includes(searchTerm.toLowerCase())
      );
      dispatch(setSearchResults(filteredResults));
    },
    [searchTerm, data]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  useEffect(() => {
    handleSearch(searchTerm);
  }, [handleSearch]);

  return (
    <div className="search">
      <img src="/images/logo.svg" alt="" className="search__logo" />
      <div className="search__input-group" tabIndex={0}>
        <img src="/images/search.svg" alt="" />
        <input
          type="text"
          placeholder="Search package, client or courier"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Search;
