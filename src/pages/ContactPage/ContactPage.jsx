import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example validation (can be extended as needed)
    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
      setSuccess(false);
      return;
    }

    // Simulate API request or email sending
    console.log('Form submitted:', formData);
    setSuccess(true);
    setError(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box className="contact-container">
      <Typography variant="h3" className="contact-heading">
        Contact Me
      </Typography>
      <Typography variant="body1" className="contact-text">
        Have a question, want to discuss a project, or just say hi? Fill out the form below, and I’ll get back to you as soon as possible.
      </Typography>
      <form className="contact-form" onSubmit={handleSubmit}>
        {success && <Alert severity="success">Message sent successfully!</Alert>}
        {error && <Alert severity="error">Please fill in all fields.</Alert>}
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          className="form-field"
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          className="form-field"
          required
        />
        <TextField
          label="Message"
          variant="outlined"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          className="form-field"
          required
        />
        <Button variant="contained" color="primary" type="submit" className="submit-button">
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default ContactPage;
