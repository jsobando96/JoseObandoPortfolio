import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Sections.css';

const tags = [
    'Custom WordPress Themes',
    'Custom Plugins',
    'ACF Pro Content Systems',
    'WooCommerce Custom Logic',
    'Performance Optimization',
    'REST API / Headless'
];

const whyCards = [
    {
        icon: 'ri-history-line',
        title: '7+ years building with WordPress',
        desc: 'I have spent the last several years building custom WordPress solutions for publishers, brands, pharmaceutical campaigns, and business websites.'
    },
    {
        icon: 'ri-stack-line',
        title: '20+ websites delivered',
        desc: 'From content-heavy publishing platforms to promotional landing pages and custom WooCommerce workflows, I focus on shipping practical and scalable solutions.'
    },
    {
        icon: 'ri-earth-line',
        title: 'Trusted by international brands',
        desc: 'U.S. food brands, literary organizations, pharmaceutical companies, and sports event businesses have relied on my work across long-term engagements.'
    },
    {
        icon: 'ri-team-line',
        title: 'Built for marketing teams',
        desc: 'I design editor-friendly systems so non-technical teams can update pages, launch content, and manage campaigns without depending on a developer for every change.'
    }
];

const thinkItems = [
    {
        icon: 'ri-focus-3-line',
        title: 'I build for real business use',
        desc: 'I do not like bloated builds filled with features no one will use. I prefer clean structures, practical admin flows, and websites that are easy to maintain over time.'
    },
    {
        icon: 'ri-speed-up-line',
        title: 'I care about speed and clarity',
        desc: 'Whether I am building a brand page, a plugin, or a campaign site, I focus on responsive layouts, clear content hierarchy, and solid performance foundations.'
    },
    {
        icon: 'ri-user-star-line',
        title: 'I can work independently',
        desc: 'I have worked as the sole developer on multiple projects, handling architecture, implementation, updates, migrations, fixes, and optimization from start to finish.'
    },
    {
        icon: 'ri-magic-line',
        title: 'I make WordPress easier to use',
        desc: 'A big part of my work is turning WordPress into a tool that marketing and design teams can actually use comfortably without fighting the backend every day.'
    }
];

const About = () => {
    const navigate = useNavigate();

    return (
        <motion.section
            className="section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Intro */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '50px', alignItems: 'center', marginBottom: '60px' }}>
                <div className="about-portrait">
                    <img src="/jose-obando.jpg" alt="José Obando" />
                </div>
                <div className="section-header" style={{ marginBottom: 0 }}>
                    <div className="section-tag">About Me</div>
                    <h2 className="section-title" style={{ fontSize: 'clamp(30px, 4vw, 48px)' }}>I build custom WordPress websites that look sharp, scale well, and make life easier for marketing teams.</h2>
                    <p className="section-desc">
                        I'm José Obando, a Senior WordPress Developer based in Quito, Ecuador. I specialize in custom themes, plugins, ACF-driven content systems, WooCommerce workflows, and responsive marketing websites built for real-world business needs.
                    </p>
                </div>
            </div>

            {/* Quick stats */}
            <div className="glass-panel" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '30px', textAlign: 'center' }}>
                <div>
                    <div className="stat-num" style={{ fontSize: '38px' }}>7+</div>
                    <div className="stat-label">Years Experience</div>
                </div>
                <div>
                    <div className="stat-num" style={{ fontSize: '38px' }}>20+</div>
                    <div className="stat-label">Websites Built</div>
                </div>
                <div>
                    <div className="stat-num" style={{ fontSize: '38px' }}>IELTS 7.0</div>
                    <div className="stat-label">English — C1</div>
                </div>
                <div>
                    <div className="stat-num" style={{ fontSize: '38px' }}>Custom</div>
                    <div className="stat-label">WordPress Development</div>
                </div>
            </div>

            {/* Specialty tags */}
            <div className="values-list" style={{ marginBottom: '80px' }}>
                {tags.map(tag => (
                    <div className="value-item" key={tag}>
                        <i className="ri-check-line text-green"></i> {tag}
                    </div>
                ))}
            </div>

            {/* Why Hire Me */}
            <div className="section-header">
                <div className="section-tag">Why Hire Me</div>
                <h2 className="section-title" style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}>I combine technical depth with marketing-friendly execution.</h2>
                <p className="section-desc">
                    The goal is not just to build a website. The goal is to build something that works well, is easy to manage, and supports the business after launch.
                </p>
            </div>

            <div className="purpose-grid" style={{ marginBottom: '80px' }}>
                {whyCards.map(card => (
                    <div className="glass-card" key={card.title}>
                        <div className="card-icon"><i className={card.icon}></i></div>
                        <h3>{card.title}</h3>
                        <p>{card.desc}</p>
                    </div>
                ))}
            </div>

            {/* How I Think */}
            <div className="section-header">
                <div className="section-tag">How I Think</div>
                <h2 className="section-title" style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}>How I think about WordPress projects</h2>
                <p className="section-desc">
                    I like systems that are flexible for the client, clean for the developer, and strong enough to grow without becoming a maintenance nightmare.
                </p>
            </div>

            <div className="purpose-grid" style={{ marginBottom: '80px' }}>
                {thinkItems.map(item => (
                    <div className="glass-card" key={item.title}>
                        <div className="card-icon" style={{ color: 'var(--accent-green)' }}><i className={item.icon}></i></div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* What You Can Expect */}
            <div className="glass-panel" style={{ textAlign: 'center', padding: '60px 40px' }}>
                <div className="section-tag">What You Can Expect</div>
                <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', marginBottom: '20px' }}>
                    Clean execution, practical solutions, and a developer who <span className="gradient-text">understands business needs</span>.
                </h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '760px', margin: '0 auto 40px auto', fontSize: '17px', lineHeight: 1.7 }}>
                    I work best with teams that want more than just a pretty website. I help build WordPress systems that support publishing, campaigns, marketing updates, and custom workflows without unnecessary complexity.
                </p>
                <div className="values-list" style={{ justifyContent: 'center', marginBottom: '40px' }}>
                    <div className="value-item"><i className="ri-shield-check-line text-green"></i> Reliable</div>
                    <div className="value-item"><i className="ri-line-chart-line text-blue"></i> Scalable</div>
                    <div className="value-item"><i className="ri-edit-2-line text-green"></i> Editor-Friendly</div>
                    <div className="value-item"><i className="ri-tools-line text-blue"></i> Custom-Built</div>
                </div>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button className="btn-primary" onClick={() => navigate('/projects')}>
                        See My Projects <i className="ri-arrow-right-line"></i>
                    </button>
                    <button className="btn-outline" onClick={() => navigate('/contact')}>
                        Contact Me <i className="ri-mail-line"></i>
                    </button>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
