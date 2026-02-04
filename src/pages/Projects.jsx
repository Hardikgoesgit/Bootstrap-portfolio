import { Typography } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'FinMate – Finance Management Platform',
      description: 'A backend-driven financial tracking platform focused on efficient data handling and clean API design. Built and optimized core modules, streamlined request flows, and delivered a working solution under tight hackathon deadlines while collaborating in a fast-paced team environment.',
      techStack: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'MongoDB']
    },
    {
      title: 'Task Management App',
      description: 'A productivity application for managing tasks and projects. Users can create, edit, delete tasks, set priorities, and track progress with an intuitive dashboard.',
      techStack: ['React', 'Material UI', 'Local Storage', 'React Router']
    },
    {
      title: 'GEM – AI Agent Platform',
      description: 'An AI-assisted web platform that enables automated task execution through structured backend workflows. Designed reliable logic flows, handled edge cases, and improved response time to ensure scalability and smooth user interaction.',
      techStack: ['JavaScript', 'C++', 'CMake']
    },
    {
      title: 'Sociant – Full Stack MERN Application',
      description: 'A secure full-stack MERN application featuring robust backend architecture and RESTful APIs. Implemented authentication, optimized routing logic, and ensured data consistency with a strong focus on performance and maintainability.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT']
    },
    {
      title: 'Recipe Finder',
      description: 'An application to search and save favorite recipes. Users can filter by ingredients, dietary restrictions, and cuisine type. Includes nutritional information display.',
      techStack: ['React', 'Bootstrap', 'API Integration', 'Firebase']
    },
    {
      title: 'Fitness Tracker',
      description: 'Track workouts, calories, and fitness goals. Features include exercise logging, progress charts, and personalized workout recommendations based on user goals.',
      techStack: ['React', 'Material UI', 'Chart.js', 'MongoDB']
    }
  ];

  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-12 text-center">
          <Typography variant="h2" component="h1" gutterBottom className="fw-bold" sx={{ color: '#1C2541' }}>
            My Projects
          </Typography>
          <Typography variant="body1" className="mb-4" sx={{ color: '#3A506B' }}>
            A showcase of my recent work and personal projects
          </Typography>
        </div>
      </div>

      <div className="row g-4">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <ProjectCard
              title={project.title}
              description={project.description}
              techStack={project.techStack}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
