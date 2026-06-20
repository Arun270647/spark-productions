export const productionProcess = [
  {
    step: 1,
    title: 'Initial Consultation',
    duration: '1 week',
    description: 'We start with a detailed discussion about your vision, goals, and expectations. We review your script or concept and provide initial feedback.',
    deliverables: ['Project scope document', 'Initial budget estimate', 'Timeline proposal'],
    activities: [
      'First meeting to discuss your project',
      'Script or concept review',
      'Budget and timeline discussion',
      'Agreement on deliverables'
    ]
  },
  {
    step: 2,
    title: 'Script Development',
    duration: '2-4 weeks',
    description: 'Our writers work with you to develop or refine the screenplay. This includes story structure, character development, and dialogue polish.',
    deliverables: ['Shooting script', 'Scene breakdown', 'Character profiles'],
    activities: [
      'Story development sessions',
      'Script writing/refinement',
      'Revision rounds (3-5)',
      'Final script approval'
    ]
  },
  {
    step: 3,
    title: 'Pre-Production',
    duration: '2-3 weeks',
    description: 'We plan every aspect of the production: casting, location scouting, shot lists, schedules, and crew assembly.',
    deliverables: ['Shooting schedule', 'Location list', 'Cast list', 'Shot list', 'Budget breakdown'],
    activities: [
      'Casting sessions',
      'Location scouting and securing',
      'Crew recruitment',
      'Equipment planning',
      'Storyboarding',
      'Production meetings'
    ]
  },
  {
    step: 4,
    title: 'Production / Filming',
    duration: '3-7 days',
    description: 'The shoot! Our professional crew brings your story to life with cinema-quality equipment and experienced personnel.',
    deliverables: ['Raw footage', 'Daily reports', 'Behind-the-scenes content'],
    activities: [
      'On-set filming',
      'Director and DOP collaboration',
      'Performance capture',
      'Multiple takes and angles',
      'Daily review of footage',
      'Continuity management'
    ]
  },
  {
    step: 5,
    title: 'Post-Production',
    duration: '4-6 weeks',
    description: 'We edit, color grade, add sound design, music, and VFX. This is where the film truly comes together.',
    deliverables: ['Rough cut', 'Fine cut', 'Sound mix', 'Color-graded master'],
    activities: [
      'Footage logging and organization',
      'Assembly edit',
      'Rough cut presentation',
      'Fine cut with revisions',
      'Sound design and mixing',
      'Music composition/licensing',
      'Color grading',
      'VFX and graphics',
      'Final master export'
    ]
  },
  {
    step: 6,
    title: 'Revisions & Finalization',
    duration: '1-2 weeks',
    description: 'Based on your feedback, we make final adjustments to ensure the film meets your vision.',
    deliverables: ['Final film in multiple formats', 'DCP for festivals', 'Social media versions'],
    activities: [
      'Client review and feedback',
      'Final revisions',
      'Format conversions',
      'Quality control checks',
      'File delivery preparation'
    ]
  },
  {
    step: 7,
    title: 'Distribution & Marketing',
    duration: 'Ongoing',
    description: 'We help you get your film seen: festival submissions, premiere events, social media campaigns, and distribution.',
    deliverables: ['Festival submissions', 'Premiere event', 'Marketing materials', 'Social media campaign'],
    activities: [
      'Festival research and submissions',
      'Premiere event planning',
      'Press kit creation',
      'Trailer and teaser creation',
      'Social media strategy',
      'YouTube premiere',
      'Audience engagement'
    ]
  }
];

export const timeline = {
  scriptwriting: '4-6 weeks',
  shortFilmProduction: '8-12 weeks',
  fullPackage: '12-16 weeks',
  rushProjects: '6-8 weeks (premium pricing)'
};

export const workflow = {
  meetings: 'Weekly progress updates and review sessions',
  communication: '24/7 availability via email, phone, and WhatsApp',
  revisions: '3-5 revision rounds included in all packages',
  feedback: 'Collaborative feedback at every milestone',
  transparency: 'Full access to production schedules and budgets'
};

export const getStepByNumber = (stepNumber) => {
  return productionProcess.find(step => step.step === stepNumber);
};

export const getTotalDuration = () => {
  return '8-12 weeks average for complete short film';
};
