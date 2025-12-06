import { GlobalContent, Language, Page } from './types';

export const ASSETS = {
  logo: 'https://socabeg.com/logo.png',
  favicon: 'https://socabeg.com/favicon.png',
  placeholder: (w: number, h: number) => `https://picsum.photos/${w}/${h}`,
};

export const CONTACT_INFO = {
  address: 'Fann-Hock – Corniche face Cour Suprême, BP 1270, Dakar, Sénégal',
  phones: ['+221 33 889 35 35', '+221 33 889 30 99', '+221 33 867 26 75'],
  email: 'infos@socabeg.sn',
  hours: {
    week: 'Monday – Friday: 8h–18h',
    weekend: 'Saturday & Sunday: Closed'
  }
};

const EN_CONTENT = {
  [Page.HOME]: {
    hero: [
      { title: "Building a durable future for Senegal", subtitle: "We create sustainable infrastructures that benefit communities.", cta: "Discover our projects", image: "https://picsum.photos/1920/1080?random=1" },
      { title: "Innovation at the heart of construction", subtitle: "We deliver modern, reliable, and high-quality works.", cta: "Learn more", image: "https://picsum.photos/1920/1080?random=2" },
      { title: "A trusted partner in national development", subtitle: "Our mission is to support growth through infrastructure.", cta: "Explore our achievements", image: "https://picsum.photos/1920/1080?random=3" }
    ],
    about: {
      title: "About SOCABEG",
      subtitle: "Building Senegal’s future through excellence",
      body: "SOCABEG is one of Senegal’s leading companies in construction, mining services, and real-estate operations. Our work is guided by innovation, durability, and social impact."
    },
    service: {
      title: "Our Services",
      subtitle: "Comprehensive solutions tailored for development",
      items: ["Construction Engineering", "Public Works", "Mining Support Services", "Real Estate Development", "Infrastructure Management"]
    },
    program: {
      title: "Our Development Programs",
      subtitle: "Programs that drive long-term progress",
      body: "We implement strategic programs designed to enhance urban mobility, access to housing, and industrial efficiency across the nation."
    },
    project: {
      title: "Featured Projects",
      subtitle: "Recent achievements across Senegal",
      projects: [
        { title: "Dakar Highway Extension", desc: "Modernizing transport links.", img: "https://picsum.photos/600/400?random=1" },
        { title: "Diamniadio Industrial Park", desc: "Supporting economic growth.", img: "https://picsum.photos/600/400?random=2" },
        { title: "Rufisque Housing", desc: "Sustainable living spaces.", img: "https://picsum.photos/600/400?random=3" }
      ]
    },
    partner: {
      title: "Our Partners",
      subtitle: "Trusted collaborators",
      partners: ["Caterpillar", "Dangote Cement", "Société Générale", "TotalEnergies", "Eiffage"]
    },
    statistik: {
      title: "Key Figures",
      subtitle: "Numbers that reflect our performance",
      stats: [
        { label: "Years of Service", value: "35+" },
        { label: "Completed Projects", value: "150+" },
        { label: "Employees", value: "500+" },
        { label: "Mining Sites", value: "12" }
      ]
    },
    value: {
      title: "Our Values",
      subtitle: "The principles that guide our mission",
      values: [
        { title: "Integrity", desc: "We uphold the highest ethical standards." },
        { title: "Innovation", desc: "Constantly seeking better solutions." },
        { title: "Quality", desc: "Excellence in every detail." },
        { title: "Sustainability", desc: "Building for tomorrow." }
      ]
    },
    testimoni: {
      title: "Testimonials",
      subtitle: "What our partners say",
      testimonials: [
        { name: "Amadou Diallo", quote: "SOCABEG delivered our project ahead of schedule with unmatched quality." },
        { name: "Marie Sene", quote: "A reliable partner for complex industrial requirements." }
      ]
    }
  },
  [Page.ABOUT]: {
    hero: [
      { title: "Excellence in construction since our foundation", subtitle: "Rooted in history, focused on the future.", cta: "Our History", image: "https://picsum.photos/1920/1080?random=4" },
      { title: "A team dedicated to national development", subtitle: "Experts working for Senegal.", cta: "Meet the Team", image: "https://picsum.photos/1920/1080?random=5" },
      { title: "Innovation, quality, and integrity", subtitle: "The pillars of our identity.", cta: "Our Values", image: "https://picsum.photos/1920/1080?random=6" }
    ],
    about: {
      title: "Who We Are",
      subtitle: "A legacy of trust",
      body: "Founded with a vision to transform the Senegalese landscape, SOCABEG has grown into a multi-disciplinary giant. From small beginnings to managing national-scale projects, our journey is defined by resilience and commitment."
    },
    value: {
      title: "Core Values",
      subtitle: "What drives us",
      values: [
        { title: "Integrity", desc: "Honesty in all dealings." },
        { title: "Innovation", desc: "Adopting modern techniques." },
        { title: "Durability", desc: "Structures that last generations." },
        { title: "Responsibility", desc: "Accountability to our community." }
      ]
    },
    statistik: {
      title: "Our Milestones",
      subtitle: "A journey of success",
      stats: [
        { label: "Founded", value: "1988" },
        { label: "Major Awards", value: "15" },
        { label: "Regions Covered", value: "14" }
      ]
    },
    partner: {
      title: "Strategic Alliances",
      subtitle: "Growing together",
      partners: ["Ministry of Urbanism", "African Development Bank", "Local Municipalities"]
    }
  },
  [Page.CONSTRUCTION]: {
    hero: [
      { title: "Expertise in major infrastructure projects", subtitle: "Engineering the backbone of the economy.", cta: "View Projects", image: "https://picsum.photos/1920/1080?random=7" },
      { title: "Building for durability and safety", subtitle: "Standards that exceed expectations.", cta: "Safety Policy", image: "https://picsum.photos/1920/1080?random=8" },
      { title: "Engineering excellence that transforms cities", subtitle: "Urban planning and execution.", cta: "Our Approach", image: "https://picsum.photos/1920/1080?random=9" }
    ],
    service: {
      title: "Construction Services",
      subtitle: "End-to-end execution",
      items: ["Roads & Highways", "Bridges & Civil Works", "Commercial Buildings", "Industrial Plants"]
    },
    project: {
      title: "Key Constructions",
      subtitle: "Landmarks we've built",
      projects: [
        { title: "Regional Hospital", desc: "Healthcare infrastructure.", img: "https://picsum.photos/600/400?random=4" },
        { title: "University Annex", desc: "Educational facilities.", img: "https://picsum.photos/600/400?random=5" }
      ]
    },
    program: {
      title: "Infrastructure Programs",
      subtitle: "Connecting the nation",
      body: "Our infrastructure improvement programs focus on linking rural areas to urban centers through robust road networks."
    },
    value: {
      title: "Construction Standards",
      subtitle: "Quality assurance",
      values: [
        { title: "ISO Certified", desc: "International standard compliance." },
        { title: "Green Building", desc: "Eco-friendly materials." }
      ]
    }
  },
  [Page.REAL_ESTATE]: {
    hero: [
      { title: "Modern and sustainable real-estate solutions", subtitle: "Homes designed for today's lifestyle.", cta: "View Properties", image: "https://picsum.photos/1920/1080?random=10" },
      { title: "Creating residential spaces that improve daily life", subtitle: "Comfort and convenience combined.", cta: "Catalog", image: "https://picsum.photos/1920/1080?random=11" },
      { title: "Durable construction with quality materials", subtitle: "Investments that hold value.", cta: "Contact Sales", image: "https://picsum.photos/1920/1080?random=12" }
    ],
    about: {
      title: "Real Estate Division",
      subtitle: "More than just buildings",
      body: "SOCABEG Real Estate focuses on developing communities. We manage the entire lifecycle from land acquisition to property management."
    },
    service: {
      title: "Real Estate Services",
      subtitle: "For investors and families",
      items: ["Property Development", "Asset Management", "Rental Services", "Urban Planning"]
    },
    project: {
      title: "Available Residences",
      subtitle: "Find your new home",
      projects: [
        { title: "Les Mamelles Luxury", desc: "Sea view apartments.", img: "https://picsum.photos/600/400?random=6" },
        { title: "Almadies Business Center", desc: "Prime office space.", img: "https://picsum.photos/600/400?random=7" }
      ]
    },
    value: {
      title: "Living Experience",
      subtitle: "Why choose us",
      values: [
        { title: "Comfort", desc: "Ergonomic designs." },
        { title: "Community", desc: "Shared spaces and parks." }
      ]
    }
  },
  [Page.MINES]: {
    hero: [
      { title: "Reliable mining support services", subtitle: "Powering extraction with efficiency.", cta: "Our Fleet", image: "https://picsum.photos/1920/1080?random=13" },
      { title: "Safety and performance at every site", subtitle: "Zero harm culture.", cta: "Safety Stats", image: "https://picsum.photos/1920/1080?random=14" },
      { title: "Engineering solutions for demanding environments", subtitle: "Heavy machinery and logistics.", cta: "Logistics", image: "https://picsum.photos/1920/1080?random=15" }
    ],
    service: {
      title: "Mining Operations",
      subtitle: "Support where it matters",
      items: ["Site Preparation", "Heavy Equipment Rental", "Mineral Transport", "Waste Management"]
    },
    program: {
      title: "Logistics Program",
      subtitle: "Streamlining supply chains",
      body: "Our industrial and mining logistics program ensures that critical resources reach remote sites on time, every time."
    },
    project: {
      title: "Supported Sites",
      subtitle: "Where we operate",
      projects: [
        { title: "Gold Mine Kédougou", desc: "Excavation support.", img: "https://picsum.photos/600/400?random=8" },
        { title: "Phosphate Mines", desc: "Transport logistics.", img: "https://picsum.photos/600/400?random=9" }
      ]
    },
    value: {
      title: "Mining Principles",
      subtitle: "Operational excellence",
      values: [
        { title: "Safety", desc: "Rigorous protocols." },
        { title: "Reliability", desc: "Maximum uptime." },
        { title: "Sustainability", desc: "Land rehabilitation." }
      ]
    }
  },
  [Page.CAREERS]: {
    hero: [
      { title: "Build your career at SOCABEG", subtitle: "Opportunities for growth and impact.", cta: "Apply Now", image: "https://picsum.photos/1920/1080?random=16" },
      { title: "A place where talent grows", subtitle: "Training and mentorship.", cta: "Training Programs", image: "https://picsum.photos/1920/1080?random=17" },
      { title: "Join a team shaping Senegal’s future", subtitle: "Be part of the legacy.", cta: "View Openings", image: "https://picsum.photos/1920/1080?random=18" }
    ],
    about: {
      title: "Life at SOCABEG",
      subtitle: "Culture of excellence",
      body: "We foster an environment where innovation is encouraged and hard work is rewarded. Diversity and inclusion are at the core of our recruitment strategy."
    },
    program: {
      title: "Talent Development",
      subtitle: "Investing in people",
      body: "Our continuous training programs ensure our workforce remains at the cutting edge of construction and engineering technologies."
    },
    value: {
      title: "Why Join Us",
      subtitle: "Employee benefits",
      values: [
        { title: "Growth", desc: "Clear career paths." },
        { title: "Teamwork", desc: "Collaborative environment." }
      ]
    },
    testimoni: {
      title: "Employee Stories",
      subtitle: "Voices from inside",
      testimonials: [
        { name: "Fatou Diop", quote: "Started as an intern, now leading a project site. SOCABEG believes in potential." },
        { name: "Jean Gomis", quote: "The safety culture here is world-class." }
      ]
    }
  },
  [Page.CONTACT]: {
    hero: [
      { title: "We are here to assist you", subtitle: "Reach out to us today.", cta: "Get details", image: "https://picsum.photos/1920/1080?random=19" },
      { title: "Contact our team for any inquiry", subtitle: "Partnerships, careers, or general info.", cta: "Email Us", image: "https://picsum.photos/1920/1080?random=20" },
      { title: "Let’s build something together", subtitle: "Start the conversation.", cta: "Visit HQ", image: "https://picsum.photos/1920/1080?random=21" }
    ]
  }
};

// Simplified French Content (Mirrors structure, translated key phrases for demo purposes)
const FR_CONTENT = JSON.parse(JSON.stringify(EN_CONTENT)); // Deep copy for structure
// Overwrite specific fields for French demo (In a real app, full translation required)
FR_CONTENT[Page.HOME].hero[0].title = "Bâtir un avenir durable pour le Sénégal";
FR_CONTENT[Page.HOME].hero[0].subtitle = "Nous créons des infrastructures durables qui profitent aux communautés.";
FR_CONTENT[Page.HOME].hero[0].cta = "Découvrir nos projets";
FR_CONTENT[Page.HOME].about.title = "À propos de SOCABEG";
FR_CONTENT[Page.HOME].about.body = "SOCABEG est l'une des principales entreprises du Sénégal dans la construction, les services miniers et les opérations immobilières.";
FR_CONTENT[Page.HOME].service.title = "Nos Services";

export const CONTENT: GlobalContent = {
  [Language.EN]: EN_CONTENT,
  [Language.FR]: FR_CONTENT
};