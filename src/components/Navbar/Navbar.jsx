import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { FaCode } from "react-icons/fa";
import { useTheme } from "@mui/material/styles";
import "./Navbar.css";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const location = useLocation();
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const activeStyle = {
    color: theme.palette.primary.main,
    fontWeight: 700,
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-8px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "30px",
      height: "3px",
      background:
        theme.palette.mode === "dark"
          ? "linear-gradient(90deg, #FFD700, #FFA500)"
          : "linear-gradient(90deg, #B8860B, #DAA520)",
      borderRadius: "2px",
    },
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(10, 10, 10, 0.95)"
            : "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(20px)",
        color: theme.palette.text.primary,
        zIndex: theme.zIndex.drawer + 1,
        boxShadow:
          theme.palette.mode === "dark"
            ? "0px 4px 20px rgba(255, 215, 0, 0.1)"
            : "0px 4px 20px rgba(0, 0, 0, 0.1)",
        borderBottom:
          theme.palette.mode === "dark"
            ? "1px solid rgba(255, 215, 0, 0.2)"
            : "1px solid rgba(255, 215, 0, 0.3)",
      }}
    >
      <Toolbar className="navbar-container">
        {/* Logo */}
        <Box className="logo-container">
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: "bold",
              marginRight: "8px",
              fontSize: "1.5rem",
            }}
          >
            <FaCode />
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              color: theme.palette.text.primary,
              fontSize: "1.2rem",
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(135deg, #FFD700, #FFA500)"
                  : "linear-gradient(135deg, #B8860B, #DAA520)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            MHD HUSAM TAKAJI
          </Typography>
        </Box>

        {/* Desktop Nav Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <Button
              key={link.name}
              component={Link}
              to={link.path}
              sx={{
                ...(location.pathname === link.path
                  ? activeStyle
                  : {
                      color: theme.palette.text.primary,
                      fontWeight: 500,
                      px: 2,
                      py: 1,
                      position: "relative",
                      "&:hover": {
                        background: "transparent",
                        backgroundImage:
                          theme.palette.mode === "dark"
                            ? "linear-gradient(135deg, #FFD700, #FFA500)"
                            : "linear-gradient(135deg, #B8860B, #DAA520)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: "-8px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "20px",
                          height: "2px",
                          background:
                            theme.palette.mode === "dark"
                              ? "linear-gradient(90deg, #FFD700, #FFA500)"
                              : "linear-gradient(90deg, #B8860B, #DAA520)",
                          borderRadius: "1px",
                        },
                      },
                    }),
                textTransform: "none",
                fontSize: "1rem",
                transition: "all 0.3s ease",
                minWidth: "80px", // Fixed width to prevent spacing shift
              }}
            >
              {link.name}
            </Button>
          ))}
          <IconButton
            onClick={toggleTheme}
            sx={{
              color: theme.palette.primary.main,
              background: "rgba(255, 215, 0, 0.1)",
              border: "1px solid rgba(255, 215, 0, 0.3)",
              "&:hover": {
                background: "rgba(255, 215, 0, 0.2)",
                transform: "scale(1.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </div>

        {/* Hamburger Menu for Mobile */}
        <IconButton
          className="menu-icon"
          onClick={toggleDrawer(true)}
          sx={{
            display: { sm: "none" },
            color: theme.palette.primary.main,
            background: "rgba(255, 215, 0, 0.1)",
            border: "1px solid rgba(255, 215, 0, 0.3)",
            "&:hover": {
              background: "rgba(255, 215, 0, 0.2)",
              transform: "scale(1.1)",
            },
            transition: "all 0.3s ease",
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgba(10, 10, 10, 0.95)"
                  : "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              color: theme.palette.text.primary,
              borderRight:
                theme.palette.mode === "dark"
                  ? "1px solid rgba(255, 215, 0, 0.2)"
                  : "1px solid rgba(184, 134, 11, 0.3)",
              width: 280,
            },
          }}
        >
          {/* Drawer Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "20px",
              borderBottom:
                theme.palette.mode === "dark"
                  ? "1px solid rgba(255, 215, 0, 0.2)"
                  : "1px solid rgba(184, 134, 11, 0.3)",
              background:
                theme.palette.mode === "dark"
                  ? "rgba(255, 215, 0, 0.05)"
                  : "rgba(255, 215, 0, 0.08)",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                marginRight: "12px",
                color: theme.palette.primary.main,
                fontSize: "1.5rem",
              }}
            >
              <FaCode />
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                color: theme.palette.text.primary,
                fontSize: "1.1rem",
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(135deg, #FFD700, #FFA500)"
                    : "linear-gradient(135deg, #B8860B, #DAA520)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              MHD HUSAM TAKAJI
            </Typography>
          </Box>

          {/* <Divider /> */}

          {/* Drawer Nav Links */}
          <List className="drawer-list">
            {navLinks.map((link) => (
              <ListItem
                button
                key={link.name}
                component={Link}
                to={link.path}
                onClick={toggleDrawer(false)}
                sx={{
                  padding: "16px 20px",
                  margin: "4px 12px",
                  borderRadius: 2,
                  ...(location.pathname === link.path
                    ? {
                        backgroundImage:
                          theme.palette.mode === "dark"
                            ? "linear-gradient(135deg, #FFD700, #FFA500)"
                            : "linear-gradient(135deg, #B8860B, #DAA520)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: 700,
                        background: "transparent",
                        border:
                          theme.palette.mode === "dark"
                            ? "1px solid rgba(255, 215, 0, 0.3)"
                            : "1px solid rgba(184, 134, 11, 0.3)",
                        position: "relative",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: "4px",
                          background:
                            theme.palette.mode === "dark"
                              ? "linear-gradient(180deg, #FFD700, #FFA500)"
                              : "linear-gradient(180deg, #B8860B, #DAA520)",
                          borderRadius: "0 2px 2px 0",
                        },
                      }
                    : {
                        color: theme.palette.text.primary,
                        "&:hover": {
                          background: "transparent",
                          backgroundImage:
                            theme.palette.mode === "dark"
                              ? "linear-gradient(135deg, #FFD700, #FFA500)"
                              : "linear-gradient(135deg, #B8860B, #DAA520)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        },
                      }),
                  transition: "all 0.3s ease",
                }}
              >
                <ListItemText
                  primary={link.name}
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontWeight: location.pathname === link.path ? 700 : 500,
                      fontSize: "1rem",
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ marginTop: "auto" }} />

          {/* Light/Dark Switch at Bottom */}
          <ListItem
            button
            onClick={toggleTheme}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              margin: "8px 12px",
              borderRadius: 2,
              background:
                theme.palette.mode === "dark"
                  ? "rgba(255, 215, 0, 0.05)"
                  : "rgba(255, 215, 0, 0.08)",
              border:
                theme.palette.mode === "dark"
                  ? "1px solid rgba(255, 215, 0, 0.2)"
                  : "1px solid rgba(184, 134, 11, 0.3)",
              "&:hover": {
                background:
                  theme.palette.mode === "dark"
                    ? "rgba(255, 215, 0, 0.1)"
                    : "rgba(255, 215, 0, 0.15)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <IconButton
              edge="start"
              sx={{
                color: theme.palette.primary.main,
                background: "rgba(255, 215, 0, 0.1)",
                border: "1px solid rgba(255, 215, 0, 0.3)",
                "&:hover": {
                  background: "rgba(255, 215, 0, 0.2)",
                  transform: "scale(1.1)",
                },
                transition: "all 0.3s ease",
              }}
            >
              {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <ListItemText
              primary={isDarkMode ? "Light Mode" : "Dark Mode"}
              sx={{
                textAlign: "center",
                marginLeft: "16px",
                color: theme.palette.text.primary,
                "& .MuiListItemText-primary": {
                  fontWeight: 600,
                  fontSize: "1rem",
                },
              }}
            />
          </ListItem>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
