// Local mock data for the current frontend-only version.
// Each array mirrors the shape a future Laravel API could return
// (e.g. GET /api/services, GET /api/projects, GET /api/faqs).

export const business = {
  name: 'SOLATECH Energy Solutions',
  shortName: 'SOLATECH',
  tagline: 'The Future Starts with Solar',
  location: 'Nueva Ecija, Philippines',
}

export const contactInfo = {
  phone: '[Client Phone Number]',
  email: '[Client Email]',
  facebook: '[Client Facebook Page]',
  facebookUrl: '#',
  messengerUrl: '#',
}

export const navLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About Us', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'solutions', label: 'Solar Solutions', href: '#solutions' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'faqs', label: 'FAQs', href: '#faqs' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

export const overviewHighlights = [
  {
    id: 1,
    icon: 'solarPanel',
    title: 'Solar-Focused Services',
    description: 'Installation, cleaning, inspection, and repair of rooftop solar panels.',
  },
  {
    id: 2,
    icon: 'home',
    title: 'Residential Properties',
    description: 'Practical rooftop solar support for family homes.',
  },
  {
    id: 3,
    icon: 'building',
    title: 'Small Businesses',
    description: 'Solar services for shops, offices, and small commercial spaces.',
  },
  {
    id: 4,
    icon: 'mapPin',
    title: 'Local Service Area',
    description: 'Serving property owners across Nueva Ecija.',
  },
]

export const benefits = [
  {
    id: 1,
    icon: 'sun',
    title: 'Renewable Energy',
    description: 'Use energy from the sun as a renewable energy source.',
  },
  {
    id: 2,
    icon: 'layout',
    title: 'Better Use of Your Roof',
    description: 'Turn available rooftop space into a useful energy resource.',
  },
  {
    id: 3,
    icon: 'calendar',
    title: 'Long-Term Energy Solution',
    description: "Solar systems can be part of a property's long-term energy planning.",
  },
  {
    id: 4,
    icon: 'target',
    title: 'Practical Energy Choice',
    description: "Explore a solar solution based on your property's actual needs.",
  },
]

export const services = [
  {
    id: 1,
    title: 'Solar Panel Installation',
    description:
      "Professional rooftop solar panel installation based on the customer's property and solar needs.",
    category: 'Installation',
    icon: 'hammer',
  },
  {
    id: 2,
    title: 'Solar Panel Cleaning',
    description: 'Cleaning service that helps remove dirt and debris from solar panel surfaces.',
    category: 'Cleaning',
    icon: 'sparkles',
  },
  {
    id: 3,
    title: 'Solar Panel Inspection',
    description: 'Inspection of solar panels, mounting components, and visible system conditions.',
    category: 'Inspection',
    icon: 'search',
  },
  {
    id: 4,
    title: 'Solar Panel Repair',
    description: 'Inspection and repair support for damaged or malfunctioning solar panel systems.',
    category: 'Repair',
    icon: 'wrench',
  },
]

export const serviceCategories = ['All', 'Installation', 'Cleaning', 'Inspection', 'Repair']

export const missionVision = [
  {
    id: 'mission',
    icon: 'target',
    title: 'Our Mission',
    text: 'To provide practical and accessible solar panel services that help homes and small businesses make better use of renewable energy.',
  },
  {
    id: 'vision',
    icon: 'eye',
    title: 'Our Vision',
    text: 'To support a future where more homes and businesses in Nueva Ecija can benefit from reliable and sustainable solar energy.',
  },
]

export const objectives = [
  { id: 1, text: 'Provide reliable rooftop solar services.' },
  { id: 2, text: 'Help customers understand practical solar solutions.' },
  { id: 3, text: 'Maintain and support installed solar panel systems.' },
  { id: 4, text: 'Serve residential customers and small businesses in Nueva Ecija.' },
  { id: 5, text: 'Promote the practical use of renewable energy.' },
]

export const processSteps = [
  {
    id: 1,
    number: '01',
    icon: 'message',
    title: 'Free Consultation',
    description: 'Tell us about your property and the solar service you are looking for.',
  },
  {
    id: 2,
    number: '02',
    icon: 'ruler',
    title: 'Site Assessment',
    description: 'We check your roof space, condition, shading, and orientation.',
  },
  {
    id: 3,
    number: '03',
    icon: 'hammer',
    title: 'Solar Installation or Service',
    description: 'Our team carries out the installation, cleaning, inspection, or repair.',
  },
  {
    id: 4,
    number: '04',
    icon: 'headset',
    title: 'Testing and Customer Support',
    description: 'We check that the system is working and remain available for support.',
  },
]

