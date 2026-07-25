import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate, Navigate, Link } from 'react-router-dom';
import projects, { getProject } from '../data/projects';
import './Sections.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = getProject(id);
    const [activePreview, setActivePreview] = useState(0);
    const [iframeLoading, setIframeLoading] = useState(true);
    const [lightbox, setLightbox] = useState(null);

    useEffect(() => {
        setActivePreview(0);
        setIframeLoading(true);
        setLightbox(null);
    }, [id]);

    if (!project) return <Navigate to="/projects" replace />;

    const nextProject = projects[(projects.findIndex(p => p.id === id) + 1) % projects.length];

    return (
        <motion.section
            className="section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Back link */}
            <button
                onClick={() => navigate('/projects')}
                style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px', marginBottom: '32px', fontFamily: 'inherit' }}
            >
                <i className="ri-arrow-left-line"></i> All projects
            </button>

            {/* Hero split: title + quick facts */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '40px' }}>
                <div className="glass-panel" style={{ marginBottom: 0 }}>
                    <div className="section-tag">Case Study — {project.year}</div>
                    <h1 style={{ fontSize: 'clamp(28px, 3vw, 42px)', lineHeight: 1.15, marginBottom: '24px' }}>{project.title}</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '17px', lineHeight: 1.7 }}>{project.subtitle}</p>
                </div>

                <div className="glass-panel" style={{ marginBottom: 0 }}>
                    <div className="section-tag" style={{ color: 'var(--accent-blue)' }}>Quick Facts</div>
                    <div className="facts-grid" style={{ marginBottom: '32px', marginTop: '10px' }}>
                        <div><div className="fact-label">Client</div><div className="fact-value">{project.client}</div></div>
                        <div><div className="fact-label">Industry</div><div className="fact-value">{project.industry}</div></div>
                        <div><div className="fact-label">Role</div><div className="fact-value">{project.role}</div></div>
                        <div><div className="fact-label">Duration</div><div className="fact-value">{project.duration}</div></div>
                    </div>
                    <div className="fact-label" style={{ marginBottom: '12px' }}>Services</div>
                    <div className="pill-row" style={{ marginBottom: 0 }}>
                        {project.services.map(s => <span className="pill" key={s}>{s}</span>)}
                    </div>
                </div>
            </div>

            {/* Screenshots */}
            {project.screens && project.screens.length > 0 && (
                <>
                    <div className="section-header" style={{ marginBottom: '30px' }}>
                        <div className="section-tag">Screenshots</div>
                        <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', marginBottom: '8px' }}>A closer look</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>(Click any image to enlarge)</p>
                    </div>
                    <div className="shot-grid" style={{ marginBottom: '60px' }}>
                        {project.screens.map(s => (
                            <button className="shot" key={s.src} onClick={() => setLightbox(s)} style={{ fontFamily: 'inherit' }}>
                                <img src={s.src} alt={s.label} loading="lazy" />
                                <span className="shot-label"><i className="ri-image-line"></i> {s.label}</span>
                            </button>
                        ))}
                    </div>
                </>
            )}

            {/* Live preview */}
            <div className="cs-preview" style={{ marginBottom: '60px' }}>
                {iframeLoading && (
                    <div className="cs-preview-loading">Loading live preview...</div>
                )}
                <iframe
                    key={project.previews[activePreview].url}
                    src={project.previews[activePreview].url}
                    title={`${project.name} live preview`}
                    onLoad={() => setIframeLoading(false)}
                    allow="fullscreen"
                />
                <div className="cs-thumbs">
                    {project.previews.map((pv, i) => (
                        <button
                            key={pv.url}
                            className={`cs-thumb${i === activePreview ? ' active' : ''}`}
                            onClick={() => { setActivePreview(i); setIframeLoading(true); }}
                            style={{ fontFamily: 'inherit' }}
                        >
                            {pv.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Overview */}
            <div className="section-header" style={{ marginBottom: '40px' }}>
                <div className="section-tag">Overview</div>
                <p className="section-desc" style={{ color: '#fff' }}>{project.overview}</p>
            </div>

            {/* Challenge / Solution / Tech */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '60px' }}>
                <div className="glass-card">
                    <div className="card-icon"><i className="ri-question-line"></i></div>
                    <h3>The Challenge</h3>
                    <p>{project.challenge}</p>
                </div>
                <div className="glass-card">
                    <div className="card-icon" style={{ color: 'var(--accent-green)' }}><i className="ri-lightbulb-flash-line"></i></div>
                    <h3>The Solution</h3>
                    <p>{project.solution}</p>
                </div>
                <div className="glass-card">
                    <div className="card-icon"><i className="ri-stack-line"></i></div>
                    <h3>Tech Stack</h3>
                    <div className="pill-row" style={{ marginBottom: '20px' }}>
                        {project.tech.map(t => <span className="pill" key={t}>{t}</span>)}
                    </div>
                    <div className="fact-label" style={{ marginBottom: '8px' }}>Why this project matters</div>
                    <p style={{ fontSize: '15px' }}>{project.why}</p>
                </div>
            </div>

            {/* My Role */}
            <div className="section-header" style={{ marginBottom: '30px' }}>
                <div className="section-tag">My Role</div>
                <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', marginBottom: 0 }}>What I did on this project</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', marginBottom: '60px' }}>
                {project.roles.map((r, i) => (
                    <div key={i} className="glass-card" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                        <i className="ri-checkbox-circle-line text-green" style={{ fontSize: '22px', flexShrink: 0, marginTop: '2px' }}></i>
                        <p style={{ color: '#fff', fontSize: '15px', lineHeight: 1.6 }}>{r}</p>
                    </div>
                ))}
            </div>

            {/* Websites Included */}
            <div className="section-header" style={{ marginBottom: '30px' }}>
                <div className="section-tag">Websites Included</div>
                <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', marginBottom: '8px' }}>Live sites from this engagement</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>(Click to open in a new tab)</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '60px' }}>
                {project.sites.map(s => (
                    <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="site-card">
                        <h4><i className="ri-external-link-line"></i> {s.name}</h4>
                        <p>{s.desc}</p>
                    </a>
                ))}
            </div>

            {/* Outcome */}
            <div className="glass-panel">
                <div className="section-tag">Outcome</div>
                <ul className="details-list" style={{ marginTop: '10px' }}>
                    {project.outcome.map((o, i) => (
                        <li key={i}>
                            <i className="ri-arrow-right-double-line text-green"></i>
                            <span>{o}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Next project + CTA */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '60px' }}>
                <Link to={`/projects/${nextProject.id}`} className="btn-outline" style={{ textDecoration: 'none' }}>
                    Next project: {nextProject.name} <i className="ri-arrow-right-line"></i>
                </Link>
                <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>
                    Work With Me <i className="ri-send-plane-fill"></i>
                </Link>
            </div>

            {/* Screenshot lightbox */}
            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        className="plastic-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setLightbox(null)}
                        style={{ cursor: 'zoom-out' }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 22, stiffness: 300 }}
                        >
                            <img className="lightbox-img" src={lightbox.src} alt={lightbox.label} />
                            <p className="lightbox-caption">{lightbox.label}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
};

export default ProjectDetail;
