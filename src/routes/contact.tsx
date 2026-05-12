import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — P&T Executive Protection" },
      { name: "description", content: "Get in touch with P&T Executive Protection in Worksop, UK. 24/7 security consultations and rapid response." },
      { property: "og:title", content: "Contact P&T Executive Protection" },
      { property: "og:description", content: "Reach our UK security team for a confidential consultation." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="container mx-auto px-6 py-24 max-w-6xl">
      <Reveal>
        <div className="text-xs tracking-[0.3em] text-accent mb-3">CONTACT</div>
        <h1 className="text-5xl md:text-6xl font-bold">Let's talk <span className="text-gradient">protection</span>.</h1>
        <p className="mt-5 text-muted-foreground max-w-2xl">Speak with our team about a tailored security plan. All enquiries are handled with complete confidentiality.</p>
      </Reveal>

      <div className="mt-14 grid lg:grid-cols-5 gap-8">
        <Reveal className="lg:col-span-2 space-y-5">
          {[
            { icon: MapPin, label: "Address", value: "Queens Court, 1 Queen St, Worksop S80 2AN, United Kingdom" },
            { icon: Phone, label: "Phone", value: "Available 24/7" },
            { icon: Mail, label: "Email", value: "info@ptsecurityuk.com" },
            { icon: Clock, label: "Hours", value: "24 hours a day, 7 days a week" },
          ].map((c) => (
            <div key={c.label} className="flex gap-4 p-6 rounded-xl border border-border bg-card hover:border-accent transition-colors">
              <div className="h-11 w-11 shrink-0 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <c.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs tracking-[0.2em] text-accent">{c.label.toUpperCase()}</div>
                <div className="mt-1 text-foreground">{c.value}</div>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-3">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-2xl border border-border bg-card p-8 space-y-5 shadow-elegant"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <Field label="Phone" name="phone" />
            <Field label="Service of interest" name="service" />
            <div>
              <label className="text-xs tracking-[0.2em] text-muted-foreground">MESSAGE</label>
              <textarea required rows={5} className="mt-2 w-full rounded-md bg-background border border-border px-4 py-3 focus:border-accent focus:outline-none transition-colors resize-none" />
            </div>
            <button type="submit" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform">
              Send Enquiry
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            {sent && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-accent text-sm">
                Thank you — we'll be in touch shortly.
              </motion.div>
            )}
          </form>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="mt-16 rounded-2xl overflow-hidden border border-border shadow-elegant">
          <iframe
            title="P&T Executive Protection location"
            src="https://www.google.com/maps?q=Queens+Court,+1+Queen+St,+Worksop+S80+2AN,+UK&output=embed"
            className="w-full h-[400px] grayscale-[40%] contrast-110"
            loading="lazy"
          />
        </div>
      </Reveal>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs tracking-[0.2em] text-muted-foreground">{label.toUpperCase()}</label>
      <input
        required
        type={type}
        name={name}
        className="mt-2 w-full rounded-md bg-background border border-border px-4 py-3 focus:border-accent focus:outline-none transition-colors"
      />
    </div>
  );
}