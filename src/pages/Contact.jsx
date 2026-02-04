import { useState } from 'react';
import { Typography, TextField, Button, Alert } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-5">
            <Typography variant="h2" component="h1" gutterBottom className="fw-bold">
              Get In Touch
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Feel free to reach out for collaboration opportunities or just to say hello!
            </Typography>
          </div>

          {submitted && (
            <Alert severity="success" sx={{ mb: 3 }}>
              Thank you for your message! I'll get back to you soon.
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  variant="outlined"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  variant="outlined"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  variant="outlined"
                  multiline
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{ py: 1.5 }}
                >
                  Send Message
                </Button>
              </div>
            </div>
          </form>

          <div className="mt-5 text-center">
            <Typography variant="h5" gutterBottom>
              Other Ways to Connect
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Email: john.doe@email.com
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              LinkedIn: linkedin.com/in/johndoe
            </Typography>
            <Typography variant="body1" color="text.secondary">
              GitHub: github.com/johndoe
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
