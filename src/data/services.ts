import { Shield, Users, Car, Camera, KeyRound, PartyPopper, Home, Briefcase, type LucideIcon } from "lucide-react";
import imgExecutive from "@/assets/service-executive.jpg";
import imgGuarding from "@/assets/service-guarding.jpg";
import imgPatrol from "@/assets/service-patrol.jpg";
import imgCctv from "@/assets/service-cctv.jpg";
import imgAccess from "@/assets/service-access.jpg";
import imgEvent from "@/assets/service-event.jpg";
import imgResidential from "@/assets/service-residential.jpg";
import imgConsulting from "@/assets/service-consulting.jpg";

export type Service = {
  slug: string;
  icon: LucideIcon;
  image: string;
  title: string;
  desc: string;
  overview: string;
  features: string[];
  benefits: string[];
  idealFor: string[];
};

export const services: Service[] = [
  {
    slug: "executive-protection",
    icon: Shield,
    image: imgExecutive,
    title: "Executive Protection",
    desc: "Discreet, highly trained close protection officers for VIPs, executives and high-profile individuals.",
    overview:
      "Our close protection service delivers world-class personal security for executives, VIPs, celebrities, diplomats and high-net-worth individuals. Every detail is planned around your routine, threat profile, and lifestyle — discreet by default, decisive when it matters.",
    features: [
      "SIA-licensed close protection officers",
      "Advance route planning and venue reconnaissance",
      "Secure transport and trained protection drivers",
      "Threat & risk assessments tailored to the principal",
      "24/7 operations and command support",
    ],
    benefits: [
      "Peace of mind for you and your family",
      "Low-profile presence that blends into daily life",
      "Rapid, professional response to any incident",
    ],
    idealFor: ["Executives & business leaders", "Public figures & celebrities", "Diplomats and HNWIs"],
  },
  {
    slug: "manned-guarding",
    icon: Users,
    image: imgGuarding,
    title: "Manned Guarding",
    desc: "SIA-licensed officers providing visible, professional on-site security for any environment.",
    overview:
      "A professional, uniformed security presence to protect your people, premises and assets. Our officers are trained in customer service, conflict management and emergency response — projecting authority without compromising your brand.",
    features: [
      "SIA-licensed, vetted security officers",
      "Front-of-house, concierge and reception cover",
      "Incident reporting and daily occurrence books",
      "Key holding and lock-up / open-up services",
      "Site-specific assignment instructions",
    ],
    benefits: ["Strong visible deterrent", "Improved staff and visitor safety", "Consistent, accountable cover"],
    idealFor: ["Offices & corporate HQs", "Retail & shopping centres", "Warehouses & logistics sites"],
  },
  {
    slug: "mobile-patrols",
    icon: Car,
    image: imgPatrol,
    title: "Mobile Patrols",
    desc: "Scheduled and random patrols across multiple sites for visible deterrence and rapid response.",
    overview:
      "Cost-effective patrol services covering multiple locations with marked vehicles and trained officers. Random and scheduled visits keep would-be intruders guessing while delivering documented checks on your site.",
    features: [
      "Scheduled and randomised patrol patterns",
      "External & internal checks with GPS-logged routes",
      "Alarm response and key holding",
      "Lock-up, open-up and welfare checks",
      "Photographic incident reporting",
    ],
    benefits: ["Affordable alternative to static guards", "Visible deterrent across multiple sites", "Documented evidence of every visit"],
    idealFor: ["Construction sites", "Industrial estates", "Vacant properties"],
  },
  {
    slug: "cctv-surveillance",
    icon: Camera,
    image: imgCctv,
    title: "CCTV Surveillance",
    desc: "Modern monitoring solutions with proactive incident detection and reporting.",
    overview:
      "Modern, intelligence-led CCTV monitoring that combines high-definition cameras, analytics, and trained operators. We watch, verify and respond — turning passive cameras into a proactive security layer.",
    features: [
      "24/7 remote monitoring",
      "AI-assisted intrusion detection",
      "Live audio challenge & verified response",
      "Full incident video evidence packages",
      "System health checks and maintenance",
    ],
    benefits: ["Reduced false alarms", "Faster verified response", "Court-ready evidence when needed"],
    idealFor: ["Distribution centres", "Car dealerships", "Critical infrastructure"],
  },
  {
    slug: "access-control",
    icon: KeyRound,
    image: imgAccess,
    title: "Access Control",
    desc: "Managed entry systems, visitor screening, and credential verification.",
    overview:
      "Control who enters your premises and when. From manned reception checkpoints to fully integrated electronic access systems, we manage credentials, visitors and contractors to keep your site secure and compliant.",
    features: [
      "Visitor screening & ID verification",
      "Pass issuance and credential management",
      "Contractor sign-in and induction support",
      "Integration with electronic access systems",
      "Audit-ready entry & exit logs",
    ],
    benefits: ["Stronger perimeter integrity", "Clear audit trail", "Reduced internal risk"],
    idealFor: ["Corporate offices", "Data centres", "Restricted facilities"],
  },
  {
    slug: "event-security",
    icon: PartyPopper,
    image: imgEvent,
    title: "Event Security",
    desc: "Crowd management, VIP escorting and risk assessment for events of all sizes.",
    overview:
      "From private gatherings to large public events, we deliver end-to-end event security — risk planning, crowd management, VIP escorting, and liaison with venues and authorities.",
    features: [
      "Pre-event risk assessment & planning",
      "Crowd management and stewarding",
      "VIP and artist close protection",
      "Search teams and entry screening",
      "Liaison with police, venues and medics",
    ],
    benefits: ["Safer attendees and staff", "Smooth, professional guest experience", "Reduced operational risk"],
    idealFor: ["Corporate events & conferences", "Private functions & weddings", "Concerts & public gatherings"],
  },
  {
    slug: "residential-security",
    icon: Home,
    image: imgResidential,
    title: "Residential Security",
    desc: "Tailored protection plans for private homes, estates and gated communities.",
    overview:
      "Discreet, tailored protection for your home and family. Whether you need overnight cover, a full estate team or routine welfare checks, we build a plan that fits your property and lifestyle.",
    features: [
      "Static residential security officers",
      "Estate and grounds patrols",
      "Family and household security plans",
      "Integration with CCTV and alarm systems",
      "Concierge-style discreet presence",
    ],
    benefits: ["Round-the-clock peace of mind", "Privacy-first, low-profile cover", "Coordinated household safety"],
    idealFor: ["Private estates", "Gated communities", "Holiday & second homes"],
  },
  {
    slug: "security-consulting",
    icon: Briefcase,
    image: imgConsulting,
    title: "Security Consulting",
    desc: "Bespoke threat assessments and security strategy for businesses and individuals.",
    overview:
      "Independent, expert security advice. We audit your existing arrangements, identify gaps, and design practical, proportionate strategies that protect people, property and reputation.",
    features: [
      "Threat, vulnerability & risk assessments",
      "Security policy and procedure design",
      "Site surveys and physical security reviews",
      "Travel & executive risk advisory",
      "Crisis management and contingency planning",
    ],
    benefits: ["Clarity on real-world risks", "Cost-effective, targeted investment", "Stronger compliance posture"],
    idealFor: ["Businesses scaling operations", "HNW individuals & families", "Organisations entering new markets"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);