import React from "react";
import "./tableHeader.scss";

interface IProps {
  isPanelOpen: boolean;
  handlePanelClick: () => void;
}

const TableHeader: React.FC<IProps> = ({ isPanelOpen, handlePanelClick }) => {
  return (
    <div className="table__header">
      <div className="table__header-item text-ordinary gray">ID</div>
      <div className="table__header-item text-ordinary gray">Client</div>
      <div className="table__header-item text-ordinary gray">
        Pickup Address
      </div>
      <div className="table__header-item text-ordinary gray">
        Dropoff Address
      </div>
      <div className="table__header-item text-ordinary gray">Courier</div>
      <div className="table__header-item text-ordinary gray">
        Status
        <button
          className={`panel-toggle ${
            isPanelOpen ? "open" : ""
          } table__header-btn `}
          onClick={handlePanelClick}
        >
          <img src="/images/add.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default TableHeader;
