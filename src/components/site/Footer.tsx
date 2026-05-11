import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Shield } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 mt-24">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="" className="h-12 w-12" />
            <div>
              <div className="font-bold tracking-wide">P&T EXECUTIVE</div>
              <div className="text-[10px] tracking-[0.3em] text-accent">PROTECTION</div>
            </div>
          </div>
          <p className="text-muted-foreground text-sm max-w-md">
            Professional security solutions across the United Kingdom. Protecting people, property and assets — 24 hours a day.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-foreground">Navigate</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/who-we-are" className="hover:text-accent">Who We Are</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" /> Queens Court, 1 Queen St, Worksop S80 2AN, UK</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-accent shrink-0 mt-0.5" /> 24/7 Available</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-accent shrink-0 mt-0.5" /> info@ptexecutiveprotection.co.uk</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
        <Shield className="h-3 w-3 text-accent" /> © {new Date().getFullYear()} P&T Executive Protection. All rights reserved.
      </div>
    </footer>
  );
}