export const blogPosts = [
  {
    id: 1,
    slug: 'atman-premiere-success',
    title: 'ATMAN Premieres to Sold-Out Crowd at Chennai Film Festival',
    excerpt: 'Our latest sci-fi short ATMAN received a standing ovation at its world premiere. Here\'s what went down.',
    content: 'The premiere of ATMAN at the Chennai Film Festival 2026 exceeded all our expectations. With a sold-out screening of 500+ attendees, the film resonated deeply with audiences...',
    author: 'Spark',
    date: '2026-03-10',
    category: 'News',
    tags: ['ATMAN', 'Premiere', 'Festival', 'Success'],
    image: null,
    featured: true,
    readTime: '5 min'
  },
  {
    id: 2,
    slug: 'how-to-write-compelling-logline',
    title: 'The Art of the Logline: How to Hook Readers in One Sentence',
    excerpt: 'A great logline can make or break your pitch. Learn our proven formula for crafting irresistible one-liners.',
    content: 'After reviewing hundreds of film pitches, we\'ve noticed that the logline is where most filmmakers struggle. Here\'s our step-by-step guide...',
    author: 'Sivam',
    date: '2026-02-28',
    category: 'Tutorial',
    tags: ['Screenwriting', 'Tips', 'Logline', 'Pitching'],
    image: null,
    featured: true,
    readTime: '8 min'
  },
  {
    id: 3,
    slug: 'independent-film-budget-breakdown',
    title: 'Breaking Down Our₹5L Short Film Budget: Complete Transparency',
    excerpt: 'Where does the money go in a short film production? We break down every rupee of our standard package.',
    content: 'Transparency is important to us. Here\'s exactly how we allocate budget for a ₹5,00,000 short film production...',
    author: 'Gokul',
    date: '2026-02-15',
    category: 'Business',
    tags: ['Budget', 'Production', 'Transparency', 'Filmmaking'],
    image: null,
    featured: false,
    readTime: '10 min'
  },
  {
    id: 4,
    slug: 'cinematography-lessons-from-kaalam',
    title: 'Shooting Across Time: Cinematography Lessons from KAALAM',
    excerpt: 'How we created three distinct visual styles to represent three generations in one film.',
    content: 'KAALAM required us to visually differentiate three time periods spanning 60 years. Here\'s how we approached it...',
    author: 'Santa',
    date: '2026-01-20',
    category: 'Technical',
    tags: ['Cinematography', 'KAALAM', 'Visual Style', 'Period Film'],
    image: null,
    featured: true,
    readTime: '12 min'
  },
  {
    id: 5,
    slug: 'sangili-social-impact',
    title: 'When Films Spark Conversations: The Social Impact of SANGILI',
    excerpt: 'How a 38-minute film about caste discrimination ignited nationwide discussions and real-world change.',
    content: 'We set out to make SANGILI as an artistic statement. We didn\'t expect it to become a catalyst for social change...',
    author: 'Spark',
    date: '2025-12-05',
    category: 'Impact',
    tags: ['SANGILI', 'Social Change', 'Impact', 'Documentary'],
    image: null,
    featured: false,
    readTime: '7 min'
  },
  {
    id: 6,
    slug: 'sound-design-horror-shorts',
    title: 'The Unseen Character: Sound Design in Psychological Thrillers',
    excerpt: 'How we used sound to create tension and unease in SILAI without relying on jump scares.',
    content: 'Sound is 50% of the film, but in horror and thrillers, it might be 70%. Here\'s our approach to sonic storytelling...',
    author: 'Arun',
    date: '2025-11-18',
    category: 'Technical',
    tags: ['Sound Design', 'SILAI', 'Horror', 'Post-Production'],
    image: null,
    featured: false,
    readTime: '9 min'
  },
  {
    id: 7,
    slug: 'emerging-directors-program-2026',
    title: 'Announcing: Spark Emerging Directors Program 2026',
    excerpt: 'We\'re selecting 5 first-time directors to produce their debut shorts. Applications open March 1st.',
    content: 'We\'re thrilled to announce our Emerging Directors Program. We\'ll fully fund and produce 5 short films from first-time directors...',
    author: 'Spark Productions',
    date: '2025-11-01',
    category: 'Announcement',
    tags: ['Program', 'Opportunity', 'Emerging Directors', 'Announcement'],
    image: null,
    featured: true,
    readTime: '6 min'
  },
  {
    id: 8,
    slug: 'writers-times-mental-health',
    title: 'Creating WRITER\'S TIMES: A Personal Story About Creative Obsession',
    excerpt: 'The deeply personal origins of our psychological drama about a writer losing touch with reality.',
    content: 'WRITER\'S TIMES hit close to home for all of us. This is the story behind the story...',
    author: 'Sivam',
    date: '2025-10-15',
    category: 'Behind The Scenes',
    tags: ["WRITER'S TIMES", 'Mental Health', 'Personal Story', 'BTS'],
    image: null,
    featured: false,
    readTime: '11 min'
  }
];

export const news = [
  {
    id: 1,
    title: 'ATMAN wins Best Sci-Fi Short at Chennai Film Festival',
    date: '2026-03-12',
    type: 'Award'
  },
  {
    id: 2,
    title: 'Spark Productions crosses 125K YouTube subscribers',
    date: '2026-02-20',
    type: 'Milestone'
  },
  {
    id: 3,
    title: 'SANGILI selected for 15 international film festivals',
    date: '2026-01-15',
    type: 'Selection'
  },
  {
    id: 4,
    title: 'Partnership announced with Netflix for content development',
    date: '2025-12-01',
    type: 'Partnership'
  },
  {
    id: 5,
    title: 'KAALAM wins Best Period Film at Kerala Film Festival',
    date: '2025-11-20',
    type: 'Award'
  }
];

export const getFeaturedPosts = () => {
  return blogPosts.filter(post => post.featured);
};

export const getPostsByCategory = (category) => {
  return blogPosts.filter(post => post.category === category);
};

export const getLatestNews = (count = 5) => {
  return news.slice(0, count);
};
