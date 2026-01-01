# Sunday AI - The Helpful Robotics Company

Sunday AI is a modern, high-performance landing page built for a robotics company. It features a premium design with smooth scrolling, complex animations, and interactive components that push the boundaries of web aesthetics.

## Key Features

- **Premium Animations**: Powered by [Framer Motion](https://www.framer.com/motion/) and [GSAP](https://gsap.com/) for fluid, scroll-triggered transitions.
- **Smooth Scrolling**: Integrated with [Lenis](https://github.com/darkroomengineering/lenis) and [Locomotive Scroll](https://github.com/locomotivemtl/locomotive-scroll) for a silky-smooth browsing experience.
- **Modern Design System**: Built using [Tailwind CSS 4.0](https://tailwindcss.com/) and [Sass](https://sass-lang.com/) for a modular and scalable UI.
- **Built with Vite**: Extremely fast development and build times.
- **Responsive Layout**: Fully optimized for various screen sizes, ensuring a consistent experience across all devices.

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Styling**: Tailwind CSS 4.0, SCSS Modules
- **Animation**: Framer Motion, GSAP
- **Scroll Handling**: Lenis, Locomotive Scroll

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd SundayAI
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173` to see the magic happen.

## Project Structure

```text
src/
├── components/       # Reusable UI components
│   ├── about/        # About section
│   ├── common/       # Global components like Navbar and Logo
│   ├── footer/       # Multi-variant footer components
│   ├── hero/         # Hero section
│   └── ...           # Other specialized sections (Magic, Intuition, etc.)
├── App.jsx           # Main application entry and scroll logic
├── main.jsx          # React DOM mounting
└── index.css         # Global styles and Tailwind configuration
```

## License

This project is for educational/practice purposes. All rights reserved.

---

Built with love by [Sunday Team](https://github.com/sapnendra)
