import { Typography } from '@mui/material';

const About = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <Typography variant="h2" component="h1" gutterBottom className="fw-bold text-center mb-4">
            About This Project
          </Typography>
          
          <Typography variant="body1" paragraph className="mb-4">
            This is a professional React single-page application built to demonstrate
            modern web development practices and technologies. The project showcases
            the integration of multiple popular libraries and frameworks working
            together seamlessly.
          </Typography>
          <Typography variant="h4" gutterBottom className="mt-5">
            Technologies Used
          </Typography>
          
          <Typography variant="body1" paragraph>
            <strong>React:</strong> A powerful JavaScript library for building user
            interfaces with reusable functional components.
          </Typography>

          <Typography variant="body1" paragraph>
            <strong>React Router:</strong> Declarative routing for React applications,
            enabling navigation between different pages without full page reloads.
          </Typography>

          <Typography variant="body1" paragraph>
            <strong>Bootstrap:</strong> The world's most popular front-end framework
            for building responsive, mobile-first websites using its flexible grid
            system and utility classes.
          </Typography>

          <Typography variant="body1" paragraph>
            <strong>Material UI:</strong> A comprehensive library of React components
            that implement Google's Material Design, providing beautiful and consistent
            UI elements like cards, buttons, text fields, and typography.
          </Typography>

          <Typography variant="h4" gutterBottom className="mt-5">
            Project Features
          </Typography>

          <ul>
            <li>
              <Typography variant="body1" paragraph>
                Clean and professional user interface with consistent styling
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Responsive design that works on all devices
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Reusable components for maintainable code
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Multiple pages with smooth navigation
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Well-organized folder structure following best practices
              </Typography>
            </li>
          </ul>

          <Typography variant="h4" gutterBottom className="mt-5">
            Purpose
          </Typography>
          
          <Typography variant="body1" paragraph>
            This project was created as a demonstration of full-stack development
            capabilities, showcasing the ability to integrate multiple technologies
            into a cohesive, professional application. It serves as a foundation
            that can be extended with additional features and functionality.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
