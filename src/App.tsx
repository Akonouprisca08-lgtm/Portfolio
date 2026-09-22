import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  MousePointer2,
  Palette,
  Send,
  Shield,
  Sparkles,
  Sun,
  Wrench,
  X,
} from "lucide-react";

import moiBea from "./moi/moiBea.jpg";

type ProjectCategory = "Web" | "Mobile" | "Desktop" | "IoT / IA" | "Collaboration";

type Project = {
  number: string;
  title: string;
  type: string;
  category: ProjectCategory;
  description: string;
  details: string;
  stack: string[];
  image: string;
  featured?: boolean;
  github?: string;
  demo?: string;
};

type SkillLevel = "Expert" | "Avancé" | "Intermédiaire";

type Skill = {
  name: string;
  level: SkillLevel;
};

type SkillGroup = {
  id: string;
  label: string;
  icon: typeof Code2;
  skills: Skill[];
};

const projects: Project[] = [
  {
    number: "01",
    title: "Eventia",
    type: "Web · Event management · Ticketing",
    category: "Web",
    description:
      "Plateforme de gestion d'événements et de billetterie reliant participants, organisateurs et événements.",
    details:
      "Projet professionnel développé autour de la création d'événements, de la billetterie, des participants, du scan des billets, des statistiques et des espaces administrateur / organisateur.",
    stack: ["React", "TypeScript", "NestJS", "Supabase", "Tailwind CSS"],
    image: "/projects/eventia.jpg",
    featured: true,
    github: "https://github.com/Numerum-dev-center/Eventia-web",
  },
  {
    number: "02",
    title: "Ubers",
    type: "Web · Mobility · Frontend",
    category: "Web",
    description:
      "Interface de covoiturage pensée pour rendre la recherche et la mise en relation simples et accessibles.",
    details:
      "Application orientée expérience utilisateur avec une interface responsive et une logique de mise en relation entre conducteurs et passagers.",
    stack: ["React", "JavaScript", "Node.js"],
    image: "/projects/ride-together.jpg",
    featured: true,
    github: "https://github.com/Grace1819/Ubers",
  },
  {
    number: "03",
    title: "AfriEvent",
    type: "Mobile · Event discovery",
    category: "Mobile",
    description:
      "Expérience mobile destinée à faciliter la découverte et la gestion d'événements.",
    details:
      "Projet mobile combinant une interface Flutter et une couche backend pour organiser les données et les fonctionnalités liées aux événements.",
    stack: ["Flutter", "Dart", "Node.js", "Prisma"],
    image: "/projects/afrievent.jpg",
  },
  {
    number: "04",
    title: "E-commerce Bio",
    type: "Web · E-commerce",
    category: "Web",
    description:
      "Boutique en ligne conçue pour une entreprise spécialisée dans les produits bio.",
    details:
      "Projet personnel centré sur la présentation des produits, la navigation catalogue et une expérience d'achat claire.",
    stack: ["Web", "JavaScript", "Frontend"],
    image: "/projects/project-04.jpg",
  },
  {
    number: "05",
    title: "Gestion de stock",
    type: "Desktop · Management",
    category: "Desktop",
    description:
      "Application de gestion de stock avec suivi des produits et reporting pour faciliter le pilotage.",
    details:
      "Projet académique orienté gestion métier, structuration des données et visualisation des informations utiles au suivi d'un inventaire.",
    stack: ["Python", "Streamlit", "MySql", "Desktop", "Management"],
    image: "/projects/project-05.jpg",
    featured: true,
    github: "https://github.com/Grace1819/Gestion-de-stock",
  },
  {
    number: "06",
    title: "Gestion de quincallerie",
    type: "Desktop · Management",
    category: "Desktop",
    description:
      "Application de gestion des ventes et du stock pour un magasin de matériel de quincallerie.",
    details:
      "Projet académique combinant logique métier, gestion des produits, ventes et suivi des stocks.",
    stack: ["VB.NET", "SQL Server", "Crystal Reports", "Management"],
    image: "/projects/project-06.jpg",
  },
  {
    number: "07",
    title: "Temperature Monitoring",
    type: "IoT / IA · Monitoring",
    category: "IoT / IA",
    description:
      "Système conçu pour suivre et surveiller l'évolution de la température.",
    details:
      "Projet académique autour de la collecte, du suivi et de la représentation de données de température.",
    stack: ["Python", "IoT", "Monitoring"],
    image: "/projects/project-07.jpg",
  },
  {
    number: "08",
    title: "Hotel Management",
    type: "Web · Management",
    category: "Web",
    description:
      "Application de gestion hôtelière pensée pour centraliser les opérations et les informations.",
    details:
      "Projet académique orienté gestion métier avec une interface destinée à simplifier le suivi des activités d'un établissement hôtelier.",
    stack: ["Java", "UI/UX", "MySql"],
    image: "/projects/project-08.jpg",
  },

  {
    number: "09",
    title: "Gestion de Bibliothèque",
    type: "Web · Management",
    category: "Web",
    description:
      "Application de gestion d'une bibliothèque avec suivi des livres et des emprunts.",
    details:
      "Projet académique combinant logique métier, gestion des livres, emprunts et suivi des utilisateurs.",
    stack: ["Php", "HTML/CSS", "MySql", "Management"],
    image: "/projects/project-09.jpg",
  },
];

