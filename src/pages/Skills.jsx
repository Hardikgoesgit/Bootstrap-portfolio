import { Typography, Card, CardContent } from '@mui/material';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Front-End Development',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Bootstrap', 'Material UI', 'Responsive Design']
    },
    {
      category: 'Back-End Development',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'MySQL', 'Authentication & Authorization']
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git & GitHub', 'VS Code', 'npm', 'Postman', 'Chrome DevTools', 'Vite']
    },
    {
      category: 'Programming Languages',
      skills: ['JavaScript', 'Python', 'Java', 'C++', 'SQL']
    },
    {
      category: 'Concepts & Methodologies',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'MVC Architecture', 'Agile Development', 'Version Control']
    },
    {
      category: 'Soft Skills',
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management', 'Quick Learner']
    }
  ];

  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-12 text-center">
          <Typography variant="h2" component="h1" gutterBottom className="fw-bold" sx={{ color: '#1C2541' }}>
            My Skills
          </Typography>
          <Typography variant="body1" className="mb-4" sx={{ color: '#3A506B' }}>
            Technologies and tools I work with
          </Typography>
        </div>
      </div>

      <div className="row g-4">
        {skillCategories.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <Card sx={{ 
              height: '100%', 
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
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#1C2541' }}>
                  {item.category}
                </Typography>
                <ul style={{ paddingLeft: '20px' }}>
                  {item.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>
                      <Typography variant="body2" sx={{ mb: 0.5, color: '#3A506B' }}>
                        {skill}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
