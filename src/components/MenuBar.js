import * as React from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      style={{
        margin: 10,
      }}
    >
      <div onClick={handleClick}>
        <MenuOpenIcon
          style={{
            fontSize: 30,
            cursor: "pointer",
          }}
        />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          style={{
            color: "#d10445",
            cursor: "pointer",
            fontWeight: "bolder",
          }}
          onClick={handleClose}
        >
          Purchases
        </MenuItem>
        <MenuItem
          style={{
            color: "#d10445",
            cursor: "pointer",
            fontWeight: "bolder",
          }}
          onClick={handleClose}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
