import { containerClasses } from "@mui/system";
import React from "react";
import FromUtil from "./FromUtil";
import "./ProductUpload.css";
function ProductUpload() {
  return (
    <>
      <form>
        <FromUtil placeholder="upc" />
        <FromUtil placeholder="Name" />
        <FromUtil placeholder="Quantity" />
        <FromUtil placeholder="" />
        <FromUtil placeholder="upc" />
      </form>
    </>
  );
}

export default ProductUpload;
