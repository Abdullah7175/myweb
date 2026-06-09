export const siteConfig = {
  name: "Abdullah Anis",
  title: "DevOps Engineer | Full-Stack Developer",
  email: "abdullah7175@gmail.com",
  phone: "+92 333 0355270",
  linkedin: "https://www.linkedin.com/in/abdullahanis-it/",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://abdullahanis.dev"),
  description:
    "Results-driven IT professional with 7+ years in DevOps, cloud infrastructure, full-stack development, and enterprise systems. Expert in AWS, Azure, Kubernetes, Next.js, and CI/CD automation.",
  keywords: [
    "Abdullah Anis",
    "DevOps Engineer",
    "Full-Stack Developer",
    "Cloud Infrastructure",
    "AWS",
    "Azure",
    "Kubernetes",
    "Docker",
    "Next.js",
    "Power BI",
    "CI/CD",
    "Pakistan",
  ],
};

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
    tags: ["Next.js", "PostgreSQL", "Workflow Automation"],
  },
  {
    name: "Ground Water Management Portal",
    client: "KW&SC",
    description:
      "Real-time monitoring dashboards with Power BI and Next.js; optimized PostgreSQL queries for operational insights.",
    tags: ["Power BI", "Next.js", "PostgreSQL"],
  },
  {
    name: "Video Archive Portal",
    client: "KW&SC",
    description:
      "Scalable media archive system with secure cloud-native storage and high availability for media retrieval.",
    tags: ["Cloud Storage", "High Availability", "Media"],
  },
  {
    name: "Works Management & Complaint Tracking",
    client: "KW&SC",
    description:
      "API-integrated PostgreSQL database for operational analytics, complaint tracking, and senior management reporting.",
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
