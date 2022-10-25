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
      first_name: "Nap",
      last_name: "Spalding",
      email: "nspalding0@discuz.net",
      gender: "Male",
      ip_address: "238.122.187.167",
    },
    {
      id: 1,
      first_name: "Nap",
      last_name: "Spalding",
      email: "nspalding0@discuz.net",
      gender: "Male",
      ip_address: "238.122.187.167",
    },
    {
      id: 1,
      first_name: "Nap",
      last_name: "Spalding",
      email: "nspalding0@discuz.net",
      gender: "Male",
      ip_address: "238.122.187.167",
    },
    {
      id: 1,
      first_name: "Nap",
      last_name: "Spalding",
      email: "nspalding0@discuz.net",
      gender: "Male",
      ip_address: "238.122.187.167",
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
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.ip_address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ProductTable;
