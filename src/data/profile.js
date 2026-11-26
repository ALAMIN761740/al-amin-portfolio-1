// Everything personal lives here. Empty strings are shown as "not added yet"
// on the site, so nothing ever links to an invented address.
export const profile = {
  name: 'Al Amin',
  title: 'Frontend Developer',

  photo: '/images/profile/al-amin.png',

  email: '', // e.g. 'you@example.com'
  github: '', // e.g. 'https://github.com/your-username'
  linkedin: '', // e.g. 'https://linkedin.com/in/your-username'
  resume: '', // add public/resume.pdf, then set '/resume.pdf'

  // Set to true only if you are currently looking for work.
  openToWork: false,

  roles: ['Frontend Developer', 'React.js Developer', 'Web Application Developer'],

  intro:
    "I'm a passionate Frontend Developer focused on building modern, responsive, and user-friendly web experiences. I enjoy turning ideas into working interfaces with React and modern web technologies.",

  about: [
    "I'm a Computer Science & Technology diploma student with a strong interest in frontend development. I enjoy learning modern technologies, building web interfaces, solving development problems, and steadily improving my programming skills.",
    'My main focus is React.js and modern frontend development. I care about clean UI and maintainable code, and I learn best by building projects. I am also exploring backend technologies to understand how complete web applications work.',
    'My goal is to grow into a professional software developer by creating useful, accessible, and user-friendly digital products.',
  ],

  facts: [
    { label: 'Education', value: 'Diploma in Computer Science & Technology' },
    { label: 'Current status', value: '8th semester, industrial training' },
    { label: 'Main technology', value: 'React.js' },
    { label: 'Learning now', value: 'TypeScript and Next.js' },
  ],
};
