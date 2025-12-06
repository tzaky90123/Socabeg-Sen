import React from 'react';
import { motion } from 'framer-motion';
import { ContentSection } from '../types';
import { CheckCircle, Users, BarChart, HardHat, Briefcase } from 'lucide-react';
import { ASSETS } from '../constants';

interface SectionProps {
  data: ContentSection;
  dark?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

export const AboutSection: React.FC<SectionProps> = ({ data, dark }) => (
  <section className={`min-h-screen flex flex-col justify-center items-center py-20 px-6 ${dark ? 'bg-socabeg-navy text-white' : 'bg-white text-socabeg-navy'}`}>
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-5xl text-center"
    >
      <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-heading font-bold mb-4">{data.title}</motion.h2>
      <motion.h3 variants={itemVariants} className="text-xl md:text-2xl text-socabeg-gold mb-8 italic">{data.subtitle}</motion.h3>
      <motion.div variants={itemVariants} className="w-24 h-1 bg-socabeg-gold mx-auto mb-10"></motion.div>
      <motion.p variants={itemVariants} className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">{data.body}</motion.p>
    </motion.div>
  </section>
);

export const ServiceSection: React.FC<SectionProps> = ({ data }) => (
  <section className="min-h-screen flex flex-col justify-center items-center py-20 px-6 bg-gray-50">
     <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-6xl w-full"
    >
      <div className="text-center mb-16">
        <motion.h2 variants={itemVariants} className="text-4xl font-heading font-bold text-socabeg-navy mb-2">{data.title}</motion.h2>
        <motion.p variants={itemVariants} className="text-socabeg-gold text-xl">{data.subtitle}</motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.items?.map((item, idx) => (
          <motion.div key={idx} variants={itemVariants} className="bg-white p-8 shadow-lg border-l-4 border-socabeg-gold hover:shadow-2xl transition-shadow group">
            <HardHat className="w-10 h-10 text-socabeg-navy mb-4 group-hover:text-socabeg-gold transition-colors" />
            <h4 className="text-xl font-bold text-socabeg-navy">{item}</h4>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export const ProjectSection: React.FC<SectionProps> = ({ data }) => (
  <section className="min-h-screen flex flex-col justify-center items-center py-20 px-6 bg-socabeg-navy text-white">
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-7xl w-full"
    >
      <div className="text-center mb-16">
        <motion.h2 variants={itemVariants} className="text-4xl font-heading font-bold mb-2">{data.title}</motion.h2>
        <motion.p variants={itemVariants} className="text-socabeg-gold text-xl">{data.subtitle}</motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.projects?.map((proj, idx) => (
          <motion.div key={idx} variants={itemVariants} className="relative group overflow-hidden h-80">
            <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
              <h4 className="text-xl font-bold text-socabeg-gold">{proj.title}</h4>
              <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity delay-100">{proj.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export const StatSection: React.FC<SectionProps> = ({ data }) => (
  <section className="min-h-[60vh] flex flex-col justify-center items-center py-20 px-6 bg-white bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      <div className="col-span-full text-center mb-8">
        <motion.h2 variants={itemVariants} className="text-3xl font-heading font-bold text-socabeg-navy">{data.title}</motion.h2>
      </div>
      {data.stats?.map((stat, idx) => (
        <motion.div key={idx} variants={itemVariants} className="text-center p-6 border border-gray-100 shadow-sm bg-white">
          <BarChart className="w-8 h-8 text-socabeg-gold mx-auto mb-4" />
          <div className="text-4xl font-bold text-socabeg-navy mb-2">{stat.value}</div>
          <div className="text-gray-500 uppercase tracking-wide text-xs">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export const PartnerSection: React.FC<SectionProps> = ({ data }) => (
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-heading font-bold text-socabeg-navy mb-2">{data.title}</h2>
      <p className="text-gray-500 mb-12">{data.subtitle}</p>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70">
        {data.partners?.map((partner, idx) => (
          <span key={idx} className="text-xl md:text-2xl font-bold text-gray-400 font-heading uppercase">{partner}</span>
        ))}
      </div>
    </div>
  </section>
);

export const ValueSection: React.FC<SectionProps> = ({ data }) => (
  <section className="min-h-screen flex flex-col justify-center items-center py-20 px-6 bg-socabeg-navy text-white">
    <div className="max-w-6xl w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-heading font-bold mb-2">{data.title}</h2>
        <p className="text-socabeg-gold text-xl">{data.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {data.values?.map((val, idx) => (
          <div key={idx} className="flex gap-4">
            <CheckCircle className="w-8 h-8 text-socabeg-gold shrink-0" />
            <div>
              <h4 className="text-2xl font-bold mb-2">{val.title}</h4>
              <p className="text-gray-300">{val.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const TestimoniSection: React.FC<SectionProps> = ({ data }) => (
  <section className="min-h-[70vh] flex flex-col justify-center items-center py-20 px-6 bg-gray-100">
    <div className="max-w-4xl text-center">
      <h2 className="text-4xl font-heading font-bold text-socabeg-navy mb-12">{data.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.testimonials?.map((test, idx) => (
          <div key={idx} className="bg-white p-8 shadow-md rounded-none relative">
            <div className="text-4xl text-socabeg-gold absolute top-4 left-4">“</div>
            <p className="text-gray-600 italic mb-6 pt-6 z-10 relative">{test.quote}</p>
            <h5 className="font-bold text-socabeg-navy">{test.name}</h5>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ContactFooter: React.FC<{ contactInfo: any, title?: string }> = ({ contactInfo, title }) => (
  <section className="bg-socabeg-navy text-white py-20 px-6 border-t border-white/10">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <img src={ASSETS.logo} alt="SOCABEG" className="h-12 bg-white p-2 mb-6" />
        <p className="text-gray-400 text-sm">
          Building the future of Senegal with integrity and excellence.
        </p>
      </div>
      
      <div>
        <h4 className="text-socabeg-gold font-bold uppercase tracking-wider mb-4">Visit Us</h4>
        <p className="text-gray-300 text-sm leading-relaxed">{contactInfo.address}</p>
      </div>

      <div>
        <h4 className="text-socabeg-gold font-bold uppercase tracking-wider mb-4">Contact</h4>
        {contactInfo.phones.map((phone: string, i: number) => (
          <p key={i} className="text-gray-300 text-sm mb-1">{phone}</p>
        ))}
        <p className="text-gray-300 text-sm mt-2">{contactInfo.email}</p>
      </div>

      <div>
        <h4 className="text-socabeg-gold font-bold uppercase tracking-wider mb-4">Hours</h4>
        <p className="text-gray-300 text-sm mb-1">{contactInfo.hours.week}</p>
        <p className="text-gray-300 text-sm">{contactInfo.hours.weekend}</p>
      </div>
    </div>
    <div className="text-center mt-16 text-gray-600 text-xs">
      &copy; {new Date().getFullYear()} SOCABEG. All Rights Reserved.
    </div>
  </section>
);