export const faqs = [
  {
    id: 1,
    category: 'General',
    question: 'What is Spark Productions?',
    answer: 'Spark Productions is an independent film collective based in Chennai, India. We specialize in producing high-quality short films on our own labels and providing comprehensive filmmaking services to emerging directors. Founded in 2023, we\'ve produced 6 acclaimed short films and worked with over 50 clients.'
  },
  {
    id: 2,
    category: 'Services',
    question: 'What services do you offer?',
    answer: 'We offer four main services: 1) Complete Short Film Production (end-to-end), 2) Scriptwriting (from concept to shooting script), 3) Screenplay Development (polish and refinement), and 4) The Full Package (script to screen with marketing and distribution). Each service is customizable to your specific needs and budget.'
  },
  {
    id: 3,
    category: 'Services',
    question: 'How much does it cost to produce a short film?',
    answer: 'Our short film production packages start at ₹5,00,000 ($6,000 USD) for a complete production. This includes pre-production, shooting (3-5 days), post-production, and festival-ready deliverables. The final cost depends on factors like runtime, cast size, location complexity, and special requirements. We offer customized quotes based on your specific project.'
  },
  {
    id: 4,
    category: 'Process',
    question: 'How long does it take to produce a short film?',
    answer: 'A typical short film production takes 8-12 weeks from pre-production to final delivery. This breaks down as: Pre-production (2-3 weeks), Production/Shooting (3-5 days), Post-production (4-6 weeks), and Revisions (1-2 weeks). Rush projects can be accommodated with adjusted timelines and pricing.'
  },
  {
    id: 5,
    category: 'Submissions',
    question: 'How do I submit my film idea to Spark Productions?',
    answer: 'Visit our Directors page and fill out the pitch form with your name, email, film title, and logline. We review all submissions within 2 weeks. If your idea sparks our interest, we\'ll schedule a meeting to discuss the project in detail, potential collaboration models, and next steps.'
  },
  {
    id: 6,
    category: 'Submissions',
    question: 'What makes a good film pitch?',
    answer: 'A strong pitch includes: 1) A clear, compelling logline (1-2 sentences), 2) Unique premise or fresh perspective, 3) Well-defined protagonist and conflict, 4) Understanding of your target audience, and 5) Passion for the story. We value originality, social relevance, and emotional resonance. Don\'t worry about perfection — we can help develop raw ideas!'
  },
  {
    id: 7,
    category: 'Process',
    question: 'What is included in "The Full Package" service?',
    answer: 'The Full Package includes everything: script development, screenplay writing, complete production (crew, equipment, locations), post-production (editing, color, sound), marketing materials, festival strategy and submissions, YouTube premiere event, social media campaign, and distribution on our channels. You also get revenue sharing if the film monetizes.'
  },
  {
    id: 8,
    category: 'Collaboration',
    question: 'Do you work with first-time directors?',
    answer: 'Absolutely! We love working with emerging directors. Many of our successful films were directed by first-timers. We provide mentorship, guidance, and hands-on support throughout the process. Our team has decades of combined experience and we\'re passionate about nurturing new talent in independent Tamil cinema.'
  },
  {
    id: 9,
    category: 'Technical',
    question: 'What equipment do you use?',
    answer: 'We shoot with professional cinema cameras (RED, ARRI Alexa, Sony FX series), cinema lenses (Zeiss, Cooke, Sigma Cine), professional lighting packages, and multi-track sound recording. For post-production, we use DaVinci Resolve for color grading, Pro Tools for sound, and industry-standard editing software. All deliverables are in 4K resolution.'
  },
  {
    id: 10,
    category: 'Distribution',
    question: 'How do you help with film distribution?',
    answer: 'We offer comprehensive distribution support: festival submission strategy and applications, premiere event organization, YouTube channel distribution (125K+ subscribers), social media marketing across platforms, press kit and promotional materials, and connections with streaming platforms and distributors. Films released on our label benefit from our established audience.'
  },
  {
    id: 11,
    category: 'Legal',
    question: 'Who owns the rights to the film?',
    answer: 'Rights ownership depends on the collaboration model. For Full Package clients, we typically use a co-production agreement with shared rights. For commissioned work, you retain full rights. We\'re flexible and transparent about rights — everything is clearly defined in our contracts before production begins.'
  },
  {
    id: 12,
    category: 'Payment',
    question: 'What are the payment terms?',
    answer: 'We use a milestone-based payment structure: 30% advance upon project confirmation, 30% before production begins, 30% upon completion of shooting, and 10% on final delivery. For scriptwriting services, it\'s 50% advance and 50% on delivery. We accept bank transfers, UPI, and international wire transfers.'
  },
  {
    id: 13,
    category: 'Technical',
    question: 'Do you provide script doctoring services?',
    answer: 'Yes! Our screenplay development service includes script doctoring. Whether you have a complete draft that needs refinement or a rough script with structural issues, our experienced writers can help. We analyze your script, provide detailed notes, and work with you through revisions to strengthen story, character, pacing, and dialogue.'
  },
  {
    id: 14,
    category: 'Location',
    question: 'Do you shoot only in Chennai?',
    answer: 'While we\'re based in Chennai, we shoot anywhere in India. We\'ve filmed in Tamil Nadu, Kerala, Karnataka, and other states. International shoots can be discussed on a case-by-case basis. Location costs (travel, accommodation, permits) are included in project budgets. We also help with location scouting and securing filming permissions.'
  },
  {
    id: 15,
    category: 'Timeline',
    question: 'Can you work with tight deadlines?',
    answer: 'We can accommodate rush projects depending on our schedule and the project scope. Expedited timelines typically require: flexible shooting schedules, streamlined approval processes, premium pricing (20-30% additional), and availability of key crew members. Contact us early to discuss your deadline and we\'ll advise on feasibility.'
  }
];

export const faqCategories = ['General', 'Services', 'Process', 'Submissions', 'Collaboration', 'Technical', 'Distribution', 'Legal', 'Payment', 'Location', 'Timeline'];

export const getFaqsByCategory = (category) => {
  return faqs.filter(faq => faq.category === category);
};

export const searchFaqs = (query) => {
  const lowerQuery = query.toLowerCase();
  return faqs.filter(faq =>
    faq.question.toLowerCase().includes(lowerQuery) ||
    faq.answer.toLowerCase().includes(lowerQuery)
  );
};
