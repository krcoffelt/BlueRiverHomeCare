export const site = {
  name: "Blue River Home Care",
  legalName: "Blue River Home Care LLC",
  url: "https://www.blueriverhomecare.com",
  description:
    "Local, non-medical home care and companionship for older adults and families in Belton and nearby Kansas City, Missouri communities.",
  email: "chris@blueriverhomecare.com",
  phoneMain: "816-641-2881",
  phoneMainE164: "+18166412881",
  phoneMainFormatted: "(816) 641-2881",
  phoneMainHref: "tel:+18166412881",
  phoneMainSmsHref: "sms:+18166412881",
  phoneDirect: "816-291-3734",
  address: {
    street: "8420 Clint Drive, Ste D",
    city: "Belton",
    state: "MO",
    postalCode: "64012",
    country: "US",
  },
  officeAddress: "8420 Clint Drive, Ste D, Belton, MO 64012",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=8420%20Clint%20Drive%20Ste%20D%20Belton%20MO%2064012",
  primaryContact: {
    name: "Chris Jennen",
    role: "Director of Operations",
  },
  secondaryContact: {
    name: "Clayton Rookstool",
    role: "Director of Finance",
  },
};

export const navigation = [
  { label: "Services", href: "/services/" },
  { label: "Service Areas", href: "/service-areas/" },
  { label: "Resources", href: "/resources/" },
  { label: "About", href: "/about/" },
  { label: "FAQ", href: "/faq/" },
];

export const footerNavigation = [
  { label: "In-Home Caregiving", href: "/services/in-home-caregiving/" },
  { label: "Companion Care", href: "/services/companion-care/" },
  { label: "Free Consultation", href: "/consultation/" },
  { label: "Contact", href: "/contact/" },
  { label: "Privacy", href: "/privacy/" },
];

// Keep these out of public copy until Blue River confirms them.
export const TODO_CONFIRM = [
  "Primary public phone strategy: main only or main and direct",
  "Hours and after-hours language",
  "Licensing, bonding, insurance, screening, and training claims",
  "Approval to publish Chris Jennen's headshot",
  "Final social profile URLs",
  "Hosting platform and production form handler",
  "Final legal review of privacy and contact consent language",
];

export const privacyPolicy = {
  collected:
    "We may collect contact information such as your name, phone number, email address, city, contact preferences, and the message you choose to send through this website.",
  uses: [
    "Respond to questions and requests for a care consultation",
    "Communicate using the contact method you select",
    "Operate and improve this website and its inquiry process",
    "Meet applicable legal and recordkeeping obligations",
  ],
  sharing:
    "Blue River Home Care does not sell or rent personal information. Information may be shared with service providers that support website hosting, form delivery, email, or business operations, only as needed to perform those services.",
  sms: "Submitting the care inquiry form does not enroll you in marketing text messages. If you ask Blue River Home Care to contact you by text, message and data rates may apply. You may ask to stop text communication at any time.",
};