export const solarFlow = [
  { id: 1, icon: 'sun', label: 'Sunlight' },
  { id: 2, icon: 'solarPanel', label: 'Solar Panels' },
  { id: 3, icon: 'zap', label: 'Inverter' },
  { id: 4, icon: 'plug', label: 'Electrical System' },
  { id: 5, icon: 'home', label: 'Home / Business' },
]

export const solarComponents = [
  {
    id: 1,
    icon: 'solarPanel',
    title: 'Solar Panels',
    description: 'Instruments that capture energy from sunlight.',
  },
  {
    id: 2,
    icon: 'zap',
    title: 'Inverter',
    description:
      "Converts the electricity produced by the solar panels into a form used by the property's electrical system.",
  },
  {
    id: 3,
    icon: 'grid',
    title: 'Mounting System',
    description: 'Supports and secures the solar panels on the roof.',
  },
  {
    id: 4,
    icon: 'cable',
    title: 'Electrical Connections',
    description: "Connects the solar system to the property's electrical system.",
  },
]

export const roofFactors = [
  { id: 1, icon: 'ruler', label: 'Available roof space' },
  { id: 2, icon: 'clipboard', label: 'Roof condition' },
  { id: 3, icon: 'cloudSun', label: 'Shading' },
  { id: 4, icon: 'compass', label: 'Roof orientation' },
  { id: 5, icon: 'gauge', label: 'Property energy needs' },
]

export const projects = [
  {
    id: 1,
    title: 'Residential Rooftop Solar',
    location: 'Nueva Ecija, Philippines',
    type: 'Residential',
    service: 'Solar Panel Installation',
    image: '/images/project-residential.png',
    description:
      'A sample residential project showing a rooftop solar panel installation on a family home, planned around the available roof space and the household’s energy needs.',
  },
  {
    id: 2,
    title: 'Small Business Rooftop Solar',
    location: 'Nueva Ecija, Philippines',
    type: 'Small Business',
    service: 'Solar Panel Installation',
    image: '/images/project-business.png',
    description:
      'A sample small business project showing solar panels arranged on a commercial flat roof, designed to make practical use of the available rooftop area.',
  },
  {
    id: 3,
    title: 'Solar Panel Maintenance',
    location: 'Nueva Ecija, Philippines',
    type: 'Residential',
    service: 'Cleaning and Inspection',
    image: '/images/project-maintenance.png',
    description:
      'A sample maintenance visit showing panel cleaning and a visual inspection of the panels and mounting components on an existing residential system.',
  },
]

export const projectFilters = ['All', 'Residential', 'Small Business']

export const faqs = [
  {
    id: 1,
    question: 'How do rooftop solar panels work?',
    answer:
      'Solar panels capture energy from sunlight and produce electricity. An inverter then converts that electricity into a form your property’s electrical system can use.',
  },
  {
    id: 2,
    question: 'Can solar panels be installed on my roof?',
    answer:
      'It depends on your roof. Factors such as available space, roof condition, shading, and orientation need to be checked during a site assessment before we can recommend an installation.',
  },
  {
    id: 3,
    question: 'How many solar panels does my property need?',
    answer:
      'The number of panels depends on your property’s energy needs and the usable roof area. We can give a recommendation after a consultation and site assessment.',
  },
  {
    id: 4,
    question: 'Can solar panels work during cloudy weather?',
    answer:
      'Solar panels can still produce some electricity on cloudy days, but output is generally lower than in direct sunlight.',
  },
  {
    id: 5,
    question: 'How long does solar panel installation take?',
    answer:
      'Installation time varies with the size of the system and the condition of the roof. We will give you an estimated schedule after the site assessment.',
  },
  {
    id: 6,
    question: 'How often should solar panels be cleaned?',
    answer:
      'It depends on how much dust, dirt, and debris collects on your panels. Properties near roads, farms, or trees may need more frequent cleaning. We can recommend a schedule after an inspection.',
  },
  {
    id: 7,
    question: 'Do you provide solar panel inspection?',
    answer:
      'Yes. We inspect solar panels, mounting components, and visible system conditions to help identify issues early.',
  },
  {
    id: 8,
    question: 'Do you provide solar panel repair?',
    answer:
      'Yes. We provide inspection and repair support for damaged or malfunctioning solar panel systems.',
  },
  {
    id: 9,
    question: 'What areas in Nueva Ecija do you serve?',
    answer:
      'We serve residential and small business properties within Nueva Ecija. Contact us with your property location to confirm service availability in your area.',
  },
  {
    id: 10,
    question: 'How can I request a consultation?',
    answer:
      'Fill out the consultation form on this page with your property details and the service you need, and our team will get in touch with you.',
  },
]

export const propertyTypes = ['Residential', 'Small Business', 'Other']

export const serviceOptions = [
  'Solar Panel Installation',
  'Solar Panel Cleaning',
  'Solar Panel Inspection',
  'Solar Panel Repair',
  'General Consultation',
]
