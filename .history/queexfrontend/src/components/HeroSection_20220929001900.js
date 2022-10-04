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

function HeroSection() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table"></Table>
    </TableContainer>
  );
}

export default HeroSection;
