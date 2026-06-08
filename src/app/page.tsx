'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black font-sans">
      
      {/* Nawigacja - Premium Minimalizm */}
      <nav className="flex items-center justify-between px-12 py-8 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter">VELOS</div>
        <div className="flex gap-10 text-sm uppercase tracking-widest text-neutral-500">
          <a href="#oferta" className="hover:text-white transition-colors">Oferta</a>
          <a href="mailto:contact@velos.dev" className="text-white border-b border-white">Kontakt</a>
        </div>
      </nav>

      {/* Hero - Skupienie na wartości */}
      <section className="flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500"
        >
          Partner Technologiczny Twojego Biznesu
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-medium tracking-tight mb-8"
        >
          Skalujemy Twoją <br/> infrastrukturę cyfrową.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-neutral-400 max-w-xl mb-12 leading-relaxed"
        >
          Dostarczamy wysokowydajne rozwiązania software'owe i infrastrukturę klasy korporacyjnej. 
          Zamieniamy wyzwania techniczne w Twoją przewagę rynkową.
        </motion.p>
      </section>

      {/* Oferta - Język korzyści */}
      <section id="oferta" className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-8">
        {[
          { title: "Architektura Systemów", desc: "Optymalizujemy przepływ danych i eliminujemy wąskie gardła." },
          { title: "Rozwój Produktu", desc: "Tworzymy narzędzia, które pracują dla Ciebie 24/7." },
          { title: "Infrastruktura", desc: "Stabilność klasy korporacyjnej dla najbardziej wymagających projektów." }
        ].map((item, idx) => (
          <div key={idx} className="p-8 border border-neutral-800 rounded-[20px] bg-neutral-900/20 hover:border-neutral-600 transition-colors">
            <h3 className="text-xl font-medium mb-4">{item.title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-12 py-12 border-t border-neutral-900 flex justify-between items-center text-xs text-neutral-600">
        <p>&copy; {new Date().getFullYear()} VELOS. All rights reserved.</p>
        <p>BUILDING THE FUTURE</p>
      </footer>
    </main>
  );
}