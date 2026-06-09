export const siteConfig = {
  name: "Syed Abdull",
  initials: "SA",
  title: "DevOps Engineer | Full-Stack Developer | IT Solutions",
  tagline:
    "Custom websites, cloud infrastructure, and enterprise portals — built to perform and scale.",
  email: "abdullah7175@gmail.com",
  phone: "+92 333 0355270",
  linkedin: "https://www.linkedin.com/in/abdullahanis-it/",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://syed-abdull.vercel.app"),
  description:
    "Professional web development, DevOps, cloud infrastructure, and BI solutions. Website packages, enterprise portals, CI/CD automation, and Power BI dashboards for businesses in Pakistan and worldwide.",
  keywords: [
    "Syed Abdull",
    "website development Pakistan",
    "web development services",
    "website packages",
    "DevOps engineer",
    "full-stack developer",
    "Next.js developer",
    "cloud infrastructure",
    "Power BI dashboards",
    "enterprise portal development",
    "CI/CD automation",
    "AWS Azure",
    "custom website builder",
  ],
  aboutKeywords: [
    "Syed Abdull portfolio",
    "DevOps engineer Pakistan",
    "full-stack developer CV",
    "IT infrastructure specialist",
    "enterprise systems engineer",
    "NED University",
    "KW&SC projects",
    "Power BI consultant",
  ],
};

export const services = [
  {
    id: "web-development",
    title: "Custom Website Development",
    icon: "globe",
    description:
      "Modern, responsive websites and web apps built with Next.js, React, and TailwindCSS — optimized for speed, SEO, and conversions.",
    tags: ["Next.js", "React", "SEO", "Responsive Design"],
  },
  {
    id: "devops-cloud",
    title: "DevOps & Cloud Infrastructure",
    icon: "cloud",
    description:
      "AWS and Azure deployments, Docker containerization, Kubernetes orchestration, and Terraform infrastructure as code.",
    tags: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
  },
  {
    id: "enterprise-portals",
    title: "Enterprise Portal Development",
    icon: "portal",
    description:
      "Scalable business portals with real-time dashboards, API integrations, PostgreSQL backends, and role-based access control.",
    tags: ["PostgreSQL", "WebSocket", "API Integration", "RBAC"],
  },
  {
    id: "bi-analytics",
    title: "Power BI & Analytics Dashboards",
    icon: "chart",
    description:
      "Interactive dashboards, ETL pipelines, and automated reporting that turn raw data into actionable business insights.",
    tags: ["Power BI", "ETL", "SQL", "KPI Reporting"],
  },
  {
    id: "cicd-automation",
    title: "CI/CD & Deployment Automation",
    icon: "pipeline",
    description:
      "GitHub Actions pipelines, automated testing, and zero-downtime deployments that cut manual work by 70%+.",
    tags: ["GitHub Actions", "CI/CD", "Docker", "Monitoring"],
  },
  {
    id: "it-infrastructure",
    title: "IT Infrastructure Management",
    icon: "server",
    description:
      "Windows/Linux server administration, VMware virtualization, backup systems, and 99.9%+ uptime monitoring with Prometheus and Grafana.",
    tags: ["Linux", "VMware", "Prometheus", "Grafana", "ELK"],
  },
];

export const packages = [
  {
    id: "starter",
    name: "Starter",
    price: "From $299",
    popular: false,
    description: "Perfect for freelancers, startups, and personal brands getting online fast.",
    features: [
      "Single-page or 3-page responsive website",
      "Mobile-first design",
      "Basic SEO setup & meta tags",
      "Contact form integration",
      "1 round of revisions",
      "7-day delivery",
    ],
    cta: "Get Started",
    tags: ["landing page", "startup website", "basic SEO"],
  },
  {
    id: "business",
    name: "Business",
    price: "From $799",
    popular: true,
    description: "Multi-page business sites with advanced features for growing companies.",
    features: [
      "Up to 8 custom pages",
      "Advanced SEO & sitemap",
      "CMS-ready architecture",
      "Analytics integration",
      "Performance optimization",
      "3 rounds of revisions",
      "14-day delivery",
    ],
    cta: "Most Popular",
    tags: ["business website", "multi-page", "advanced SEO"],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom Quote",
    popular: false,
    description: "Full-scale portals, dashboards, and cloud deployments for organizations.",
    features: [
      "Custom portal or web application",
      "Database & API integration",
      "Real-time dashboards",
      "CI/CD & cloud deployment",
      "Monitoring & security setup",
      "Ongoing support options",
      "Timeline based on scope",
    ],
    cta: "Request Quote",
    tags: ["enterprise portal", "cloud deployment", "custom application"],
  },
];

