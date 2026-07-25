// Case studies — content sourced from the original portfolio (jsobando96.github.io)
const projects = [
    {
        id: 'plastipacifico',
        name: 'Plásticos del Pacífico',
        year: '2026',
        image: '/projects/screens/plastipacifico.png',
        icon: 'ri-recycle-line',
        tagline: 'Corporate Website for an Industrial Recycling Company — Built with React',
        title: 'Plásticos del Pacífico — Corporate Website Built with React + Vite',
        subtitle: 'A fully custom single-page application for an Ecuador-based industrial plastics recycler: glassmorphism design system, scroll-driven animations, deep service pages, and working contact flows.',
        client: 'Plásticos del Pacífico S.A.',
        industry: 'Industrial Recycling',
        role: 'Designer & Front-End Developer',
        duration: '2026',
        services: ['React Development', 'UI/UX Design', 'Framer Motion Animations', 'Responsive SPA', 'Contact Integrations'],
        overview: 'I designed and built the complete corporate website for Plásticos del Pacífico S.A., an environmental solutions company that transforms post-consumer plastics into high-performance recycled materials. The project was developed as a modern single-page application with React 19, Vite, and Framer Motion, showing that my work extends beyond WordPress into modern JavaScript stacks.',
        challenge: 'The company needed a digital presence strong enough to communicate industrial-scale capabilities to international partners: services, transformation process, innovation, and impact — all with a premium visual identity and a smooth experience on any device.',
        solution: 'I created a reusable glassmorphism design system (animated fluid background, glass panels, floating data cards), scroll-driven process timelines, an infinite materials carousel, deep-dive service routes, and working subscription and contact forms — all in a fast Vite-powered SPA with route transitions.',
        tech: ['React 19', 'Vite', 'Framer Motion', 'React Router 7', 'CSS3', 'JavaScript ES6+', 'FormSubmit'],
        why: 'This project demonstrates that I can design and ship a complete modern front-end product end to end — visual identity, animation systems, responsive architecture, and functional integrations — not only WordPress builds.',
        outcome: [
            'Delivered a complete corporate SPA with a custom design system and route-based architecture.',
            'Built scroll-driven animations and micro-interactions that elevate the brand without hurting performance.',
            'Implemented a floating mobile navigation experience designed specifically for phone users.',
            'Created working contact and subscription flows connected directly to the business inbox.'
        ],
        sites: [
            { url: 'https://plastipacifico.com', name: 'plastipacifico.com', desc: 'Full corporate website — services, process timeline, innovation, impact, and contact.' }
        ],
        roles: [
            'Designed the full visual identity of the site: glassmorphism system, fluid animated background, and floating data cards',
            'Built the SPA architecture with React Router 7 and animated route transitions using Framer Motion',
            'Developed scroll-driven timelines and animated statistics with Framer Motion scroll hooks',
            'Created seven deep-dive service pages reusing a shared component system',
            'Implemented responsive layouts with a dedicated floating bottom navigation for mobile',
            'Integrated contact and subscription forms with validation and success/error states'
        ],
        screens: [
            { src: '/projects/screens/plastipacifico.png', label: 'plastipacifico.com — Home' }
        ],
        previews: [
            { url: 'https://plastipacifico.com', label: 'plastipacifico.com' }
        ]
    },
    {
        id: 'quirch',
        name: 'Quirch Foods',
        year: '2018',
        image: '/projects/Quirch.png',
        icon: 'ri-restaurant-line',
        tagline: 'WordPress Development for International Food Brand Websites',
        title: 'Quirch Foods — WordPress Development for International Food Brand Websites',
        subtitle: 'Multi-site support, responsive page development, usability improvements, SEO-conscious structure, and long-term WordPress maintenance.',
        client: 'Quirch Foods',
        industry: 'Food & Consumer Brands',
        role: 'WordPress Developer',
        duration: '4 years',
        services: ['WordPress Development', 'Maintenance', 'SEO Improvements', 'Responsive UI', 'Optimization'],
        overview: 'Over a four-year period, I worked on multiple WordPress websites for Quirch Foods, a U.S.-based food company, supporting brand pages, website improvements, performance optimization, and ongoing maintenance across several digital properties.',
        challenge: 'Quirch Foods needed visually strong, easy-to-manage brand websites that could support product communication, marketing content, and ongoing business updates across multiple properties.',
        solution: 'I developed and maintained WordPress-based brand websites, creating responsive pages, implementing content updates, improving structure and usability, and optimizing selected properties for a better front-end experience.',
        tech: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'ACF', 'RevSlider'],
        why: 'This project demonstrates the ability to support international clients, manage multiple related web properties, and deliver WordPress solutions that balance branding, usability, maintenance, and marketing needs.',
        outcome: [
            'Delivered responsive, marketing-focused websites aligned with international food brand communication.',
            'Improved usability and front-end clarity across multiple pages and properties.',
            'Supported long-term reliability through continuous maintenance and updates.',
            'Built pages designed to be easy to navigate, marketing-friendly, and SEO-conscious.'
        ],
        sites: [
            { url: 'https://mambofoods.com', name: 'mambofoods.com', desc: 'Branded WordPress pages focused on visual presentation and easy content navigation.' },
            { url: 'https://quirch.com/chiquita', name: 'quirch.com/chiquita', desc: 'Brand-specific pages aligned with product marketing and visual consistency.' },
            { url: 'https://panamei.com', name: 'panamei.com', desc: 'Structure, front-end presentation, and usability improvements.' },
            { url: 'https://quirchfoods.com', name: 'quirchfoods.com', desc: "Ongoing updates and maintenance across the company's main digital presence." }
        ],
        roles: [
            'Built and updated WordPress pages for consumer-facing food brands',
            'Supported responsive front-end development and visual refinement',
            'Improved usability, navigation, and content presentation',
            'Optimized selected pages for performance and SEO foundations',
            'Provided long-term maintenance, updates, and fixes',
            'Translated brand requirements into practical WordPress solutions'
        ],
        screens: [
            { src: '/projects/screens/quirchfoods.png', label: 'quirchfoods.com — Corporate site' },
            { src: '/projects/screens/mambofoods.png', label: 'mambofoods.com — Brand site' }
        ],
        previews: [
            { url: 'https://www.quirchfoods.com', label: 'quirchfoods.com' },
            { url: 'https://mambofoods.com', label: 'mambofoods.com' },
            { url: 'https://quirch.com/chiquita', label: 'quirch.com/chiquita' },
            { url: 'https://panamei.com', label: 'panamei.com' }
        ]
    },
    {
        id: 'pilar',
        name: 'Pilar Vélez',
        year: '2020',
        image: '/projects/PilarVelez.png',
        icon: 'ri-book-open-line',
        tagline: 'Metadata-Driven WordPress Publishing Ecosystem',
        title: 'Pilar Vélez — Metadata-Driven WordPress Publishing Ecosystem',
        subtitle: 'Four connected literary websites built around custom fields, dynamic content structures, search systems, multilingual workflows, and long-term maintenance.',
        client: 'Pilar Vélez',
        industry: 'Publishing & Literary Platforms',
        role: 'WordPress Developer',
        duration: '4 websites',
        services: ['Custom Themes', 'ACF Content Systems', 'Search & Filtering', 'WPML', 'Maintenance'],
        overview: 'I built and maintained a connected publishing ecosystem for writer Pilar Vélez, covering four literary websites: milibrohispano.org, snowfountainpress.com, pilarvelez.com, and poetasyescritoresmiami.com. The project focused on creating dynamic, metadata-driven WordPress platforms that made it easy for non-technical teams to manage books, authors, awards, and editorial content.',
        challenge: 'The client needed multiple websites that could manage literary content in a scalable way, without requiring constant developer support for every new book, author profile, award entry, or editorial update.',
        solution: 'I designed custom WordPress structures using metadata, custom fields, and tailored templates so that content could be entered once and displayed dynamically across the sites with consistent presentation and easier management.',
        tech: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'ACF Pro', 'WP_Query', 'WPML'],
        why: 'This project demonstrates the ability to design scalable content architecture, build editor-friendly WordPress systems, and support publishing workflows across multiple connected websites over the long term.',
        outcome: [
            'Delivered a scalable publishing ecosystem across four WordPress websites.',
            'Made it easier for non-technical teams to manage complex literary content independently.',
            'Improved discoverability through custom search, filtering, and structured metadata.',
            'Created a maintainable long-term foundation for publishing and editorial growth.'
        ],
        sites: [
            { url: 'https://milibrohispano.org', name: 'milibrohispano.org', desc: 'A multilingual literary platform with dynamic content structures for books, authors, and related editorial content.' },
            { url: 'https://snowfountainpress.com', name: 'snowfountainpress.com', desc: 'Publishing-focused WordPress website designed to organize and present literary catalog content clearly.' },
            { url: 'https://pilarvelez.com', name: 'pilarvelez.com', desc: 'Personal author website with structured presentation for publications, recognition, and biography-related content.' },
            { url: 'https://poetasyescritoresmiami.com', name: 'poetasyescritoresmiami.com', desc: 'Literary community website supporting searchable and organized content for writers and publishing-related information.' }
        ],
        roles: [
            'Architected metadata-driven WordPress systems for books, authors, awards, and editorial content',
            'Built custom themes and tailored templates for literary and publishing workflows',
            'Developed search and filtering tools using WP_Query and custom taxonomies',
            'Implemented multilingual functionality with WPML for bilingual content management',
            'Created editor-friendly workflows so marketing and design teams could update the sites without code',
            'Provided long-term maintenance, updates, and ongoing feature improvements'
        ],
        screens: [
            { src: '/projects/screens/snowfountainpress.png', label: 'snowfountainpress.com — Publishing catalog' }
        ],
        previews: [
            { url: 'https://milibrohispano.org', label: 'milibrohispano.org' },
            { url: 'https://snowfountainpress.com', label: 'snowfountainpress.com' },
            { url: 'https://pilarvelez.com', label: 'pilarvelez.com' },
            { url: 'https://poetasyescritoresmiami.com', label: 'poetasyescritoresmiami.com' }
        ]
    },
    {
        id: 'pharma',
        name: 'Pharmabrand',
        year: '2021',
        image: '/projects/Pharmabrand.png',
        icon: 'ri-capsule-line',
        tagline: 'Campaign Websites, Medical Code Platforms & Contest Systems',
        title: 'Pharmabrand — Campaign Websites, Medical Code Platforms, and Contest Systems',
        subtitle: 'A portfolio series of three campaign-focused case studies: high-speed pharmaceutical landing pages, a medical code redemption platform, and a photography contest system with registration and backend image management.',
        client: 'Pharmabrand',
        industry: 'Pharmaceutical Marketing',
        role: 'WordPress Developer',
        duration: 'Multiple campaigns',
        services: ['WordPress Development', 'PHP / MySQL', 'Custom Plugin', 'Dynamic Forms', 'Campaign Platforms', 'Contest Systems', 'RevSlider'],
        overview: 'A portfolio series organized into three campaign-focused case studies: high-speed pharmaceutical landing pages, a medical code redemption platform, and a photography contest system with registration and backend image management.',
        challenge: 'Pharmabrand needed multiple landing pages for different medications, each one designed to launch quickly, communicate product information clearly, and support marketing goals without sacrificing usability or mobile responsiveness.',
        solution: 'I built a series of fast-turnaround WordPress landing pages using RevSlider and custom page structures, focusing on responsive execution, clear product communication, lightweight content flows, and pages that were easy to update and maintain.',
        tech: ['WordPress', 'PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'RevSlider'],
        why: 'This project demonstrates the ability to turn pharmaceutical campaign goals into fast, usable, and business-specific digital experiences that go beyond standard marketing pages.',
        outcome: [
            'Delivered multiple medication-focused landing pages on short timelines.',
            'Supported a campaign with 7,000+ code submissions and 2,000+ registered doctors via Guardianes de la Salud.',
            'Created a more reliable code redemption process with automatic validation and deactivation.',
            'Transformed a promotional photography contest into a structured digital workflow with backend image management.',
            "Extended Pharmabrand's promotional web presence across three distinct campaign formats."
        ],
        sites: [
            { url: 'https://luvis.ec', name: 'luvis.ec', desc: 'Fast-turnaround pharmaceutical landing page — medication promotion and SEO-conscious structure.' },
            { url: 'https://binmune.ec', name: 'binmune.ec', desc: 'Fast-turnaround pharmaceutical landing page — medication promotion and SEO-conscious structure.' },
            { url: 'https://nocol.ec', name: 'nocol.ec', desc: 'Fast-turnaround pharmaceutical landing page — medication promotion and SEO-conscious structure.' },
            { url: 'https://biofit.com.ec', name: 'biofit.com.ec', desc: 'Fast-turnaround pharmaceutical landing page — medication promotion and SEO-conscious structure.' },
            { url: 'https://guardianesdelasalud.ec', name: 'guardianesdelasalud.ec', desc: 'Medical code redemption platform — doctor registration, code validation, and representative association.' },
            { url: 'https://oftalmofoto.com', name: 'oftalmofoto.com', desc: 'Photography contest platform — participant registration and backend image submission management.' }
        ],
        roles: [
            'Built fast-turnaround WordPress landing pages using RevSlider for pharmaceutical campaigns',
            'Developed responsive marketing layouts for medication promotion across desktop and mobile',
            'Created a custom PHP/MySQL code redemption system for Guardianes de la Salud',
            'Implemented doctor registration linked to medical representatives and code activity',
            'Built code validation and auto-deactivation logic to prevent repeated use',
            'Developed a photography contest platform with registration and backend image organization'
        ],
        previews: [
            { url: 'https://luvis.ec', label: 'luvis.ec' },
            { url: 'https://binmune.ec', label: 'binmune.ec' },
            { url: 'https://nocol.ec', label: 'nocol.ec' },
            { url: 'https://biofit.com.ec', label: 'biofit.com.ec' },
            { url: 'https://guardianesdelasalud.ec', label: 'guardianesdelasalud.ec' },
            { url: 'https://oftalmofoto.com', label: 'oftalmofoto.com' }
        ]
    },
    {
        id: 'pukllay',
        name: 'Pukllay',
        year: '2022',
        image: '/projects/Pukllay.png',
        icon: 'ri-run-line',
        tagline: 'Custom WooCommerce Registration System for Sports Events',
        title: 'Pukllay — Custom WooCommerce Registration System for Sports Events',
        subtitle: 'Dynamic multi-participant registration, conditional pricing, automated event setup, and a custom WordPress workflow designed for 25+ running and cycling events.',
        client: 'Pukllay',
        industry: 'Sports Events',
        role: 'WordPress Developer',
        duration: '25+ events',
        services: ['Custom Plugin', 'WooCommerce Logic', 'Dynamic Forms', 'Pricing Rules', 'Admin Workflows'],
        overview: 'I developed a custom WordPress + WooCommerce registration system for Pukllay, a company that organizes running and cycling events. The goal was to replace a rigid, manual registration process with a flexible workflow that could handle multiple participants, optional add-ons, event bundles, and automated event publishing.',
        challenge: 'Pukllay needed a registration flow that could support 1 to 5 participants, optional jerseys, discounts for joining multiple races, and an admin process that would not require rebuilding event pages manually every time.',
        solution: 'I built a custom plugin integrated with WooCommerce, adding dynamic participant forms, pricing logic, and an editor-friendly event system where the business owner could enter race data once and generate the event setup automatically.',
        tech: ['WordPress', 'WooCommerce', 'PHP', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'ACF / Metaboxes'],
        why: 'This project shows the ability to extend WooCommerce beyond standard product sales, build business-specific plugin logic, and design admin workflows that make complex event operations easier for non-technical users.',
        outcome: [
            'Supported a registration workflow used across 25+ sports events.',
            'Reduced manual event setup by giving the business owner a structured admin workflow.',
            'Improved pricing flexibility for race bundles and optional products.',
            'Created a more scalable registration system than a standard WooCommerce setup alone.'
        ],
        sites: [
            { url: 'https://pukllay.ec', name: 'pukllay.ec', desc: 'Main sports brand website — race registration, event management, and merchandise store.' }
        ],
        roles: [
            'Built a custom WordPress + WooCommerce plugin for race registration workflows',
            'Created dynamic forms that expanded automatically for 1 to 5 participants',
            'Implemented pricing logic for optional jerseys and multi-race discounts',
            'Customized WooCommerce hooks and templates to support the full registration experience',
            'Designed an admin-friendly event setup using custom fields and metaboxes',
            'Improved operational efficiency by reducing manual event creation and pricing errors'
        ],
        screens: [
            { src: '/projects/screens/pukllay.png', label: 'pukllay.ec — Race registration' }
        ],
        previews: [
            { url: 'https://pukllay.ec', label: 'pukllay.ec' }
        ]
    }
];

export const getProject = (id) => projects.find(p => p.id === id);

export default projects;
