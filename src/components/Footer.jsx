import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer className="py-4 mt-5" style={{ backgroundColor: '#3A506B' }}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <Typography variant="body2" sx={{ color: '#FFFFFF' }}>
              © {new Date().getFullYear()} Hardik Kumar - Student Portfolio. All rights reserved.
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
