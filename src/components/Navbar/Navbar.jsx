import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, Typography, Box } from '@mui/material';
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
    color: theme.palette.primary.contrastText, 
    fontWeight: 'bold',
    backgroundColor: theme.palette.primary.main, 
    borderRadius: '12px', 
    padding: '10px 15px', 
    margin: '5px 5px', 
    transition: 'all 0.3s ease', 
    width: '50%', 
  };
  

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
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
          <List className="drawer-list">
            {navLinks.map((link) => (
              <ListItem
                button
                key={link.name}
                component={Link}
                to={link.path}
                onClick={toggleDrawer(false)}
                style={
                  location.pathname === link.path
                    ? activeStyle
                    : { color: theme.palette.text.primary }
                }
              >
                <ListItemText primary={link.name} />
              </ListItem>
            ))}
            <ListItem button onClick={toggleTheme}>
              <IconButton edge="start" color="inherit">
                {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <ListItemText
                primary={isDarkMode ? 'Light Mode' : 'Dark Mode'}
                sx={{ marginLeft: '10px', color: theme.palette.text.primary }}
              />
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
