import React, { useState } from "react";
import MaterialTable from "material-table";

function HeroSection() {
  const [tableData, setTableData] = useState([]);

  return (
    <>
      <div className="hero-container">This is hero section </div>
      <MaterialTable columns={columns}></MaterialTable>
    </>
  );
}

export default HeroSection;
