import React, { useState } from "react";
import { ITableRow } from "../../types/ITableRow";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addRow, throwFormError } from "../../app/slices/tableRowSlice";
import "./addPanel.scss";
import { checkIfIdExists } from "../../helpers/checkIfIdExists";

const AddPanel = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.tableRowData.data);
  const searchResults = useAppSelector((state) => state.search.searchResults);
  const formError = useAppSelector((state) => state.tableRowData.formError);
  let newId = data[data.length - 1].id + 1;

  const [formData, setFormData] = useState<ITableRow>({
    id: newId,
    client: "",
    pickup: "",
    dropoff: "",
    courier: "",
  });

  const handleAppRow = () => {
    const isFormDataValid = Object.values(formData).every(
      (value) => value !== ""
    );
    if (!isFormDataValid) return dispatch(throwFormError("Fill all inputs."));
    const { id, client, courier, dropoff, pickup } = formData;
    if (checkIfIdExists(Number(id), searchResults)) {
      return dispatch(
        throwFormError("This id already exist. Try another one.")
      );
    }
    dispatch(addRow({ id: Number(id), client, courier, dropoff, pickup }));
    const maxId = searchResults.reduce(
      (max, item) => (item.id > max ? item.id : max),
      Number(id)
    );
    newId = maxId + 1;
    setFormData({
      id: newId,
      client: "",
      pickup: "",
      dropoff: "",
      courier: "",
    });
    dispatch(throwFormError(""));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className="add__panel">
        <input
          type="number"
          placeholder="ID"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Client"
          name="client"
          value={formData.client}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Adress"
          name="pickup"
          value={formData.pickup}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Adress"
          name="dropoff"
          value={formData.dropoff}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Courier"
          name="courier"
          value={formData.courier}
          onChange={handleChange}
        />
        <div className="add__panel-btn-wrapper">
          <button className="add__panel-btn" onClick={handleAppRow}>
            Add
          </button>
        </div>
      </div>
      {formError && <p className="error">{formError}</p>}
    </>
  );
};

export default AddPanel;