export const achievements = [
  {
    metric: "70%+",
    label: "Deployment Automation",
    description: "Reduced manual deployment effort through GitHub Actions CI/CD pipelines.",
  },
  {
    metric: "99.995%",
    label: "System Uptime",
    description: "Maintained enterprise-grade datacenter and cloud availability.",
  },
  {
    metric: "7+",
    label: "Years Experience",
    description: "Systems administration, DevOps, full-stack development, and BI solutions.",
  },
  {
    metric: "10+",
    label: "Enterprise Projects",
    description: "Delivered portals, dashboards, and digital systems for KW&SC and clients.",
  },
  {
    metric: "99.9%",
    label: "Backup Reliability",
    description: "Automated backup pipelines ensuring server and application continuity.",
  },
  {
    metric: "5+",
    label: "Cloud Platforms",
    description: "Production experience across AWS, Azure, Docker, Kubernetes, and VMware.",
  },
];

export const summary =
  "Results-driven IT professional with proven ability to manage technology projects, optimize systems, and solve complex technical challenges. Experienced with 7+ years in systems administration, DevOps, cloud infrastructure, and full-stack development — deploying enterprise IT environments across Windows/Linux servers, VMware, AWS/Azure, and high-availability datacenters.";

export const expertise = [
  {
    title: "System Administration & IT Infrastructure",
    icon: "server",
    description:
      "6+ years managing Windows/Linux servers, VMware ESXi, RAID/NAS storage, patching, and backup systems with 99.995% uptime for enterprise datacenters.",
  },
  {
    title: "DevOps & Cloud Automation",
    icon: "cloud",
    description:
      "CI/CD pipelines with GitHub Actions, Docker, Terraform, AWS, and Azure for scalable, secure deployments.",
  },
  {
    title: "Full-Stack Development & BI",
    icon: "code",
    description:
      "Interactive dashboards and apps with Next.js, Node.js, React, TailwindCSS, and Power BI. PostgreSQL optimization and ETL pipelines.",
  },
  {
    title: "Networking & Cybersecurity",
    icon: "shield",
    description:
      "Firewalls, routers, switches, load balancers, endpoint security, RBAC, and compliance measures.",
  },
  {
    title: "Monitoring & Automation",
    icon: "chart",
    description:
      "Prometheus, Grafana, and ELK for monitoring and alerting. Shell scripting, Python, and API integrations.",
  },
  {
    title: "Project Management",
    icon: "team",
    description:
      "Planning IT projects, managing resources, aligning KPIs, and delivering results across multi-disciplinary teams.",
  },
];

