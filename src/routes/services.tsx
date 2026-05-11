import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Shield, Users, Car, Camera, KeyRound, PartyPopper, Home, Briefcase, ArrowRight } from "lucide-react";
import cctv from "@/assets/cctv.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — P&T Executive Protection" },
      { name: "description", content: "Executive protection, manned guarding, mobile patrols, CCTV, access control, event, residential security and consulting across the UK." },
      { property: "og:title", content: "Our Services — P&T Executive Protection" },
      { property: "og:description", content: "Comprehensive UK security services tailored to your needs." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Shield, title: "Executive Protection", desc: "Discreet, highly trained close protection officers for VIPs, executives and high-profile individuals." },
  { icon: Users, title: "Manned Guarding", desc: "SIA-licensed officers providing visible, professional on-site security for any environment." },
  { icon: Car, title: "Mobile Patrols", desc: "Scheduled and random patrols across multiple sites for visible deterrence and rapid response." },
  { icon: Camera, title: "CCTV Surveillance", desc: "Modern monitoring solutions with proactive incident detection and reporting." },
  { icon: KeyRound, title: "Access Control", desc: "Managed entry systems, visitor screening, and credential verification." },
  { icon: PartyPopper, title: "Event Security", desc: "Crowd management, VIP escorting and risk assessment for events of all sizes." },
  { icon: Home, title: "Residential Security", desc: "Tailored protection plans for private homes, estates and gated communities." },
  { icon: Briefcase, title: "Security Consulting", desc: "Bespoke threat assessments and security strategy for businesses and individuals." },
];

function Services() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img src={cctv} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        </div>
        <div className="relative container mx-auto px-6 py-28 max-w-5xl">
          <Reveal>
            <div className="text-xs tracking-[0.3em] text-accent mb-3">OUR SERVICES</div>
            <h1 className="text-5xl md:text-6xl font-bold">Security <span className="text-gradient">solutions</span><br/>built around you.</h1>
            <p className="mt-6 max-w-2xl text-muted-foreground">From close protection to full-site security operations, every service is delivered with the highest standards of confidentiality, vigilance, and customer care.</p>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.08}>
              <div className="group h-full rounded-xl border border-border bg-card p-7 hover:border-accent hover:-translate-y-1 hover:shadow-glow transition-all">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <Reveal>
          <div className="rounded-3xl bg-brand p-12 md:p-16 text-center shadow-glow">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Not sure which service fits?</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">We'll build a tailored security plan around your needs — confidential consultation, no obligation.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-background text-foreground font-semibold hover:scale-105 transition-transform">
              Speak to our team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}