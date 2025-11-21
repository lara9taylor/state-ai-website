export const IMAGES = {
  conferences: {
    closeUp: '/images/Close-up of businesswoman gesticulates while talking conference video call over laptop.jpeg',
    homeOffice: '/images/Young businesswoman work at home and virtual video conference meeting with colleagues business people, online working, video call.jpeg'
  },
  aiAssistants: {
    smartphone: '/images/AI assistant interaction, Person using smartphone chatbot powered by artificial intelligence.jpeg',
    automation: '/images/symbolizes the concept of AI assistants, automation, intelligent systems, and the integration of artificial intelligence into various industries and daily life.jpeg',
    futuristic: '/images/Artificial intelligence assistant for futuristic business communication.jpeg'
  },
  dashboards: {
    illustration: '/images/Illustration of a machine learning dashboard with various data visualizations and icons shown.jpeg',
    professional: '/images/Professional social media marketing dashboard on laptop showing Google ads metrics, AI analytics, colorful charts in modern office setup with clean minimalist.jpeg',
    laptop: '/images/Laptop displaying colorful project management dashboard with development stages for new AI model, resting on table in business setting, printed documents lying beside device.jpeg'
  },
  workshops: {
    audience: '/images/Audience listens lecturer at workshop.jpeg',
    training1: '/images/Training methods include lectures, workshops, and e-learning, offering diverse ways to build skills, share knowledge, and enhance professional growth.jpeg',
    training2: '/images/Training techniques such as workshops, simulations, or online modules engage learners actively, ensuring retention and practical application of skills.jpeg'
  },
  business: {
    efficiency: '/images/Businessman use artificial intelligence AI technology for enhanced work efficiency data analysis and efficient tools, Unlocking work potential with AI.jpeg',
    planning: '/images/Path to success with gears from starting with vision and idea, professional achievement.jpeg',
    consultation: '/images/Cropped shot of confidence woman while giving a consult to young businesswoman next to her by tablet.jpeg',
    strategy: '/images/Two businesswoman discuss investment project working and planning strategy on digital tablet.jpeg',
    finance: '/images/Businesswoman or accountant working Financial investment on calculator with calculate.jpeg'
  },
  webDesign: {
    wireframe: '/images/Website development team sketching wireframe layout for responsive web content.jpeg',
    composite: '/images/Composite image of build website interface.jpeg'
  },
  mississippi: {
    magnolia: '/images/A close up view of a magnolia flower in full bloom.jpeg',
    welcome: '/images/Welcome to Mississippi sign.jpeg',
    biloxi: '/images/Biloxi, Mississippi, USA.jpeg',
    starkville: '/images/Starkville, MS - December 2020 Entrance sign to the campus of Mississippi State University..jpeg',
    starkvilleSign: '/images/Starkville, MS sign in Oktibbeha County, Home of Mississippi State University - CREDIT LINE Chad Robertson - stock.adobe.com',
    sunset: '/images/Foggy lake view with trees during sunset near Starkville, MS.jpeg',
    shrimp: '/images/Shrimp Fishing Boats in Harbor in Biloxi, Mississippi.jpeg'
  },
  audiences: {
    smallBusiness: '/images/SmallBusinesses.jpeg',
    nonprofits: '/images/Nonprofits.jpeg',
    government: '/images/Govtagency.jpg',
    creatives: '/images/Creatives-Solopreneurs.jpg',
    educators: '/images/Educators.jpg'
  }
} as const;

export type ImageCategory = keyof typeof IMAGES;
