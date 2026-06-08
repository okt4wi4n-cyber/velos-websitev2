'use client';

import { motion } from 'framer-motion';

export default function Home() {
  const services = [
    { title: "Automatyzacja Discord", desc: "Systemy ticketowe, weryfikacje, boty wspierające moderację 24/7." },
    { title: "Infrastruktura MC", desc: "Optymalizacja serwerów, skrypty customowe (KOTH, Boss, Economy)." },
    { title: "Platformy Web", desc: "Nowoczesne panele zarządzania i strony typu SaaS." },
    { title: "Bezpieczeństwo", desc: "Audyty, zabezpieczenia anty-bot i systemy logowania." }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white p-6 md:p-12 font-sans selection:bg-white selection:text-black">
      
      {/* Header */}
      <nav className="flex justify-between items-center max-w-7xl mx-auto mb-32">
        <div className="text-2xl font-bold tracking-tighter">VELOS<span className="text-neutral-600">.STUDIO</span></div>
        <div className="flex gap-8 items-center">
          <a href="#services" className="text-sm text-neutral-400 hover:text-white transition">Usługi</a>
          <a href="mailto:velos.studio@gmail.com" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-neutral-200 transition">Kontakt</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto text-center mb-40">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="px-4 py-1 rounded-full border border-neutral-800 text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6 inline-block">Dostępni do współpracy</span>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
            Architekci Twojego <br/><span className="text-neutral-600">cyfrowego wzrostu.</span>
          </h1>
          <p className="text-neutral-400 text-xl max-w-2xl mx-auto mb-12">
            Tworzymy systemy, które eliminują ręczną pracę, zwiększają skalowalność serwerów i budują profesjonalny wizerunek Twojej marki.
          </p>
        </motion.div>
      </section>

      {/* Services Bento Grid */}
      <section id="services" className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mb-40">
        <div className="md:col-span-4 mb-8">
            <h2 className="text-sm uppercase tracking-widest text-neutral-500 font-bold">Nasze rozwiązania</h2>
        </div>
        
        {services.map((s, i) => (
          <div key={i} className="p-8 bg-neutral-900/30 border border-white/5 rounded-[2rem] h-64 flex flex-col justify-between hover:border-white/10 transition">
            <div className="w-10 h-10 bg-white/5 rounded-full" />
            <div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-neutral-500">{s.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto mb-40">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold tracking-tighter mb-6">Dlaczego VELOS?</h2>
            <ul className="space-y-6 text-neutral-400 text-lg">
              <li><strong className="text-white">Skalowalność:</strong> Budujemy rozwiązania, które obsłużą 10 i 10,000 użytkowników.</li>
              <li><strong className="text-white">Szybkość wdrożenia:</strong> Rozumiemy tempo branży gamingowej i SaaS.</li>
              <li><strong className="text-white">Autorskie podejście:</strong> Nie korzystamy z gotowców, które lagują serwer.</li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 rounded-[2rem] h-[400px] border border-white/5 p-10 flex items-center justify-center">
            <p className="text-neutral-600 italic">"VELOS to standard, którego wymagają najlepsi."</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto p-16 md:p-24 bg-white text-black rounded-[3rem] text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Gotowy na kolejny etap?</h2>
        <p className="text-xl text-neutral-700 mb-12 max-w-xl mx-auto">Przekonajmy się, jak VELOS może przyspieszyć Twój projekt. Pierwsza konsultacja jest darmowa.</p>
        <a href="mailto:velos.studio@gmail.com" className="inline-block bg-black text-white px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition">Skontaktuj się</a>
      </section>

      <footer className="max-w-7xl mx-auto mt-32 py-12 border-t border-white/5 text-center text-neutral-700 text-xs uppercase tracking-widest font-bold">
        © 2026 VELOS Studio. All rights reserved.
      </footer>
    </main>
  );
}