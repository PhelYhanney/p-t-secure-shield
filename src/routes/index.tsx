import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield, Eye, Users, Camera, Car, Building, ArrowRight, CheckCircle2 } from "lucide-react";
import hero from "@/assets/hero.jpg";
import team from "@/assets/team.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "P&T Executive Protection — Trusted UK Security" },
      { name: "description", content: "Executive protection, manned guarding, CCTV, mobile patrols and event security across the United Kingdom. 24/7 response." },
    ],
  }),
  component: Index,
});

const highlights = [
  { icon: Shield, title: "Executive Protection", desc: "Discreet close protection for high-profile clients." },
  { icon: Users, title: "Manned Guarding", desc: "SIA-trained officers on-site, day and night." },
  { icon: Camera, title: "CCTV Surveillance", desc: "Modern monitoring and rapid incident response." },
  { icon: Car, title: "Mobile Patrols", desc: "Visible deterrence across multiple sites." },
  { icon: Building, title: "Residential Security", desc: "Tailored protection for homes & estates." },
  { icon: Eye, title: "Event Security", desc: "Crowd control and VIP escorting." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/10" />
        </div>
        <div className="relative container mx-auto px-6 py-32 md:py-44 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs tracking-[0.25em] mb-6">
              <Shield className="h-3 w-3" /> UK SECURITY EXPERTS
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Protection you can <span className="text-gradient">trust</span>, <br className="hidden md:block" />vigilance you can feel.
            </h1>
            <p className="mt-6 max-w-2xl text-muted-foreground text-slate-50">
              P&T Executive Protection delivers reliable, discreet, and high-quality security solutions for individuals, businesses, and organizations across the United Kingdom.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform">
                Request a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-border hover:border-accent text-foreground font-semibold transition-colors">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-border bg-card/30">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 text-center">
          {[
            ["24/7", "Response"],
            ["100%", "SIA Licensed"],
            ["UK-Wide", "Coverage"],
            ["Discreet", "& Professional"],
          ].map(([a, b], i) => (
            <Reveal key={a} delay={i * 0.1}>
              <div className="text-3xl md:text-4xl font-bold text-gradient">{a}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">{b}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="container mx-auto px-6 py-24">
        <Reveal className="max-w-2xl mb-14">
          <div className="text-xs tracking-[0.3em] text-accent mb-3">WHAT WE DO</div>
          <h2 className="text-4xl md:text-5xl font-bold">Comprehensive security, tailored to you.</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.08}>
              <div className="group h-full rounded-xl border border-border bg-card p-8 hover:border-accent transition-all hover:-translate-y-1 hover:shadow-glow">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <h.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{h.title}</h3>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
            See all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Why us */}
      <section className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
        <Reveal>
          <img src={team} alt="P&T Executive Protection team" loading="lazy" width={1600} height={1000} className="rounded-2xl shadow-elegant border border-border" />
        </Reveal>
        <Reveal delay={0.15}>
          <div className="text-xs tracking-[0.3em] text-accent mb-3">WHY P&T</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Built on trust, driven by vigilance.</h2>
          <p className="text-muted-foreground mb-6">
            Every client has unique security needs. That's why we provide customized protection services — built around your environment, your risks, and your priorities.
          </p>
          <ul className="space-y-3">
            {["Highly trained, SIA-licensed personnel", "Modern security strategies & technology", "Strict confidentiality & professionalism", "Rapid response, operational excellence"].map((t) => (
              <li key={t} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-accent" /> <span>{t}</span></li>
            ))}
          </ul>
          <Link to="/who-we-are" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:scale-105 transition-transform">
            Who We Are <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-24">
        <Reveal>
          <div className="rounded-3xl bg-brand p-12 md:p-16 text-center shadow-glow relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,white,transparent_50%)]" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Need protection you can rely on?</h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">Speak to our team about a tailored security plan — confidential, no obligation.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-background text-foreground font-semibold hover:scale-105 transition-transform">
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
