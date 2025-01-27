import React, { useState } from 'react';
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
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { FaCode } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';
import './Navbar.css';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const location = useLocation();
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const activeStyle = {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        zIndex: theme.zIndex.drawer + 1, // Ensure it stays above other elements like the drawer
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Toolbar className="navbar-container">
        {/* Logo */}
        <Box className="logo-container">
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 'bold',
              marginRight: '8px',
            }}
          >
            <FaCode />
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: theme.palette.text.primary,
            }}
          >
            MHD Husam Takaji
          </Typography>
        </Box>

        {/* Desktop Nav Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <Button
              key={link.name}
              component={Link}
              to={link.path}
              style={
                location.pathname === link.path
                  ? activeStyle
                  : { color: theme.palette.text.primary }
              }
            >
              {link.name}
            </Button>
          ))}
          <IconButton onClick={toggleTheme} color="inherit">
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>

        {/* Hamburger Menu for Mobile */}
        <IconButton
          className="menu-icon"
          onClick={toggleDrawer(true)}
          color="inherit"
          edge="start"
          sx={{ display: { sm: 'none' } }}
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
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
            },
          }}
        >
          {/* Drawer Header */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px',
              // borderBottom: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Typography
              variant="h6"
              sx={{ marginRight: '8px', color: theme.palette.primary.main }}
            >
              <FaCode />
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                color: theme.palette.text.primary,
              }}
            >
              MHD Husam Takaji
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
                  padding: '12px 16px',
                  ...(location.pathname === link.path
                    ? activeStyle
                    : { color: theme.palette.text.primary }),
                }}
              >
                <ListItemText primary={link.name} />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ marginTop: 'auto' }} />

          {/* Light/Dark Switch at Bottom */}
          <ListItem
            button
            onClick={toggleTheme}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              padding: '16px',
            }}
          >
            <IconButton edge="start" color="inherit">
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <ListItemText
              primary={isDarkMode ? 'Light Mode' : 'Dark Mode'}
              sx={{ textAlign: 'center', marginLeft: '10px', color: theme.palette.text.primary }}
            />
          </ListItem>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
