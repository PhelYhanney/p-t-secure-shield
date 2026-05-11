import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ShieldCheck, BadgeCheck, Lock, Clock, Eye, HeartHandshake } from "lucide-react";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/who-we-are")({
  head: () => ({
    meta: [
      { title: "Who We Are — P&T Executive Protection" },
      { name: "description", content: "Learn about P&T Executive Protection — our mission, vision and core values driving trusted UK security services." },
      { property: "og:title", content: "Who We Are — P&T Executive Protection" },
      { property: "og:description", content: "Mission, vision and values behind the UK's trusted security partner." },
    ],
  }),
  component: WhoWeAre,
});

const values = [
  { icon: ShieldCheck, label: "Integrity" },
  { icon: BadgeCheck, label: "Professionalism" },
  { icon: Lock, label: "Confidentiality" },
  { icon: Clock, label: "Reliability" },
  { icon: Eye, label: "Vigilance" },
  { icon: HeartHandshake, label: "Client Commitment" },
];

function WhoWeAre() {
  return (
    <>
      <section className="container mx-auto px-6 py-24 max-w-5xl">
        <Reveal>
          <div className="text-xs tracking-[0.3em] text-accent mb-3">WHO WE ARE</div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">A professional partner in <span className="text-gradient">protection</span>.</h1>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 grid md:grid-cols-2 gap-10 items-start">
            <img src={team} alt="P&T security team" loading="lazy" width={1600} height={1000} className="rounded-2xl border border-border shadow-elegant" />
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>P&T Executive Protection is a professional security company committed to providing reliable, discreet, and high-quality security solutions for individuals, businesses, and organizations across the United Kingdom.</p>
              <p>We specialize in protecting people, property, and assets through a combination of highly trained personnel, modern security strategies, and a strong commitment to professionalism and integrity.</p>
              <p>We understand that every client has unique security needs. That is why we provide customized protection services tailored to private individuals, corporate environments, residential properties, construction sites, retail businesses, and special events.</p>
              <p>With a focus on trust, rapid response, and operational excellence, P&T Executive Protection aims to become a respected name in the security industry by delivering dependable protection clients can rely on 24 hours a day.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-6">
        <Reveal>
          <div className="rounded-2xl border border-border bg-card p-10 h-full hover:border-accent transition-colors">
            <div className="text-xs tracking-[0.3em] text-accent mb-3">OUR MISSION</div>
            <p className="text-2xl font-semibold leading-snug">To provide professional, dependable, and effective security services that protect lives, property, and businesses while building lasting trust with our clients.</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-brand p-10 h-full shadow-glow">
            <div className="text-xs tracking-[0.3em] text-primary-foreground/70 mb-3">OUR VISION</div>
            <p className="text-2xl font-semibold text-primary-foreground leading-snug">To be recognized as a leading security provider known for professionalism, integrity, reliability, and excellence in protection services.</p>
          </div>
        </Reveal>
      </section>

      <section className="container mx-auto px-6 py-24">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs tracking-[0.3em] text-accent mb-3">CORE VALUES</div>
          <h2 className="text-4xl md:text-5xl font-bold">The principles that guide every assignment.</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <Reveal key={v.label} delay={i * 0.07}>
              <div className="group rounded-xl border border-border bg-card p-8 hover:border-accent hover:-translate-y-1 transition-all flex items-center gap-5">
                <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <v.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-xl font-semibold">{v.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}