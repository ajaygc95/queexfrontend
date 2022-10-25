import { containerClasses } from "@mui/system";
import React from "react";
import FromUtil from "./FromUtil";
import "./ProductUpload.css";
function ProductUpload() {
  return (
    <>
    <form></form>
      <FromUtil placholder="upc" />
      <FromUtil />
      <FromUtil />
      <FromUtil />
      <FromUtil />
    </>
  );
}

export default ProductUpload;
