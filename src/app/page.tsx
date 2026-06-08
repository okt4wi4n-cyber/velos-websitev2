'use client';

import { motion } from 'framer-motion';

const services = [
{
title: 'Strony WWW',
desc: 'Nowoczesne strony internetowe zoptymalizowane pod sprzedaż i szybkość działania.',
},
{
title: 'Automatyzacje AI',
desc: 'Automatyzacja procesów biznesowych oraz inteligentna obsługa klientów.',
},
{
title: 'Systemy Web',
desc: 'Dedykowane rozwiązania dopasowane do potrzeb Twojej firmy.',
},
];

export default function Home() {
return ( <main className="min-h-screen bg-black text-white overflow-hidden"> <div className="fixed inset-0 -z-10"> <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_40%)]" /> </div>

```
  <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
      <h1 className="text-2xl font-black tracking-tight">
        VELOS.
      </h1>

      <div className="hidden md:flex gap-8 text-neutral-400">
        <a href="#oferta">Oferta</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#kontakt">Kontakt</a>
      </div>

      <a
        href="#kontakt"
        className="bg-white text-black px-5 py-2 rounded-full font-semibold"
      >
        Darmowa wycena
      </a>
    </div>
  </nav>

  <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="inline-flex px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-neutral-300 mb-8">
        Web Development • AI • Automatyzacje
      </div>

      <h1 className="text-6xl md:text-8xl font-black leading-none max-w-6xl">
        Budujemy
        <span className="text-neutral-500"> nowoczesne </span>
        rozwiązania cyfrowe dla ambitnych firm.
      </h1>

      <p className="text-neutral-400 text-xl max-w-2xl mt-8">
        Tworzymy strony internetowe, automatyzacje AI i systemy,
        które pomagają zdobywać klientów i rozwijać biznes szybciej.
      </p>

      <div className="flex flex-wrap gap-4 mt-10">
        <a
          href="#kontakt"
          className="bg-white text-black px-8 py-4 rounded-full font-bold"
        >
          Rozpocznij projekt
        </a>

        <a
          href="#oferta"
          className="border border-white/10 px-8 py-4 rounded-full"
        >
          Poznaj ofertę
        </a>
      </div>
    </motion.div>
  </section>

  <section className="max-w-7xl mx-auto px-6 mb-28">
    <div className="grid md:grid-cols-3 gap-5">
      <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
        <h3 className="text-5xl font-black">99.9%</h3>
        <p className="text-neutral-500 mt-2">
          Dostępność usług
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
        <h3 className="text-5xl font-black">&lt;1s</h3>
        <p className="text-neutral-500 mt-2">
          Czas ładowania
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
        <h3 className="text-5xl font-black">24/7</h3>
        <p className="text-neutral-500 mt-2">
          Wsparcie techniczne
        </p>
      </div>
    </div>
  </section>

  <section
    id="oferta"
    className="max-w-7xl mx-auto px-6 mb-32"
  >
    <h2 className="text-5xl font-black mb-12">
      Nasze usługi
    </h2>

    <div className="grid md:grid-cols-3 gap-6">
      {services.map((service) => (
        <div
          key={service.title}
          className="p-8 rounded-3xl bg-white/5 border border-white/10"
        >
          <h3 className="text-2xl font-bold mb-4">
            {service.title}
          </h3>

          <p className="text-neutral-400">
            {service.desc}
          </p>
        </div>
      ))}
    </div>
  </section>

  <section
    id="portfolio"
    className="max-w-7xl mx-auto px-6 mb-32"
  >
    <h2 className="text-5xl font-black mb-12">
      Portfolio
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="h-72 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10 p-8">
        <h3 className="text-2xl font-bold">
          Sklep internetowy
        </h3>
        <p className="text-neutral-400 mt-3">
          Projekt nastawiony na maksymalizację sprzedaży.
        </p>
      </div>

      <div className="h-72 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10 p-8">
        <h3 className="text-2xl font-bold">
          System AI
        </h3>
        <p className="text-neutral-400 mt-3">
          Inteligentna automatyzacja procesów.
        </p>
      </div>
    </div>
  </section>

  <section className="max-w-7xl mx-auto px-6 mb-32">
    <h2 className="text-5xl font-black mb-12">
      Dlaczego VELOS?
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
        <h3 className="text-2xl font-bold mb-4">
          Nowoczesny design
        </h3>

        <p className="text-neutral-400">
          Strony projektowane zgodnie z aktualnymi trendami.
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
        <h3 className="text-2xl font-bold mb-4">
          Maksymalna wydajność
        </h3>

        <p className="text-neutral-400">
          Optymalizacja pod szybkość i SEO.
        </p>
      </div>
    </div>
  </section>

  <section
    id="kontakt"
    className="max-w-5xl mx-auto px-6 pb-32"
  >
    <div className="bg-white text-black rounded-[40px] p-12 text-center">
      <h2 className="text-5xl font-black mb-6">
        Gotowy na rozwój?
      </h2>

      <p className="text-neutral-700 text-lg mb-8">
        Napisz do nas i otrzymaj darmową wycenę projektu.
      </p>

      <a
        href="mailto:kontakt@velos.dev"
        className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold"
      >
        Skontaktuj się
      </a>
    </div>
  </section>
</main>
```

);
}
