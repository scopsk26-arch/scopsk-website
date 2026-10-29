/**
 * Edit store URLs and contact details here for App Store / Play Store submission.
 * Empty store URLs fall back to the #download section with a “Coming soon” note.
 */
export const site = {
  companyName: 'ScopsK',
  legalName: 'ScopsK',
  tagline: 'Smart supply, quoted and delivered',
  description:
    'B2B procurement marketplace connecting restaurants with suppliers — smart RFQs, ranked quotes, in-app payments, and live delivery.',
  contactEmail: 'hello@scopsk.ae',
  supportEmail: 'support@scopsk.ae',
  phone: '+971 4 000 0000',
  addressLine: 'Dubai, United Arab Emirates',
  supportHours: 'Sun–Thu · 9:00–18:00 GST',
  /** Leave empty until live — buttons link to #download */
  appStoreUrl: '',
  playStoreUrl: '',
  social: {
    website: 'https://scopsk.ae',
  },
} as const;

export type SiteConfig = typeof site;
