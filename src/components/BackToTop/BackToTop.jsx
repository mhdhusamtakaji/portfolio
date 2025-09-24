import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const BackToTop = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <Fab
        color="primary"
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
          background: "linear-gradient(135deg, #FFD700, #FFA500)",
          color: "#0a0a0a",
          "&:hover": {
            background: "linear-gradient(135deg, #FFA500, #B8860B)",
            transform: "scale(1.1)",
          },
          transition: "all 0.3s ease",
        }}
      >
        <ArrowUpwardIcon />
      </Fab>
    )
  );
};

export default BackToTop;
