import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Pagination,
  Modal,
  IconButton,
  Link,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import projectsData from "../../assets/data/projectsData"; // Import project data

const ProjectsPage = () => {
  const theme = useTheme();
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4 },
        py: { xs: 10, md: 12 },
        maxWidth: "1200px",
        mx: "auto",
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)"
            : "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: 800,
          mb: 6,
          fontSize: { xs: "2rem", md: "2.5rem" },
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(135deg, #FFD700, #FFA500)"
              : "linear-gradient(135deg, #B8860B, #DAA520)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
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
                  p: 3,
                  mb: 3,
                  borderRadius: 3,
                  background:
                    selectedProject === project
                      ? theme.palette.mode === "dark"
                        ? "rgba(255, 215, 0, 0.15)"
                        : "rgba(184, 134, 11, 0.15)"
                      : theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.05)"
                      : "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  border:
                    selectedProject === project
                      ? theme.palette.mode === "dark"
                        ? "2px solid rgba(255, 215, 0, 0.6)"
                        : "2px solid rgba(184, 134, 11, 0.6)"
                      : theme.palette.mode === "dark"
                      ? "1px solid rgba(255, 215, 0, 0.2)"
                      : "1px solid rgba(184, 134, 11, 0.2)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  "&::before":
                    selectedProject === project
                      ? {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "3px",
                          background:
                            theme.palette.mode === "dark"
                              ? "linear-gradient(90deg, #FFD700, #FFA500, #B8860B)"
                              : "linear-gradient(90deg, #B8860B, #DAA520, #8B6914)",
                        }
                      : {},
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow:
                      theme.palette.mode === "dark"
                        ? "0 8px 32px rgba(255, 215, 0, 0.2)"
                        : "0 8px 32px rgba(184, 134, 11, 0.2)",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    textDecoration: "none",
                    color:
                      selectedProject === project
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                    fontSize: "1.2rem",
                    mb: 1,
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                  }}
                >
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
              p: 4,
              borderRadius: 3,
              background:
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.05)"
                  : "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
              border:
                theme.palette.mode === "dark"
                  ? "1px solid rgba(255, 215, 0, 0.2)"
                  : "1px solid rgba(184, 134, 11, 0.2)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              boxShadow:
                theme.palette.mode === "dark"
                  ? "0 8px 32px rgba(255, 215, 0, 0.1)"
                  : "0 8px 32px rgba(184, 134, 11, 0.1)",
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(90deg, #FFD700, #FFA500, #B8860B)"
                    : "linear-gradient(90deg, #B8860B, #DAA520, #8B6914)",
              },
            }}
          >
            {/* Display the Project Link if available */}
            {selectedProject.link && (
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  color: theme.palette.text.primary,
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                Check it out at:{" "}
                <Link
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener"
                  sx={{
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                    fontWeight: 600,
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {selectedProject.link}
                </Link>
              </Typography>
            )}

            <img
              src={selectedProject.images[currentImageIndex]}
              alt={selectedProject.title}
              style={{
                maxWidth: "100%",
                maxHeight: "400px",
                objectFit: "contain",
                borderRadius: "8px",
              }}
              onClick={() => handleImageClick(currentImageIndex)}
            />
            <Pagination
              count={selectedProject.images.length}
              page={currentImageIndex + 1}
              onChange={handlePaginationChange}
              sx={{
                mt: 3,
                "& .MuiPaginationItem-root": {
                  color: theme.palette.text.primary,
                  "&.Mui-selected": {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  },
                  "&:hover": {
                    backgroundColor:
                      theme.palette.mode === "dark"
                        ? "rgba(255, 215, 0, 0.1)"
                        : "rgba(184, 134, 11, 0.1)",
                  },
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Image Modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor:
              theme.palette.mode === "dark"
                ? "rgba(10, 10, 10, 0.95)"
                : "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px)",
            borderRadius: 3,
            boxShadow:
              theme.palette.mode === "dark"
                ? "0 8px 32px rgba(255, 215, 0, 0.2)"
                : "0 8px 32px rgba(184, 134, 11, 0.2)",
            border:
              theme.palette.mode === "dark"
                ? "1px solid rgba(255, 215, 0, 0.2)"
                : "1px solid rgba(184, 134, 11, 0.2)",
            width: "90vw",
            height: "90vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 3,
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: theme.palette.text.primary,
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgba(255, 215, 0, 0.1)"
                  : "rgba(184, 134, 11, 0.1)",
              "&:hover": {
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(255, 215, 0, 0.2)"
                    : "rgba(184, 134, 11, 0.2)",
              },
            }}
            onClick={() => setModalOpen(false)}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={selectedProject.images[currentImageIndex]}
            alt={selectedProject.title}
            style={{
              maxWidth: "100%",
              maxHeight: "80vh",
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <IconButton
              onClick={handlePreviousImage}
              sx={{
                ml: 2,
                color: theme.palette.text.primary,
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(255, 215, 0, 0.1)"
                    : "rgba(184, 134, 11, 0.1)",
                "&:hover": {
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? "rgba(255, 215, 0, 0.2)"
                      : "rgba(184, 134, 11, 0.2)",
                },
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton
              onClick={handleNextImage}
              sx={{
                mr: 2,
                color: theme.palette.text.primary,
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(255, 215, 0, 0.1)"
                    : "rgba(184, 134, 11, 0.1)",
                "&:hover": {
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? "rgba(255, 215, 0, 0.2)"
                      : "rgba(184, 134, 11, 0.2)",
                },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ProjectsPage;
