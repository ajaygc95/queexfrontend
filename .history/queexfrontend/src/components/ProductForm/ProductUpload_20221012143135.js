import { containerClasses } from "@mui/system";
import React from "react";
import FromUtil from "./FromUtil";
import "./ProductUpload.css";
function ProductUpload() {
  return (
    <>
      <form>
        <FromUtil placeholder="upc" />
        <FromUtil />
        <FromUtil />
        <FromUtil />
        <FromUtil />
      </form>
    </>
  );
}

export default ProductUpload;
