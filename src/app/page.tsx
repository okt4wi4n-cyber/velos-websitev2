export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-white selection:text-black">
      {/* Nawigacja */}
      <nav className="flex items-center justify-between px-8 py-6 w-full max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-tighter">VELOS</div>
        <div className="flex gap-8 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Usługi</a>
          <a href="#" className="hover:text-white transition-colors">O nas</a>
          <a href="#" className="text-white font-medium">Kontakt</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-1 flex-col items-center justify-center text-center px-4">
        <span className="px-3 py-1 mb-6 text-xs font-medium border border-white/10 rounded-full text-gray-400">
          Nowy standard cyfrowy
        </span>
        <h1 className="text-7xl font-bold tracking-tighter mb-6">
          Cyfrowa doskonałość<br />dla Twojego biznesu.
        </h1>
        <p className="text-xl text-gray-400 max-w-lg mb-10">
          Projektujemy i rozwijamy rozwiązania, które budują przewagę. 
          Od web developmentu po zaawansowaną infrastrukturę serwerową.
        </p>
        <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all">
          Rozpocznij współpracę
        </button>
      </section>

      {/* Usługi */}
        <section className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-20">
          <div className="p-10 border border-white/10 rounded-3xl bg-neutral-900/30 hover:border-white/20 transition-all duration-300">
            <h3 className="font-semibold text-lg">Web Development</h3>
            <p className="text-gray-400 mt-3 text-sm leading-relaxed">Strony, które konwertują odwiedzających w płacących klientów. Pełna optymalizacja i nowoczesny design.</p>
          </div>
          <div className="p-10 border border-white/10 rounded-3xl bg-neutral-900/30 hover:border-white/20 transition-all duration-300">
            <h3 className="font-semibold text-lg">Bot Solutions</h3>
            <p className="text-gray-400 mt-3 text-sm leading-relaxed">Automatyzacja, która oszczędza Twój czas i buduje zaangażowaną społeczność na Discordzie.</p>
          </div>
          <div className="p-10 border border-white/10 rounded-3xl bg-neutral-900/30 hover:border-white/20 transition-all duration-300">
            <h3 className="font-semibold text-lg">Game Servers</h3>
            <p className="text-gray-400 mt-3 text-sm leading-relaxed">Stabilna infrastruktura Minecraft z wsparciem premium – Twój serwer zawsze dostępny i bez lagów.</p>
          </div>
        </section>

      {/* Footer */}
      <footer className="w-full py-10 border-t border-white/5 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} VELOS. All rights reserved.</p>
      </footer>
    </main>
  );
}