import { ITableRow } from "../../types/ITableRow";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { sampleData } from "../../helpers/samleData";

interface TableRowState {
  data: ITableRow[];
  isPanelOpen: boolean;
  formError?: string;
}

const storedData = JSON.parse(localStorage.getItem("tableData") || "[]");
const initialState: TableRowState = {
  data: !storedData || storedData.length === 0 ? sampleData : storedData,
  isPanelOpen: false,
  formError: "",
};

export const tableRowSlice = createSlice({
  name: "tableRow",
  initialState,
  reducers: {
    handlePanel: (state) => {
      state.isPanelOpen = !state.isPanelOpen;
    },
    addRow: (state, action: PayloadAction<ITableRow>) => {
      const newRow = action.payload;
      const { id, client, courier, dropoff, pickup } = newRow;
      state.data.push({
        id,
        client,
        courier,
        dropoff,
        pickup,
        status: true,
      });
      window.localStorage.setItem("tableData", JSON.stringify(state.data));
    },
    deleteRow: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingRow = state.data.find((item) => item.id === id);
      if (existingRow) {
        state.data = state.data.filter((item) => item.id !== id);
        window.localStorage.setItem("tableData", JSON.stringify(state.data));
      }
    },
    throwFormError: (state, action: PayloadAction<string>) => {
      state.formError = action.payload;
    },
  },
});

export const { handlePanel, addRow, deleteRow, throwFormError } =
  tableRowSlice.actions;

export default tableRowSlice.reducer;
