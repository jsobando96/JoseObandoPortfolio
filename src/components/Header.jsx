import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import projects from '../data/projects';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [clickOpen, setClickOpen] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setClickOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close dropdown when path changes
    useEffect(() => {
        setClickOpen(false);
    }, [location.pathname]);

    const isProjectsActive = location.pathname.startsWith('/projects');

    return (
        <nav className={scrolled ? 'scrolled' : ''}>
            <Link to="/" className="logo">
                <span className="logo-mark">JO</span>
                <span className="logo-text">
                    José Obando
                    <small>WordPress Developer</small>
                </span>
            </Link>
            <div className="nav-links">
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>

                {/* Projects with dropdown */}
                <div
                    className={`nav-dropdown-wrapper${clickOpen ? ' click-open' : ''}`}
                    ref={dropdownRef}
                >
                    <button
                        onClick={() => setClickOpen(prev => !prev)}
                        className={`nav-dropdown-trigger ${isProjectsActive ? 'active' : ''}`}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}
                    >
                        Projects <i className="ri-arrow-down-s-line" style={{ fontSize: '14px', verticalAlign: 'middle' }}></i>
                    </button>

                    <div className="nav-dropdown">
                        <Link
                            to="/projects"
                            className={`dropdown-item ${location.pathname === '/projects' ? 'active' : ''}`}
                        >
                            <i className="ri-apps-line"></i>
                            All Projects
                        </Link>
                        {projects.map((p) => (
                            <Link
                                key={p.id}
                                to={`/projects/${p.id}`}
                                className={`dropdown-item ${location.pathname === `/projects/${p.id}` ? 'active' : ''}`}
                            >
                                <i className={p.icon}></i>
                                {p.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <a href="/docs/Jose_Obando_2026_March.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
            <Link to="/contact" className="nav-cta">
                Hire Me
            </Link>
        </nav>
    );
};

export default Header;
