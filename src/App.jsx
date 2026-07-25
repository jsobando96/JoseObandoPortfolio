import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import FluidBackground from './components/FluidBackground';
import Header from './components/Header';
import Footer from './components/Footer';
import './mobile.css';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import ProjectDetail from './sections/ProjectDetail';
import Contact from './sections/Contact';
import projectsData from './data/projects';

const mobileNavItems = [
  { id: 'home', path: '/', label: 'Home', icon: 'ri-home-line' },
  { id: 'about', path: '/about', label: 'About', icon: 'ri-user-line' },
  { id: 'projects', path: '/projects', label: 'Projects', icon: 'ri-briefcase-line' },
  { id: 'contact', path: '/contact', label: 'Contact', icon: 'ri-mail-send-line' },
];

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showProjectsSubMenu, setShowProjectsSubMenu] = useState(false);

  // Derive activeTab from location.pathname
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path.startsWith('/projects')) return 'projects';
    return path.substring(1) || 'home';
  };

  const activeTab = getActiveTab();

  // Close sub-menu when location changes
  useEffect(() => {
    setShowProjectsSubMenu(false);
  }, [location.pathname]);

  // Scroll to top automatically when location changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const isProjectsPath = location.pathname.startsWith('/projects');

  return (
    <>
      <FluidBackground />
      <Header />

      {/* Content Area with AnimatePresence for smooth route-like transitions */}
      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />

              {/* Redirect any unknown paths to Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />

      {/* Mobile Projects Sub-menu Overlay */}
      <AnimatePresence>
        {showProjectsSubMenu && (
          <motion.div
            className="services-submenu-overlay"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            onClick={() => setShowProjectsSubMenu(false)}
          >
            <div className="services-submenu" onClick={e => e.stopPropagation()}>
              <button onClick={() => navigate('/projects')} className="submenu-item">
                <i className="ri-apps-line"></i> All Projects
              </button>
              {projectsData.map(p => (
                <button key={p.id} onClick={() => navigate(`/projects/${p.id}`)} className="submenu-item">
                  <i className={p.icon}></i> {p.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile bottom navigation bar */}
      <div className="mobile-nav" role="navigation" aria-label="Mobile navigation">
        {mobileNavItems.map(item => {
          const isActive = item.id === 'projects' ? isProjectsPath : activeTab === item.id;
          return (
            <button
              key={item.id}
              className={`mobile-nav-item${isActive ? ' active' : ''}`}
              onClick={() => {
                if (item.id === 'projects') {
                  setShowProjectsSubMenu(!showProjectsSubMenu);
                } else {
                  navigate(item.path);
                  setShowProjectsSubMenu(false);
                }
              }}
              aria-label={item.label}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}

export default App;
