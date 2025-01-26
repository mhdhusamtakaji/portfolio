import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Tabs,
  Tab,
  Alert,
  Divider,
  MenuItem,
  Select,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useTheme } from '@mui/material/styles';

const ContactPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
    company: '',
    date: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
    setFormData({ name: '', email: '', message: '', subject: '', company: '', date: '' });
    setSuccess(false);
    setError(false);
  };

  const handleDropdownChange = (event) => {
    setTabIndex(event.target.value);
    setFormData({ name: '', email: '', message: '', subject: '', company: '', date: '' });
    setSuccess(false);
    setError(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
      setSuccess(false);
      return;
    }

    console.log('Form submitted:', formData);
    setSuccess(true);
    setError(false);
    setFormData({ name: '', email: '', message: '', subject: '', company: '', date: '' });
  };

  const formTitles = ['Request a Quote', 'Make a Job Offer', 'Schedule an Interview'];

  const formFields = [
    [
      <TextField
        key="subject"
        label="Project Title/Subject"
        variant="outlined"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        fullWidth
        required
      />,
    ],
    [
      <TextField
        key="company"
        label="Company Name"
        variant="outlined"
        name="company"
        value={formData.company}
        onChange={handleChange}
        fullWidth
        required
      />,
    ],
    [
      <TextField
        key="date"
        label="Proposed Date"
        variant="outlined"
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        fullWidth
        required
        InputLabelProps={{ shrink: true }}
      />,
    ],
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          px: { xs: 3, sm: 5 },
          py: { xs: 4, sm: 6 },
          maxWidth: '800px',
          mx: 'auto',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            mb: 4,
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        >
          Get in Touch
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: 'text.primary',
            mb: 4,
          }}
        >
          Whether you’re looking to start a project, offer a job, or schedule an interview,
          fill out the relevant form below, and I’ll respond promptly!
        </Typography>

        {/* Tabs for Forms (Hidden on Small Screens) */}
        {!isSmallScreen ? (
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            centered
            sx={{ mb: 4, borderBottom: '1px solid', borderColor: 'divider' }}
          >
            {formTitles.map((title, index) => (
              <Tab label={title} key={index} sx={{ color: 'text.primary' }} />
            ))}
          </Tabs>
        ) : (
          // Dropdown for Smaller Screens
          <Select
            value={tabIndex}
            onChange={handleDropdownChange}
            fullWidth
            displayEmpty
            sx={{ mb: 4 }}
          >
            {formTitles.map((title, index) => (
              <MenuItem key={index} value={index}>
                {title}
              </MenuItem>
            ))}
          </Select>
        )}

        {/* Dynamic Form */}
        <form onSubmit={handleSubmit}>
          {success && <Alert severity="success">Message sent successfully!</Alert>}
          {error && <Alert severity="error">Please fill in all required fields.</Alert>}
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
            required
          />
          {formFields[tabIndex]}
          <TextField
            label="Message"
            variant="outlined"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            sx={{ mb: 2, mt: 2 }}
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ py: 1.5, fontWeight: 'bold' }}
          >
            Submit
          </Button>
        </form>

        <Divider sx={{ my: 6 }} />

        {/* Contact Information */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
            Contact Information
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'space-evenly',
              gap: { xs: 4, sm: 0 },
              mb: 4,
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <PhoneIcon color="primary" sx={{ fontSize: '3rem' }} />
              <Typography variant="body1" sx={{ mt: 2 }}>
                +971-505-890129
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <EmailIcon color="primary" sx={{ fontSize: '3rem' }} />
              <Typography variant="body1" sx={{ mt: 2 }}>
                mhdhusamtakaji@gmail.com
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <LocationOnIcon color="primary" sx={{ fontSize: '3rem' }} />
              <Typography variant="body1" sx={{ mt: 2 }}>
                Dubai, UAE
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default ContactPage;
