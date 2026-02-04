import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero/Introduction Section */}
      <section className="py-5" style={{ backgroundColor: '#0B132B' }}>
        <div className="container">
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-8 mx-auto text-center">
              <Typography variant="h2" component="h1" gutterBottom className="fw-bold" sx={{ color: '#FFFFFF' }}>
                Hi, I'm Hardik
              </Typography>
              <Typography variant="h5" gutterBottom className="mb-3" sx={{ color: '#5BC0BE' }}>
                Software Engineer
              </Typography>
              <Typography variant="body1" paragraph className="mb-4" sx={{ fontSize: '1.1rem', color: '#FFFFFF' }}>
                I'm currentlty a student passionate about building applications with an aim to solve real-world problems.
              </Typography>
              <Button 
                variant="contained" 
                size="large" 
                sx={{ mt: 2, px: 4, py: 1.5, backgroundColor: '#5BC0BE', color: '#0B132B', '&:hover': { backgroundColor: '#3A506B', color: '#FFFFFF' } }}
                onClick={() => navigate('/projects')}
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <Typography variant="h3" component="h2" gutterBottom className="text-center mb-4">
                About Me
              </Typography>
              <Typography variant="body1" paragraph>
                I am currently pursuing a degree in Computer Science with a strong interest in web development
                and software engineering. What started as a curiosity about how websites work has grown into
                a passion for building responsive, scalable, and user-friendly applications.
              </Typography>
              <Typography variant="body1" paragraph>
                I enjoy working across both front-end and back-end development and continuously strive to learn
                new technologies and industry best practices. Beyond coding, I actively explore open-source
                projects, follow tech blogs, and build personal projects to sharpen my problem-solving skills.
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
