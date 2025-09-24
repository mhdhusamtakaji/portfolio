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
      <Toolbar
        className="navbar-container"
        sx={{
          px: { xs: 1, sm: 2, md: 3, lg: 4 },
          py: { xs: 0.5, sm: 1 },
          minHeight: { xs: "56px", sm: "64px" },
        }}
      >
        {/* Logo */}
        <Box
          className="logo-container"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "4px", sm: "8px" },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: "bold",
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
              display: "flex",
              alignItems: "center",
              lineHeight: 1,
            }}
          >
            <FaCode />
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              color: theme.palette.text.primary,
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(135deg, #FFD700, #FFA500)"
                  : "linear-gradient(135deg, #B8860B, #DAA520)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: { xs: "none", sm: "block" },
              lineHeight: 1,
            }}
          >
            MHD HUSAM TAKAJI
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              color: theme.palette.text.primary,
              fontSize: "0.75rem",
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(135deg, #FFD700, #FFA500)"
                  : "linear-gradient(135deg, #B8860B, #DAA520)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: { xs: "block", sm: "none" },
              lineHeight: 1,
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
                      px: { xs: 1, sm: 1.5, md: 2 },
                      py: { xs: 0.5, sm: 1 },
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
                fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
                transition: "all 0.3s ease",
                minWidth: { xs: "60px", sm: "70px", md: "80px" },
              }}
            >
              {link.name}
            </Button>
          ))}
          <IconButton
            onClick={toggleTheme}
            disableRipple
            disableFocusRipple
            sx={{
              color: theme.palette.primary.main,
              aspectRatio: "1/1",
              transition: "all 0.3s ease",
              background: "none !important",
              "&:hover, &:active, &:focus": {
                background: "none !important",
                boxShadow: "none",
              },
            }}
          >
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </div>

        {/* Hamburger Menu for Mobile */}
        <IconButton
          className="menu-icon"
          onClick={toggleDrawer(!drawerOpen)}
          sx={{
            display: { sm: "none" },
            color: theme.palette.primary.main,
            alignItems: "center",
            gap: { xs: "8px", sm: "12px" },
            padding: { xs: "8px", sm: "10px" },
            borderRadius: 2,
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          <MenuIcon sx={{ fontSize: "1.1rem" }} />
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
              width: { xs: 280, sm: 320 },
            },
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            {/* Drawer Header */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: { xs: "16px", sm: "20px" },
                // borderBottom:
                //   theme.palette.mode === "dark"
                //     ? "1px solid rgba(255, 215, 0, 0.2)"
                //     : "1px solid rgba(184, 134, 11, 0.3)",
                // background:
                //   theme.palette.mode === "dark"
                //     ? "rgba(255, 215, 0, 0.05)"
                //     : "rgba(255, 215, 0, 0.08)",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  marginRight: { xs: "8px", sm: "12px" },
                  color: theme.palette.primary.main,
                  fontSize: { xs: "1.2rem", sm: "1.5rem" },
                }}
              >
                <FaCode />
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  color: theme.palette.text.primary,
                  fontSize: { xs: "0.9rem", sm: "1.1rem" },
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
            <List className="drawer-list" sx={{ flex: 1 }}>
              {navLinks.map((link) => (
                <ListItem
                  button
                  key={link.name}
                  component={Link}
                  to={link.path}
                  onClick={toggleDrawer(false)}
                  sx={{
                    padding: { xs: "12px 16px", sm: "16px 20px" },
                    margin: { xs: "2px 8px", sm: "4px 12px" },
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
                          position: "relative",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            left: "0",
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: "4px",
                            height: "20px",
                            background:
                              theme.palette.mode === "dark"
                                ? "linear-gradient(180deg, #FFD700, #FFA500)"
                                : "linear-gradient(180deg, #B8860B, #DAA520)",
                            borderRadius: "0 2px 2px 0",
                          },
                        }
                      : {
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                          "&:hover": {
                            background: "transparent",
                            "& .MuiListItemText-primary": {
                              color: "transparent",
                              backgroundImage:
                                theme.palette.mode === "dark"
                                  ? "linear-gradient(135deg, #FFD700, #FFA500)"
                                  : "linear-gradient(135deg, #B8860B, #DAA520)",
                              backgroundClip: "text",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            },
                            "&::before": {
                              content: '""',
                              position: "absolute",
                              left: "0",
                              top: "50%",
                              transform: "translateY(-50%)",
                              width: "3px",
                              height: "16px",
                              background:
                                theme.palette.mode === "dark"
                                  ? "linear-gradient(180deg, #FFD700, #FFA500)"
                                  : "linear-gradient(180deg, #B8860B, #DAA520)",
                              borderRadius: "0 2px 2px 0",
                            },
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
                        color:
                          location.pathname === link.path
                            ? "transparent"
                            : theme.palette.text.primary,
                        backgroundImage:
                          location.pathname === link.path
                            ? theme.palette.mode === "dark"
                              ? "linear-gradient(135deg, #FFD700, #FFA500)"
                              : "linear-gradient(135deg, #B8860B, #DAA520)"
                            : "none",
                        backgroundClip:
                          location.pathname === link.path ? "text" : "initial",
                        WebkitBackgroundClip:
                          location.pathname === link.path ? "text" : "initial",
                        WebkitTextFillColor:
                          location.pathname === link.path
                            ? "transparent"
                            : "initial",
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>

            {/* Light/Dark Switch at Bottom */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: { xs: "16px", sm: "20px" },
                margin: { xs: "4px 8px", sm: "8px 12px" },
              }}
            >
              <Box
                onClick={toggleTheme}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: "8px", sm: "12px" },
                  padding: { xs: "8px", sm: "10px" },
                  // borderRadius: 2,
                  // background: "rgba(255, 215, 0, 0.05)",
                  // border: "1px solid rgba(255, 215, 0, 0.2)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  // "&:hover": {
                  //   background: "rgba(255, 215, 0, 0.1)",
                  //   transform: "translateY(-1px)",
                  //   boxShadow: "0 4px 12px rgba(255, 215, 0, 0.2)",
                  // },
                }}
              >
                {isDarkMode ? (
                  <LightModeIcon
                    sx={{
                      fontSize: { xs: "1.4rem", sm: "1.6rem" },
                      color: theme.palette.primary.main,
                    }}
                  />
                ) : (
                  <DarkModeIcon
                    sx={{
                      fontSize: { xs: "1.4rem", sm: "1.6rem" },
                      color: theme.palette.primary.main,
                    }}
                  />
                )}
                <Typography
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    marginLeft: "8px",
                  }}
                >
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
