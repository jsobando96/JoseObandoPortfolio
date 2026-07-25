import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import projects from '../data/projects';
import './Sections.css';

const skillsData = [
    { id: 'WordPress', icon: 'ri-wordpress-line', name: 'WordPress', desc: 'My core platform for 7+ years. Custom themes built from scratch, custom plugins, hooks, template hierarchy, and admin experiences designed for real marketing teams.' },
    { id: 'PHP', icon: 'ri-code-s-slash-line', name: 'PHP', desc: 'The engine behind every custom solution I build: plugin logic, WooCommerce extensions, code redemption systems, dynamic forms, and backend workflows.' },
    { id: 'JavaScript', icon: 'ri-javascript-line', name: 'JavaScript', desc: 'Interactive front-ends, dynamic multi-participant forms, validation flows, and modern UI behavior across marketing and campaign websites.' },
    { id: 'ACF Pro', icon: 'ri-database-2-line', name: 'ACF Pro', desc: 'Metadata-driven content architecture. I design custom field systems so editors enter content once and it displays dynamically and consistently across the site.' },
    { id: 'WooCommerce', icon: 'ri-shopping-cart-2-line', name: 'WooCommerce', desc: 'Beyond standard stores: custom registration systems, conditional pricing rules, dynamic add-ons, and business-specific checkout workflows.' },
    { id: 'MySQL', icon: 'ri-server-line', name: 'MySQL', desc: 'Custom tables and queries for platforms like medical code redemption systems — validation, deactivation logic, and reporting for 7,000+ submissions.' },
    { id: 'HTML5 / CSS3', icon: 'ri-layout-4-line', name: 'HTML5 / CSS3', desc: 'Responsive, accessible, pixel-conscious layouts. Marketing pages that look sharp on every device and load fast.' },
    { id: 'WPML', icon: 'ri-translate-2', name: 'WPML / Multilingual', desc: 'Bilingual content workflows for publishing platforms, making it easy for non-technical teams to manage content in multiple languages.' },
    { id: 'REST API', icon: 'ri-plug-line', name: 'REST API / Headless', desc: 'Extending WordPress beyond the monolith: custom endpoints, integrations, and headless-friendly content structures.' },
    { id: 'SEO & Speed', icon: 'ri-rocket-line', name: 'SEO & Performance', desc: 'SEO-conscious structure, performance foundations, and optimization work that keeps marketing sites fast and discoverable.' },
];

const TimelineItem = ({ phase, title, desc, icon, iconLabel }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 70%", "center center"]
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const markerScale = useTransform(scrollYProgress, [0.6, 1], [0.5, 1]);
    const markerBg = useTransform(scrollYProgress, [0.8, 1], ["#1a2942", "var(--accent-green)"]);
    const shadowAlpha = useTransform(scrollYProgress, [0.8, 1], [0, 0.2]);

    return (
        <motion.div className="timeline-item" ref={ref} style={{ opacity, y }}>
            <div className="timeline-content">
                <span className="t-step">{phase}</span>
                <h3 className="t-title">{title}</h3>
                <p className="t-desc">{desc}</p>
            </div>
            <motion.div
                className="timeline-marker"
                style={{
                    x: "-50%",
                    y: "-50%",
                    zIndex: 2,
                    scale: markerScale,
                    backgroundColor: markerBg,
                    boxShadow: useTransform(shadowAlpha, a => `0 0 0 10px rgba(102, 204, 51, ${a})`)
                }}
            />
            <div className="timeline-visual">
                <div className="timeline-icon-visual">
                    <i className={icon}></i>
                    <span>{iconLabel}</span>
                </div>
            </div>
        </motion.div>
    );
};

const YearsCounter = () => {
    const [years, setYears] = useState(0);

    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            current += 1;
            setYears(current);
            if (current >= 7) clearInterval(interval);
        }, 180);
        return () => clearInterval(interval);
    }, []);

    return <span>{years}+</span>;
};

