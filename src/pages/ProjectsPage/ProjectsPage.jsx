import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import './ProjectsPage.css';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'EDUWaves',
    description: 'AI-powered quiz system for teachers and students.',
    image: '/path/to/eduwaves-image.jpg', // Replace with actual image paths
    link: 'https://example.com/eduwaves',
  },
  {
    title: 'AI Integration System',
    description: 'Integrated GPT-4 and Google Vision AI for automated evaluation.',
    image: '/path/to/ai-integration-image.jpg',
    link: 'https://example.com/ai-integration',
  },
  {
    title: 'Python PDF Parser',
    description: 'Built a Flask API to parse PDFs, extracting questions and images.',
    image: '/path/to/pdf-parser-image.jpg',
    link: 'https://github.com/mhdhusamtakaji',
  },
];

const ProjectsPage = () => {
  return (
    <Box className="projects-container">
      <Typography variant="h3" className="projects-heading">
        My Projects
      </Typography>
      <Grid container spacing={4} className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Grid item xs={12} sm={6} md={4}>
              <Card className="project-card">
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h5" className="project-title">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" className="project-description">
                    {project.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href={project.link}
                    target="_blank"
                    className="project-link"
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </motion.div>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsPage;
