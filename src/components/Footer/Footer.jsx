import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import './Footer.css';

const Footer = () => {
  return (
    <Box className="footer-container">
      <Typography variant="body2" className="footer-text">
        © {new Date().getFullYear()} Husam Takaji | 
        <Link href="https://www.linkedin.com/in/mhd-husam-takaji-a1a074289" target="_blank" rel="noopener">
          LinkedIn
        </Link> | 
        <Link href="https://github.com/mhdhusamtakaji" target="_blank" rel="noopener">
          GitHub
        </Link> | 
        <Link href="/path-to-your-cv.pdf" target="_blank" rel="noopener" download>
          My CV
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
