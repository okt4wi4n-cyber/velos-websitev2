'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white p-6 md:p-12 font-sans">
      
      {/* Nawigacja */}
      <nav className="flex justify-between items-center max-w-6xl mx-auto mb-20">
        <div className="text-xl font-bold tracking-tighter">VELOS.</div>
        <div className="flex gap-6 text-sm text-neutral-400">
          <a href="mailto:kontakt@velos.dev" className="bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 transition">Start Project</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center mb-32">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
          Twoja wizja, <span className="text-neutral-500">zoptymalizowana technologicznie.</span>
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
          Projektujemy cyfrowe fundamenty dla firm, które nie uznają kompromisów w wydajności.
        </p>
      </section>

      {/* Bento Grid - Nowoczesny standard */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[600px]">
        
        {/* Główny box */}
        <div className="md:col-span-2 p-8 bg-neutral-900/30 border border-white/5 rounded-3xl flex flex-col justify-end">
          <h2 className="text-3xl font-semibold mb-2">Wydajność to waluta.</h2>
          <p className="text-neutral-400">Budujemy systemy, które ładują się natychmiast i skalują bez ograniczeń.</p>
        </div>

        {/* Małe boxy */}
        <div className="p-8 bg-neutral-900/30 border border-white/5 rounded-3xl">
          <h3 className="text-xl mb-2">Boty AI</h3>
          <p className="text-sm text-neutral-500">Automatyzacja, która pracuje, gdy Ty śpisz.</p>
        </div>

        <div className="p-8 bg-neutral-900/30 border border-white/5 rounded-3xl">
          <h3 className="text-xl mb-2">Infrastruktura</h3>
          <p className="text-sm text-neutral-500">Zero przestojów, 100% kontroli.</p>
        </div>

        <div className="md:col-span-2 p-8 bg-white text-black rounded-3xl flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">Gotowy na przeskok?</h3>
            <p className="text-neutral-600">Porozmawiajmy o Twoim projekcie.</p>
          </div>
          <button className="bg-black text-white px-6 py-3 rounded-full font-bold">Kontakt</button>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto mt-20 text-center text-neutral-700 text-sm">
        © 2026 VELOS. All rights reserved.
      </footer>
    </main>
  );
}