# Student Portfolio Website

A professional, responsive portfolio website built with React, showcasing skills, projects, and demonstrating modern web development practices.

## 🚀 Live Demo

[View Live Site](#) <!-- Add your deployment link here -->

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Color Palette](#color-palette)
- [Screenshots](#screenshots)

## 📖 About

This is a student portfolio website designed to showcase technical skills, projects, and professional information in a clean, modern interface. The project demonstrates proficiency in React development, component-based architecture, routing, and responsive design.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Multiple Pages**: 
  - Home - Professional introduction and bio
  - Skills - Technical skills organized by categories
  - Projects - Portfolio of projects with tech stack details
- **Modern UI**: Clean interface with hover effects and smooth transitions
- **Component-Based Architecture**: Reusable components for maintainability
- **React Router**: Seamless navigation between pages
- **Material UI Integration**: Professional UI components
- **Bootstrap Grid**: Responsive layout system

## 🛠️ Technologies Used

### Core Technologies
- **React.js** - Frontend library for building user interfaces
- **React Router DOM** - Client-side routing
- **Vite** - Fast build tool and development server

### UI Frameworks & Libraries
- **Material UI (@mui/material)** - React component library
- **Bootstrap 5** - CSS framework for responsive design
- **Emotion** - CSS-in-JS library for styling

### Development Tools
- **ESLint** - Code linting
- **Git** - Version control

## 📁 Project Structure

```
Exp2/
├── public/
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── ProjectCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Exp2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 💻 Usage

### Development
```bash
npm run dev
```
Starts the development server with hot module replacement.

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder.

### Preview
```bash
npm run preview
```
Locally preview the production build.

### Lint
```bash
npm run lint
```
Run ESLint to check code quality.

## 🎨 Color Palette

The project uses a modern blue-themed color scheme:

| Color | Hex Code | Usage |
|-------|----------|-------|
| Very Dark Navy | `#0B132B` | Hero background, dark accents |
| Dark Blue | `#1C2541` | Navbar, headings |
| Medium Blue | `#3A506B` | Footer, body text |
| Teal/Cyan | `#5BC0BE` | Accents, buttons, borders |
| White | `#FFFFFF` | Main background, cards |

[View Palette on Coolors](https://coolors.co/palette/0b132b-1c2541-3a506b-5bc0be-ffffff)

## 📸 Screenshots

<!-- Add screenshots of your project here -->

### Home Page
![Home Page](#)

### Skills Page
![Skills Page](#)

### Projects Page
![Projects Page](#)

## 🎯 Key Components

### Navbar
- Responsive navigation bar with Bootstrap
- Links to all main pages
- Dark theme with brand accent color

### ProjectCard
- Reusable component for displaying projects
- Includes title, description, and tech stack
- Hover effects for better UX

### Footer
- Simple footer with copyright information
- Consistent styling with overall theme

## 🌟 Customization

To customize the portfolio for your own use:

1. **Update Personal Information**: Edit the content in `src/pages/Home.jsx`
2. **Add Your Skills**: Modify the skills array in `src/pages/Skills.jsx`
3. **Add Your Projects**: Update the projects array in `src/pages/Projects.jsx`
4. **Change Colors**: Update the color values in component sx props and CSS files
5. **Update Branding**: Change "Student Portfolio" in `src/components/Navbar.jsx`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Hardik Kumar**

- Portfolio: [Your Portfolio URL]
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

Built with ❤️ using React, Material UI, and Bootstrap
