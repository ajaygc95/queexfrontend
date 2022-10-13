import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

import "./ProductTable.css";
import axios from "axios";
import { productListURL } from "../../constants";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

function ProductTable() {


  const [dataItems, setDataItems] = useState([]);
  useEffect(() => {
    axios
      .get(productListURL)
      .then((res) => {
        console.log(res);
        setDataItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="tablepage">
        <h2> Inventory</h2>
        <h3>
          <Link to="/upload">Add Items</Link>
        </h3>
        <TableContainer component={Paper} sx={{ maxHeight: "400px" }}>
          <Table aria-label="simple table" stickyHeader>
            <TableHead weight="bold">
              <TableRow>
                <TableCell>UPC</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Category</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {dataItems.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell>{row.upc}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.quantity}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.category_name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default ProductTable;
