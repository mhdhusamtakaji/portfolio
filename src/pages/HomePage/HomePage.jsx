import React from "react";
import { Typography, Button, Box, Grid, Avatar, Tooltip } from "@mui/material";
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
  FaNodeJs,
  FaFire,
} from "react-icons/fa";
import {
  SiMysql,
  SiMui,
  SiJavascript,
  SiCss3,
  SiMailtrap,
  SiOpenai,
  SiTypescript,
  SiChakraui,
  SiTailwindcss,
  SiPostgresql,
  SiGooglecloud,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import HeroImage from "../../assets/images/hero.jpg";

const HomePage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "100vh",
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)"
              : "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        {/* Background Effects */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              theme.palette.mode === "dark"
                ? `
                radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 165, 0, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(184, 134, 11, 0.05) 0%, transparent 50%)
              `
                : `
                radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 165, 0, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(184, 134, 11, 0.02) 0%, transparent 50%)
              `,
            zIndex: 1,
          }}
        />

        {/* Main Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: "1200px",
            mx: "auto",
            textAlign: "center",
          }}
        >
          {/* Greeting */}
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 500,
              mb: 2,
              fontSize: { xs: "1rem", md: "1.1rem" },
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Hello, I'm
          </Typography>

          {/* Name */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3rem", sm: "4rem", md: "5rem", lg: "6rem" },
              fontWeight: 800,
              mb: 3,
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(135deg, #FFD700, #FFA500, #B8860B)"
                  : "linear-gradient(135deg, #B8860B, #DAA520, #8B6914)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            MHD HUSAM TAKAJI
          </Typography>

          {/* Title */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
              fontWeight: 600,
              mb: 4,
              color: theme.palette.text.primary,
              opacity: 0.9,
            }}
          >
            Full-Stack Developer & Cloud Engineer
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              lineHeight: 1.7,
              mb: 6,
              color: theme.palette.text.secondary,
              maxWidth: "800px",
              mx: "auto",
              px: { xs: 2, md: 0 },
            }}
          >
            I craft exceptional digital experiences using cutting-edge
            technologies like
            <span
              style={{ color: theme.palette.primary.main, fontWeight: 600 }}
            >
              {" "}
              React
            </span>
            ,
            <span
              style={{ color: theme.palette.primary.main, fontWeight: 600 }}
            >
              {" "}
              TypeScript
            </span>
            ,
            <span
              style={{ color: theme.palette.primary.main, fontWeight: 600 }}
            >
              {" "}
              Node.js
            </span>
            , and
            <span
              style={{ color: theme.palette.primary.main, fontWeight: 600 }}
            >
              {" "}
              Google Cloud
            </span>
            . From AI-powered applications to scalable cloud solutions, I
            transform ideas into reality.
          </Typography>

          {/* CTA Buttons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 3,
              justifyContent: "center",
              alignItems: "center",
              mb: 8,
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(135deg, #FFD700, #FFA500)"
                    : "linear-gradient(135deg, #B8860B, #DAA520)",
                color: theme.palette.mode === "dark" ? "#0a0a0a" : "#ffffff",
                px: 6,
                py: 2,
                fontSize: "1.1rem",
                fontWeight: 700,
                borderRadius: 3,
                textTransform: "none",
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0 8px 32px rgba(255, 215, 0, 0.3)"
                    : "0 8px 32px rgba(184, 134, 11, 0.3)",
                "&:hover": {
                  background:
                    theme.palette.mode === "dark"
                      ? "linear-gradient(135deg, #FFA500, #B8860B)"
                      : "linear-gradient(135deg, #DAA520, #8B6914)",
                  transform: "translateY(-2px)",
                  boxShadow:
                    theme.palette.mode === "dark"
                      ? "0 12px 40px rgba(255, 215, 0, 0.4)"
                      : "0 12px 40px rgba(184, 134, 11, 0.4)",
                },
                transition: "all 0.3s ease",
              }}
              onClick={() => navigate("/contact")}
            >
              Let's Work Together
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                border: "2px solid",
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                px: 6,
                py: 2,
                fontSize: "1.1rem",
                fontWeight: 600,
                borderRadius: 3,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.mode === "dark" ? "#0a0a0a" : "#ffffff",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
              onClick={() => navigate("/projects")}
            >
              View My Work
            </Button>
          </Box>

          {/* Scroll Indicator */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              color: theme.palette.text.secondary,
            }}
          >
            <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
              Scroll to explore
            </Typography>
            <Box
              sx={{
                width: "2px",
                height: "40px",
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(to bottom, #FFD700, transparent)"
                    : "linear-gradient(to bottom, #B8860B, transparent)",
                animation: "scrollPulse 2s ease-in-out infinite",
              }}
            />
          </Box>
        </Box>

        {/* Animated Background Elements */}
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "200px",
            height: "200px",
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(135deg, rgba(255, 215, 0, 0.1), transparent)"
                : "linear-gradient(135deg, rgba(255, 215, 0, 0.05), transparent)",
            borderRadius: "50%",
            animation: "float 6s ease-in-out infinite",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "20%",
            left: "10%",
            width: "150px",
            height: "150px",
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(135deg, rgba(255, 165, 0, 0.1), transparent)"
                : "linear-gradient(135deg, rgba(255, 165, 0, 0.05), transparent)",
            borderRadius: "50%",
            animation: "float 8s ease-in-out infinite reverse",
            zIndex: 1,
          }}
        />
      </Box>

      {/* Technology Stack Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          px: { xs: 2, sm: 4, md: 6 },
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)"
              : "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              theme.palette.mode === "dark"
                ? `
                radial-gradient(circle at 30% 20%, rgba(255, 215, 0, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(255, 165, 0, 0.05) 0%, transparent 50%)
              `
                : `
                radial-gradient(circle at 30% 20%, rgba(255, 215, 0, 0.02) 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(255, 165, 0, 0.02) 0%, transparent 50%)
              `,
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1200px",
            mx: "auto",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              mb: 2,
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
            Technology Stack
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              color: theme.palette.text.secondary,
              mb: 6,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Modern tools and technologies I use to build exceptional digital
            experiences
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {/* Frontend Technologies */}
            <Grid item xs={12} sm={6} md={3}>
              <Box
                className="card-hover"
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  textAlign: "center",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 215, 0, 0.2)",
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
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: theme.palette.primary.main,
                    fontSize: "1.2rem",
                  }}
                >
                  Frontend
                </Typography>
                <Grid container justifyContent="center" spacing={2}>
                  {[
                    { name: "React", Icon: FaReact },
                    { name: "TypeScript", Icon: SiTypescript },
                    { name: "HTML5", Icon: FaHtml5 },
                    { name: "CSS3", Icon: SiCss3 },
                    { name: "JavaScript", Icon: SiJavascript },
                    { name: "Tailwind CSS", Icon: SiTailwindcss },
                    { name: "ChakraUI", Icon: SiChakraui },
                    { name: "MUI", Icon: SiMui },
                  ].map(({ name, Icon }, index) => (
                    <Grid item key={index}>
                      <Tooltip title={name} arrow>
                        <Avatar
                          sx={{
                            width: { xs: 50, sm: 60 },
                            height: { xs: 50, sm: 60 },
                            mx: "auto",
                            background:
                              theme.palette.mode === "dark"
                                ? "rgba(255, 215, 0, 0.1)"
                                : "rgba(184, 134, 11, 0.1)",
                            border:
                              theme.palette.mode === "dark"
                                ? "2px solid rgba(255, 215, 0, 0.3)"
                                : "2px solid rgba(184, 134, 11, 0.3)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              background:
                                theme.palette.mode === "dark"
                                  ? "rgba(255, 215, 0, 0.2)"
                                  : "rgba(184, 134, 11, 0.2)",
                              border:
                                theme.palette.mode === "dark"
                                  ? "2px solid rgba(255, 215, 0, 0.6)"
                                  : "2px solid rgba(184, 134, 11, 0.6)",
                              transform: "scale(1.1)",
                            },
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
                className="card-hover"
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  textAlign: "center",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 215, 0, 0.2)",
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
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: theme.palette.primary.main,
                    fontSize: "1.2rem",
                  }}
                >
                  Backend
                </Typography>
                <Grid container justifyContent="center" spacing={2}>
                  {[
                    { name: "Node.js", Icon: FaNodeJs },
                    { name: "Express", Icon: SiExpress },
                    { name: "Laravel", Icon: FaLaravel },
                    { name: "PHP", Icon: FaPhp },
                    { name: "Python", Icon: FaPython },
                  ].map(({ name, Icon }, index) => (
                    <Grid item key={index}>
                      <Tooltip title={name} arrow>
                        <Avatar
                          sx={{
                            width: { xs: 50, sm: 60 },
                            height: { xs: 50, sm: 60 },
                            mx: "auto",
                            background:
                              theme.palette.mode === "dark"
                                ? "rgba(255, 215, 0, 0.1)"
                                : "rgba(184, 134, 11, 0.1)",
                            border:
                              theme.palette.mode === "dark"
                                ? "2px solid rgba(255, 215, 0, 0.3)"
                                : "2px solid rgba(184, 134, 11, 0.3)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              background:
                                theme.palette.mode === "dark"
                                  ? "rgba(255, 215, 0, 0.2)"
                                  : "rgba(184, 134, 11, 0.2)",
                              border:
                                theme.palette.mode === "dark"
                                  ? "2px solid rgba(255, 215, 0, 0.6)"
                                  : "2px solid rgba(184, 134, 11, 0.6)",
                              transform: "scale(1.1)",
                            },
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
                className="card-hover"
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  textAlign: "center",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 215, 0, 0.2)",
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
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: theme.palette.primary.main,
                    fontSize: "1.2rem",
                  }}
                >
                  Databases
                </Typography>
                <Grid container justifyContent="center" spacing={2}>
                  {[
                    { name: "PostgreSQL", Icon: SiPostgresql },
                    { name: "MySQL", Icon: SiMysql },
                    { name: "Firestore", Icon: SiFirebase },
                    { name: "Database Design", Icon: FaDatabase },
                  ].map(({ name, Icon }, index) => (
                    <Grid item key={index}>
                      <Tooltip title={name} arrow>
                        <Avatar
                          sx={{
                            width: { xs: 50, sm: 60 },
                            height: { xs: 50, sm: 60 },
                            mx: "auto",
                            background:
                              theme.palette.mode === "dark"
                                ? "rgba(255, 215, 0, 0.1)"
                                : "rgba(184, 134, 11, 0.1)",
                            border:
                              theme.palette.mode === "dark"
                                ? "2px solid rgba(255, 215, 0, 0.3)"
                                : "2px solid rgba(184, 134, 11, 0.3)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              background:
                                theme.palette.mode === "dark"
                                  ? "rgba(255, 215, 0, 0.2)"
                                  : "rgba(184, 134, 11, 0.2)",
                              border:
                                theme.palette.mode === "dark"
                                  ? "2px solid rgba(255, 215, 0, 0.6)"
                                  : "2px solid rgba(184, 134, 11, 0.6)",
                              transform: "scale(1.1)",
                            },
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
                className="card-hover"
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  textAlign: "center",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 215, 0, 0.2)",
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
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: theme.palette.primary.main,
                    fontSize: "1.2rem",
                  }}
                >
                  Cloud & Tools
                </Typography>
                <Grid container justifyContent="center" spacing={2}>
                  {[
                    { name: "Firebase", Icon: SiFirebase },
                    { name: "Google Cloud", Icon: SiGooglecloud },
                    { name: "Cloud Run", Icon: SiGooglecloud },
                    { name: "OpenAI", Icon: SiOpenai },
                    { name: "AWS", Icon: FaAws },
                    { name: "GitHub", Icon: FaGithub },
                    { name: "Git", Icon: FaGit },
                    { name: "Stripe", Icon: FaStripe },
                  ].map(({ name, Icon }, index) => (
                    <Grid item key={index}>
                      <Tooltip title={name} arrow>
                        <Avatar
                          sx={{
                            width: { xs: 50, sm: 60 },
                            height: { xs: 50, sm: 60 },
                            mx: "auto",
                            background:
                              theme.palette.mode === "dark"
                                ? "rgba(255, 215, 0, 0.1)"
                                : "rgba(184, 134, 11, 0.1)",
                            border:
                              theme.palette.mode === "dark"
                                ? "2px solid rgba(255, 215, 0, 0.3)"
                                : "2px solid rgba(184, 134, 11, 0.3)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              background:
                                theme.palette.mode === "dark"
                                  ? "rgba(255, 215, 0, 0.2)"
                                  : "rgba(184, 134, 11, 0.2)",
                              border:
                                theme.palette.mode === "dark"
                                  ? "2px solid rgba(255, 215, 0, 0.6)"
                                  : "2px solid rgba(184, 134, 11, 0.6)",
                              transform: "scale(1.1)",
                            },
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
      </Box>

      {/* Personal Projects Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          px: { xs: 2, sm: 4, md: 6 },
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)"
              : "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              theme.palette.mode === "dark"
                ? `
                radial-gradient(circle at 20% 30%, rgba(255, 215, 0, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(255, 165, 0, 0.03) 0%, transparent 50%)
              `
                : `
                radial-gradient(circle at 20% 30%, rgba(255, 215, 0, 0.01) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(255, 165, 0, 0.01) 0%, transparent 50%)
              `,
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1200px",
            mx: "auto",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              mb: 2,
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
            Featured Projects
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              color: theme.palette.text.secondary,
              mb: 6,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            A showcase of my latest work and innovative solutions
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                title: "EDUWaves - AIM",
                description:
                  "A cutting-edge AI platform to transform education into a personalized and engaging experience. Empowering students, families, teachers, and schools, AIM makes learning more effective, interactive, and insightful than ever before.",
                link: "https://www.aim.edu-waves.com",
              },
              {
                title: "EDUWaves",
                description:
                  "The official online registration platform for EDUWaves Education Consultancy, offering users access to services, course registrations, and online assistance.",
                link: "https://www.edu-waves.com",
              },
              {
                title: "PrimeSketch",
                description:
                  "A professional portfolio for PrimeSketch, a leading team of architects and designers known for their work in commercial showrooms, VIP villas, and corporate offices.",
                link: "https://primesketch.net",
              },
            ].map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  className="card-hover"
                  sx={{
                    p: 4,
                    background:
                      theme.palette.mode === "dark"
                        ? "rgba(255, 255, 255, 0.05)"
                        : "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(10px)",
                    border:
                      theme.palette.mode === "dark"
                        ? "1px solid rgba(255, 215, 0, 0.2)"
                        : "1px solid rgba(184, 134, 11, 0.2)",
                    borderRadius: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
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
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        fontSize: "1.3rem",
                        color: theme.palette.text.primary,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 3,
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                      }}
                    >
                      {project.description}
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    href={project.link}
                    target="_blank"
                    sx={{
                      textTransform: "none",
                      fontWeight: 600,
                      background: "linear-gradient(135deg, #FFD700, #FFA500)",
                      color: "#0a0a0a",
                      borderRadius: 2,
                      px: 3,
                      py: 1.5,
                      "&:hover": {
                        background: "linear-gradient(135deg, #FFA500, #B8860B)",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Visit Site
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              variant="outlined"
              size="large"
              sx={{
                textTransform: "none",
                fontWeight: 700,
                border: "2px solid",
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                px: 6,
                py: 2,
                borderRadius: 3,
                fontSize: "1.1rem",
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                  color: "#0a0a0a",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
              onClick={() => {
                navigate("/projects");
              }}
            >
              View All Projects
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Call to Action Section */}
      <Box
        sx={{
          textAlign: "center",
          py: { xs: 8, md: 12 },
          px: { xs: 2, sm: 4, md: 6 },
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)"
              : "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              theme.palette.mode === "dark"
                ? `
                radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 70%)
              `
                : `
                radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.03) 0%, transparent 70%)
              `,
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              mb: 3,
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
            Ready to Collaborate?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 6,
              fontSize: "1.2rem",
              color: theme.palette.text.secondary,
              lineHeight: 1.7,
            }}
          >
            Let's build something incredible together. Get in touch today to
            discuss your ideas and goals.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              textTransform: "none",
              fontWeight: 700,
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(135deg, #FFD700, #FFA500)"
                  : "linear-gradient(135deg, #B8860B, #DAA520)",
              color: theme.palette.mode === "dark" ? "#0a0a0a" : "#ffffff",
              px: 8,
              py: 3,
              borderRadius: 3,
              fontSize: "1.2rem",
              boxShadow:
                theme.palette.mode === "dark"
                  ? "0 8px 32px rgba(255, 215, 0, 0.3)"
                  : "0 8px 32px rgba(184, 134, 11, 0.3)",
              "&:hover": {
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(135deg, #FFA500, #B8860B)"
                    : "linear-gradient(135deg, #DAA520, #8B6914)",
                transform: "translateY(-3px)",
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0 12px 40px rgba(255, 215, 0, 0.4)"
                    : "0 12px 40px rgba(184, 134, 11, 0.4)",
              },
              transition: "all 0.3s ease",
            }}
            onClick={() => {
              navigate("/contact");
            }}
          >
            Let's Work Together
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
