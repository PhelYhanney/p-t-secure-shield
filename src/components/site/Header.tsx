import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { to: "/", label: "Home" },
  { to: "/who-we-are", label: "Who We Are" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/75 border-b border-border">
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="P&T Executive Protection" className="h-12 w-12 object-contain transition-transform group-hover:scale-110" />
          <div className="hidden sm:block leading-tight">
            <div className="font-bold text-foreground tracking-wide">P&T EXECUTIVE</div>
            <div className="text-[10px] tracking-[0.3em] text-accent">PROTECTION</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="relative text-sm font-semibold tracking-wide text-muted-foreground hover:text-foreground transition-colors data-[status=active]:text-accent group"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full group-data-[status=active]:w-full" />
            </Link>
          ))}
        </nav>

        <a href="tel:+440000000000" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-md bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-glow hover:scale-105 transition-transform">
          <Phone className="h-4 w-4" /> 24/7 Hotline
        </a>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="md:hidden overflow-hidden border-t border-border">
            <div className="flex flex-col p-6 gap-4">
              {nav.map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-foreground font-semibold">{n.label}</Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}