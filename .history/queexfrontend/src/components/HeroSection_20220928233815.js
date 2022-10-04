import React from "react";
import MaterialTable from "material-table";
function HeroSection() {
  const columns = []
  return (
    <>
      <div className="hero-container">This is hero section </div>
      <MaterialTable columns={columns}></MaterialTable>
    </>
  );
}

export default HeroSection;
