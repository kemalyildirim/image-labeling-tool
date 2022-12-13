import React from "react";
import {
  Toolbar,
  Divider,
  Box,
  List,
  CssBaseline,
  AppBar,
  IconButton,
  Typography,
  Drawer,
} from "@mui/material";
import { BrowserRouter, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LabelsItem from "./LabelsItem";
import ImagesItem from "./ImagesItem";
import StartAnnotationsItem from "./StartAnnotationsItem";
import HomeItem from "./HomeItem";

export default function Sidebar() {
  const sidebarWidth = 240;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleSidebarToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const sidebarContent = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <HomeItem />
        <LabelsItem />
        <ImagesItem />
        <StartAnnotationsItem />
      </List>
    </div>
  );
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${sidebarWidth}px)` },
            ml: { sm: `${sidebarWidth}` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open sidebar"
              edge="start"
              onClick={handleSidebarToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Image Labeling Tool
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: sidebarWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleSidebarToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: sidebarWidth,
              },
            }}
          >
            {sidebarContent}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: sidebarWidth,
              },
            }}
            open
          >
            {sidebarContent}
          </Drawer>
        </Box>
      </Box>
    </BrowserRouter>
  );
}
