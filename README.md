# Nikhil Mendiratta - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. This website showcases Nikhil Mendiratta's skills, projects, and services as a Web Developer and Data Analyst.

## 🚀 Features

### Design & UI
- **Modern Design**: Clean, professional layout with a mixed light/dark color theme
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Typewriter Effect**: Animated text in the hero section
- **Scroll-based Animations**: Elements animate as they come into view

### Sections
1. **Hero Section** - Animated heading with typewriter effect and CTA buttons
2. **About Section** - Bio and key features with animated stats
3. **Skills Section** - Animated skill bars and categorized skills
4. **Projects Section** - Project cards with hover animations
5. **Education Section** - Timeline layout with certifications
6. **Services Section** - Freelancing services with pricing
7. **Resume Section** - Downloadable resume with preview
8. **Contact Section** - Contact form with social links
9. **Footer** - Logo, links, and social media

### Technical Features
- **React 18** with modern hooks and functional components
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **React Icons** for consistent iconography
- **Type Animation** for typewriter effects
- **Smooth Scrolling** navigation
- **Mobile-First** responsive design

## 🛠️ Technologies Used

- **Frontend**: React 18, JSX
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons)
- **Type Animation**: React Type Animation
- **Build Tool**: Create React App

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

## 🎨 Customization

### Adding Your Resume
To add your downloadable resume:

1. **Add your resume file** to the `public` folder (e.g., `resume.pdf`)
2. **Update the download function** in `src/components/Resume.js`:
   ```javascript
   const handleDownload = () => {
     const link = document.createElement('a');
     link.href = '/resume.pdf'; // Your resume file name
     link.download = 'Nikhil_Mendiratta_Resume.pdf';
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
   };
   ```

### Colors
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#faf5ff',
    100: '#f3e8ff',
    // ... more shades
  }
}
```

### Content
Update the content in each component file:
- `src/components/Hero.js` - Hero section content
- `src/components/About.js` - About section content
- `src/components/Skills.js` - Skills and proficiency levels
- `src/components/Projects.js` - Project details
- `src/components/Education.js` - Education and certifications
- `src/components/Services.js` - Service offerings and pricing
- `src/components/Contact.js` - Contact information

### Logo
The logo is created using CSS and can be found in:
- `src/components/Navbar.js` - Navbar logo
- `src/components/Footer.js` - Footer logo

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎭 Animations

### Scroll Animations
- Fade-in effects as elements enter viewport
- Slide-in animations from left/right
- Staggered animations for lists and grids

### Hover Animations
- Scale effects on buttons and cards
- Color transitions
- Transform effects

### Page Transitions
- Smooth scrolling between sections
- Animated navigation
- Loading states

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

## 📄 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   ├── Hero.js            # Hero section
│   ├── About.js           # About section
│   ├── Skills.js          # Skills section
│   ├── Projects.js        # Projects section
│   ├── Education.js       # Education section
│   ├── Services.js        # Services section
│   ├── Resume.js          # Resume section
│   ├── Contact.js         # Contact section
│   └── Footer.js          # Footer component
├── App.js                 # Main app component
├── index.js              # React entry point
└── index.css             # Global styles and Tailwind
```

## 🎯 Key Features Implemented

### ✅ Completed Features
- [x] Modern, responsive design
- [x] Typewriter animation in hero section
- [x] Smooth scroll animations
- [x] Interactive skill bars
- [x] Project cards with hover effects
- [x] Contact form with validation
- [x] Social media integration
- [x] Mobile-friendly navigation
- [x] Dark/light theme support
- [x] Animated logo (NM initials)
- [x] Resume download functionality
- [x] Service pricing cards
- [x] Education timeline
- [x] Footer with back-to-top button

### 🎨 Design Elements
- **Color Scheme**: Blue gradient primary colors with slate grays
- **Typography**: Inter font for body text, JetBrains Mono for code
- **Spacing**: Consistent padding and margins using Tailwind utilities
- **Shadows**: Subtle shadows for depth and hierarchy
- **Borders**: Rounded corners for modern appearance

## 🔧 Configuration

### Tailwind CSS
The project uses a custom Tailwind configuration with:
- Custom color palette
- Custom animations
- Responsive breakpoints
- Custom utility classes

### Framer Motion
Animation configurations include:
- Staggered animations
- Scroll-triggered animations
- Hover effects
- Page transitions

## 📞 Contact

For any questions or customization requests, feel free to reach out:
- Email: nikhil@example.com
- Phone: +91 98765 43210
- Location: Delhi, India

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Nikhil Mendiratta** 