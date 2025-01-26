import React, { useState } from 'react';
import { Box, Grid, Typography, Button, Divider, Pagination, Modal, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import projectsData from '../../assets/data/projectsData'; // Import project data

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const handlePaginationChange = (event, value) => {
    setCurrentImageIndex(value - 1);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: { xs: 4, md: 6 }, maxWidth: '1200px', mx: 'auto' }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          mb: 4,
          fontSize: { xs: '2rem', md: '2.5rem' },
        }}
      >
        My Projects
      </Typography>

      <Grid container spacing={4}>
        {/* Left Panel: Project Titles and Descriptions */}
        <Grid item xs={12} md={5}>
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Box
                onClick={() => handleProjectClick(project)}
                sx={{
                  p: 2,
                  mb: 2,
                  borderRadius: 2,
                  backgroundColor: selectedProject === project ? 'primary.light' : 'action.hover',
                  cursor: 'pointer',
                  '&:hover': { backgroundColor: 'primary.main', color: 'white' },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    color: selectedProject === project ? 'primary.contrastText' : 'text.primary',
                  }}
                  component="a"
                  href={project.link}
                  target="_blank"
                >
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {project.description}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Grid>

        {/* Right Panel: Image Gallery */}
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              p: 3,
              borderRadius: 2,
              backgroundColor: 'action.hover',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src={selectedProject.images[currentImageIndex]}
              alt={selectedProject.title}
              style={{
                maxWidth: '100%',
                maxHeight: '400px',
                objectFit: 'contain',
                borderRadius: '8px',
              }}
              onClick={() => handleImageClick(currentImageIndex)}
            />
            <Pagination
              count={selectedProject.images.length}
              page={currentImageIndex + 1}
              onChange={handlePaginationChange}
              sx={{ mt: 2 }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Image Modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            width: '90vw',
            height: '90vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 3,
          }}
        >
          <IconButton
            sx={{ position: 'absolute', top: 16, right: 16 }}
            onClick={() => setModalOpen(false)}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={selectedProject.images[currentImageIndex]}
            alt={selectedProject.title}
            style={{
              maxWidth: '100%',
              maxHeight: '80vh',
              objectFit: 'contain',
              borderRadius: '8px',
            }}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <IconButton onClick={handlePreviousImage} sx={{ ml: 2 }}>
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton onClick={handleNextImage} sx={{ mr: 2 }}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ProjectsPage;
