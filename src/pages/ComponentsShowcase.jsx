import { Typography, Button, TextField, Card as MuiCard, CardContent } from '@mui/material';

const ComponentsShowcase = () => {
  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-12 text-center">
          <Typography variant="h2" component="h1" gutterBottom className="fw-bold">
            Component Showcase
          </Typography>
          <Typography variant="body1" color="text.secondary" className="mb-4">
            Explore our collection of Material UI components
          </Typography>
        </div>
      </div>

      {/* Material UI Cards */}
      <div className="row mb-5">
        <div className="col-12 mb-3">
          <Typography variant="h4" gutterBottom>
            Material UI Cards
          </Typography>
        </div>
        <div className="col-md-4 mb-4">
          <MuiCard>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Card Title 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is a Material UI card component with simple content and styling.
              </Typography>
            </CardContent>
          </MuiCard>
        </div>
        <div className="col-md-4 mb-4">
          <MuiCard>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Card Title 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cards are perfect for displaying grouped information in a clean format.
              </Typography>
            </CardContent>
          </MuiCard>
        </div>
        <div className="col-md-4 mb-4">
          <MuiCard>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Card Title 3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Material UI cards support various content types and layouts.
              </Typography>
            </CardContent>
          </MuiCard>
        </div>
      </div>

      {/* Material UI Buttons */}
      <div className="row mb-5">
        <div className="col-12 mb-3">
          <Typography variant="h4" gutterBottom>
            Material UI Button Variants
          </Typography>
        </div>
        <div className="col-12">
          <div className="d-flex flex-wrap gap-3">
            <Button variant="contained">Contained Button</Button>
            <Button variant="outlined">Outlined Button</Button>
            <Button variant="text">Text Button</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="contained" color="success">Success</Button>
            <Button variant="contained" color="error">Error</Button>
            <Button variant="outlined" disabled>Disabled</Button>
            <Button variant="contained" size="small">Small</Button>
            <Button variant="contained" size="large">Large</Button>
          </div>
        </div>
      </div>

      {/* Material UI Text Fields */}
      <div className="row mb-5">
        <div className="col-12 mb-3">
          <Typography variant="h4" gutterBottom>
            Material UI Text Fields
          </Typography>
        </div>
        <div className="col-md-4 mb-3">
          <TextField
            label="Standard"
            variant="standard"
            fullWidth
            placeholder="Enter text here"
          />
        </div>
        <div className="col-md-4 mb-3">
          <TextField
            label="Filled"
            variant="filled"
            fullWidth
            placeholder="Enter text here"
          />
        </div>
        <div className="col-md-4 mb-3">
          <TextField
            label="Outlined"
            variant="outlined"
            fullWidth
            placeholder="Enter text here"
          />
        </div>
        <div className="col-md-6 mb-3">
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            helperText="We'll never share your email"
          />
        </div>
        <div className="col-md-6 mb-3">
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            helperText="Must be at least 8 characters"
          />
        </div>
      </div>

      {/* Typography Examples */}
      <div className="row">
        <div className="col-12 mb-3">
          <Typography variant="h4" gutterBottom>
            Material UI Typography
          </Typography>
        </div>
        <div className="col-12">
          <Typography variant="h1" gutterBottom>h1. Heading</Typography>
          <Typography variant="h2" gutterBottom>h2. Heading</Typography>
          <Typography variant="h3" gutterBottom>h3. Heading</Typography>
          <Typography variant="h4" gutterBottom>h4. Heading</Typography>
          <Typography variant="h5" gutterBottom>h5. Heading</Typography>
          <Typography variant="h6" gutterBottom>h6. Heading</Typography>
          <Typography variant="subtitle1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            subtitle2. Lorem ipsum dolor sit amet
          </Typography>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
          <Typography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            caption text
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ComponentsShowcase;
