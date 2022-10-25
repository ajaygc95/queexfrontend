import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";


import "./HeroSection.css";

function ProductTable() {
  const tableData = [
    {
      id: 1,
      upc: "123123123",
      name: "Coca Cola",
      description: "Best selling Cola",
      quantity: 2,
      price: 2.99,
      category: "Beverage",
    },
    {
      id: 1,
      upc: "123123123",
      name: "Coca Cola",
      description: "Best selling Cola",
      quantity: 2,
      price: 2.99,
      category: "Beverage",
    },
    {
      id: 1,
      upc: "123123123",
      name: "Coca Cola",
      description: "Best selling Cola",
      quantity: 2,
      price: 2.99,
      category: "Beverage",
    },
    {
      id: 1,
      upc: "123123123",
      name: "Coca Cola",
      description: "Best selling Cola",
      quantity: 2,
      price: 2.99,
      category: "Beverage",
    },
  ];

  return (
    <div className="tablepage">
      <TableContainer component={Paper} sx={{ maxHeight: "400px" }}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>UPC</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.upc}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ProductTable;
