import { containerClasses } from "@mui/system";
import React from "react";
import FromUtil from "./FromUtil";
import "./ProductUpload.css";
function ProductUpload() {
  return (
    <>
      <FromUtil placholder="upc" />
      <FromUtil />
      <FromUtil />
      <FromUtil />
      <FromUtil />
    </>
  );
}

export default ProductUpload;
