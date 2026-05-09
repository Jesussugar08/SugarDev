// ── Translations ─────────────────────────────────────────────
const translations = {
    en: {
        'nav.home':       'Home',
        'nav.skills':     'Skills',
        'nav.experience': 'Experience',
        'nav.projects':   'Projects',
        'nav.contact':    'Contact',
        'hero.tag':       'Frontend Web Developer',
        'hero.greeting':  "Hi, I'm",
        'hero.desc':      "Welcome to my portfolio! I'm a web developer passionate about building scalable, modern, and high-performance digital experiences. I enjoy turning complex ideas into clean, intuitive, and impactful products through thoughtful design and development.",
        'hero.btn':       'View Projects',
        'skills.title':    'My Skills',
        'skills.subtitle': 'Technologies I work with daily',
        'skills.frontend': 'Front-end',
        'skills.backend':  'Back-end',
        'skills.ai':       'AI Tools',
        'skills.tools':    'Tools',
        'projects.label':  'WORK',
        'projects.title':  'My Projects',
        'projects.p1.desc':"My first project — a fully responsive webpage built with HTML and CSS using Grid layout. I chose this topic because I'm passionate about healthy eating and the importance of taking care of our body.",
        'projects.p1.btn': 'View Live',
        'projects.p2.title':'Personal Portfolio',
        'projects.p2.desc': 'This portfolio — designed and built from scratch using HTML, CSS and Materialize CSS following Material Design principles. Features a responsive layout, dynamic skills section, work experience timeline and a dedicated experience page.',
        'projects.p2.btn': "You're here!",
        'footer.contact':  'Contact',
        'footer.role':     'Frontend Web Developer',
        // Experience page
        'exp.backlink':         'Back to Portfolio',
        'exp.career':           'CAREER',
        'exp.title':            'Work Experience',
        'exp.subtitle':         'My professional journey as a developer',
        'exp.whatido':          'What I do',
        'exp.whatidid':         'What I did',
        'exp.resp':             'Responsibilities',
        'exp.tech':             'Technologies',
        'exp.present':          'Present',
        'exp.badge.current':    'Currently working here',
        'exp.badge.completed':  'Completed',
        'exp.cheil.role':       'Frontend Developer',
        'exp.cheil.desc':       'Developing responsive websites and consuming data through REST APIs using HTTP protocols, with a focus on clean UI, performance, and seamless integration with backend services. Working across the full frontend lifecycle — from design implementation to deployment.',
        'exp.cheil.b1':         'Build and maintain responsive web interfaces using React, Angular, and TypeScript.',
        'exp.cheil.b2':         'Integrate REST APIs with HTTP protocols to fetch and display dynamic data.',
        'exp.cheil.b3':         'Collaborate in CI/CD pipelines and cloud deployments on AWS.',
        'exp.cheil.b4':         'Use Postman for API testing and validation across environments.',
        'exp.cheil.b5':         'Work with databases and version control through GitHub and GitLab.',
        'exp.root.role':        'Full Stack Developer',
        'exp.root.desc':        'Developed full stack web applications combining a responsive React and Tailwind frontend with robust Java Spring Boot backends, while managing cloud infrastructure and DevOps pipelines on AWS.',
        'exp.root.b1':          'Built responsive UIs with React and Tailwind CSS following design specifications.',
        'exp.root.b2':          'Developed and maintained RESTful backend services using Java and Spring Boot.',
        'exp.root.b3':          'Managed cloud deployments and infrastructure on AWS.',
        'exp.root.b4':          'Implemented DevOps practices including CI/CD pipelines and automated deployments.',
        'exp.root.b5':          'Collaborated across frontend and backend to deliver end-to-end features.',
        'exp.bank.role':        'IT Support Specialist',
        'exp.bank.desc':        'Provided on-site technical support to bank agents experiencing hardware and software issues, ensuring minimal downtime and quick resolution under SLA standards. Worked with tools like Service Desk and Citrix to diagnose and resolve incidents efficiently.',
        'exp.bank.b1':          'Assisted on-site agents with hardware and software issues, ensuring fast resolution.',
        'exp.bank.b2':          'Managed and tracked incidents using ServiceNow and Service Desk ticketing tools.',
        'exp.bank.b3':          'Supported virtual environments through Citrix for remote access and troubleshooting.',
        'exp.bank.b4':          'Followed ITIL best practices for incident management and SLA compliance.',
        'exp.bank.b5':          'Escalated complex issues and documented resolutions to improve team knowledge base.',
        'exp.bank.tools':       'Tools & Methodologies',
        'exp.ghost':            'More experience coming soon...',
    },
    es: {
        'nav.home':       'Inicio',
        'nav.skills':     'Habilidades',
        'nav.experience': 'Experiencia',
        'nav.projects':   'Proyectos',
        'nav.contact':    'Contacto',
        'hero.tag':       'Desarrollador Web Frontend',
        'hero.greeting':  'Hola, soy',
        'hero.desc':      '¡Bienvenido a mi portafolio! Soy un desarrollador web apasionado por construir experiencias digitales escalables, modernas y de alto rendimiento. Disfruto transformar ideas complejas en productos limpios, intuitivos e impactantes a través del diseño y desarrollo cuidadoso.',
        'hero.btn':       'Ver Proyectos',
        'skills.title':    'Mis Habilidades',
        'skills.subtitle': 'Tecnologías con las que trabajo diariamente',
        'skills.frontend': 'Front-end',
        'skills.backend':  'Back-end',
        'skills.ai':       'Herramientas IA',
        'skills.tools':    'Herramientas',
        'projects.label':  'TRABAJO',
        'projects.title':  'Mis Proyectos',
        'projects.p1.desc':"Mi primer proyecto — una página web completamente responsiva construida con HTML y CSS usando Grid layout. Elegí este tema porque me apasiona la alimentación saludable y la importancia de cuidar nuestro cuerpo.",
        'projects.p1.btn': 'Ver en Vivo',
        'projects.p2.title':'Portafolio Personal',
        'projects.p2.desc': 'Este portafolio — diseñado y construido desde cero usando HTML, CSS y Materialize CSS siguiendo principios de Material Design. Incluye diseño responsivo, sección de habilidades, timeline de experiencia laboral y una página dedicada.',
        'projects.p2.btn': '¡Estás aquí!',
        'footer.contact':  'Contacto',
        'footer.role':     'Desarrollador Web Frontend',
        // Experience page
        'exp.backlink':         'Volver al Portafolio',
        'exp.career':           'CARRERA',
        'exp.title':            'Experiencia Laboral',
        'exp.subtitle':         'Mi trayectoria profesional como desarrollador',
        'exp.whatido':          'Qué hago',
        'exp.whatidid':         'Qué hice',
        'exp.resp':             'Responsabilidades',
        'exp.tech':             'Tecnologías',
        'exp.present':          'Presente',
        'exp.badge.current':    'Trabajando actualmente aquí',
        'exp.badge.completed':  'Completado',
        'exp.cheil.role':       'Desarrollador Frontend',
        'exp.cheil.desc':       'Desarrollo de sitios web responsivos y consumo de datos a través de REST APIs usando protocolos HTTP, con enfoque en UI limpia, rendimiento e integración fluida con servicios backend. Trabajo en todo el ciclo frontend — desde la implementación del diseño hasta el despliegue.',
        'exp.cheil.b1':         'Construir y mantener interfaces web responsivas usando React, Angular y TypeScript.',
        'exp.cheil.b2':         'Integrar REST APIs con protocolos HTTP para obtener y mostrar datos dinámicos.',
        'exp.cheil.b3':         'Colaborar en pipelines CI/CD y despliegues en la nube en AWS.',
        'exp.cheil.b4':         'Usar Postman para pruebas y validación de APIs en distintos entornos.',
        'exp.cheil.b5':         'Trabajar con bases de datos y control de versiones a través de GitHub y GitLab.',
        'exp.root.role':        'Desarrollador Full Stack',
        'exp.root.desc':        'Desarrollé aplicaciones web full stack combinando un frontend responsivo en React y Tailwind con backends robustos en Java Spring Boot, gestionando infraestructura en la nube y pipelines DevOps en AWS.',
        'exp.root.b1':          'Construí interfaces responsivas con React y Tailwind CSS siguiendo especificaciones de diseño.',
        'exp.root.b2':          'Desarrollé y mantuve servicios backend RESTful usando Java y Spring Boot.',
        'exp.root.b3':          'Gestioné despliegues e infraestructura en la nube en AWS.',
        'exp.root.b4':          'Implementé prácticas DevOps incluyendo pipelines CI/CD y despliegues automatizados.',
        'exp.root.b5':          'Colaboré entre frontend y backend para entregar funcionalidades de extremo a extremo.',
        'exp.bank.role':        'Especialista en Soporte IT',
        'exp.bank.desc':        'Proporcioné soporte técnico presencial a agentes bancarios con problemas de hardware y software, garantizando mínimo tiempo de inactividad y resolución rápida bajo estándares SLA. Trabajé con herramientas como Service Desk y Citrix para diagnosticar y resolver incidentes eficientemente.',
        'exp.bank.b1':          'Asistí a agentes presenciales con problemas de hardware y software, asegurando resolución rápida.',
        'exp.bank.b2':          'Gestioné y rastreé incidentes usando herramientas de tickets ServiceNow y Service Desk.',
        'exp.bank.b3':          'Soporte de entornos virtuales a través de Citrix para acceso remoto y resolución de problemas.',
        'exp.bank.b4':          'Seguí las mejores prácticas ITIL para gestión de incidentes y cumplimiento de SLA.',
        'exp.bank.b5':          'Escalé problemas complejos y documenté resoluciones para mejorar la base de conocimiento del equipo.',
        'exp.bank.tools':       'Herramientas y Metodologías',
        'exp.ghost':            'Más experiencia próximamente...',
    }
};

