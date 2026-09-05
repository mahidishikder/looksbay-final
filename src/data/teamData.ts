export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: "Leadership & Architecture" | "CMS & Full-Stack" | "SEO & Analytics" | "Design & Motion" | "QA & Project Delivery";
  experience: string;
  specialty: string;
  image: string;
}

export const agencyTeam: TeamMember[] = [
  // Leadership & Architecture
  {
    id: "1",
    name: "Aria Sterling",
    role: "Partner & Principal Technical Architect",
    department: "Leadership & Architecture",
    experience: "7+ Years",
    specialty: "Full-Stack CMS Engineering, Headless Architectures & Technical SEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "2",
    name: "Mahfuz Hasan",
    role: "Co-Founder & VP of Engineering",
    department: "Leadership & Architecture",
    experience: "8+ Years",
    specialty: "WordPress Core, Custom Plugins & Shopify Liquid",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "3",
    name: "Tanvir Ahmed",
    role: "Head of SEO & Growth",
    department: "Leadership & Architecture",
    experience: "7+ Years",
    specialty: "Technical SEO, Core Web Vitals & Search Engine Algorithms",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "4",
    name: "Nusrat Jahan",
    role: "Lead Creative Director",
    department: "Leadership & Architecture",
    experience: "6+ Years",
    specialty: "Apple-Style Glassmorphism, Design Systems & Motion",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
  },

  // CMS & Full-Stack Engineers
  {
    id: "5",
    name: "Shakil Hossain",
    role: "Senior Shopify Engineer",
    department: "CMS & Full-Stack",
    experience: "5+ Years",
    specialty: "Shopify Plus, Checkout Extensions & Custom Apps",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "6",
    name: "Sabbir Chowdhury",
    role: "Webflow & Framer Master",
    department: "CMS & Full-Stack",
    experience: "4+ Years",
    specialty: "Finsweet Client-First, GSAP Animations & Framer Motion",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "7",
    name: "Kamrul Islam",
    role: "Senior WordPress Developer",
    department: "CMS & Full-Stack",
    experience: "6+ Years",
    specialty: "WooCommerce, Custom Gutenberg Blocks & REST API",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "8",
    name: "Rifat Mahmud",
    role: "GHL & Kajabi Funnel Engineer",
    department: "CMS & Full-Stack",
    experience: "4+ Years",
    specialty: "GoHighLevel Automations, Kajabi Memberships & CSS Injects",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80"
  },

  // SEO & Analytics Specialists
  {
    id: "9",
    name: "Farhan Kabir",
    role: "Senior Technical SEO Specialist",
    department: "SEO & Analytics",
    experience: "5+ Years",
    specialty: "Schema JSON-LD, Crawl Budget & Site Speed Architecture",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "10",
    name: "Ayesha Siddiqua",
    role: "On-Page & Semantic SEO Lead",
    department: "SEO & Analytics",
    experience: "4+ Years",
    specialty: "Keyword Clustering, Intent Optimization & RankMath/Yoast",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "11",
    name: "Nahid Hasan",
    role: "Link Building & Digital PR",
    department: "SEO & Analytics",
    experience: "3+ Years",
    specialty: "High-DR Outreach, Editorial Mentions & Brand Authority",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "12",
    name: "Mehedi Hasan",
    role: "Data & Analytics Engineer",
    department: "SEO & Analytics",
    experience: "4+ Years",
    specialty: "GA4 Server-side Tagging, Looker Studio & Conversion Tracking",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=500&auto=format&fit=crop&q=80"
  },

  // Design & Motion Artists
  {
    id: "13",
    name: "Priya Das",
    role: "Senior UI/UX Product Designer",
    department: "Design & Motion",
    experience: "5+ Years",
    specialty: "Figma Component Systems, Wireframing & Micro-interactions",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "14",
    name: "Zubair Al-Mamun",
    role: "3D & Motion Graphics Specialist",
    department: "Design & Motion",
    experience: "4+ Years",
    specialty: "Spline 3D, After Effects, Lottie & WebGL Visuals",
    image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "15",
    name: "Anika Tabassum",
    role: "Showit & Squarespace Visual Stylist",
    department: "Design & Motion",
    experience: "3+ Years",
    specialty: "Luxury Editorial Layouts, Brand Identity & Color Schemes",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "16",
    name: "Muntahir Hossain",
    role: "Brand Identity & Graphic Designer",
    department: "Design & Motion",
    experience: "4+ Years",
    specialty: "Vector Graphics, Custom Icons & Typography Systems",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=80"
  },

  // QA & Project Delivery
  {
    id: "17",
    name: "Tahmina Akter",
    role: "Senior Project Delivery Manager",
    department: "QA & Project Delivery",
    experience: "5+ Years",
    specialty: "Agile Sprints, Client Communication & Milestone Delivery",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "18",
    name: "Kazi Rayhan",
    role: "Technical QA & Speed Auditor",
    department: "QA & Project Delivery",
    experience: "4+ Years",
    specialty: "Cross-Browser Testing, Lighthouse 100 & Responsive QA",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "19",
    name: "Sumaiya Binte",
    role: "CMS Migration Specialist",
    department: "QA & Project Delivery",
    experience: "3+ Years",
    specialty: "301 Redirects, Database Transfer & Zero-Downtime Swaps",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "20",
    name: "Shahadat Hossain",
    role: "Client Success & Maintenance Lead",
    department: "QA & Project Delivery",
    experience: "4+ Years",
    specialty: "24/7 Security Monitoring, Backups & Post-Launch Support",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=80"
  }
];
