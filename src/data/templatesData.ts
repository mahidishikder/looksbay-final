export interface SquarespaceTemplate {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  category:
    | "Service Business"
    | "Coaching & Consulting"
    | "Creative & Design"
    | "Boutique & Shop"
    | "Health & Wellness"
    | "Architecture & Real Estate";
  price: number;
  salePrice?: number;
  featured?: boolean;
  bestseller?: boolean;
  image: string;
  galleryImages: string[];
  demoUrl: string;
  description: string;
  idealFor: string[];
  pagesIncluded: string[];
  features: string[];
  colors: string[];
}

export const templateCategories = [
  "All",
  "Service Business",
  "Coaching & Consulting",
  "Creative & Design",
  "Boutique & Shop",
  "Health & Wellness",
  "Architecture & Real Estate",
] as const;

export const squarespaceTemplates: SquarespaceTemplate[] = [
  {
    id: "template-1",
    name: "Lumina",
    slug: "lumina",
    tagline: "Editorial & Conversion-Engineered for High-Ticket Service Providers & Agencies",
    category: "Service Business",
    price: 189,
    salePrice: 144,
    featured: true,
    bestseller: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    ],
    demoUrl: "https://lumina-demo.squarespace.com",
    description:
      "Lumina is an elevated, editorial Squarespace 7.1 template built for boutique creative studios, marketing consultancies, and elite service businesses that want to command premium rates.",
    idealFor: [
      "Creative Agencies & Studios",
      "Marketing & Brand Consultants",
      "Interior Designers & Architects",
      "High-Ticket B2B Service Providers",
    ],
    pagesIncluded: [
      "Home",
      "About The Studio",
      "Services & Offerings",
      "Individual Case Study",
      "Client Portfolio / Showcase",
      "Blog / Insights Hub",
      "Strategic Contact & Inquiry Form",
      "Custom 404 Page",
    ],
    features: [
      "Squarespace 7.1 Fluid Engine Drag-and-Drop",
      "Conversion-Optimized Sales Layouts",
      "Custom CSS Accent Flourishes Included",
      "Interactive FAQ Accordion",
      "Mobile-First Responsive Typography",
      "Video Walkthrough & Step-by-Step Launch Guide",
      "6-Month Extended Squarespace Trial",
      "20% Off Your First Year of Squarespace Hosting",
    ],
    colors: ["#1E1B2E", "#F8F5F1", "#9D5CFF", "#D4AF37"],
  },
  {
    id: "template-2",
    name: "Atelier",
    slug: "atelier",
    tagline: "Minimalist Warm Luxury for Architects, Interior Designers & Creatives",
    category: "Architecture & Real Estate",
    price: 199,
    salePrice: 154,
    featured: true,
    bestseller: true,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    ],
    demoUrl: "https://atelier-demo.squarespace.com",
    description:
      "Crafted with architectural restraint, earth-tone minimalism, and generous white space. Atelier lets your visual portfolio speak for itself while driving qualified consultation bookings.",
    idealFor: [
      "Architects & Urban Planners",
      "Luxury Real Estate Developments",
      "Interior Decorators & Stylists",
      "High-End Visual Artists",
    ],
    pagesIncluded: [
      "Home (Editorial Magazine Style)",
      "Project Archive Grid",
      "Featured Project Deep-Dive",
      "Philosophy & Team Profile",
      "Press & Recognition",
      "Client Intake & Project Inquiry",
    ],
    features: [
      "Fluid Engine 7.1 Grid Layouts",
      "Full-Screen High-Resolution Imagery",
      "Curated Luxury Typography Pairings",
      "Integrated Inquiry Form with Budget Selectors",
      "Fast 95+ PageSpeed Optimization",
      "Includes Video Customization Guide",
    ],
    colors: ["#262320", "#F4F1EA", "#A38F78", "#D9CEBC"],
  },
  {
    id: "template-3",
    name: "Solstice",
    slug: "solstice",
    tagline: "High-Converting Authority Template for Business Coaches & Speakers",
    category: "Coaching & Consulting",
    price: 189,
    salePrice: 144,
    featured: true,
    bestseller: false,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    ],
    demoUrl: "https://solstice-demo.squarespace.com",
    description:
      "Solstice combines modern warmth with psychological sales triggers. Designed specifically for executive coaches, keynotes, and thought leaders ready to sell out 1:1 client rosters and group masterminds.",
    idealFor: [
      "Executive & Leadership Coaches",
      "Keynote Speakers & Authors",
      "Financial & Business Advisors",
      "Podcast Hosts & Media Personalities",
    ],
    pagesIncluded: [
      "High-Impact Home Page",
      "About / My Story & Press",
      "Work With Me (1:1 Coaching)",
      "Speaking & Workshop Booking",
      "Podcast & Article Hub",
      "Application & Consultation Funnel",
    ],
    features: [
      "Acuity Scheduling Integration Ready",
      "Podcast Audio Player Embedded Layouts",
      "Testimonial Social Proof Carousels",
      "Lead Magnet Opt-In Sections",
      "Squarespace 7.1 Fluid Engine",
    ],
    colors: ["#1B262C", "#FAF7F2", "#B85D36", "#E9D5CA"],
  },
  {
    id: "template-4",
    name: "Forma",
    slug: "forma",
    tagline: "Bold, Contemporary Portfolio for Photographers, Designers & Makers",
    category: "Creative & Design",
    price: 179,
    salePrice: 134,
    featured: false,
    bestseller: true,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
    ],
    demoUrl: "https://forma-demo.squarespace.com",
    description:
      "A punchy, tactile portfolio template featuring dynamic grid rhythm, bold typography, and cinematic galleries designed to grab instant attention and secure creative client commissions.",
    idealFor: [
      "Commercial & Fashion Photographers",
      "Brand & Graphic Designers",
      "Motion Designers & Art Directors",
      "Creative Collectives",
    ],
    pagesIncluded: [
      "Interactive Home Portfolio",
      "Selected Works Grid & Filter",
      "Single Project Case Study",
      "Services & Rate Card",
      "About & Client List",
      "Contact",
    ],
    features: [
      "Full Bleed Image Support",
      "Hover Image Reveals",
      "Custom Typography System",
      "Lightweight Code & Fast Loads",
      "Squarespace 7.1 Fluid Engine",
    ],
    colors: ["#0F0F0F", "#FFFFFF", "#CCFF00", "#7C3AED"],
  },
  {
    id: "template-5",
    name: "Kanso",
    slug: "kanso",
    tagline: "Serene & Holistic Aesthetic for Wellness Practitioners, Spas & Therapists",
    category: "Health & Wellness",
    price: 189,
    salePrice: 144,
    featured: false,
    bestseller: false,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    ],
    demoUrl: "https://kanso-demo.squarespace.com",
    description:
      "Infused with calm earthy textures and grounding typography, Kanso provides an instantly relaxing experience that establishes deep therapeutic trust for wellness clinics, yoga studios, and holistic doctors.",
    idealFor: [
      "Therapists & Psychologists",
      "Yoga & Pilates Studios",
      "Holistic Health Clinics & Medspas",
      "Nutritionists & Wellness Retreats",
    ],
    pagesIncluded: [
      "Homepage with Service Pathway",
      "Treatment Menu & Packages",
      "Practitioner Bio & Credentials",
      "Location & Studio Facilities",
      "Patient FAQ & Resources",
      "Acuity Online Booking Page",
    ],
    features: [
      "Acuity Scheduling Ready",
      "Calm Warm Color Palette",
      "Service Comparison Grids",
      "Intake Form Link Integration",
      "Squarespace 7.1 Fluid Engine",
    ],
    colors: ["#2D3748", "#F7FAFC", "#718096", "#E2E8F0"],
  },
  {
    id: "template-6",
    name: "Veloce",
    slug: "veloce",
    tagline: "Chic Boutique E-Commerce for Artisans, Fragrance, Fashion & Homeware",
    category: "Boutique & Shop",
    price: 219,
    salePrice: 174,
    featured: true,
    bestseller: false,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    ],
    demoUrl: "https://veloce-demo.squarespace.com",
    description:
      "Transform your product line into an addictive digital flagship. Veloce is engineered with high-ticket aesthetics, seamless cart drawers, and conversion-optimized product detail pages.",
    idealFor: [
      "Independent Fashion & Jewelry Brands",
      "Artisan Ceramics & Homewares",
      "Luxury Fragrance & Skincare",
      "Curated Lifestyle Concept Stores",
    ],
    pagesIncluded: [
      "Editorial Brand Homepage",
      "Product Catalog with Filter",
      "High-Converting Product Detail Page",
      "Brand Story & Craftsmanship",
      "Stockists & Press",
      "Shipping, Returns & FAQ",
    ],
    features: [
      "Squarespace Commerce 7.1 Engine",
      "Custom Slide-out Cart Compatible",
      "Lookbook & Editorial Moodboard Sections",
      "Customer Reviews Block Integration",
      "Mobile Checkout Optimization",
    ],
    colors: ["#1A1A1A", "#FAF9F6", "#C5A880", "#E5D9C5"],
  },
  {
    id: "template-7",
    name: "Maven",
    slug: "maven",
    tagline: "Smart, Crisp & Authoritative for Financial, Legal & Management Firms",
    category: "Service Business",
    price: 199,
    salePrice: 154,
    featured: false,
    bestseller: false,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    ],
    demoUrl: "https://maven-demo.squarespace.com",
    description:
      "Maven projects ironclad competence and institutional polish. Designed for advisory practices, legal counsels, and wealth managers who need an authoritative website that inspires instant client confidence.",
    idealFor: [
      "Private Equity & Family Offices",
      "Legal Counsels & Law Practices",
      "Management & Strategy Consultancies",
      "Accounting & Tax Advisory Firms",
    ],
    pagesIncluded: [
      "Corporate Overview Homepage",
      "Practice Areas & Solutions",
      "Partner & Leadership Profiles",
      "Client Case Results",
      "Insights & Thought Leadership",
      "Confidential Consultation Form",
    ],
    features: [
      "Secure Intake Form Layouts",
      "Interactive Practice Area Grid",
      "Leadership Bio Modal Ready",
      "Enterprise Typography Hierarchy",
      "Fluid Engine 7.1",
    ],
    colors: ["#0C1E36", "#F6F8FB", "#1B6CA8", "#E1E8F0"],
  },
  {
    id: "template-8",
    name: "Opus",
    slug: "opus",
    tagline: "Bold Editorial Showcase for Wedding Venues, Event Planners & Hospitality",
    category: "Service Business",
    price: 189,
    salePrice: 144,
    featured: false,
    bestseller: false,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    ],
    demoUrl: "https://opus-demo.squarespace.com",
    description:
      "Romance meets high-performance inquiry generation. Opus is tailored for luxury estate venues, celebration curators, and high-end event producers seeking to fill their calendar with dream bookings.",
    idealFor: [
      "Luxury Wedding & Event Venues",
      "Destination Event Planners",
      "Floral & Experience Designers",
      "Boutique Hospitality & Retreats",
    ],
    pagesIncluded: [
      "Visual Storytelling Homepage",
      "Venue Spaces & Floorplans",
      "Package Menus & Inclusions",
      "Real Celebrations Gallery",
      "Client Praise & Love Notes",
      "Date Availability Inquiry Form",
    ],
    features: [
      "Interactive Gallery Lightboxes",
      "Date Picker Form Integration",
      "Downloadable Brochure Trigger Layout",
      "Fluid Engine 7.1",
    ],
    colors: ["#231F20", "#FAF6F0", "#CBB279", "#EFE8DC"],
  },
];

