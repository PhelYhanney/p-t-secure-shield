import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, ArrowLeft, Check, ShieldCheck } from "lucide-react";
import { services, getService, type Service } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = getService(params.slug);
    const title = s ? `${s.title} — P&T Executive Protection` : "Service — P&T Executive Protection";
    const description = s?.desc ?? "Professional security services across the UK.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(s ? [{ property: "og:image", content: s.image }, { name: "twitter:image", content: s.image }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="container mx-auto px-6 py-32 text-center">
      <h1 className="text-4xl font-bold mb-4">Service not found</h1>
      <Link to="/services" className="text-accent hover:underline">Back to all services</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container mx-auto px-6 py-32 text-center">
      <h1 className="text-2xl font-semibold mb-2">Something went wrong</h1>
      <p className="text-muted-foreground mb-6">{error.message}</p>
      <Link to="/services" className="text-accent hover:underline">Back to services</Link>
    </div>
  ),
});

function ServiceDetail() {
  const { service: s } = Route.useLoaderData() as { service: Service };
  const Icon = s.icon;
  const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img src={s.image} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        </div>
        <div className="relative container mx-auto px-6 py-24 max-w-5xl">
          <Reveal>
            <Link to="/services" className="inline-flex items-center gap-2 text-xs tracking-[0.3em] text-accent mb-6 hover:gap-3 transition-all">
              <ArrowLeft className="h-3 w-3" /> ALL SERVICES
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                <Icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="text-xs tracking-[0.3em] text-muted-foreground">SERVICE</div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">{s.title}</h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{s.desc}</p>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{s.overview}</p>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">What's included</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-3 items-start rounded-lg border border-border bg-card p-4">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Key benefits</h2>
              <ul className="space-y-3">
                {s.benefits.map((b) => (
                  <li key={b} className="flex gap-3 items-start">
                    <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside className="space-y-6">
            <Reveal>
              <div className="rounded-xl border border-border bg-card overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full aspect-[4/3] object-cover" />
                <div className="p-6">
                  <h3 className="font-semibold mb-3">Ideal for</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {s.idealFor.map((i) => (
                      <li key={i} className="flex gap-2 items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-xl bg-brand p-6 shadow-glow">
                <h3 className="text-primary-foreground font-semibold text-lg mb-2">Get a free quote</h3>
                <p className="text-primary-foreground/80 text-sm mb-4">Confidential consultation, no obligation.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-background text-foreground font-semibold hover:scale-105 transition-transform text-sm">
                  Contact us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24 max-w-6xl">
        <Reveal>
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Related services</h2>
            <Link to="/services" className="text-sm text-accent hover:underline">View all</Link>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((r, i) => (
            <Reveal key={r.slug} delay={i * 0.08}>
              <Link
                to="/services/$slug"
                params={{ slug: r.slug }}
                className="group block h-full rounded-xl border border-border bg-card overflow-hidden hover:border-accent hover:-translate-y-1 hover:shadow-glow transition-all"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img src={r.image} alt={r.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}