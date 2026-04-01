export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  highlight: string;
  capabilities: string[];
  outcomes: string[];
  applications: string[];
};

export const companySnapshot = [
  'SDVOSB Certified',
  'SB/DVBE Certified #2023959',
  'SAM UEI: KBR9RME864R8',
  'CAGE Code: 8WC20',
  'C-10 #1073589',
  'ACO #7999',
  'Work Area: Northern California',
];

export const differentiators = [
  'Service-Disabled Veteran Owned Small Business',
  'ISN Safety Certified',
  'OSHA 30 Certified',
  'Comprehensive project support from drawings and planning to commissioning',
];

export const industries = [
  'Government facilities and public-sector projects',
  'Industrial sites and production environments',
  'Commercial buildings and tenant improvements',
];

export const services: Service[] = [
  {
    slug: 'low-voltage',
    title: 'Low Voltage Infrastructure',
    shortTitle: 'Low Voltage',
    summary: 'Structured cabling, fiber pathways, and network-ready infrastructure for data, internet, and security systems.',
    description:
      'BHP can run and terminate low voltage wire for any data, internet, and security system needs, from Cat6 through network racks to fiber through underground conduit.',
    highlight: 'Build the backbone that lets every connected system perform reliably.',
    capabilities: [
      'Cat6 and structured data cabling',
      'Rack organization, termination, and cleanup',
      'Fiber installation through underground and interior pathways',
      'Coordination with electrical, security, and IT stakeholders',
    ],
    outcomes: [
      'Cleaner installs with room for future growth',
      'Reliable connectivity for security and operations systems',
      'Better visibility into cable routing, labeling, and handoff',
    ],
    applications: [
      'Network room upgrades',
      'Tenant improvements',
      'Campus and yard connectivity',
      'Security system expansions',
    ],
  },
  {
    slug: 'physical-security',
    title: 'Physical Security and Access Control',
    shortTitle: 'Physical Security',
    summary: 'Access control deployments that protect facilities while giving teams clear visibility and user-friendly management.',
    description:
      'BHP installs access control systems that keep facilities secure and provide peace of mind with audit logs, scheduling controls, and intuitive dashboards for doors, groups, and users.',
    highlight: 'Secure doors, track activity, and simplify credential management.',
    capabilities: [
      'Door hardware and reader integration',
      'Time-and-date stamped audit logging',
      'Electronic scheduling and permissions',
      'Dashboard setup for administrators and operators',
    ],
    outcomes: [
      'More controlled entry to sensitive spaces',
      'Clear event history for authorized and unauthorized attempts',
      'Less friction when adding, removing, or updating users',
    ],
    applications: [
      'Office suites and commercial buildings',
      'Industrial yards and secure rooms',
      'Government and regulated spaces',
      'Multi-door retrofit projects',
    ],
  },
  {
    slug: 'surveillance',
    title: 'Video Surveillance Solutions',
    shortTitle: 'Surveillance',
    summary: 'CCTV systems designed around site requirements, storage strategy, and monitoring expectations.',
    description:
      'BHP partners with a wide range of CCTV manufacturers to deliver the best-fit surveillance system, including cloud-based storage, onsite servers, and AI-assisted video monitoring.',
    highlight: 'Capture better visibility with storage and monitoring that match the site.',
    capabilities: [
      'Camera layout and equipment selection',
      'Cloud-based or onsite video storage strategies',
      'Remote viewing and monitoring options',
      'AI analytics tuned to suspicious activity reporting',
    ],
    outcomes: [
      'Broader situational awareness across facilities',
      'Recorded evidence that is easier to retain and review',
      'Smarter alerting that reduces noise for operators',
    ],
    applications: [
      'Perimeter and parking coverage',
      'Interior monitoring and asset protection',
      'Warehouse and yard visibility',
      'Multi-camera commercial rollouts',
    ],
  },
  {
    slug: 'alarms',
    title: 'Fire and Burglar Alarm Systems',
    shortTitle: 'Alarms',
    summary: 'Scalable alarm systems with professional installation and UL-certified monitoring support.',
    description:
      'BHP specializes in fire and burglar alarms that can be as simple or expansive as needed, backed by a UL certified monitoring company to help protect customer property.',
    highlight: 'Design alarm coverage that fits the site and supports rapid response.',
    capabilities: [
      'Fire alarm system installation and upgrades',
      'Burglar alarm configuration for varied site sizes',
      'Monitoring coordination through a UL-certified partner',
      'System expansion planning for future phases',
    ],
    outcomes: [
      'Code-conscious protection for life safety and property',
      'Coverage that can scale with operations',
      'Confidence that critical alarms are professionally monitored',
    ],
    applications: [
      'Commercial spaces',
      'Industrial facilities',
      'Government projects',
      'New construction and retrofit work',
    ],
  },
];

export const serviceMap = Object.fromEntries(services.map(service => [service.slug, service])) as Record<string, Service>;
