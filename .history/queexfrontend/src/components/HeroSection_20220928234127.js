import React from "react";
import MaterialTable from "material-table";

function HeroSection() {
  const [tableData, setTab]
  const columns = [
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone Number", field: "phone" },
    { title: "Age", field: "Age" },
    { title: "City", field: "city" },
  ];

  return (
    <>
      <div className="hero-container">This is hero section </div>
      <MaterialTable columns={columns}></MaterialTable>
    </>
  );
}

export default HeroSection;
