```tsx
'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#000,#050505,#000)]" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-tight">
            VELOS.
          </h1>

          <a
            href="#kontakt"
            className="px-5 py-2 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
          >
            Darmowa wycena
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-neutral-300">
            Strony WWW • Automatyzacje • AI
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none max-w-5xl">
            Tworzymy
            <span className="text-neutral-500"> nowoczesne </span>
            rozwiązania,
            które zdobywają klientów.
          </h1>

          <p className="text-neutral-400 text-xl mt-8 max-w-2xl">
            Projektujemy szybkie strony internetowe, systemy
            automatyzacji i rozwiązania AI dla firm, które chcą
            rozwijać się szybciej od konkurencji.
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
              Zobacz ofertę
            </a>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            ['<1s', 'Czas ładowania'],
            ['24/7', 'Wsparcie'],
            ['99.9%', 'Dostępność']
          ].map(([value, label]) => (
            <div
              key={label}
              className="p-8 rounded-3xl border border-white/5 bg-white/[0.03]"
            >
              <h3 className="text-5xl font-black">{value}</h3>
              <p className="text-neutral-500 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Oferta */}
      <section
        id="oferta"
        className="max-w-7xl mx-auto px-6 mb-32"
      >
        <h2 className="text-5xl font-black mb-12">
          Nasze usługi
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5">
            <h3 className="text-2xl font-bold mb-4">
              Strony WWW
            </h3>
            <p className="text-neutral-400">
              Nowoczesne strony internetowe zoptymalizowane pod
              sprzedaż i SEO.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5">
            <h3 className="text-2xl font-bold mb-4">
              Boty AI
            </h3>
            <p className="text-neutral-400">
              Automatyczna obsługa klientów i inteligentne
              systemy wspomagające biznes.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5">
            <h3 className="text-2xl font-bold mb-4">
              Automatyzacje
            </h3>
            <p className="text-neutral-400">
              Eliminujemy ręczną pracę i oszczędzamy Twój czas.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <h2 className="text-5xl font-black mb-12">
          Wybrane projekty
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="h-80 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 p-8">
            <h3 className="text-2xl font-bold">
              E-commerce
            </h3>
          </div>

          <div className="h-80 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 p-8">
            <h3 className="text-2xl font-bold">
              System AI
            </h3>
          </div>
        </div>
      </section>

      {/* Opinie */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <h2 className="text-5xl font-black mb-12">
          Opinie klientów
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5">
            <p className="text-neutral-300 text-lg">
              "Profesjonalna realizacja. Strona działa błyskawicznie
              i wygląda świetnie."
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5">
            <p className="text-neutral-300 text-lg">
              "Automatyzacja zaoszczędziła nam wiele godzin pracy
              tygodniowo."
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="kontakt"
        className="max-w-5xl mx-auto px-6 pb-32 text-center"
      >
        <div className="p-12 rounded-[40px] bg-white text-black">
          <h2 className="text-5xl font-black mb-4">
            Gotowy na rozwój?
          </h2>

          <p className="text-neutral-700 text-lg mb-8">
            Napisz do nas i otrzymaj darmową wycenę projektu.
          </p>

          <a
            href="mailto:kontakt@velos.dev"
            className="inline-block px-8 py-4 rounded-full bg-black text-white font-bold"
          >
            Skontaktuj się
          </a>
        </div>
      </section>
    </main>
  );
}
```
