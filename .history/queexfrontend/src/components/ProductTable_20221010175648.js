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
      id: 2,
      first_name: "Christin",
      last_name: "Allerton",
      email: "callerton1@fema.gov",
      gender: "Female",
      ip_address: "189.204.158.121",
    },
    {
      id: 3,
      first_name: "Zedekiah",
      last_name: "De Zamudio",
      email: "zdezamudio2@amazon.de",
      gender: "Male",
      ip_address: "26.133.51.115",
    },
    {
      id: 4,
      first_name: "Lotte",
      last_name: "Buscher",
      email: "lbuscher3@geocities.jp",
      gender: "Female",
      ip_address: "58.36.189.142",
    },
    {
      id: 5,
      first_name: "Aubrey",
      last_name: "Mithon",
      email: "amithon4@dailymail.co.uk",
      gender: "Genderfluid",
      ip_address: "162.224.65.136",
    },
    {
      id: 6,
      first_name: "Abel",
      last_name: "Gerger",
      email: "agerger5@timesonline.co.uk",
      gender: "Genderfluid",
      ip_address: "70.105.154.214",
    },
    {
      id: 7,
      first_name: "Wendye",
      last_name: "Tonner",
      email: "wtonner6@flavors.me",
      gender: "Female",
      ip_address: "129.155.101.241",
    },
    {
      id: 8,
      first_name: "Essy",
      last_name: "Willingale",
      email: "ewillingale7@plala.or.jp",
      gender: "Female",
      ip_address: "25.72.249.145",
    },
    {
      id: 9,
      first_name: "Stevie",
      last_name: "Duncombe",
      email: "sduncombe8@opera.com",
      gender: "Male",
      ip_address: "40.171.40.3",
    },
    {
      id: 10,
      first_name: "Alane",
      last_name: "Hixley",
      email: "ahixley9@google.co.uk",
      gender: "Female",
      ip_address: "41.183.170.144",
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
              <TableCell> Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>ip_address</TableCell>
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
