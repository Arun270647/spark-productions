export const teamMembers = [
  {
    id: 1,
    name: 'Arun Vignesh',
    fullName: 'Mr. Arun Vignesh',
    role: 'Chief Marketing Officer',
    title: 'CMO',
    bio: 'Because of us, nothing bad should happen to anyone. Let them do what they want.',
    specialization: ['Marketing Strategy', 'Brand Development', 'Digital Marketing'],
    experience: '5+ years',
    notable: ['Brand Strategy', 'Market Expansion', 'Digital Campaigns'],
    quote: 'Because of us, nothing bad should happen to anyone. Let them do what they want.',
    social: {
      instagram: 'https://www.instagram.com/_arun._.06/?hl=en',
      instagramHandle: '@_arun._.06',
      email: 'shankar72ind@gmail.com',
      phone: '+91 8438996701'
    },
    avatar: '/assets/team_pics/arun.jpeg',
    featured: true,
    order: 1
  },
  {
    id: 2,
    name: 'Santhanam Samy',
    fullName: 'Mr. Sri Santhanam Samy',
    role: 'Chief Financial Officer',
    title: 'CFO',
    bio: 'Veesura valaila ellam meen maturathu illa pa, kathunu irukanum, veesu',
    specialization: ['Financial Planning', 'Budget Management', 'Investment Strategy'],
    experience: '6+ years',
    notable: ['Financial Strategy', 'Investment Planning', 'Resource Allocation'],
    quote: 'Veesura valaila ellam meen maturathu illa pa, kathunu irukanum, veesu',
    social: {
      instagram: 'https://www.instagram.com/im.santhanam?igsh=MWg1NHhwYWd3OGUxcA%3D%3D&utm_source=qr',
      instagramHandle: '@im.santhanam',
      email: 'mrssrisanthanam@gmail.com',
      phone: '+91 6374920861'
    },
    avatar: '/assets/team_pics/santa.PNG',
    featured: true,
    order: 2
  },
  {
    id: 3,
    name: 'Sivam',
    fullName: 'Mr. Sivam',
    role: 'Chief Operating Officer',
    title: 'COO',
    bio: 'I live my life a quarter mile at a time.',
    specialization: ['Operations Management', 'Team Leadership', 'Process Optimization'],
    experience: '7+ years',
    notable: ['Operational Excellence', 'Team Building', 'Strategic Planning'],
    quote: 'I live my life a quarter mile at a time.',
    social: {
      instagram: 'https://www.instagram.com/itz_s.ivam?igsh=dzV4d3p5YjMyeDdx',
      instagramHandle: '@itz_s.ivam',
      email: 'sivamjadhav77@gmail.com',
      phone: '+91 96296 86411'
    },
    avatar: '/assets/team_pics/sivam.jpeg',
    featured: true,
    order: 3
  },
  {
    id: 4,
    name: 'Spark',
    fullName: 'Mr. Pon Karthik Raja',
    role: 'Chief Executive Officer',
    title: 'CEO',
    bio: 'I\'m not here to prove anyone how good I am.',
    specialization: ['Leadership', 'Vision & Strategy', 'Creative Direction'],
    experience: '8+ years',
    notable: ['Company Vision', 'Strategic Growth', 'Creative Leadership'],
    quote: 'I\'m not here to prove anyone how good I am.',
    social: {
      instagram: 'https://www.instagram.com/sp4rk.og?igsh=MW1ubDQyeXpsbXNkOA==',
      instagramHandle: '@sp4rk.og',
      email: 'spkmsd7777@gmail.com',
      phone: '+91 70105 71009'
    },
    avatar: '/assets/team_pics/spark.jpeg',
    featured: true,
    order: 4
  }
];

export const advisors = [
  {
    name: 'Mani Ratnam',
    role: 'Creative Advisor',
    bio: 'Legendary filmmaker and mentor to the Spark Productions team.'
  },
  {
    name: 'Sudha Kongara',
    role: 'Script Consultant',
    bio: 'Acclaimed director providing script guidance and story feedback.'
  },
  {
    name: 'Vetrimaaran',
    role: 'Creative Consultant',
    bio: 'National Award-winning director advising on social narratives.'
  }
];

export const getFeaturedTeam = () => {
  return teamMembers.filter(member => member.featured);
};

export const getTeamByRole = (role) => {
  return teamMembers.filter(member => member.role.toLowerCase().includes(role.toLowerCase()));
};
