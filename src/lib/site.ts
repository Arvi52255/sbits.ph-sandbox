// src/lib/site.ts
// Single source of truth for editable site content.
// Update the copy here — company details, services, nav — and it flows through the whole site.
// NOTE: placeholder copy below (name expansion, address, numbers) should be swapped for the
// real brand facts before launch. See SETUP_NOTES.md.

export const site = {
  name: "SBITS",
  fullName: "SBITS — Smart Business IT Solutions",
  tagline: "IT infrastructure, software, and support built for Philippine businesses.",
  description:
    "SBITS designs, builds, and supports the IT systems Philippine businesses run on — networks, software, cloud, and helpdesk support, delivered by a local team that answers the phone.",
  url: "https://sbits.ph",
  email: "hello@sbits.ph",
  supportEmail: "support@sbits.ph",
  phone: "+63 2 8123 4567",
  phoneHref: "+6328123457",
  mobile: "+63 917 000 0000",
  address: "5th Floor, Cityland Pasong Tamo Tower, Makati City, Metro Manila, Philippines",
  hours: "Mon–Fri, 8:00 AM–6:00 PM (PHT) · 24/7 for Managed Support clients",
  social: {
    facebook: "https://facebook.com/sbits.ph",
    linkedin: "https://linkedin.com/company/sbits-ph",
  },
} as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  bullets: string[];
  /** Path under /public/images/services/**, e.g. "/images/services/cloud-solutions.svg" */
  icon: string;
};

export const services: Service[] = [
  {
    slug: "managed-it-support",
    name: "Managed IT Support",
    short: "A helpdesk and IT team on call, without the full-time headcount.",
    description:
      "Day-to-day monitoring, patching, and troubleshooting for your workstations, servers, and network, backed by a helpdesk your staff can actually reach.",
    bullets: [
      "Remote + on-site helpdesk with tracked response times",
      "24/7 monitoring and patch management",
      "Vendor and warranty coordination on your behalf",
    ],
      icon: "/images/services/managed-it-support.svg",
  },
  {
    slug: "network-infrastructure",
    name: "Network & Infrastructure",
    short: "Wired, wireless, and server infrastructure that stays up.",
    description:
      "Structured cabling, business Wi-Fi, firewalls, and server rooms designed for the way your business actually operates — from a single office to multi-branch setups.",
    bullets: [
      "Network design, cabling, and Wi-Fi rollouts",
      "Firewall, VPN, and site-to-site connectivity",
      "Server, storage, and backup infrastructure",
    ],
      icon: "/images/services/network-infrastructure.svg",
  },
  {
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    short: "Migrate, host, and manage workloads in the cloud with a plan.",
    description:
      "Microsoft 365 and Google Workspace rollouts, cloud server migration, and ongoing cost and access management, so cloud adoption doesn't outrun your control over it.",
    bullets: [
      "Microsoft 365 / Google Workspace setup & migration",
      "Cloud server and storage migration",
      "Cost, access, and license management",
    ],
      icon: "/images/services/cloud-solutions.svg",
  },
  {
    slug: "software-development",
    name: "Software & Web Development",
    short: "Custom web apps, internal tools, and business systems.",
    description:
      "From customer-facing websites to internal tools that replace spreadsheets — built, deployed, and maintained by the same team that supports your infrastructure.",
    bullets: [
      "Business websites and web applications",
      "Internal tools, dashboards, and integrations",
      "POS, inventory, and booking systems",
    ],
      icon: "/images/services/software-development.svg",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    short: "Practical security for real-world Philippine SMEs.",
    description:
      "Endpoint protection, email security, staff awareness training, and backup/disaster-recovery planning, scoped to your actual risk rather than an enterprise checklist.",
    bullets: [
      "Endpoint & email threat protection",
      "Backup and disaster recovery planning",
      "Staff security awareness training",
    ],
      icon: "/images/services/cybersecurity.svg",
  },
  {
    slug: "it-consulting",
    name: "IT Consulting & Audits",
    short: "An outside, honest read on your current setup.",
    description:
      "IT infrastructure audits, budgeting, and roadmaps for businesses that need a second opinion before the next big purchase or a growth-stage rebuild.",
    bullets: [
      "Infrastructure & security audits",
      "IT budgeting and technology roadmaps",
      "Vendor evaluation and procurement support",
    ],
      icon: "/images/services/it-consulting.svg",
  },
];

export type Partner = {
  name: string;
  category: string;
};

export const partners: Partner[] = [
  { name: "Microsoft Partner Network", category: "Cloud & Productivity" },
  { name: "Ubiquiti", category: "Networking Hardware" },
  { name: "Fortinet", category: "Security Appliances" },
  { name: "Google Workspace", category: "Cloud & Productivity" },
  { name: "Dell Technologies", category: "Servers & Hardware" },
  { name: "Synology", category: "Storage & Backup" },
];

export type Industry = {
  name: string;
  description: string;
};

export const industries: Industry[] = [
  { name: "Retail & F&B", description: "POS uptime, multi-branch networking, and inventory systems." },
  { name: "BPO & Offices", description: "High-density Wi-Fi, VoIP, and helpdesk SLAs for seat-based teams." },
  { name: "Logistics", description: "Site-to-site connectivity and mobile device management across branches." },
  { name: "Professional Services", description: "Secure document handling, email security, and cloud collaboration." },
];

export const quoteServiceOptions = services.map((s) => s.name).concat("Not sure yet / general inquiry");

export const budgetRanges = [
  "Under ₱50,000",
  "₱50,000 – ₱150,000",
  "₱150,000 – ₱500,000",
  "₱500,000+",
  "Ongoing monthly support (retainer)",
  "Not sure yet",
];

export const timelines = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3+ months / just researching",
];
