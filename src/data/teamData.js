export const teamMembers = [
  {
    id: 1,
    name: 'Arun Vignesh',
    fullName: 'Mr. Arun Vignesh',
    role: 'Chief Marketing Officer',
    title: 'CMO',
    bio: 'We are delighted to introduce our new CMO, Mr. Arun Vignesh, to Spark Productions. We hope our journey together will be both illuminating and memorable.',
    specialization: ['Marketing Strategy', 'Brand Development', 'Digital Marketing'],
    experience: '5+ years',
    notable: ['Brand Strategy', 'Market Expansion', 'Digital Campaigns'],
    quote: 'Because of us, nothing bad should happen to anyone. Let them do what they want.',
    social: {
      instagram: '@spark_productionsoffl',
      email: 'sparkproductions09@gmail.com'
    },
    avatar: '/assets/team/arun-vignesh.jpg',
    featured: true,
    order: 1
  },
  {
    id: 2,
    name: 'Santhanam Samy',
    fullName: 'Mr. Sri Santhanam Samy',
    role: 'Chief Financial Officer',
    title: 'CFO',
    bio: 'We are delighted to introduce our new CFO, Mr. Sri Santhanam Samy, to Spark Productions. We hope that our journey together will be both bright and iconic.',
    specialization: ['Financial Planning', 'Budget Management', 'Investment Strategy'],
    experience: '6+ years',
    notable: ['Financial Strategy', 'Investment Planning', 'Resource Allocation'],
    quote: 'Veesura valaila ellam meen maturathu illa pa, kathunu irukanum, veesu',
    social: {
      instagram: '@spark_productionsoffl',
      email: 'sparkproductions09@gmail.com'
    },
    avatar: '/assets/team/santhanam-samy.jpg',
    featured: true,
    order: 2
  },
  {
    id: 3,
    name: 'Sivam',
    fullName: 'Mr. Sivam',
    role: 'Chief Operating Officer',
    title: 'COO',
    bio: 'We are thrilled to welcome Mr. Sivam as our new COO to Spark Productions. We eagerly anticipate embarking on a journey together that will be both daring and deeply meaningful.',
    specialization: ['Operations Management', 'Team Leadership', 'Process Optimization'],
    experience: '7+ years',
    notable: ['Operational Excellence', 'Team Building', 'Strategic Planning'],
    quote: 'I live my life a quarter mile at a time.',
    social: {
      instagram: '@spark_productionsoffl',
      email: 'sparkproductions09@gmail.com'
    },
    avatar: '/assets/team/sivam.jpg',
    featured: true,
    order: 3
  },
  {
    id: 4,
    name: 'Spark',
    fullName: 'Mr. Pon Karthik Raja',
    role: 'Chief Executive Officer',
    title: 'CEO',
    bio: 'Final one and the "ONE" Mr. Pon Karthik Raja, also known as Spark, as our CEO at Spark Productions. We eagerly anticipate embarking on a journey of success and hope.',
    specialization: ['Leadership', 'Vision & Strategy', 'Creative Direction'],
    experience: '8+ years',
    notable: ['Company Vision', 'Strategic Growth', 'Creative Leadership'],
    quote: 'I\'m not here to prove anyone how good I am.',
    social: {
      instagram: '@spark_productionsoffl',
      email: 'sparkproductions09@gmail.com'
    },
    avatar: '/assets/team/spark.jpg',
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
