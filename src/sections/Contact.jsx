import React from 'react';
import { motion } from 'framer-motion';
import './Sections.css';

const Contact = () => {
    const [status, setStatus] = React.useState(null); // 'submitting', 'success', 'error'
    const [formData, setFormData] = React.useState({
        fullname: '',
        email: '',
        company: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("https://formsubmit.co/ajax/jsobando96@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Message: ${formData.fullname} | Portfolio`,
                    _template: "table",
                    _captcha: "false"
                })
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <motion.section
            className="section contact-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="section-header" style={{ textAlign: 'center', margin: '0 auto 60px auto' }}>
                <div className="section-tag">Let's Work Together</div>
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-desc" style={{ maxWidth: '700px', margin: '0 auto' }}>
                    I'm available for remote opportunities, freelance projects, and long-term collaborations. If you need a WordPress developer who can actually build custom solutions, let's talk.
                </p>
            </div>

            {/* Quick contact cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '80px', maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
                <a className="contact-quick-card" href="mailto:jsobando96@gmail.com">
                    <div className="sc-icon" style={{ marginBottom: 0, flexShrink: 0 }}><i className="ri-mail-line"></i></div>
                    <div>
                        <div className="fact-label">Email</div>
                        <div className="fact-value" style={{ fontSize: '15px' }}>jsobando96@gmail.com</div>
                    </div>
                </a>
                <a className="contact-quick-card" href="https://www.linkedin.com/in/joseobando" target="_blank" rel="noopener noreferrer">
                    <div className="sc-icon" style={{ marginBottom: 0, flexShrink: 0 }}><i className="ri-linkedin-box-line"></i></div>
                    <div>
                        <div className="fact-label">LinkedIn</div>
                        <div className="fact-value" style={{ fontSize: '15px' }}>linkedin.com/in/joseobando</div>
                    </div>
                </a>
                <a className="contact-quick-card" href="https://github.com/jsobando96" target="_blank" rel="noopener noreferrer">
                    <div className="sc-icon" style={{ marginBottom: 0, flexShrink: 0 }}><i className="ri-github-line"></i></div>
                    <div>
                        <div className="fact-label">GitHub</div>
                        <div className="fact-value" style={{ fontSize: '15px' }}>github.com/jsobando96</div>
                    </div>
                </a>
            </div>

            {/* Premium Contact Block */}
            <div className="contact-wrapper glass-panel" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '60px',
                padding: '60px',
                borderRadius: '24px',
                alignItems: 'center'
            }}>
                {/* Left Side: Contact Info */}
                <div className="contact-info" style={{
                    padding: '40px',
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, rgba(10, 30, 63, 0.95), rgba(10, 61, 46, 0.85))'
                }}>
                    <h2 style={{ fontSize: '42px', marginBottom: '20px', color: '#fff', lineHeight: '1.2' }}>
                        Let's build something <span className="gradient-text">great with WordPress</span>.
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '50px', fontSize: '18px', lineHeight: '1.6' }}>
                        Tell me about your project, your team, or the role you're hiring for — I usually reply within 24 hours.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                            <div className="sc-icon" style={{ width: '48px', height: '48px', marginBottom: '0', flexShrink: 0 }}>
                                <i className="ri-map-pin-2-line text-green" style={{ fontSize: '24px' }}></i>
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', fontSize: '18px', marginBottom: '6px' }}>Based In</h4>
                                <p style={{ color: 'var(--text-secondary)' }}>Quito, Ecuador — working remotely worldwide</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                            <div className="sc-icon" style={{ width: '48px', height: '48px', marginBottom: '0', flexShrink: 0 }}>
                                <i className="ri-mail-send-line text-blue" style={{ fontSize: '24px' }}></i>
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', fontSize: '18px', marginBottom: '6px' }}>Email Me</h4>
                                <p style={{ color: 'var(--text-secondary)' }}><a href="mailto:jsobando96@gmail.com" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>jsobando96@gmail.com</a></p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                            <div className="sc-icon" style={{ width: '48px', height: '48px', marginBottom: '0', flexShrink: 0 }}>
                                <i className="ri-file-text-line text-green" style={{ fontSize: '24px' }}></i>
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', fontSize: '18px', marginBottom: '6px' }}>Resume</h4>
                                <p style={{ color: 'var(--text-secondary)' }}><a href="/docs/Jose_Obando_2026_March.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', transition: 'color 0.3s' }}>Download PDF</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="contact-form glass" style={{ padding: '40px', borderRadius: '16px', background: 'rgba(15, 23, 35, 0.8)', border: '1px solid rgba(102, 204, 51, 0.2)' }}>
                    {status === 'success' ? (
                        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                            <div style={{ width: '80px', height: '80px', background: 'rgba(102, 204, 51, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto' }}>
                                <i className="ri-checkbox-circle-fill" style={{ fontSize: '48px', color: 'var(--accent-green)' }}></i>
                            </div>
                            <h3 style={{ color: '#fff', fontSize: '24px', marginBottom: '12px' }}>Thank You</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.5' }}>Your message has been sent successfully. I will get back to you shortly.</p>
                            <button
                                onClick={() => {
                                    setFormData({ fullname: '', email: '', company: '', message: '' });
                                    setStatus(null);
                                }}
                                className="btn-primary"
                                style={{ margin: '30px auto 0 auto', padding: '12px 30px' }}
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                        >
                            {/* Configuration */}
                            <input type="hidden" name="_subject" value={`New Message: ${formData.fullname} | Portfolio`} />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="text" name="_honey" style={{ display: 'none' }} />

                            <div>
                                <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '8px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Full Name</label>
                                <input
                                    type="text"
                                    name="fullname"
                                    required
                                    value={formData.fullname}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    style={{ width: '100%', padding: '16px 20px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '16px', outline: 'none', transition: 'border-color 0.3s' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '8px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@company.com"
                                    style={{ width: '100%', padding: '16px 20px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '16px', outline: 'none', transition: 'border-color 0.3s' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '8px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Company / Project</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Your Organization"
                                    style={{ width: '100%', padding: '16px 20px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '16px', outline: 'none', transition: 'border-color 0.3s' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '8px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Message</label>
                                <textarea
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Tell me about your project or role..."
                                    style={{ width: '100%', padding: '16px 20px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '16px', outline: 'none', transition: 'border-color 0.3s', resize: 'vertical' }}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn-primary"
                                style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Message'} <i className="ri-send-plane-fill"></i>
                            </button>
                            {status === 'error' && (
                                <p style={{ color: '#ff4d4d', fontSize: '14px', textAlign: 'center', marginTop: '10px' }}>
                                    Something went wrong. Please try again or email me directly at jsobando96@gmail.com.
                                </p>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
