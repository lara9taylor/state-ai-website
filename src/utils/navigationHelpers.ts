export interface BreadcrumbItem {
  label: string;
  path: string;
}

const routeMap: Record<string, BreadcrumbItem[]> = {
  '/services/ai-readiness-assessment': [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/#services' },
    { label: 'AI Readiness Assessment', path: '/services/ai-readiness-assessment' }
  ],
  '/services/mississippi-ai-starter-kit': [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/#services' },
    { label: 'Mississippi AI Starter Kit', path: '/services/mississippi-ai-starter-kit' }
  ],
  '/services/ai-strategy-workshop': [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/#services' },
    { label: 'AI Strategy Workshop', path: '/services/ai-strategy-workshop' }
  ],
  '/services/private-ai-training': [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/#services' },
    { label: 'Private AI Training', path: '/services/private-ai-training' }
  ],
  '/services/ai-enhanced-web-design': [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/#services' },
    { label: 'AI-Enhanced Web Design', path: '/services/ai-enhanced-web-design' }
  ],
  '/services/custom-ai-assistants': [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/#services' },
    { label: 'Custom AI Assistants', path: '/services/custom-ai-assistants' }
  ],
  '/services/ai-powered-dashboards': [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/#services' },
    { label: 'AI-Powered Dashboards', path: '/services/ai-powered-dashboards' }
  ],
  '/services/starkville-ai-workshop': [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/#services' },
    { label: 'Starkville AI Workshop Series', path: '/services/starkville-ai-workshop' }
  ],
  '/small-business': [
    { label: 'Home', path: '/' },
    { label: 'Small Business', path: '/small-business' }
  ],
  '/nonprofits': [
    { label: 'Home', path: '/' },
    { label: 'Nonprofits', path: '/nonprofits' }
  ],
  '/government': [
    { label: 'Home', path: '/' },
    { label: 'Government', path: '/government' }
  ],
  '/startups-solopreneurs': [
    { label: 'Home', path: '/' },
    { label: 'Startups & Solopreneurs', path: '/startups-solopreneurs' }
  ],
  '/ai-content-jumpstart': [
    { label: 'Home', path: '/' },
    { label: 'AI Content Jumpstart', path: '/ai-content-jumpstart' }
  ],
  '/about': [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' }
  ],
  '/pricing': [
    { label: 'Home', path: '/' },
    { label: 'Pricing', path: '/pricing' }
  ]
};

export function getBreadcrumbTrail(pathname: string): BreadcrumbItem[] {
  return routeMap[pathname] || [{ label: 'Home', path: '/' }];
}

export function getSmartBackPath(currentPath: string): string {
  if (currentPath.startsWith('/services/')) {
    return '/#services';
  }
  if (['/small-business', '/nonprofits', '/government', '/startups-solopreneurs'].includes(currentPath)) {
    return '/';
  }
  return '/';
}

interface ServiceRelationship {
  [key: string]: string[];
}

const serviceRelationships: ServiceRelationship = {
  'ai-readiness-assessment': [
    'ai-strategy-workshop',
    'mississippi-ai-starter-kit',
    'private-ai-training'
  ],
  'mississippi-ai-starter-kit': [
    'ai-enhanced-web-design',
    'ai-readiness-assessment',
    'ai-content-jumpstart'
  ],
  'ai-strategy-workshop': [
    'private-ai-training',
    'ai-readiness-assessment',
    'mississippi-ai-starter-kit'
  ],
  'private-ai-training': [
    'ai-strategy-workshop',
    'ai-readiness-assessment',
    'mississippi-ai-starter-kit'
  ],
  'ai-enhanced-web-design': [
    'mississippi-ai-starter-kit',
    'ai-content-jumpstart',
    'ai-readiness-assessment'
  ],
  'ai-content-jumpstart': [
    'mississippi-ai-starter-kit',
    'ai-enhanced-web-design',
    'ai-readiness-assessment'
  ],
  'custom-ai-assistants': [
    'mississippi-ai-starter-kit',
    'ai-enhanced-web-design',
    'ai-strategy-workshop'
  ],
  'ai-powered-dashboards': [
    'ai-strategy-workshop',
    'custom-ai-assistants',
    'private-ai-training'
  ],
  'starkville-ai-workshop': [
    'private-ai-training',
    'ai-readiness-assessment',
    'ai-strategy-workshop'
  ]
};

export function getRelatedServiceIds(currentServiceId: string): string[] {
  return serviceRelationships[currentServiceId] || [];
}

const audienceServiceMap: Record<string, string[]> = {
  'small-business': [
    'ai-readiness-assessment',
    'mississippi-ai-starter-kit',
    'private-ai-training',
    'ai-enhanced-web-design'
  ],
  'nonprofits': [
    'ai-readiness-assessment',
    'mississippi-ai-starter-kit',
    'private-ai-training',
    'ai-strategy-workshop'
  ],
  'government': [
    'ai-strategy-workshop',
    'private-ai-training',
    'ai-readiness-assessment'
  ],
  'startups-solopreneurs': [
    'mississippi-ai-starter-kit',
    'ai-content-jumpstart',
    'ai-enhanced-web-design',
    'ai-readiness-assessment'
  ]
};

export function getServicesForAudience(audienceType: string): string[] {
  return audienceServiceMap[audienceType] || [];
}
