export const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Lead Actor, ATMAN',
    company: 'Tamil Film Industry',
    quote: 'Working with Spark Productions was a revelation. Their attention to detail, creative vision, and collaborative approach made ATMAN not just a job, but an artistic journey. The team\'s passion is infectious.',
    rating: 5,
    date: '2026-03',
    avatar: null,
    featured: true
  },
  {
    id: 2,
    name: 'Priya Menon',
    role: 'Director',
    company: 'Independent Filmmaker',
    quote: 'I pitched my short film idea to Spark Productions, and they didn\'t just produce it — they elevated it. From script development to final cut, their expertise and support were invaluable. They truly invest in emerging directors.',
    rating: 5,
    date: '2025-11',
    avatar: null,
    featured: true
  },
  {
    id: 3,
    name: 'Arjun Reddy',
    role: 'Screenwriter',
    company: 'Freelance Writer',
    quote: 'The scriptwriting team at Spark Productions helped me transform a rough concept into a compelling screenplay. Their feedback was constructive, their process was professional, and the final script exceeded my expectations.',
    rating: 5,
    date: '2025-09',
    avatar: null,
    featured: true
  },
  {
    id: 4,
    name: 'Kavya Sharma',
    role: 'Producer',
    company: 'Blue Moon Productions',
    quote: 'As a producer, I\'ve worked with many production houses. Spark Productions stands out for their professionalism, creativity, and ability to deliver on time and within budget. Highly recommended!',
    rating: 5,
    date: '2025-07',
    avatar: null,
    featured: false
  },
  {
    id: 5,
    name: 'Vikram Patel',
    role: 'Festival Director',
    company: 'Chennai International Film Festival',
    quote: 'Spark Productions consistently delivers high-quality, thought-provoking content. Their films have been festival favorites year after year. They\'re raising the bar for independent Tamil cinema.',
    rating: 5,
    date: '2025-06',
    avatar: null,
    featured: true
  },
  {
    id: 6,
    name: 'Meera Nair',
    role: 'Film Critic',
    company: 'The Hindu',
    quote: 'In an industry dominated by formulaic content, Spark Productions dares to tell stories that matter. Their commitment to authentic, socially conscious filmmaking is commendable and much needed.',
    rating: 5,
    date: '2025-05',
    avatar: null,
    featured: false
  },
  {
    id: 7,
    name: 'Anand Krishnan',
    role: 'Cinematographer',
    company: 'Freelance DOP',
    quote: 'I\'ve had the pleasure of working with Spark Productions on multiple projects. They respect the craft, value collaboration, and create an environment where creativity thrives. A dream team to work with.',
    rating: 5,
    date: '2025-04',
    avatar: null,
    featured: false
  },
  {
    id: 8,
    name: 'Deepa Rajan',
    role: 'Sound Designer',
    company: 'Echo Studios',
    quote: 'Spark Productions understands that sound is 50% of the film. They give sound design the importance it deserves and collaborate closely to ensure every element serves the story.',
    rating: 5,
    date: '2025-03',
    avatar: null,
    featured: false
  }
];

export const clientStats = {
  totalClients: 50,
  satisfactionRate: 98,
  repeatClients: 75,
  projectsCompleted: 45
};

export const getFeaturedTestimonials = () => {
  return testimonials.filter(t => t.featured);
};

export const getAverageRating = () => {
  const sum = testimonials.reduce((acc, t) => acc + t.rating, 0);
  return (sum / testimonials.length).toFixed(1);
};
