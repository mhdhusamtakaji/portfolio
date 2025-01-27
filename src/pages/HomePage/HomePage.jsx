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
import { useNavigate } from 'react-router-dom';
import HeroImage from '../../assets/images/hero.jpg';

const HomePage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        px: { xs: 2, sm: 4 },
        py: { xs: 8, md: 10 },
      }}
      >
      <Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.default,
    py: { xs: 4, md: 8 },
    px: { xs: 2, sm: 4, md: 6 },
  }}
>
  {/* Text Content */}
  <Box
  sx={{
    flex: 1,
    textAlign: { xs: 'center', md: 'left' },
    pr: { xs: 0, md: 6 },
    mb: { xs: 6, md: 0 },
    py: { xs: 4, md: 6 },
    backgroundColor: theme.palette.background.default,
  }}
>
  <Typography
    variant="h2"
    sx={{
      fontWeight: 'bold',
      fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
      lineHeight: 1.2,
      mb: 3,
      color: theme.palette.primary.main,
    }}
  >
    Transforming Ideas into Scalable Software
  </Typography>
  <Typography
    variant="body1"
    sx={{
      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem' },
      lineHeight: 1.6,
      mb: 4,
      color: theme.palette.text.primary,
    }}
  >
    As a passionate Software Engineer, I specialize in crafting end-to-end web applications with 
    modern technologies like React, Laravel, and AWS. From building highly efficient REST APIs to 
    designing sleek, responsive UIs, I bring a solutions-driven approach to software development.
    Whether you're looking to launch a startup, optimize your systems, or elevate user experiences, 
    I’m here to help turn your vision into reality.
  </Typography>
  <Button
    // variant="contained"
    // size="large"
    sx={{
      textTransform: 'none',
      fontWeight: 'bold',
      px: 4,
      py: 1.5,
      fontSize: '1rem',
      // backgroundColor: theme.palette.primary.dark,
      // '&:hover': {
        // backgroundColor: theme.palette.primary.main,
      // },
    }}
    onClick={() => navigate('/contact')}
  >
    Let’s Build Something Amazing
  </Button>
</Box>


  {/* Hero Image */}
  {/* <Box
    sx={{
      flex: 1,
      textAlign: 'center',
      display: 'flex',
      justifyContent: { xs: 'center', md: 'flex-end' },
    }}
  >
    <img
      src={HeroImage}
      alt="Hero"
      style={{
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '12px',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
      }}
    />
  </Box> */}
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
              title: 'EDUWaves - AIM',
              description:
                'A cutting-edge AI platform to transform education into a personalized and engaging experience. Empowering students, families, teachers, and schools, AIM makes learning more effective, interactive, and insightful than ever before.',
              link: 'https://www.aim.edu-waves.com',
            },
            {
              title: 'EDUWaves',
              description:
                'The official online registration platform for EDUWaves Education Consultancy, offering users access to services, course registrations, and online assistance.',
              link: 'https://www.edu-waves.com',
            },
            {
              title: 'PrimeSketch',
              description:
                'A professional portfolio for PrimeSketch, a leading team of architects and designers known for their work in commercial showrooms, VIP villas, and corporate offices.',
              link: 'https://primesketch.net',
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
                  Visit Site
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
            // href="projects"
            onClick={()=> {navigate('/projects')}}
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
          // href="contact"
          onClick={()=> {navigate('/contact')}}

        >
          Contact Me
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
