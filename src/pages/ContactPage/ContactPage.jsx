import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Select,
  MenuItem,
  TextField,
  Button,
  Alert,
  CircularProgress,
  Divider,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

// Icons
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';

// Example CV file
import cvFile from '../../assets/files/CV.pdf';

// ------------- Validation Schema -------------
const schema = yup.object().shape({
  name: yup.string().required('Name is required').max(100),
  email: yup.string().required('Email is required').email('Invalid email').max(200),
  message: yup.string().required('Message is required').max(2000),
  subject: yup.string().when('formType', {
    is: 'Request a Quote',
    then: (schema) => schema.required('Project Title/Subject is required').max(200),
    otherwise: (schema) => schema.notRequired()
  }),
  company: yup.string().when('formType', {
    is: 'Make a Job Offer',
    then: (schema) => schema.required('Company Name is required').max(200),
    otherwise: (schema) => schema.notRequired()
  }),
  date: yup.string().when('formType', {
    is: 'Schedule an Interview',
    then: (schema) => schema.required('Proposed date is required'),
    otherwise: (schema) => schema.notRequired()
  })
});

// ------------- Tab Titles -------------
const formTitles = ['Request a Quote', 'Make a Job Offer', 'Schedule an Interview'];

const ContactPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // React Hook Form setup
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      subject: '',
      company: '',
      date: '',
      formType: formTitles[0] // Initial form type is the first tab
    }
  });

  // Reset scroll on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle tab changes
  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
    // Reset form but keep the correct formType
    methods.reset({
      name: '',
      email: '',
      message: '',
      subject: '',
      company: '',
      date: '',
      formType: formTitles[newIndex]
    });
    setSuccess(false);
    setError(false);
  };

  // Handle dropdown changes (for small screens)
  const handleDropdownChange = (event) => {
    const newIndex = event.target.value;
    setTabIndex(newIndex);
    methods.reset({
      name: '',
      email: '',
      message: '',
      subject: '',
      company: '',
      date: '',
      formType: formTitles[newIndex]
    });
    setSuccess(false);
    setError(false);
  };

  // Form submission
  const onSubmit = async (data) => {
    setSuccess(false);
    setError(false);

    setLoading(true);
    try {
      // Send JSON to the PHP script
      const response = await axios.post(
        'https://mhdhusamtakaji.com/api/sendEmail.php',
        data, // Sending JSON
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );

      // Check response
      if (response.data.success) {
        setSuccess(true);
        methods.reset({
          name: '',
          email: '',
          message: '',
          subject: '',
          company: '',
          date: '',
          formType: formTitles[tabIndex]
        });
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Error sending email:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // We'll conditionally render a single extra field based on the tabIndex
  const renderExtraField = () => {
    switch (tabIndex) {
      case 0: // Request a Quote => subject
        return (
          <TextField
            label="Project Title/Subject"
            {...methods.register('subject')}
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            error={!!methods.formState.errors.subject}
            helperText={methods.formState.errors.subject?.message}
          />
        );
      case 1: // Make a Job Offer => company
        return (
          <TextField
            label="Company Name"
            {...methods.register('company')}
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            error={!!methods.formState.errors.company}
            helperText={methods.formState.errors.company?.message}
          />
        );
      case 2: // Schedule an Interview => date
        return (
          <TextField
            label="Proposed Date"
            type="date"
            {...methods.register('date')}
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            InputLabelProps={{ shrink: true }}
            error={!!methods.formState.errors.date}
            helperText={methods.formState.errors.date?.message}
          />
        );
      default:
        return null;
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Box
        sx={{
          px: { xs: 2, sm: 4 },
          py: { xs: 10, md: 12 },
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
        <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.primary', mb: 4 }}>
          Whether you’re looking to start a project, offer a job, or schedule an interview,
          fill out the relevant form below, and I’ll respond promptly!
        </Typography>

        {/* Tabs for larger screens OR dropdown for smaller screens */}
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

        {/* The Form - use FormProvider to give child components access to react-hook-form */}
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {/* Success & Error Alerts */}
            {success && <Alert severity="success" sx={{ mb: 2 }}>Message sent successfully!</Alert>}
            {error && <Alert severity="error" sx={{ mb: 2 }}>Failed to send. Please try again.</Alert>}

            {/* Hidden: track which form type we're on, purely for the server's info */}
            <input type="hidden" {...methods.register('formType')} />

            {/* Name Field */}
            <TextField
              label="Name"
              {...methods.register('name')}
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              error={!!methods.formState.errors.name}
              helperText={methods.formState.errors.name?.message}
            />

            {/* Email Field */}
            <TextField
              label="Email"
              {...methods.register('email')}
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              error={!!methods.formState.errors.email}
              helperText={methods.formState.errors.email?.message}
            />

            {/* Conditionally render the extra field (subject/company/date) */}
            {renderExtraField()}

            {/* Message Field */}
            <TextField
              label="Message"
              {...methods.register('message')}
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              sx={{ mb: 2 }}
              error={!!methods.formState.errors.message}
              helperText={methods.formState.errors.message?.message}
            />

            {/* Submit Button */}
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{ py: 1.5, fontWeight: 'bold' }}
              disabled={loading}
              startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
            >
              {loading ? 'Sending...' : 'Submit'}
            </Button>
          </form>
        </FormProvider>

        <Divider sx={{ my: 6 }} />

        {/* Contact Info */}
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
              <DescriptionIcon color="primary" sx={{ fontSize: '3rem' }} />
              <Typography
                variant="body1"
                sx={{ mt: 2, cursor: 'pointer' }}
                onClick={() => window.open(cvFile, '_blank')}
              >
                View My CV
              </Typography>
            </Box>
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
