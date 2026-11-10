export interface ServiceCardData {
  id: string;
  title: string;
  badge: string;
  image: string;
  shortDesc: string;
  typicalSavings: string;
  grantInfo?: string;
  features: string[];
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'comparison' | 'switching' | 'about';
}

export const HOME_SERVICES: ServiceCardData[] = [
  {
    id: 'solar-pv',
    title: 'Solar PV Systems',
    badge: 'Generate Clean Power',
    image: '/src/assets/images/service_solar_pv_home_1794306888493.jpg',
    shortDesc: 'Harness daytime sunlight to power your household appliances and feed surplus energy back into the national grid.',
    typicalSavings: 'Save up to £640/year on electricity bills',
    grantInfo: '0% VAT on domestic solar panel installations until 2027',
    features: [
      'High-efficiency monocrystalline panels',
      'Smart Export Guarantee (SEG) cash payments',
      '25-year panel performance guarantee',
      'Integrated real-time mobile app monitoring'
    ],
    ctaText: 'Explore solar PV'
  },
  {
    id: 'battery-storage',
    title: 'Battery Storage',
    badge: 'Store Cheap Off-Peak Power',
    image: '/src/assets/images/service_battery_storage_1794306889580.jpg',
    shortDesc: 'Store daytime solar electricity or low-cost overnight grid power to run your home during expensive peak tariff hours.',
    typicalSavings: 'Reduce grid peak electricity use by up to 85%',
    grantInfo: '0% VAT applicable when installed standalone or with solar',
    features: [
      'Store cheap overnight agile/off-peak tariffs',
      'Power blackout backup protection for essentials',
      'Compact wall-mount or floor-standing designs',
      '10-year warranty with 6,000+ lifecycle charges'
    ],
    ctaText: 'Explore battery storage'
  },
  {
    id: 'heat-pumps',
    title: 'Air Source Heat Pumps',
    badge: '£7,500 Government Grant',
    image: '/src/assets/images/service_heat_pump_home_1794306889569.jpg',
    shortDesc: 'Extract renewable thermal heat from outside air to deliver cozy central heating and continuous hot water all year round.',
    typicalSavings: 'Up to 350% efficiency compared to traditional boilers',
    grantInfo: 'Eligible for £7,500 non-repayable BUS grant in England & Wales',
    features: [
      'Zero on-site carbon emissions from natural gas',
      'Compatible with existing radiators or underfloor heating',
      'Whisper-quiet outdoor fan acoustic technology',
      'Government Boiler Upgrade Scheme (BUS) eligible'
    ],
    ctaText: 'Explore heat pumps'
  },
  {
    id: 'infrared-radiators',
    title: 'Infrared Radiators',
    badge: 'Instant Gentle Warmth',
    image: '', // Rendered with custom architectural SVG / visual fallback
    shortDesc: 'Sleek, ultra-slim radiant panels that warm walls, furniture, and people directly rather than circulating dusty, dry air.',
    typicalSavings: 'Up to 30% less energy than convection electric heaters',
    grantInfo: 'Zero plumbing required — simple surface or ceiling mounting',
    features: [
      'Slim aesthetic mirror, glass, or matte white finishes',
      'Prevents cold spots, condensation, and damp mould',
      'Individual room zone smart thermostat control',
      'Maintenance-free with no moving parts or water pipes'
    ],
    ctaText: 'Explore infrared radiators'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Can Energy Solutions help me compare home energy?',
    answer: 'Yes. Energy Solutions helps homeowners compare household gas and electricity suppliers through a dedicated home energy comparison service. You enter your details, compare suppliers and choose the one that suits your home. Our own in-house team specialises in commercial and business energy procurement, so we direct domestic customers to our approved domestic comparison engine for the fastest and most accurate household rates.',
    category: 'comparison'
  },
  {
    id: 'faq-2',
    question: 'How do I compare home energy suppliers?',
    answer: 'Comparing is fast, 100% online, and takes under 3 minutes. Simply click "Compare Home Energy Suppliers", enter your postcode and a few details about your property (such as current supplier or estimated annual usage), view a transparent list of available fixed and variable tariffs, and select the deal that best fits your household budget.',
    category: 'comparison'
  },
  {
    id: 'faq-3',
    question: 'Who provides the home energy comparison service?',
    answer: 'The comparison engine is powered by an independent, Ofgem-compliant UK domestic comparison partner. This ensures you receive impartial, up-to-the-minute tariff comparisons from all major UK suppliers and independent green energy specialists without any bias.',
    category: 'comparison'
  },
  {
    id: 'faq-4',
    question: 'Does Energy Solutions earn anything from home energy comparisons?',
    answer: 'The comparison service is 100% free for homeowners to use. In line with Ofgem and ASA transparency rules: if you choose to switch your household energy supplier through our partner link, Energy Solutions (ES) Ltd may receive a small referral commission from the comparison provider. This referral fee never increases the price you pay for your energy tariff.',
    category: 'about'
  },
  {
    id: 'faq-5',
    question: 'Who do I contact about my home energy switch?',
    answer: 'Once you choose your new supplier through the comparison service, your switch is handled directly by your chosen energy supplier and the comparison provider. You will receive an immediate confirmation email with your reference number, switch timeline, and direct customer care contact details.',
    category: 'switching'
  },
  {
    id: 'faq-6',
    question: 'Can Energy Solutions help with my business energy?',
    answer: 'Absolutely. Business energy is what our in-house brokerage team does best! If you operate a shop, office, warehouse, restaurant, or multi-site commercial portfolio, our dedicated UK brokers compare bespoke wholesale rates across 30+ UK suppliers with no high-pressure sales. You can click "Get a Business Energy Quote" or call our team directly on 0330 135 8266.',
    category: 'about'
  },
  {
    id: 'faq-7',
    question: 'Will my gas or electricity supply be interrupted when I switch?',
    answer: 'No. Your gas and electricity will never be disconnected or interrupted during a switch. The physical pipes, cables, and meter remain exactly the same — only the company billing you for the units changes.',
    category: 'switching'
  },
  {
    id: 'faq-8',
    question: 'Is there a cooling-off period if I change my mind?',
    answer: 'Yes. All domestic energy switches in the UK are protected by a mandatory 14-day statutory cooling-off period. If you change your mind within 14 days of submitting your switch, you can cancel without any exit fees or penalties.',
    category: 'switching'
  }
];

export const SUPPLIERS = [
  { name: 'British Gas', tag: 'UK Largest', logoText: 'British Gas' },
  { name: 'Octopus Energy', tag: '100% Green Power', logoText: 'Octopus Energy' },
  { name: 'E.ON Next', tag: 'Renewable Electricity', logoText: 'e.on next' },
  { name: 'EDF Energy', tag: 'Low Carbon Pioneer', logoText: 'EDF' },
  { name: 'ScottishPower', tag: '100% Green Generation', logoText: 'ScottishPower' },
  { name: 'OVO Energy', tag: 'Smart Zero Carbon', logoText: 'OVO energy' },
  { name: 'Outfox the Market', tag: 'Competitive Fixed', logoText: 'Outfox' },
  { name: 'Utility Warehouse', tag: 'Multi-Utility Bundle', logoText: 'UW' },
];
