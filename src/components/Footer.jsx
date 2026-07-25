import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';
import '../sections/Sections.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-grid">
                <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Link to="/" className="footer-logo">
                        <span className="footer-brand-mark">JO</span>
                        <span className="footer-brand-text">José Obando</span>
                    </Link>
                    <p className="footer-desc">
                        Senior WordPress Developer based in Quito, Ecuador. I build fast, scalable, editor-friendly WordPress websites for brands, publishers, and marketing teams.
                    </p>
                </div>
                <div className="footer-col">
                    <h4>Navigate</h4>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Me</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Projects</h4>
                    <ul className="footer-links">
                        {projects.map(p => (
                            <li key={p.id}><Link to={`/projects/${p.id}`}>{p.name}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Connect</h4>
                    <ul className="footer-links">
                        <li><a href="mailto:jsobando96@gmail.com">jsobando96@gmail.com</a></li>
                        <li><a href="https://www.linkedin.com/in/joseobando" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/jsobando96" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="/docs/Jose_Obando_2026_March.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a></li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                © {new Date().getFullYear()} José Obando. Senior WordPress Developer — available for remote opportunities worldwide.
            </div>
        </footer>
    );
};

export default Footer;