export const experience = [
  {
    role: "DevOps Engineer",
    company: "ESSPL Pakistan",
    period: "2023 — Present",
    highlights: [
      "Developed Works Management Portal with real-time dashboards using Next.js and WebSocket live monitoring.",
      "Built Complaint Tracking System with API integration and PostgreSQL optimization for operational analytics.",
      "Automated deployments via GitHub Actions CI/CD, reducing manual intervention by 70%+.",
      "Containerized BI and web applications with Docker for improved scalability.",
      "Established monitoring with Prometheus, Grafana, and ELK Stack for proactive alerting.",
      "Implemented security protocols: antivirus/EDR, RBAC, network segmentation, and DR planning.",
    ],
  },
  {
    role: "Senior BI Consultant",
    company: "Sapphire Consulting Services, Pakistan",
    period: "2022 — 2023",
    highlights: [
      "Designed and deployed Power BI dashboards for business process visualization and automated reporting.",
      "Containerized BI solutions using Docker and Kubernetes for secure, fast deployment.",
      "Collaborated with stakeholders to define KPIs and improve analytics-driven decision-making.",
    ],
  },
  {
    role: "QA & Data Engineer",
    company: "CCODEZ, Pakistan",
    period: "2020 — 2022",
    highlights: [
      "Maintained backup automation pipelines with 99.9% uptime for servers and applications.",
      "Implemented compliance checks, versioned deployments, and IT system performance monitoring.",
      "Developed and tested data pipelines ensuring integrity for analytics platforms.",
    ],
  },
  {
    role: "Senior Software Engineer (BI & DevOps)",
    company: "ESSPL Pakistan",
    period: "2019 — 2020",
    highlights: [
      "Led Video Archive Portal development with secure cloud-native storage and high-availability media retrieval.",
      "Created Complaint Analytics Dashboards in Power BI for KPI reporting and resolution tracking.",
      "Streamlined ETL pipelines and optimized SQL queries for faster data processing.",
    ],
  },
  {
    role: "Software Support Engineer",
    company: "ESSPL Pakistan",
    period: "2018 — 2019",
    highlights: [
      "Supported enterprise BI deployments and stable IT infrastructure integrations.",
      "Managed user roles, security compliance, and dashboard performance troubleshooting.",
    ],
  },
];

export const projects = [
  {
    name: "E-Filing System",
    client: "KW&SC",
    description:
      "Fully digitalized filing system covering document submissions, departmental daak, and meeting scheduling with improved transparency and tracking.",
    outcome: "Streamlined cross-department workflows and eliminated paper-based bottlenecks.",
    tags: ["Next.js", "PostgreSQL", "Workflow Automation"],
  },
  {
    name: "Ground Water Management Portal",
    client: "KW&SC",
    description:
      "Real-time monitoring dashboards with Power BI and Next.js; optimized PostgreSQL queries for operational insights.",
    outcome: "Enabled live groundwater monitoring with data-driven decision support.",
    tags: ["Power BI", "Next.js", "PostgreSQL"],
  },
  {
    name: "Video Archive Portal",
    client: "KW&SC",
    description:
      "Scalable media archive system with secure cloud-native storage and high availability for media retrieval.",
    outcome: "Delivered secure, high-availability media storage and retrieval at scale.",
    tags: ["Cloud Storage", "High Availability", "Media"],
  },
  {
    name: "Works Management & Complaint Tracking",
    client: "KW&SC",
    description:
      "API-integrated PostgreSQL database for operational analytics, complaint tracking, and senior management reporting.",
    outcome: "Reduced complaint resolution time with real-time analytics for management.",
    tags: ["API Integration", "PostgreSQL", "Analytics"],
  },
];

export const education = [
  {
    degree: "Masters of Engineering — Micro System Design",
    institution: "NED University of Engineering & Technology",
  },
  {
    degree: "DevOps Engineer",
    institution: "Charles Sturt University, Australia",
  },
];

export const certifications = [
  "Microsoft Azure AI Essentials Professional Certificate — Microsoft & LinkedIn",
  "AWS Essential Trainings for Developer",
];

export const techStack = [
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "Terraform",
  "GitHub Actions",
  "Next.js",
  "React",
  "Node.js",
  "PostgreSQL",
  "Power BI",
  "Prometheus",
  "Grafana",
  "ELK Stack",
  "Python",
  "Linux",
  "VMware",
];

export const serviceIcons: Record<string, string> = {
  globe: "◉",
  cloud: "☁",
  portal: "⬡",
  chart: "▲",
  pipeline: "⟁",
  server: "◎",
};

export const expertiseIcons: Record<string, string> = {
  server: "⬡",
  cloud: "☁",
  code: "⟨/⟩",
  shield: "◈",
  chart: "▲",
  team: "◎",
};
