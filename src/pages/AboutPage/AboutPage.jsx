import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';
import './AboutPage.css';
import profilePicture from '../../assets/images/profile.jpg'; // Replace with your actual profile image path
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
    <Box className="about-container">
      <Typography variant="h3" className="about-heading">
        About Me
      </Typography>
      <Grid container spacing={4} className="about-grid">
        <Grid item xs={12} md={4} className="avatar-container">
          <Avatar
            alt="Husam"
            src={profilePicture}
            className="profile-avatar"
          />
        </Grid>
        <Grid item xs={12} md={8} className="about-text">
          <Typography variant="body1">
            Hi, I’m Husam, a passionate software engineer with expertise in
            modern web technologies like React, Laravel, and Python. I
            specialize in building scalable, user-friendly applications
            and integrating AI-powered solutions.
          </Typography>
          <Typography variant="body1" className="about-subtext">
            With a strong background in full-stack development, I have
            worked on projects that include AI-driven applications,
            automated testing systems, and responsive UIs. I enjoy solving
            complex problems and bringing ideas to life through code.
          </Typography>
          <Typography variant="body1" className="about-highlight">
            Let’s collaborate and create something amazing!
          </Typography>
        </Grid>
      </Grid>
    </Box>
    </motion.div>
  );
};

export default AboutPage;
