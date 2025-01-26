import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './BackToTop.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <Fab
        color="primary"
        className="back-to-top"
        onClick={scrollToTop}
      >
        <ArrowUpwardIcon />
      </Fab>
    )
  );
};

export default BackToTop;
