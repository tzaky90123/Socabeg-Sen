export enum Language {
  EN = 'EN',
  FR = 'FR'
}

export enum Page {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  CONSTRUCTION = 'CONSTRUCTION',
  REAL_ESTATE = 'REAL_ESTATE',
  MINES = 'MINES',
  CAREERS = 'CAREERS',
  CONTACT = 'CONTACT'
}

export interface HeroSlide {
  title: string;
  subtitle: string;
  cta: string;
  image: string; // Placeholder URL
}

export interface ContentSection {
  title: string;
  subtitle: string;
  body?: string;
  items?: string[];
  stats?: { label: string; value: string }[];
  values?: { title: string; desc: string }[];
  projects?: { title: string; desc: string; img: string }[];
  partners?: string[];
  testimonials?: { name: string; quote: string }[];
}

export interface PageContent {
  hero: HeroSlide[];
  about?: ContentSection;
  service?: ContentSection;
  program?: ContentSection;
  project?: ContentSection;
  partner?: ContentSection;
  statistik?: ContentSection;
  value?: ContentSection;
  testimoni?: ContentSection;
  contact?: ContentSection; // Although contact info is global, specific headers might change
}

export interface GlobalContent {
  [Language.EN]: {
    [key in Page]: PageContent;
  };
  [Language.FR]: {
    [key in Page]: PageContent;
  };
}