const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Langages",
    icon: Code2,
    skills: [
      { name: "JavaScript", level: "Avancé" },
      { name: "TypeScript", level: "Avancé" },
      { name: "Python", level: "Avancé" },
      { name: "Dart", level: "Intermédiaire" },
      { name: "SQL", level: "Avancé" },
      { name: "Java", level: "Intermédiaire" },
      { name: "PHP", level: "Avancé" },
      { name: "C", level: "Intermédiaire" },
      { name: "VB.NET", level: "Intermédiaire" },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks & Librairies",
    icon: Layers3,
    skills: [
      { name: "React", level: "Avancé" },
      { name: "Node.js", level: "Avancé" },
      { name: "NestJS", level: "Avancé" },
      { name: "NextJS", level: "Intermédiaire" },
      { name: "Express.js", level: "Intermédiaire" },
      { name: "Flutter", level: "Intermédiaire" },
      { name: "Tailwind CSS", level: "Avancé" },
    ],
  },
  {
    id: "data",
    label: "Bases de Données & Cache",
    icon: Database,
    skills: [
      { name: "MySQL", level: "Avancé" },
      { name: "PostgreSQL", level: "Intermédiaire" },
      { name: "Supabase", level: "Avancé" },
      { name: "Firebase", level: "Intermédiaire" },
      { name: "Prisma", level: "Intermédiaire" },
    ],
  },
  {
    id: "devops",
    label: "Outils & DevOps",
    icon: Wrench,
    skills: [
      { name: "Git", level: "Avancé" },
      { name: "GitHub", level: "Avancé" },
      { name: "REST API", level: "Avancé" },
      { name: "Vercel", level: "Intermédiaire" },
      { name: "Postman", level: "Intermédiaire" },
      { name: "Docker", level: "Intermédiaire" },
      { name: "Google Maps API", level: "Intermédiaire" },
      { name: "Windows Server", level: "Intermédiaire" },
    ],
  },
  {
    id: "design",
    label: "Design & UX",
    icon: Palette,
    skills: [
      { name: "Figma", level: "Avancé" },
      { name: "UI/UX Design", level: "Avancé" },
      { name: "Canva", level: "Avancé" },
      { name: "Responsive Design", level: "Avancé" },
      { name: "Prototypage", level: "Intermédiaire" },
      { name: "Adobe Photoshop", level: "Intermédiaire" }
    ],
  },
  {
    id: "security",
    label: "Sécurité",
    icon: Shield,
    skills: [
      { name: "Authentification", level: "Avancé" },
      { name: "JWT", level: "Intermédiaire" },
      { name: "API Security", level: "Intermédiaire" },
      { name: "Validation", level: "Avancé" },
    ],
  },
];

