import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";
import cctv from "@/assets/cctv.jpg";
import { services } from "@/data/services";

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

function Services() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img src={cctv} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
        </div>
        <div className="relative container mx-auto px-6 py-28 max-w-5xl">
          <Reveal>
            <div className="text-xs tracking-[0.3em] text-accent mb-3">OUR SERVICES</div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-50">Security <span className="text-gradient">solutions</span><br/>built around you.</h1>
            <p className="mt-6 max-w-2xl text-muted-foreground">From close protection to full-site security operations, every service is delivered with the highest standards of confidentiality, vigilance, and customer care.</p>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.08}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group block h-full rounded-xl border border-border bg-card overflow-hidden hover:border-accent hover:-translate-y-1 hover:shadow-glow transition-all flex flex-col"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={768}
                    height={512}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 h-11 w-11 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                    <s.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-accent group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
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