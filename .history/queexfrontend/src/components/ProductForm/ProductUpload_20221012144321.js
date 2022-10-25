import { containerClasses } from "@mui/system";
import React, { useState } from "react";
import FromUtil from "./FromUtil";
import "./ProductUpload.css";
function ProductUpload() {
  const [upc, setUpc] = useState("");
  console.log(upc);

  return (
    <>
      <div className="from-container">
        <form>
          <FromUtil placeholder="upc" setUpc={setUpc} />
          <FromUtil placeholder="Name" />
          <FromUtil placeholder="Quantity" />
          <FromUtil placeholder="Price" />
          <FromUtil placeholder="Category" />
          <Button></Button>
        </form>
      </div>
    </>
  );
}

export default ProductUpload;