const projectCategories = [
  "Tous",
  "Web",
  "Mobile",
  "Desktop",
  "IoT / IA",
  "Collaboration",
] as const;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [projectFilter, setProjectFilter] = useState<(typeof projectCategories)[number]>("Tous");
  const [skillFilter, setSkillFilter] = useState("languages");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const activeSkillGroup =
    skillGroups.find((group) => group.id === skillFilter) ?? skillGroups[0];

  const filteredProjects = useMemo(() => {
    if (projectFilter === "Tous") return projects;
    return projects.filter((project) => project.category === projectFilter);
  }, [projectFilter]);

useEffect(() => {
  let observer: IntersectionObserver | null = null;
  let frameId = 0;

  frameId = requestAnimationFrame(() => {
    const revealElements =
      document.querySelectorAll<HTMLElement>(".reveal");

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    revealElements.forEach((element) => {
      if (!element.classList.contains("visible")) {
        observer?.observe(element);
      }
    });
  });

  return () => {
    cancelAnimationFrame(frameId);
    observer?.disconnect();
  };
}, [projectFilter]);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const closeMenu = () => setMenuOpen(false);

  const scrollTo = (id: string) => {
    closeMenu();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={darkMode ? "portfolio dark" : "portfolio light"}>
      <div className="grain" />

      <header className="site-header">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-symbol">A</span>
          <span>GRACIA</span>
        </a>

        <nav className="desktop-nav">
          <a href="#home">Accueil</a>
          <a href="#about">À propos</a>
          <a href="#skills">Compétences</a>
          <a href="#work">Projets</a>
          <a href="#experience">Expérience</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode((value) => !value)}
            aria-label="Changer le thème"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu size={21} />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-top">
          <span className="logo">
            <span className="logo-symbol">A</span>
            GRACIA
          </span>

          <button onClick={closeMenu} aria-label="Fermer le menu">
            <X size={23} />
          </button>
        </div>

        <nav>
          {[
            ["01", "home", "Accueil"],
            ["02", "about", "À propos"],
            ["03", "skills", "Compétences"],
            ["04", "work", "Projets"],
            ["05", "experience", "Expérience"],
            ["06", "contact", "Contact"],
          ].map(([number, id, label]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              <span>{number}</span>
              {label}
            </a>
          ))}
        </nav>

        <div className="mobile-menu-footer">
          <span>Lomé, Togo</span>
          <span>Disponible pour opportunités</span>
        </div>
      </div>

      <main>
        <section className="hero" id="home">
          <div className="hero-small-label">
            <span className="status-dot" />
            Full-Stack Developer · Lomé, Togo
          </div>

          <div className="hero-content">
            <div className="hero-title">
              <span>AKONOU</span>

              <div className="hero-title-line">
                <span className="outline-text">GRACIA</span>

                <div className="hero-photo">
                  <img src={moiBea} alt="Gracia Prisca" />

                  
                    
                  
                </div>
              </div>

              <span className="accent-word">PRISCA</span>
            </div>

            <div className="hero-bottom">
              <div className="hero-introduction">
                <p className="eyebrow">Full-Stack Developer · Lomé, Togo</p>

                <h2>
                  Je construis des
                  <br />
                  <span>expériences digitales.</span>
                </h2>

                <p className="hero-description">
                  Je transforme des idées en applications modernes, intuitives
                  et responsives, avec une attention particulière portée à
                  l&apos;expérience utilisateur.
                </p>

                <div className="hero-buttons">
                  <a href="#work" className="magnetic-button primary-button">
                    Voir mes projets
                    <ArrowDown size={16} />
                  </a>

                  <a href="#contact" className="text-link">
                    Parlons-en
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              <div className="hero-meta">
                <div>
                  <span>FOCUS</span>
                  <strong>Web / UI / UX</strong>
                </div>

                <div>
                  <span>BASED IN</span>
                  <strong>Lomé, Togo</strong>
                </div>

                <div>
                  <span>EXPLORER</span>
                  <a href="#skills">
                    COMPÉTENCES <ArrowDown size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>


        </section>

        <section className="statement reveal">
          <div className="section-index">/ 01</div>

          <div className="statement-content">
            <p className="section-label">MA VISION</p>

            <h2>
              Je ne me contente pas de
              <span> coder des interfaces.</span>
              <br />
              Je cherche à créer des expériences
              <span> utiles.</span>
            </h2>
          </div>
        </section>

        
