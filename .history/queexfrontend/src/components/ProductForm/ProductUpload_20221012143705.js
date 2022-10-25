import { containerClasses } from "@mui/system";
import React, { useState } from "react";
import FromUtil from "./FromUtil";
import "./ProductUpload.css";
function ProductUpload() {
  const [upc, setUpc] = useState("");

  return (
    <>
      <div className="from-container">
        <form>
          <FromUtil placeholder="upc" />
          <FromUtil placeholder="Name" />
          <FromUtil placeholder="Quantity" />
          <FromUtil placeholder="Price" />
          <FromUtil placeholder="Category" />
        </form>
      </div>
    </>
  );
}

export default ProductUpload;
