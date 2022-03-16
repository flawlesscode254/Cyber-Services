import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";

import Services from "../pages/Services";
import Providers from "../pages/Providers";
import Contact from "../pages/Contact";

import MenuBar from "../components/MenuBar"

import AppLogo from "../files/cyber-security.png"

export default function FixedBottomNavigation() {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  return (
    <Box ref={ref}>
      <List>
        {value === 0 ? <Services /> : value === 1 ? <Providers /> : <Contact />}
      </List>
      <Paper
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <img
              src={AppLogo}
              alt="new Icon"
              height={30}
              width={30}
              style={{
                margin: 10,
              }}
            />
            <h2
              style={{
                fontWeight: 400,
                fontFamily: "sans-serif",
                letterSpacing: 2,
              }}
            >
              Thunder Repair
            </h2>
          </div>
          <MenuBar />
        </div>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Services"
            icon={<HomeRepairServiceIcon />}
          />
          <BottomNavigationAction
            label="Providers"
            icon={<ManageAccountsIcon />}
          />
          <BottomNavigationAction
            label="Contact"
            icon={<ConnectWithoutContactIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}