<section className="skills-section" id="skills">
  <div className="section-heading-centered reveal">
    <span className="section-index">/ 02</span>

    <p className="section-label">COMPÉTENCES</p>

    <h2>Un stack technique large et maîtrisé</h2>

    <p>
      Des technologies choisies selon le besoin : développement,
      données, design, outils et sécurité.
    </p>

    <span className="section-gradient-line" />
  </div>



          <div className="skill-tabs reveal" role="tablist">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              const active = group.id === skillFilter;

              return (
                <button
                  key={group.id}
                  className={`skill-tab ${active ? "active" : ""}`}
                  onClick={() => setSkillFilter(group.id)}
                  role="tab"
                  aria-selected={active}
                >
                  <Icon size={18} />
                  <span>{group.label}</span>
                </button>
              );
            })}
          </div>

          <div className="skills-panel reveal">
            <div className="skills-panel-top">
              <div>
                <span className="skills-panel-index">0{skillGroups.findIndex((g) => g.id === skillFilter) + 1}</span>
                <h3>{activeSkillGroup.label}</h3>
              </div>

              <p>
                {activeSkillGroup.skills.length} compétences
              </p>
            </div>

            <div className="skills-chips">
              {activeSkillGroup.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`skill-chip skill-${skill.level.toLowerCase()}`}
                  style={{ animationDelay: `${index * 55}ms` }}
                >
                  <span>{skill.name}</span>
                  <small>{skill.level}</small>
                </div>
              ))}
            </div>

            <div className="skill-legend">
              <span><i className="legend expert" /> Expert</span>
              <span><i className="legend advanced" /> Avancé</span>
              <span><i className="legend intermediate" /> Intermédiaire</span>
            </div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading-centered reveal">
            <span className="section-index">/ 03</span>
            <p className="section-label">PROJETS</p>
            <h2>Une sélection de mes réalisations</h2>
            <p>Des projets web, mobile et académiques qui montrent ma façon de construire.</p>
            <span className="section-gradient-line" />
          </div>

          <div className="project-tabs reveal" role="tablist">
            {projectCategories.map((category) => (
              <button
                key={category}
                className={projectFilter === category ? "active" : ""}
                onClick={() => setProjectFilter(category)}
                role="tab"
                aria-selected={projectFilter === category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="project-count reveal">
            {filteredProjects.length} {filteredProjects.length > 1 ? "projets" : "projet"}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
                <article
                  className={`project-card reveal ${project.featured ? "featured" : ""}`}
                  key={project.number}
                  style={{ transitionDelay: `${Math.min(index * 80, 320)}ms` }}
                >
                  <button
                    className="project-card-button"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`Voir les détails de ${project.title}`}
                  >
                    <div className={`project-card-image project-image-${project.number}`}>
                      <img
                        src={project.image}
                        alt={`Aperçu du projet ${project.title}`}
                        onError={(event) => {
                          event.currentTarget.style.opacity = "0";
                        }}
                      />

                      <div className="project-image-fallback">
                        <div className="fallback-window">
                          <span />
                          <span />
                          <span />
                          <div className="fallback-content">
                            <i />
                            <i />
                            <i />
                          </div>
                        </div>
                      </div>

                      {project.featured && (
                        <span className="featured-badge">
                          <Sparkles size={14} />
                          Featured
                        </span>
                      )}

                      <span className="project-card-number">{project.number}</span>

                      <div className="project-card-overlay">
                        <span>VOIR LE PROJET</span>
                        <ArrowUpRight size={20} />
                      </div>
                    </div>

                    <div className="project-card-content">
                      <div className="project-card-heading">
                        <div>
                          <p className="project-card-type">{project.type}</p>
                          <h3>{project.title}</h3>
                        </div>

                        <span className="project-card-icon">
                          <ArrowUpRight size={21} />
                        </span>
                      </div>

                      <p className="project-card-description">
                        {project.description}
                      </p>

                      <div className="project-card-stack">
                        {project.stack.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>

                      <div className="project-card-cta">
                        <span>Voir les détails</span>
                        <ArrowUpRight size={15} />
                      </div>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-projects reveal">
              <Layers3 size={26} />
              <h3>Aucun projet dans cette catégorie</h3>
              <p>Ajoute tes prochains projets dans le tableau <code>projects</code>.</p>
              <button onClick={() => setProjectFilter("Tous")}>Voir tous les projets</button>
            </div>
          )}
        </section>

        <div className="marquee-wrapper">
          <div className="marquee">
            <span>DESIGN</span><i>✦</i>
            <span>DEVELOP</span><i>✦</i>
            <span>CREATE</span><i>✦</i>
            <span>ITERATE</span><i>✦</i>
            <span>DESIGN</span><i>✦</i>
            <span>DEVELOP</span><i>✦</i>
            <span>CREATE</span><i>✦</i>
            <span>ITERATE</span><i>✦</i>
          </div>
        </div>

        <section className="about-section reveal" id="about">
          <div className="section-top">
            <div>
              <span className="section-index">/ 04</span>
              <p className="section-label">À PROPOS</p>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-title">
              <h2>
                Entre creativite
                <br />
                et logique.
              </h2>
              
            </div>

            <div className="about-content">
              <p className="large-text">
                Je suis <strong>Gracia Prisca</strong>, développeuse
                full-stack avec une forte affinité pour le frontend et
                l&apos;expérience utilisateur.
              </p>

              <p>
                J&apos;aime prendre une idée, un besoin ou une maquette et la
                transformer en une expérience digitale réelle, responsive et
                agréable à utiliser.
              </p>

              <p>
                Mon approche se situe à la rencontre du design et du
                développement : une interface doit être belle, mais surtout
                claire, cohérente et utile.
              </p>

              <div className="about-facts">
                <div>
                  <MapPin size={17} />
                  <span>
                    <small>LOCATION</small>
                    Lomé, Togo
                  </span>
                </div>

                <div>
                  <Code2 size={17} />
                  <span>
                    <small>FOCUS</small>
                    Web / Frontend / UI / UX
                  </span>
                </div>

                <div>
                  <GraduationCap size={17} />
                  <span>
                    <small>FORMATION</small>
                    Licence — Développement d&apos;applications
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="process-section reveal">
          <div className="section-top">
            <div>
              <span className="section-index">/ 05</span>
              <p className="section-label">MA MÉTHODE</p>
            </div>

            <p className="section-side-text">
             
            </p>
          </div>

          <div className="process-title">
            <h2>
              Du concept
              <br />
              <span>a l'experience.</span>
            </h2>
          </div>

          <div className="process-grid">
            {[
              [Sparkles, "01", "Discover", "Comprendre le problème, les besoins et les utilisateurs."],
              [Code2, "02", "Design", "Transformer les idées en une structure claire et cohérente."],
              [BriefcaseBusiness, "03", "Build", "Développer une expérience responsive, performante et accessible."],
              [Check, "04", "Refine", "Tester, corriger et améliorer chaque détail."],
            ].map(([Icon, number, title, text]) => {
              const ProcessIcon = Icon as typeof Code2;
              return (
                <div className="process-item" key={number as string}>
                  <span>{number as string}</span>
                  <ProcessIcon size={19} />
                  <h3>{title as string}</h3>
                  <p>{text as string}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="experience-section reveal" id="experience">
          <div className="section-top">
            <div>
              <span className="section-index">/ 06</span>
              <p className="section-label">EXPÉRIENCE</p>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-date">
              <span>2026</span>
              <small>NOW</small>
            </div>

            <div className="experience-company">
              <p>NUMERUM</p>
              <h2>Web Developer</h2>
            </div>

            <div className="experience-description">
              <p>
                Participation au développement de solutions numériques
                modernes et d&apos;interfaces web orientées utilisateur.
              </p>
              <ul>
                <li>Développement d&apos;interfaces web responsives</li>
                <li>Intégration d&apos;API et de services backend</li>
                <li>Maintenance et évolution d&apos;applications web</li>
                <li>Travail autour de l&apos;expérience utilisateur</li>
              </ul>
            </div>
          </div>

          <div className="experience-item education-item">
            <div className="experience-date">
              <span>2022</span>
              <small>2025</small>
            </div>

            <div className="experience-company">
              <p>UCAO-UUT</p>
              <h2>Licence</h2>
            </div>

            <div className="experience-description">
              <p>
                Licence en Développement d&apos;Applications — formation
                orientée développement logiciel et applications web.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-section reveal" id="contact">
          <div className="contact-top">
            <span className="section-index">/ 07</span>
            <p className="section-label">CONTACT</p>
          </div>

          <div className="contact-title">
            <p>Un projet</p>
            <h2>
              en <span>tête ?</span>
            </h2>
          </div>

          <div className="contact-bottom">
            <div>
              <p>
                Vous avez un projet, une idée ou simplement envie d&apos;échanger ?
                <br />
                Parlons-en.
              </p>

              <a
                className="contact-email"
                href="mailto:graciaakonou@gmail.com"
              >
                graciaakonou@gmail.com
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="contact-links">
              <a
                href="https://github.com/Akonouprisca08-lgtm"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/gracia-prisca-akonou-66a52440a/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>

              <a href="mailto:graciaakonou@gmail.com">
                <Mail size={18} />
                Email
              </a>
            </div>
          </div>

          <div className="contact-availability">
            <span className="status-dot" />
            <span>AVAILABLE FOR NEW OPPORTUNITIES</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <span className="logo-symbol">A</span>
          GRACIA
        </div>

        <p>Designed & built by Gracia Prisca © 2026</p>

        <a href="#home" className="back-top">
          Back to top
          <ArrowDown size={15} className="rotate-up" />
        </a>
      </footer>

      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div
            className="project-modal-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Fermer"
            >
              <X size={20} />
            </button>

            <div className="project-modal-image">
              <img
                src={selectedProject.image}
                alt={`Capture de ${selectedProject.title}`}
                onError={(event) => {
                  event.currentTarget.style.opacity = "0";
                }}
              />
              <span>{selectedProject.number}</span>
            </div>

            <div className="project-modal-content">
              <p>{selectedProject.type}</p>
              <h2>{selectedProject.title}</h2>
              <p className="modal-description">{selectedProject.details}</p>

              <div className="modal-stack">
                {selectedProject.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="modal-actions">
                {selectedProject.github ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-primary"
                  >
                    <Github size={17} />
                    Voir le code
                    <ExternalLink size={15} />
                  </a>
                ) : null}

                {selectedProject.demo ? (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-secondary"
                  >
                    <ExternalLink size={17} />
                    Démo
                  </a>
                ) : null}

                <button
                  className="modal-secondary"
                  onClick={() => {
                    setSelectedProject(null);
                    scrollTo("contact");
                  }}
                >
                  <Send size={17} />
                  Me contacter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