const Home = () => {
    const navigate = useNavigate();
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    // Scroll animation for Timeline
    const timelineRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <div className="section-tag">Senior WordPress Developer</div>
                    <h1>
                        Hi, I'm José. <br />
                        I build the <span className="gradient-text">WordPress sites</span> marketing teams love.
                    </h1>
                    <p className="hero-desc">
                        Custom themes, plugins, ACF-driven content systems, and WooCommerce workflows — fast, scalable, editor-friendly websites for brands, publishers, and marketing teams. Based in Quito, Ecuador. Available worldwide.
                    </p>
                    <div className="cta-group">
                        <button className="btn-primary" onClick={() => navigate('/projects')}>
                            View My Work <i className="ri-arrow-right-line"></i>
                        </button>
                        <a className="btn-outline" href="/docs/Jose_Obando_2026_March.pdf" target="_blank" rel="noopener noreferrer">
                            <i className="ri-download-2-line"></i> Download Resume
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    {/* Portrait */}
                    <div className="hero-portrait">
                        <img src="/jose-obando.jpg" alt="José Obando — Senior WordPress Developer" />
                    </div>

                    {/* Floating Data Cards */}
                    <div className="float-card fc-1">
                        <div className="fc-icon"><i className="ri-wordpress-line"></i></div>
                        <div className="fc-title">Custom Development</div>
                        <div className="fc-desc">Themes, plugins & ACF content systems built from scratch</div>
                        <div className="fc-chart">
                            <div className="bar" style={{ height: '40%' }}></div>
                            <div className="bar" style={{ height: '60%' }}></div>
                            <div className="bar" style={{ height: '50%' }}></div>
                            <div className="bar" style={{ height: '80%', background: 'var(--accent-green)', opacity: 1 }}></div>
                            <div className="bar" style={{ height: '95%' }}></div>
                        </div>
                    </div>

                    <div className="float-card fc-2">
                        <div className="fc-icon"><i className="ri-briefcase-line"></i></div>
                        <div className="fc-title">Experience</div>
                        <div className="fc-desc">Building for international brands since 2018</div>
                        <div style={{ fontFamily: 'AlimamaShuHeiTi-Bold', fontSize: '32px', color: 'var(--accent-blue)' }}>7+ Years</div>
                    </div>
                    <div className="float-card fc-3">
                        <div className="fc-icon"><i className="ri-global-line"></i></div>
                        <div className="fc-title">English C1</div>
                        <div className="fc-desc">IELTS 7.0 — ready for international teams</div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="stats-strip">
                    <div className="stat-item">
                        <div className="stat-num text-green"><YearsCounter /></div>
                        <div className="stat-label">Years Experience</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-num">20+</div>
                        <div className="stat-label">Websites Delivered</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-num">25+</div>
                        <div className="stat-label">Events Powered</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-num">C1</div>
                        <div className="stat-label">English — IELTS 7.0</div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="section">
                <div className="section-header">
                    <div className="section-tag">Selected Work</div>
                    <h2 className="section-title">Projects That <br />Solve Real Problems</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '18px' }}>Publishing platforms, international brand websites, custom WooCommerce systems, and pharmaceutical campaign platforms.</p>
                </div>

                <div className="grid-cards">
                    {projects.slice(0, 3).map(p => (
                        <div className="service-card" key={p.id}>
                            <div className="card-img-wrapper">
                                <img src={p.image} alt={p.name} className="card-img" />
                                <div className="sc-icon" style={{ position: 'absolute', bottom: '16px', left: '16px', marginBottom: 0 }}><i className={p.icon}></i></div>
                            </div>
                            <h3 className="sc-title">{p.name}</h3>
                            <p className="sc-desc">{p.tagline}</p>
                            <button className="sc-link" onClick={() => navigate(`/projects/${p.id}`)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>View case study <i className="ri-arrow-right-line"></i></button>
                        </div>
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
                    <button className="btn-outline" onClick={() => navigate('/projects')}>
                        All Projects <i className="ri-arrow-right-line"></i>
                    </button>
                </div>
            </section>

            {/* Skills Carousel Section */}
            <section style={{ background: 'rgba(0,0,0,0.3)', padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="recycling-carousel">
                    <div className="recycling-track">
                        {/* Render twice for continuous infinite scroll effect */}
                        {[...skillsData, ...skillsData].map((skill, index) => (
                            <div
                                className="recycling-item"
                                key={index}
                                onClick={() => setSelectedSkill(skill)}
                                style={{ cursor: 'pointer' }}
                            >
                                <i className={`${skill.icon} recycling-icon`}></i>
                                <span>{skill.id}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How I Work Timeline */}
            <section className="process-section">
                <div className="section-header" style={{ textAlign: 'center', margin: '0 auto 80px auto' }}>
                    <div className="section-tag">How I Work</div>
                    <h2 className="section-title">From Brief to Launch</h2>
                </div>

                <div className="timeline" ref={timelineRef}>
                    <motion.div
                        className="timeline-progress-line"
                        style={{
                            position: 'absolute',
                            left: isMobile ? '20px' : '50%',
                            marginLeft: '-1px',
                            top: 0,
                            bottom: 0,
                            width: '2px',
                            background: 'var(--accent-green)',
                            transformOrigin: 'top',
                            scaleY: lineHeight,
                            zIndex: 1,
                            boxShadow: '0 0 15px var(--accent-green)'
                        }}
                    />

                    <TimelineItem
                        phase="PHASE 01"
                        title="Understand the Business"
                        desc="Every project starts with the real goal — not just the website. I dig into how your team publishes, sells, or runs campaigns so the build supports the business after launch."
                        icon="ri-search-eye-line"
                        iconLabel="Discovery"
                    />

                    <TimelineItem
                        phase="PHASE 02"
                        title="Architect the Content System"
                        desc="I design metadata-driven structures with custom fields and clean templates, so content is entered once and displayed dynamically — flexible for editors, clean for developers."
                        icon="ri-node-tree"
                        iconLabel="Architecture"
                    />

                    <TimelineItem
                        phase="PHASE 03"
                        title="Build Custom & Responsive"
                        desc="Custom themes, plugins, WooCommerce logic, and dynamic forms — built with practical admin flows, solid performance foundations, and no bloat."
                        icon="ri-code-box-line"
                        iconLabel="Development"
                    />

                    <TimelineItem
                        phase="PHASE 04"
                        title="Launch, Maintain & Improve"
                        desc="I stay for the long term: updates, migrations, fixes, and optimization. Several of my client relationships have lasted 4+ years across multiple properties."
                        icon="ri-rocket-2-line"
                        iconLabel="Launch & Support"
                    />
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-box">
                    <h2>Need a WordPress developer who actually builds custom solutions?</h2>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>I'm available for remote opportunities, freelance projects, and long-term collaborations.</p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '40px', flexWrap: 'wrap' }}>
                        <button className="btn-primary" onClick={() => navigate('/contact')}>
                            Get In Touch <i className="ri-send-plane-fill"></i>
                        </button>
                        <a className="btn-outline" href="mailto:jsobando96@gmail.com">
                            <i className="ri-mail-line"></i> jsobando96@gmail.com
                        </a>
                    </div>
                </div>
            </section>

            {/* Modal for Skill Info */}
            <AnimatePresence>
                {selectedSkill && (
                    <motion.div
                        className="plastic-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedSkill(null)}
                    >
                        <motion.div
                            className="plastic-modal-content glass"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close-btn" onClick={() => setSelectedSkill(null)}>
                                <i className="ri-close-line"></i>
                            </button>
                            <div className="modal-icon"><i className={selectedSkill.icon}></i></div>
                            <h3 style={{ fontSize: '28px', marginBottom: '16px', color: 'var(--accent-blue)' }}>{selectedSkill.name}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.6' }}>{selectedSkill.desc}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Home;
