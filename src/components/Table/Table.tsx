import React, { useCallback } from "react";
import TableRow from "../TableRow/TableRow";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { handlePanel } from "../../app/slices/tableRowSlice";
import TableHeader from "../TableHeader/TableHeader";
import "./table.scss";

const Table = () => {
  const dispatch = useAppDispatch();
  const isPanelOpen = useAppSelector((state) => state.tableRowData.isPanelOpen);
  const searchResults = useAppSelector((state) => state.search.searchResults);

  const handlePanelClick = useCallback(() => {
    dispatch(handlePanel());
  }, []);

  return (
    <>
      <button
        className={`panel-toggle  ${isPanelOpen ? "open" : ""} mobile`}
        onClick={handlePanelClick}
      >
        <img src="/images/add.svg" alt="" />
      </button>
      <div className="table">
        <TableHeader
          isPanelOpen={isPanelOpen}
          handlePanelClick={handlePanelClick}
        />
        {searchResults.map((item) => (
          <TableRow key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Table;
