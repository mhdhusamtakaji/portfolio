import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import cvFile from "../../assets/files/CV.pdf"; // Import the PDF file

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "20px 10px",
        backgroundColor: theme.palette.mode === "dark" ? "#333" : "#f8f9fa",
        color: theme.palette.text.primary,
        borderTop:
          theme.palette.mode === "dark"
            ? "1px solid rgba(255, 215, 0, 0.2)"
            : "1px solid rgba(184, 134, 11, 0.3)",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          "& a": {
            margin: "0 5px",
            color: theme.palette.primary.main,
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          },
        }}
      >
        © {new Date().getFullYear()} MHD HUSAM TAKAJI |
        <Link
          href="https://www.linkedin.com/in/mhd-husam-takaji-a1a074289"
          target="_blank"
          rel="noopener"
        >
          LinkedIn
        </Link>{" "}
        |
        <Link
          href="https://github.com/mhdhusamtakaji"
          target="_blank"
          rel="noopener"
        >
          GitHub
        </Link>{" "}
        |
        <Link href={cvFile} download="Husam_Takaji_CV.pdf" rel="noopener">
          My CV
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
