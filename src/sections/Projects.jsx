import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projects from '../data/projects';
import './Sections.css';

const Projects = () => {
    return (
        <motion.section
            className="section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="section-header">
                <div className="section-tag">Portfolio</div>
                <h2 className="section-title">Selected Projects</h2>
                <p className="section-desc">
                    A few projects that represent how I solve problems: publishing platforms, international brand websites, custom WooCommerce systems, and pharmaceutical campaign platforms.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                {projects.map((p, index) => (
                    <motion.div
                        key={p.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Link to={`/projects/${p.id}`} className="project-tile">
                            <div className="project-tile-img">
                                <img src={p.image} alt={p.name} />
                                <div className="project-tile-year">{p.year}</div>
                            </div>
                            <div className="project-tile-body">
                                <h3>{p.name}</h3>
                                <p>{p.tagline}</p>
                                <div className="pill-row">
                                    {p.tech.slice(0, 4).map(t => (
                                        <span className="pill" key={t}>{t}</span>
                                    ))}
                                    {p.tech.length > 4 && <span className="pill pill-green">+{p.tech.length - 4} more</span>}
                                </div>
                                <span className="sc-link" style={{ marginTop: 'auto' }}>
                                    View case study <i className="ri-arrow-right-line"></i>
                                </span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;
