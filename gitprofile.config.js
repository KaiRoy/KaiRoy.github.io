// gitprofile.config.js

const config = {
  github: {
    username: 'KaiRoy', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['School', 'PythonWebPageMonitor', 'Test', 'KaiRoy.github.io'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'kai-roy-659357256',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'kairoy.github.io',
    phone: '503-473-4094',
    email: 'kaikurisakaroy@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1LOdvfY2EBZEqmx96hXaZYTXlIO3m513wfT7tbKZHePg/edit?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [	//Needs to be updated
    'C/C++',
	'System Verilog',
	'LaTeX',
	'Tcl',
	'KiCad',	
    'Autodesk EAGLE',
    'Arduino',
    'AVR',
    'FPGA',
    'Oscilloscopes',
	'TH/SMD Soldering',
  ],
  experiences: [
    {
		company: 'Portland State University',
		position: 'Graduate Teaching Assistant',
		from: 'December 2024',
		to: 'Present',
		companyLink: 'https://www.pdx.edu/electrical-computer-engineering/',
	},
	{
		company: 'Cafe Cinco Siete',
		position: 'Barista',
		from: 'February 2024',
		to: 'Novemeber 2024',
		companyLink: 'https://www.cafecincosietepdx.com/',
	},
	{
		company: 'OPEnS Lab',
		position: 'Project Lead, Electrical Lead',
		from: 'February 2021',
		to: 'January 2024',
		companyLink: 'https://open-sensing.org/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Portland State University',
      degree: 'Master\'s Degree in Electrical and Computer Engineering',
      from: '2023',
      to: '2025 (Expected)',
    },
    {
      institution: 'Oregon State University',
      degree: 'Bachelor\'s of Science in Electrical and Computer Engineering',
      from: '2019',
      to: '2023',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
	{
      title: 'OPEnS Lab - eDNA Sampler',
      description:
        'This is an OPEnS Lab project tasked with creating an autonomous sampler capable of taking 24 enviromental DNA Samples from water sources',
      imageUrl: 'https://avatars.githubusercontent.com/u/20525249?s=200&v=4',
      link: 'https://github.com/OPEnSLab-OSU/eDNA',
    }, 
  ],
  // Display blog posts from your medium or dev account. (Optional)
 /* 
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },*/
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: '', 
};

export default config;
