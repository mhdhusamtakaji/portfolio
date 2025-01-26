import React from 'react';
import { Typography, Button, Box, Grid, Avatar, Tooltip } from '@mui/material';
import {
  FaReact,
  FaHtml5,
  FaPython,
  FaDatabase,
  FaAws,
  FaLaravel,
  FaPhp,
  FaBootstrap,
  FaGit,
  FaGithub,
  FaStripe,
} from 'react-icons/fa';
import { SiMysql, SiMui, SiJavascript, SiCss3, SiMailtrap, SiOpenai } from 'react-icons/si';
import { useTheme } from '@mui/material/styles';

const HomePage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        px: { xs: 2, sm: 4 },
        py: { xs: 4, md: 6 },
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: 'center',
          py: { xs: 4, md: 6 },
          maxWidth: '800px',
          mx: 'auto',
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '2rem', md: '2.8rem', lg: '3.2rem' } }}
        >
          Building Scalable and Innovative Web Solutions
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, fontSize: { xs: '1rem', md: '1.2rem' } }}>
          I specialize in building modern, responsive full-stack web applications from the ground up,
          delivering robust REST APIs, dynamic UIs, and seamless user experiences. With expertise in
          React, Laravel, MySQL, and AWS, I bring innovative ideas to life, tailored to meet your
          unique requirements.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ textTransform: 'none', fontWeight: 'bold' }}
          href="#contact"
        >
          Contact Me
        </Button>
      </Box>

      {/* Technology Stack Section */}
      <Box
        sx={{
          py: { xs: 4, md: 6 },
          maxWidth: '1200px',
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 4,
            fontSize: { xs: '1.5rem', md: '2rem' },
          }}
        >
          Technology Stack
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Frontend Technologies */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                p: { xs: 2, md: 3 },
                borderRadius: 2,
                textAlign: 'center',
                backgroundColor: theme.palette.action.hover,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', mb: 2, color: theme.palette.primary.main }}
              >
                Frontend
              </Typography>
              <Grid container justifyContent="center" spacing={2}>
                {[
                  { name: 'React', Icon: FaReact },
                  { name: 'HTML5', Icon: FaHtml5 },
                  { name: 'CSS3', Icon: SiCss3 },
                  { name: 'JavaScript', Icon: SiJavascript },
                  { name: 'Bootstrap', Icon: FaBootstrap },
                  { name: 'MUI', Icon: SiMui },
                ].map(({ name, Icon }, index) => (
                  <Grid item key={index}>
                    <Tooltip title={name} arrow>
                      <Avatar
                        sx={{
                          width: { xs: 50, sm: 60 },
                          height: { xs: 50, sm: 60 },
                          mx: 'auto',
                          backgroundColor: theme.palette.action.hover,
                        }}
                      >
                        <Icon size={30} color={theme.palette.primary.main} />
                      </Avatar>
                    </Tooltip>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Backend Technologies */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                p: { xs: 2, md: 3 },
                borderRadius: 2,
                textAlign: 'center',
                backgroundColor: theme.palette.action.hover,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', mb: 2, color: theme.palette.primary.main }}
              >
                Backend
              </Typography>
              <Grid container justifyContent="center" spacing={2}>
                {[
                  { name: 'Laravel', Icon: FaLaravel },
                  { name: 'PHP', Icon: FaPhp },
                  { name: 'Python', Icon: FaPython },
                ].map(({ name, Icon }, index) => (
                  <Grid item key={index}>
                    <Tooltip title={name} arrow>
                      <Avatar
                        sx={{
                          width: { xs: 50, sm: 60 },
                          height: { xs: 50, sm: 60 },
                          mx: 'auto',
                          backgroundColor: theme.palette.action.hover,
                        }}
                      >
                        <Icon size={30} color={theme.palette.primary.main} />
                      </Avatar>
                    </Tooltip>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Database Technologies */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                p: { xs: 2, md: 3 },
                borderRadius: 2,
                textAlign: 'center',
                backgroundColor: theme.palette.action.hover,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', mb: 2, color: theme.palette.primary.main }}
              >
                Databases
              </Typography>
              <Grid container justifyContent="center" spacing={2}>
                {[
                  { name: 'MySQL', Icon: SiMysql },
                  { name: 'Database Design', Icon: FaDatabase },
                ].map(({ name, Icon }, index) => (
                  <Grid item key={index}>
                    <Tooltip title={name} arrow>
                      <Avatar
                        sx={{
                          width: { xs: 50, sm: 60 },
                          height: { xs: 50, sm: 60 },
                          mx: 'auto',
                          backgroundColor: theme.palette.action.hover,
                        }}
                      >
                        <Icon size={30} color={theme.palette.primary.main} />
                      </Avatar>
                    </Tooltip>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Tools & Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                p: { xs: 2, md: 3 },
                borderRadius: 2,
                textAlign: 'center',
                backgroundColor: theme.palette.action.hover,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', mb: 2, color: theme.palette.primary.main }}
              >
                Tools & Services
              </Typography>
              <Grid container justifyContent="center" spacing={2}>
                {[
                  { name: 'OpenAI', Icon: SiOpenai },
                  { name: 'AWS', Icon: FaAws },
                  { name: 'GitHub', Icon: FaGithub },
                  { name: 'Git', Icon: FaGit },
                  { name: 'Stripe', Icon: FaStripe },
                  { name: 'Mailtrap', Icon: SiMailtrap },
                ].map(({ name, Icon }, index) => (
                  <Grid item key={index}>
                    <Tooltip title={name} arrow>
                      <Avatar
                        sx={{
                          width: { xs: 50, sm: 60 },
                          height: { xs: 50, sm: 60 },
                          mx: 'auto',
                          backgroundColor: theme.palette.action.hover,
                        }}
                      >
                        <Icon size={30} color={theme.palette.primary.main} />
                      </Avatar>
                    </Tooltip>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Personal Projects Section */}
      <Box
        sx={{
          py: { xs: 4, md: 6 },
          maxWidth: '1200px',
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', mb: 4, fontSize: { xs: '1.5rem', md: '2rem' } }}
        >
          Personal Projects
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: 'EDU-Waves.com',
              description:
                'A full-stack web application for educational organizations, including user registration, course applications, and research assistance.',
              link: 'https://www.edu-waves.com',
            },
            {
              title: 'Primesketch.net',
              description:
                'Developed a complete portfolio website for a construction company, including an owner dashboard for real-time project and service management.',
              link: 'https://www.primesketch.net',
            },
            {
              title: 'Engineering Zone',
              description:
                'Built a full-stack mobile app and web dashboard using Flutter and Laravel for educational institutions.',
              link: '#',
            },
          ].map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  p: 3,
                  backgroundColor: theme.palette.action.hover,
                  borderRadius: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>
                <Button
                  variant="text"
                  href={project.link}
                  target="_blank"
                  sx={{ textTransform: 'none', fontWeight: 'bold' }}
                >
                  View Project
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ textTransform: 'none', fontWeight: 'bold' }}
            href="/projects"
          >
            View All Projects
          </Button>
        </Box>
      </Box>

      {/* Call to Action Section */}
      <Box sx={{ textAlign: 'center', py: { xs: 6, md: 8 } }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
          Ready to Collaborate?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Let’s build something incredible together. Get in touch today to discuss your ideas and goals.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ textTransform: 'none', fontWeight: 'bold' }}
          href="#contact"
        >
          Contact Me
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
