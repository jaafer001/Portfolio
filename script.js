// Portfolio Data
const portfolioData = {
    skills: [
        {
            title: "Mobile Development",
            items: [
                "Android (Kotlin)",
                "iOS (Swift) - Currently learning",
                "Cross-platform (Flutter)",
                "React Native - Basic knowledge"
            ]
        },
        {
            title: "Frontend Development",
            items: [
                "HTML5 & CSS3",
                "JavaScript (ES6+)",
                "React.js - Learning",
                "Responsive Web Design"
            ]
        },
        {
            title: "Backend Development",
            items: [
                "PHP",
                "Python (Django) - Currently learning",
                "RESTful API Design",
                "JSON & XML Processing"
            ]
        },
        {
            title: "Databases",
            items: [
                "SQL (MySQL, PostgreSQL)",
                "SQLite - Mobile development",
                "Firebase Realtime Database",
                "Firestore - NoSQL experience"
            ]
        },
        {
            title: "Tools & Platforms",
            items: [
                "Android Studio - Expert",
                "VS Code - Primary editor",
                "Git & GitHub - Version control",
                "Postman - API testing"
            ]
        },
        {
            title: "Soft Skills",
            items: [
                "Problem Solving",
                "Team Collaboration",
                "Agile Development",
                "Continuous Learning"
            ]
        }
    ],
    projects: [
        {
            name: "Quote App",
            date: "May 2025 - Present",
            description: "A motivational quote application with daily notifications, favorites system, and social sharing capabilities. Built with Kotlin and Firebase.",
            url: "https://github.com/jaafer001/QuoteApp",
            technologies: ["Kotlin", "Firebase", "MVVM Architecture"]
        }
    ],
    education: [
        {
            degree: "Mobile App Development",
            institution: "ISTA NTIC, Marrakech",
            period: "September 2023 - July 2025",
            description: "Comprehensive training in mobile application development covering Android, iOS, and cross-platform technologies."
        }
    ],
    organizations: [
        {
            name: "SECURITY EAGLE",
            period: "July 2025 - Present",
            role: "Mobile Security Specialist",
            description: "Focusing on secure mobile application development practices and penetration testing."
        },
        {
            name: "Atlas Defenders",
            period: "May 2025 - Present",
            role: "Volunteer Developer",
            description: "Contributing to open source projects focused on digital privacy and security."
        }
    ],
    certificates: [
        {
            name: "HackerRank Python (Basic)",
            issuer: "HackerRank",
            date: "May 2025",
            description: "HackerRank skill certification test, Achieved five-star rating in Python programming challenges",
            url: "certificates/pythonHackerrank.html"
        }
    ]
};

// DOM Elements
const skillsContainer = document.querySelector('.skills-container');
const projectsContainer = document.querySelector('.projects-container');
const educationContainer = document.querySelector('.education-container');
const organizationsContainer = document.querySelector('.organizations-container');
const certificatesContainer = document.querySelector('.certificates-container');
const contactForm = document.getElementById('contactForm');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.getElementById('themeToggle');
const cursorShine = document.querySelector('.cursor-shine');
const animatedBackground = document.querySelector('.animated-background');
const particlesContainer = document.querySelector('.particles-container');

// Initialize the portfolio
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
    renderEducation();
    renderOrganizations();
    renderCertificates();
    setupEventListeners();
    initCursorShine();
    initParticles();
    initTheme();
    initAnimations();
});

// Render skills
function renderSkills() {
    skillsContainer.innerHTML = portfolioData.skills.map(skill => `
        <div class="skill-card">
            <h3>${skill.title}</h3>
            <ul>
                ${skill.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// Render projects
function renderProjects() {
    projectsContainer.innerHTML = portfolioData.projects.map((project, index) => `
        <div class="project-card" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="project-info">
                <h3>${project.name}</h3>
                <p class="project-date">${project.date}</p>
                <p class="project-description">${project.description}</p>
                ${project.technologies ? `
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                ` : ''}
                ${project.url ? `
                <a href="${project.url}" class="project-link" target="_blank" rel="noopener noreferrer">
                    View Project <i class="fas fa-external-link-alt"></i>
                </a>
                ` : ''}
            </div>
        </div>
    `).join('');
}

// Render education
function renderEducation() {
    educationContainer.innerHTML = portfolioData.education.map(edu => `
        <div class="education-item" data-aos="fade-up">
            <h3>${edu.degree}</h3>
            <p class="institution"><strong>${edu.institution}</strong></p>
            <p class="period">${edu.period}</p>
            ${edu.description ? `<p class="description">${edu.description}</p>` : ''}
        </div>
    `).join('');
}

// Render organizations
function renderOrganizations() {
    organizationsContainer.innerHTML = portfolioData.organizations.map(org => `
        <div class="org-item" data-aos="fade-up">
            <h3>${org.name}</h3>
            <p class="period">${org.period}</p>
            ${org.role ? `<p class="role"><strong>${org.role}</strong></p>` : ''}
            ${org.description ? `<p class="description">${org.description}</p>` : ''}
        </div>
    `).join('');
}

// Render certificates
function renderCertificates() {
    certificatesContainer.innerHTML = portfolioData.certificates.map(cert => `
        <div class="certificate-card" data-aos="fade-up">
            <div class="certificate-content">
                <h3>${cert.name}</h3>
                <p class="issuer">${cert.issuer}</p>
                <p class="description">${cert.description}</p>
                <div class="certificate-meta">
                    <span class="date">${cert.date}</span>
                    ${cert.url ? `
                    <a href="${cert.url}" class="btn btn-small"  rel="noopener noreferrer">
                        View Credential
                    </a>
                    ` : ''}
                </div>
                <div class="certificate-badge">
                    <i class="fas fa-award"></i>
                </div>
            </div>
        </div>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    // Contact form submission
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const message = document.getElementById('contactMessage').value;
        
        // Simple validation
        if (!name || !email || !message) {
            showAlert('Please fill in all fields', 'error');
            return;
        }

        // Here you would typically send the form data to a server
        try {
            // Simulate API call
            await simulateApiCall({ name, email, message });
            showAlert('Thank you for your message! I will get back to you soon.', 'success');
            contactForm.reset();
        } catch (error) {
            showAlert('There was an error sending your message. Please try again later.', 'error');
            console.error('Form submission error:', error);
        }
    });
    
    // Hamburger menu toggle
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', smoothScroll);
    });

    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
}

