import React from "react";
import { ITableRow } from "../../types/ITableRow";
import { useAppDispatch } from "../../app/hooks";
import { deleteRow } from "../../app/slices/tableRowSlice";
import "./tableRow.scss";

const TableRow: React.FC<ITableRow> = ({
  id,
  client,
  pickup,
  dropoff,
  courier,
  status,
}) => {
  const dispatch = useAppDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteRow(id));
  };
  return (
    <div className="table__row" onClick={() => handleDelete(id)}>
      <div className="table__row-cell text-ordinary">#{id}</div>
      <div className="table__row-cell text-ordinary">{client}</div>
      <div className="table__row-cell text-ordinary">{pickup}</div>
      <div className="table__row-cell text-ordinary">{dropoff}</div>
      <div className="table__row-cell text-ordinary">{courier}</div>
      <div>
        <div className={`status ${status ? "is-online" : "is-offline"}`}>
          <div className="status__circle"></div>
          {status ? "Online" : "Offline"}
        </div>
      </div>
    </div>
  );
};

export default TableRow;