function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.querySelector('span').textContent = lang === 'en' ? 'ES' : 'EN';
}

// ── Dark / Light mode ─────────────────────────────────────────
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.querySelector('i').textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
}

// ── Floating controls (theme + lang) ─────────────────────────
function createFloatingControls() {
    const wrap = document.createElement('div');
    wrap.className = 'floating-controls';
    wrap.innerHTML = `
        <button id="theme-toggle" aria-label="Toggle dark mode" title="Toggle dark/light">
            <i class="material-icons">dark_mode</i>
        </button>
        <button id="lang-toggle" aria-label="Toggle language" title="Switch language">
            <span>ES</span>
        </button>`;
    document.body.appendChild(wrap);

    document.getElementById('theme-toggle').addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });

    document.getElementById('lang-toggle').addEventListener('click', () => {
        const current = localStorage.getItem('lang') || 'en';
        applyLanguage(current === 'en' ? 'es' : 'en');
    });
}

// ── Back to top ───────────────────────────────────────────────
function createBackToTop() {
    const btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.innerHTML = '<i class="material-icons">keyboard_arrow_up</i>';
    btn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(btn);
    window.addEventListener('scroll', () =>
        btn.classList.toggle('btt-visible', window.scrollY > 400)
    );
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── Typing animation ──────────────────────────────────────────
function initTyping() {
    const target = document.querySelector('.hero-name');
    if (!target) return;
    const text = target.textContent.trim();
    target.textContent = '';
    target.style.borderRight = '3px solid rgba(255,255,255,0.7)';
    let i = 0;
    function type() {
        if (i < text.length) { target.textContent += text[i++]; setTimeout(type, 80); }
        else setTimeout(() => target.style.borderRight = 'none', 1000);
    }
    setTimeout(type, 400);
}

// ── Scroll reveal ─────────────────────────────────────────────
function initReveal() {
    const els = document.querySelectorAll(
        '.tech-chip, .skill-group, .project-wide-card, .timeline-item, ' +
        '.section-title, .projects-header, .skills-header, .experience-header'
    );
    els.forEach(el => el.classList.add('reveal'));
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('reveal-visible'); obs.unobserve(e.target); }
        });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
}

// ── Active nav on scroll ──────────────────────────────────────
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.top-nav ul a[href^="#"]');
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                links.forEach(l => l.classList.remove('nav-current'));
                const a = document.querySelector(`.top-nav ul a[href="#${e.target.id}"]`);
                if (a) a.classList.add('nav-current');
            }
        });
    }, { threshold: 0.4 });
    sections.forEach(s => obs.observe(s));
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    M.Sidenav.init(document.querySelectorAll('.sidenav'));

    // Restore preferences
    applyTheme(localStorage.getItem('theme') || 'light');
    applyLanguage(localStorage.getItem('lang') || 'en');

    createFloatingControls();
    createBackToTop();
    initTyping();
    initReveal();
    initActiveNav();
});