// Toggle mobile menu
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
}

// Close mobile menu
function closeMobileMenu() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

// Smooth scroll to section
function smoothScroll(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

// Show alert message
function showAlert(message, type) {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        alert.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(alert);
        }, 300);
    }, 3000);
}

// Simulate API call
function simulateApiCall(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Form data would be sent to server:', data);
            resolve({ success: true });
        }, 1000);
    });
}

// Initialize cursor shine effect
function initCursorShine() {
    if (!cursorShine) return;

    // Make cursor follow mouse
    document.addEventListener('mousemove', (e) => {
        cursorShine.style.left = `${e.clientX}px`;
        cursorShine.style.top = `${e.clientY}px`;
    });
    
    // Grow cursor when clicking
    document.addEventListener('mousedown', () => {
        cursorShine.classList.add('active');
    });
    
    document.addEventListener('mouseup', () => {
        cursorShine.classList.remove('active');
    });
    
    // Interactive elements effect
    const interactiveElements = document.querySelectorAll(
        'a, button, .btn, input, textarea, .project-card, .skill-card'
    );
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursorShine.style.borderColor = 'rgba(247, 37, 133, 0.8)';
            cursorShine.style.boxShadow = '0 0 20px rgba(247, 37, 133, 0.6)';
            cursorShine.style.width = '40px';
            cursorShine.style.height = '40px';
        });
        
        element.addEventListener('mouseleave', () => {
            cursorShine.style.borderColor = 'rgba(67, 97, 238, 0.8)';
            cursorShine.style.boxShadow = '0 0 15px rgba(67, 97, 238, 0.5)';
            cursorShine.style.width = '30px';
            cursorShine.style.height = '30px';
        });
    });
}

// Initialize particles effect
function initParticles() {
    if (!particlesContainer) return;

    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = Math.random() * 20 + 10;
        const opacity = Math.random() * 0.5 + 0.1;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.opacity = opacity;
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize theme system
function initTheme() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('portfolio-theme') || 'default';
    document.body.setAttribute('data-theme', savedTheme);
    
    // Update toggle icon
    updateThemeIcon(savedTheme);
}

// Toggle between light/dark theme
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'default' : 'dark';
    
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    updateThemeIcon(newTheme);
}

// Update theme toggle icon
function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Initialize animations on scroll
function initAnimations() {
    const animateOnScroll = () => {
        const elements = document.querySelectorAll(
            '.skill-card, .project-card, .education-item, .org-item, .certificate-card'
        );
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animated elements
    document.querySelectorAll(
        '.skill-card, .project-card, .education-item, .org-item, .certificate-card'
    ).forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });

    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Trigger once on load
    animateOnScroll();
}

// Initialize hero animations
function initHeroAnimations() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero h2');
    const heroDescription = document.querySelector('.hero-description');
    const heroButtons = document.querySelector('.hero-buttons');
    
    if (heroTitle) {
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 300);
    }
    
    if (heroSubtitle) {
        setTimeout(() => {
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }, 600);
    }
    
    if (heroDescription) {
        setTimeout(() => {
            heroDescription.style.opacity = '1';
            heroDescription.style.transform = 'translateY(0)';
        }, 900);
    }
    
    if (heroButtons) {
        setTimeout(() => {
            heroButtons.style.opacity = '1';
            heroButtons.style.transform = 'translateY(0)';
        }, 1200);
    }
}

// Initialize everything when DOM is loaded
initHeroAnimations();