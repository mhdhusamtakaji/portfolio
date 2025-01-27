// Helper function to generate image paths dynamically using `require`
const generateImagePaths = (basePath, count) => {
    const paths = [];
    for (let i = 1; i <= count; i++) {
      paths.push(require(`../../assets${basePath}/${i}.png`));
    }
    return paths;
  };
  
  const projectsData = [
    {
      title: 'AIM (Artificial Intelligence Mentor)',
      description:
        'A cutting-edge AI platform to transform education into a personalized and engaging experience. Empowering students, families, teachers, and schools, AIM makes learning more effective, interactive, and insightful than ever before.',
      link: 'https://aim.edu-waves.com',
      images: [
        ...generateImagePaths('/images/projects/AIM', 24),
      ],
    },
    {
      title: 'EDUWaves',
      description:
        'The official online registration platform for EDUWaves Education Consultancy, offering users access to services, course registrations, and online assistance.',
      link: 'https://edu-waves.com',
      images: [
        ...generateImagePaths('/images/projects/EDUWaves', 11),
      ],
    },
    {
      title: 'PrimeSketch',
      description:
        'A professional portfolio for PrimeSketch, a leading team of architects and designers known for their work in commercial showrooms, VIP villas, and corporate offices.',
      link: 'https://primesketch.net',
      images: [
        ...generateImagePaths('/images/projects/PrimeSketch', 11),
      ],
    },
    {
      title: 'EZone',
      description:
        'An international platform offering academic services, e-courses, anonymous teacher-student chats, and academic project consultations for students worldwide.',
      link: '',
      images: [
        ...generateImagePaths('/images/projects/EZone/mobile', 17),
        ...generateImagePaths('/images/projects/EZone/dashboard', 17),
      ],
    },
    {
      title: 'Car Care Center',
      description:
        'A comprehensive platform for car maintenance services, offering users access to car care services, maintenance tips, and service bookings.',
      link: '',
      images: [
        ...generateImagePaths('/images/projects/CarCare', 4),
      ],
    },
    {
      title: 'Businees Support System',
      description:
        'This is a frontdesk system for any business. It is a system that helps in managing the business. It has features like managing finances, managing HR Affairs like: Leave, Payroll, Recruitment, etc. It also has a feature of managing the business projects and tasks.',
      link: '',
      images: [
        ...generateImagePaths('/images/projects/BusineesSupport', 15),
      ],
    },
  ];
  
  export default projectsData;
  