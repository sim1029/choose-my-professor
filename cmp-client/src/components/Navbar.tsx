import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import cmpLogo from "../assets/cmp-logo.png";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <a href="/">
            <img src={cmpLogo} width={200}></img>
          </a>
        </Box>
        <Button
          variant="contained"
          disableElevation
          color="secondary"
          component="a"
          href="https://docs.google.com/forms/d/e/1FAIpQLScojtY88___vaox2T1qDZY9pDGnW-gG6N55A4ghqDQd-3yyNA/viewform"
          target="_blank"
        >
          Review a Course
        </Button>
      </Toolbar>
    </Box>
  );
};

export default Navbar;
