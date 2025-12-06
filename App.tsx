import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, Page, GlobalContent } from './types';
import { CONTENT, ASSETS, CONTACT_INFO } from './constants';
import Hero from './components/Hero';
import { AboutSection, ServiceSection, ProjectSection, StatSection, ValueSection, TestimoniSection, PartnerSection, ContactFooter } from './components/SectionTemplates';

// --- Global Header Component (Internal to avoid passing too many props) ---
const Header: React.FC<{ 
  currentPage: Page, 
  onNavigate: (p: Page) => void, 
  lang: Language, 
  toggleLang: () => void 
}> = ({ currentPage, onNavigate, lang, toggleLang }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { page: Page.HOME, label: 'Home' },
    { page: Page.ABOUT, label: 'About' },
    { page: Page.CONSTRUCTION, label: 'Construction' },
    { page: Page.REAL_ESTATE, label: 'Real Estate' },
    { page: Page.MINES, label: 'Mines' },
    { page: Page.CAREERS, label: 'Careers' },
    { page: Page.CONTACT, label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => onNavigate(Page.HOME)}>
           {/* In production this would be the actual logo URL. Using a colored block/text for now if image fails, but using specific logo URL */}
           <img src={ASSETS.logo} alt="SOCABEG" className="h-10 md:h-12" /> 
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`flex items-center space-x-2 text-xs font-bold uppercase tracking-widest transition-colors hover:text-socabeg-gold ${currentPage === item.page ? 'text-socabeg-gold' : 'text-socabeg-navy'}`}
            >
              <img src={ASSETS.favicon} alt="" className="w-4 h-4 opacity-80" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Language Switch */}
        <button 
          onClick={toggleLang}
          className="ml-4 border border-socabeg-navy px-3 py-1 text-xs font-bold text-socabeg-navy hover:bg-socabeg-navy hover:text-white transition-colors"
        >
          {lang === Language.EN ? 'FR' : 'EN'}
        </button>
      </div>
    </header>
  );
};

// --- Page Renderer Factory ---
const PageRenderer: React.FC<{ page: Page, content: GlobalContent[Language][Page] }> = ({ page, content }) => {
  // Determine which sections to render based on the page type
  // Hero is always rendered outside this by the main layout wrapper
  // We only render the BODY content here
  
  return (
    <div className="w-full">
      {/* Dynamic Content Sections */}
      {content.about && <AboutSection data={content.about} dark={page === Page.HOME} />}
      {content.service && <ServiceSection data={content.service} />}
      {content.program && <AboutSection data={{...content.program, title: content.program.title}} dark={false} />} 
      {/* Reusing About template for Program for consistency, unless specified otherwise */}
      
      {content.project && <ProjectSection data={content.project} />}
      {content.partner && <PartnerSection data={content.partner} />}
      {content.statistik && <StatSection data={content.statistik} />}
      {content.value && <ValueSection data={content.value} />}
      {content.testimoni && <TestimoniSection data={content.testimoni} />}
      
      {/* Contact Section / Footer is always at bottom */}
      <ContactFooter contactInfo={CONTACT_INFO} title={content.contact?.title} />
    </div>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(Language.EN);
  const [page, setPage] = useState<Page>(Page.HOME);
  const [loading, setLoading] = useState(true);

  // Simulate initial load
  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  const handlePageChange = (newPage: Page) => {
    if (newPage !== page) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setPage(newPage);
    }
  };

  const currentContent = CONTENT[lang][page];

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center bg-socabeg-navy">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-socabeg-gold"></div>
      </div>
    );
  }

  return (
    <div className="font-sans text-socabeg-navy">
      <Header 
        currentPage={page} 
        onNavigate={handlePageChange} 
        lang={lang} 
        toggleLang={() => setLang(l => l === Language.EN ? Language.FR : Language.EN)} 
      />

      <main className="pt-0"> {/* Header is fixed, but Hero is 100vh, so no padding needed at top */}
        
        {/* Hero Section stays at top of every page, but content changes */}
        <Hero 
          slides={currentContent.hero} 
          currentPage={page} 
          onPageChange={handlePageChange} 
        />

        {/* Smooth Page Transition Wrapper */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page + lang}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <PageRenderer page={page} content={currentContent} />
          </motion.div>
        </AnimatePresence>

      </main>
    </div>
  );
};

export default App;