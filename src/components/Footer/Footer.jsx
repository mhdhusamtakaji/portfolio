import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import cvFile from '../../assets/files/CV.pdf'; // Import the PDF file
import './Footer.css';

const Footer = () => {
  return (
    <Box className="footer-container">
      <Typography variant="body2" className="footer-text">
        © {new Date().getFullYear()} MHD HUSAM TAKAJI | 
        <Link href="https://www.linkedin.com/in/mhd-husam-takaji-a1a074289" target="_blank" rel="noopener">
          LinkedIn
        </Link> | 
        <Link href="https://github.com/mhdhusamtakaji" target="_blank" rel="noopener">
          GitHub
        </Link> | 
        <Link href={cvFile} download="Husam_Takaji_CV.pdf" rel="noopener">
          My CV
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
