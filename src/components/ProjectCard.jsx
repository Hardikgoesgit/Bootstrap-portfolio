import { Card, CardContent, Typography, Chip, Box } from '@mui/material';

const ProjectCard = ({ title, description, techStack }) => {
  return (
    <Card sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      backgroundColor: '#FFFFFF', 
      boxShadow: 3, 
      border: '2px solid #5BC0BE',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 12px 24px rgba(91, 192, 190, 0.3)',
        borderColor: '#1C2541'
      }
    }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#1C2541' }}>
          {title}
        </Typography>
        <Typography variant="body2" paragraph sx={{ color: '#3A506B' }}>
          {description}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle2" gutterBottom sx={{ color: '#1C2541' }}>
            Tech Stack:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {techStack.map((tech, index) => (
              <Chip 
                key={index} 
                label={tech} 
                size="small" 
                sx={{ 
                  backgroundColor: '#5BC0BE', 
                  color: '#0B132B',
                  border: 'none',
                  fontWeight: 500
                }} 
              />
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
