import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Search from "./components/Search/Search";
import { useAppSelector } from "./app/hooks";

import AddPanel from "./components/AddPanel/AddPanel";
import Table from "./components/Table/Table";

function App() {
  const isPanelOpen = useAppSelector((state) => state.tableRowData.isPanelOpen);
  const data = useAppSelector((state) => state.tableRowData.data);

  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <Search />
        <h3 className="packages">
          Packages{" "}
          <span className="text-ordinary gray">{data.length} entries</span>
        </h3>
        <Table />
        {isPanelOpen && <AddPanel />}
      </main>
    </div>
  );
}

export default App;
