import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/logo.png";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <motion.img
            src={logo}
            alt="P&T Executive Protection"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-32 w-32 object-contain drop-shadow-[0_0_30px_color-mix(in_oklab,var(--accent)_60%,transparent)]"
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 text-center"
          >
            <div className="font-bold tracking-[0.3em] text-foreground text-sm">
              P&amp;T EXECUTIVE
            </div>
            <div className="text-[10px] tracking-[0.5em] text-accent mt-1">
              PROTECTION
            </div>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ delay: 0.6, duration: 1.0, ease: "easeInOut" }}
            className="mt-8 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}