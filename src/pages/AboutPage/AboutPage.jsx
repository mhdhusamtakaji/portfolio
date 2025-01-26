import React from 'react';
import { Box, Typography, Grid, Avatar, Button, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import profilePicture from '../../assets/images/profile.jpg'; // Replace with your actual profile image path

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          px: { xs: 3, sm: 5 },
          py: { xs: 4, sm: 6 },
          maxWidth: '1200px',
          mx: 'auto',
        }}
      >
        {/* Page Heading */}
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            mb: 4,
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        >
          About Me
        </Typography>

        {/* Main About Section */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              width: { xs: 150, sm: 200 },
              height: { xs: 150, sm: 200 },
              border: '2px solid',
              borderColor: 'primary.main',
              borderRadius: '50%',
              mx: 'auto',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={profilePicture}
              alt="Profile Picture"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', 
                objectPosition: 'top', 
              }}
            />
          </Box>

          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant="body1"
              sx={{ fontSize: '1.2rem', color: 'text.primary', mb: 2 }}
            >
              Hello! I’m Husam, a passionate and experienced software engineer
              specializing in modern web technologies like React, Laravel, and
              Python. I excel at building scalable, robust applications that
              deliver exceptional user experiences.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: '1.2rem', color: 'text.primary', mb: 2 }}
            >
              Over the years, I’ve worked on diverse projects, including
              AI-powered solutions, full-stack applications, and responsive
              UIs. I thrive on solving challenging problems and turning ideas
              into impactful solutions.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 'bold', color: 'text.secondary' }}
            >
              Let’s collaborate to build something exceptional!
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5 }} />

        {/* What I Do Section */}
        <Box>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 4,
              fontSize: { xs: '1.5rem', md: '2rem' },
            }}
          >
            What I Do
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: 'Full-Stack Development',
                description:
                  'Building robust, scalable web applications from scratch, handling both backend and frontend development with the latest technologies.',
              },
              {
                title: 'AI Integration',
                description:
                  'Creating intelligent, AI-powered features and systems that enhance business operations and user experiences.',
              },
              {
                title: 'UI/UX Design',
                description:
                  'Designing modern, responsive, and user-friendly interfaces that ensure optimal usability and engagement.',
              },
              {
                title: 'Problem Solving',
                description:
                  'Applying creative problem-solving techniques to build solutions that address unique challenges effectively.',
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box
                  sx={{
                    p: 3,
                    backgroundColor: 'action.hover',
                    borderRadius: 2,
                    textAlign: 'center',
                    height: '100%',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* Personal Values */}
        <Box>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 4,
              fontSize: { xs: '1.5rem', md: '2rem' },
            }}
          >
            My Values
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: 'center', color: 'text.primary', mb: 4 }}
          >
            These are the core principles that guide my work and define my
            approach to problem-solving.
          </Typography>
          <Grid container spacing={4}>
            {['Quality', 'Innovation', 'Collaboration', 'Integrity'].map(
              (value, index) => (
                <Grid item xs={6} sm={3} key={index}>
                  <Box
                    sx={{
                      p: 8,
                      backgroundColor: 'action.hover',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      height: 100,
                      width: 100,
                      mx: 'auto',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 'bold', color: 'primary.main', fontSize: '1.1rem' }}
                    >
                      {value}
                    </Typography>
                  </Box>
                </Grid>
              )
            )}
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ textTransform: 'none', fontWeight: 'bold' }}
            href="#contact"
          >
            Get in Touch
          </Button>
        </Box>
      </Box>
    </motion.div>
  );
};

export default AboutPage;
