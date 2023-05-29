import { ITableRow } from "../types/ITableRow";

export const checkIfIdExists = (id: number, arr: ITableRow[]): boolean =>
  arr.some((item) => item.id === id);