export const templateFaqs = [
  {
    question: "How do I receive the template after purchasing?",
    answer:
      "Within 24 hours (usually within 2-4 hours) of your purchase, you will receive an official Squarespace invitation email granting you full ownership access to your brand-new website with the template fully pre-installed in your Squarespace account. All pages, styles, fonts, and custom layout CSS are ready for you!",
  },
  {
    question: "Do I need coding knowledge to customize the template?",
    answer:
      "Not at all! All our templates are built natively on Squarespace 7.1 Fluid Engine — the premier visual drag-and-drop builder. You can swap text, upload your images, change colors, and reorder sections with complete ease. We also provide a comprehensive video walkthrough guide for every template.",
  },
  {
    question: "What perks do I get through Looksbay's Squarespace Circle Partner status?",
    answer:
      "Because Looksbay is an authorized Squarespace Circle partner, you receive an extended 6-month free trial (instead of standard 14 days) to build and refine your website in peace, plus a 20% discount on your first year of any annual Squarespace hosting plan!",
  },
  {
    question: "What if I already have an existing Squarespace website?",
    answer:
      "Squarespace templates are delivered as brand-new trial websites. If you have an existing website and want our template styling applied to your current content, we recommend our 7-Day Template Customization Package — our team will migrate and reformat all your existing content seamlessly.",
  },
  {
    question: "Can Looksbay customize the template for me?",
    answer:
      "Yes! Our 'Template Customization Package' launches your website in just 7 business days. We take your chosen template, insert all your copy, imagery, brand colors, configure your forms, connect your domain, and hand over a finished, high-converting website ready for launch.",
  },
];
