export const teamMembers = [
  {
    id: 1,
    name: 'Spark',
    role: 'Founder & Director',
    title: 'Creative Director',
    bio: 'Visionary filmmaker with a passion for stories that challenge conventions. Founded Spark Productions in 2023 with a mission to amplify independent voices in Tamil cinema.',
    specialization: ['Direction', 'Story Development', 'Creative Strategy'],
    experience: '8+ years',
    notable: ['ATMAN', "WRITER'S TIMES", 'SANGILI'],
    quote: 'Every great film starts with a spark of an idea.',
    social: {
      instagram: '@spark_filmmaker',
      twitter: '@sparkfilms',
      email: 'spark@sparkproductions.in'
    },
    avatar: null,
    featured: true
  },
  {
    id: 2,
    name: 'Sivam',
    role: 'Head Writer & Director',
    title: 'Story Architect',
    bio: 'Award-winning screenwriter known for crafting emotionally resonant narratives. Specializes in social dramas and character-driven stories.',
    specialization: ['Screenwriting', 'Story Editing', 'Direction'],
    experience: '7+ years',
    notable: ['SANGILI', 'KAALAM', 'SILAI'],
    quote: 'Good writing is invisible. Great writing is unforgettable.',
    social: {
      instagram: '@sivam_writes',
      twitter: '@sivamscripts',
      email: 'sivam@sparkproductions.in'
    },
    avatar: null,
    featured: true
  },
  {
    id: 3,
    name: 'Santa',
    role: 'Director of Photography',
    title: 'Visual Storyteller',
    bio: 'Cinematographer with an eye for visual poetry. Has shot over 20 short films and 3 feature films. Known for natural lighting and intimate framing.',
    specialization: ['Cinematography', 'Lighting', 'Visual Design'],
    experience: '6+ years',
    notable: ['ATMAN', 'KAALAM', 'SILAI'],
    quote: 'Light is the language of cinema.',
    social: {
      instagram: '@santa_frames',
      twitter: '@santadop',
      email: 'santa@sparkproductions.in'
    },
    avatar: null,
    featured: true
  },
  {
    id: 4,
    name: 'Arun',
    role: 'Editor & Director',
    title: 'Post-Production Lead',
    bio: 'Master editor who shapes stories in the cutting room. Believes the best films are found in editing. Also directs psychological thrillers.',
    specialization: ['Editing', 'Post-Production', 'Directing'],
    experience: '7+ years',
    notable: ['SILAI', 'ATMAN', "WRITER'S TIMES"],
    quote: 'The magic happens in the edit.',
    social: {
      instagram: '@arun_edits',
      twitter: '@aruncuts',
      email: 'arun@sparkproductions.in'
    },
    avatar: null,
    featured: true
  },
  {
    id: 5,
    name: 'Gokul',
    role: 'Producer & Operations Head',
    title: 'Production Manager',
    bio: 'Strategic producer who turns creative visions into reality. Manages budgets, schedules, and logistics with precision. The backbone of Spark Productions.',
    specialization: ['Production Management', 'Budgeting', 'Distribution'],
    experience: '9+ years',
    notable: 'All Spark Productions films',
    quote: 'Great films need great planning.',
    social: {
      instagram: '@gokul_produces',
      twitter: '@gokulprod',
      email: 'gokul@sparkproductions.in'
    },
    avatar: null,
    featured: true
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
