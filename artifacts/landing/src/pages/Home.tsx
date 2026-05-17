import React, { useState } from "react";
import { Building2, Layers, PaintBucket, Thermometer, LayoutGrid, Hammer, Menu, X, Facebook, Phone, Tag, ShieldCheck, Lightbulb, MapPin } from "lucide-react";

import img24 from "@assets/24_1778844190815.jpeg";
import imgW2 from "@assets/wnetrze_2_1778845706384.jpeg";
import imgW3 from "@assets/wnetrze_3_1778845706385.jpeg";
import imgW4 from "@assets/wnetrze_4_1778845706385.jpeg";
import imgW5 from "@assets/wnetrze_5_1778845706386.jpeg";
import imgW6 from "@assets/wnetrze_6_1778845706386.jpeg";
import imgW7 from "@assets/wnetrze_7_1778845706387.jpeg";
import imgWMural from "@assets/wnetrze_1778845706387.jpeg";
import img27 from "@assets/27_1778844190817.jpeg";
import img28 from "@assets/28_1778844190817.jpeg";
import img20 from "@assets/20_1778844190813.jpeg";
import img22 from "@assets/22_1778844190814.jpeg";
import img2 from "@assets/2_1778844190811.jpeg";
import img3 from "@assets/3_1778844190812.jpeg";
import img4 from "@assets/4_1778844190812.jpeg";
import img5 from "@assets/5_1778844190812.jpeg";
import imgBasen1 from "@assets/basen_1_1778844660565.jpeg";
import imgBasen2 from "@assets/basen_2_1778844660565.jpeg";
import imgBasen3 from "@assets/basen_3_1778844660566.jpeg";
import imgDom1 from "@assets/dom_1_1778844985146.jpeg";
import imgDom2 from "@assets/dom_2_1778844985147.jpeg";
import imgDom3 from "@assets/dom_3_1778844985147.jpeg";
import imgDom4 from "@assets/dom_4_1778844985147.jpeg";
import imgDom5 from "@assets/dom_5_1778844985148.jpeg";
import imgDom9 from "@assets/dom_9_1778844985148.jpeg";
import imgF36 from "@assets/36_1778844660563.jpeg";
import imgF37 from "@assets/37_1778844660563.jpeg";
import imgF38 from "@assets/38_1778844660564.jpeg";
import imgF39 from "@assets/39_1778844660564.jpeg";
import imgF40 from "@assets/40_1778844660565.jpeg";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

type GalleryCategory = "Wszystkie" | "Solidne Fundamenty" | "Konstrukcje i Mury" | "Wykończenia i Wnętrza" | "Baseny i Projekty Specjalne";

const GALLERY: { src: string; caption: string; category: GalleryCategory; featuredInAll?: boolean; badge?: string }[] = [
  // ── Konstrukcje i Mury ──────────────────────────────────────────────────
  { src: imgDom3, caption: "Nowoczesne rezydencje – stan surowy otwarty z precyzyjnym wykonaniem więźby dachowej", category: "Konstrukcje i Mury", featuredInAll: true },
  { src: imgDom1, caption: "Tradycyjna architektura Podhala – domy z płazów i konstrukcji mieszanej", category: "Konstrukcje i Mury", featuredInAll: true },
  { src: imgDom4, caption: "Nowoczesne rezydencje – stan surowy otwarty z precyzyjnym wykonaniem więźby dachowej", category: "Konstrukcje i Mury" },
  { src: imgDom2, caption: "Tradycyjna architektura Podhala – domy z płazów i konstrukcji mieszanej", category: "Konstrukcje i Mury" },
  { src: imgDom5, caption: "Kompleksowa realizacja dachu i konstrukcji nośnej", category: "Konstrukcje i Mury" },
  { src: imgDom9, caption: "Nowoczesne budownictwo jednorodzinne – realizacja w Nowym Targu", category: "Konstrukcje i Mury" },
  { src: img20, caption: "Strop monolityczny w trakcie realizacji", category: "Konstrukcje i Mury" },
  { src: img22, caption: "Murowanie ścian z bloczków ACC – stan surowy", category: "Konstrukcje i Mury" },
  // ── Solidne Fundamenty ──────────────────────────────────────────────────
  { src: imgF38, caption: "Zbrojenie stropu z panoramą Tatr w tle", category: "Solidne Fundamenty" },
  { src: img24, caption: "Zbrojenie i szalunki schodów żelbetowych", category: "Solidne Fundamenty" },
  { src: imgF36, caption: "Precyzyjna wylewka płyty fundamentowej", category: "Solidne Fundamenty" },
  { src: imgF37, caption: "Zbrojenie ław fundamentowych – wiązanie prętów", category: "Solidne Fundamenty" },
  { src: imgF39, caption: "Ściany fundamentowe z bloczków betonowych", category: "Solidne Fundamenty" },
  { src: imgF40, caption: "Betonowanie ław w szalunkach drewnianych", category: "Solidne Fundamenty" },
  { src: img27, caption: "Systemowe szalunki fundamentowe ULMA", category: "Solidne Fundamenty" },
  { src: img28, caption: "Montaż szalunków ULMA – fundamenty głębinowe", category: "Solidne Fundamenty" },
  // ── Baseny i Projekty Specjalne ─────────────────────────────────────────
  { src: imgBasen3, caption: "Gotowy basen ogrodowy z obrysem z płyt tarasowych", category: "Baseny i Projekty Specjalne", featuredInAll: true },
  { src: imgBasen1, caption: "Kompleksowy montaż basenu – osadzanie misy basenowej", category: "Baseny i Projekty Specjalne" },
  { src: imgBasen2, caption: "Transport i osadzanie basenu żurawiem dźwigowym", category: "Baseny i Projekty Specjalne" },
  // ── Wykończenia i Wnętrza ────────────────────────────────────────────────
  { src: imgW4, caption: "Nowoczesne łazienki – montaż armatury podtynkowej i spieków kwarcowych.", category: "Wykończenia i Wnętrza", featuredInAll: true },
  { src: imgW5, caption: "Artystyczne wykończenia w drewnie – tradycyjne detale podhalańskie i nowoczesny komfort.", category: "Wykończenia i Wnętrza", featuredInAll: true, badge: "Kunszt Podhalański" },
  { src: imgW2, caption: "Precyzyjne układanie gresu z systemem poziomowania – idealna płaszczyzna.", category: "Wykończenia i Wnętrza", featuredInAll: true, badge: "Precyzja 1mm" },
  { src: imgW3, caption: "Precyzyjne układanie gresu z systemem poziomowania – idealna płaszczyzna.", category: "Wykończenia i Wnętrza", badge: "Precyzja 1mm" },
  { src: imgW6, caption: "Artystyczne wykończenia w drewnie – tradycyjne detale podhalańskie i nowoczesny komfort.", category: "Wykończenia i Wnętrza", badge: "Kunszt Podhalański" },
  { src: imgW7, caption: "Artystyczne wykończenia w drewnie – tradycyjne detale podhalańskie i nowoczesny komfort.", category: "Wykończenia i Wnętrza", badge: "Kunszt Podhalański" },
  { src: imgWMural, caption: "Kompleksowe wykończenia mieszkań i apartamentów pod klucz.", category: "Wykończenia i Wnętrza" },
  { src: img2, caption: "Gotowy sufit podwieszany G-K z integracją klimatyzacji", category: "Wykończenia i Wnętrza" },
  { src: img4, caption: "Stelaż systemowy G-K pod sufit podwieszany", category: "Wykończenia i Wnętrza" },
  { src: img5, caption: "Precyzyjny montaż profili sufitowych G-K", category: "Wykończenia i Wnętrza" },
  { src: img3, caption: "Układanie płyt G-K na gotowej konstrukcji", category: "Wykończenia i Wnętrza" },
];

const GALLERY_CATEGORIES: GalleryCategory[] = ["Wszystkie", "Konstrukcje i Mury", "Solidne Fundamenty", "Wykończenia i Wnętrza", "Baseny i Projekty Specjalne"];


const SERVICES = [
  { id: "budowa", title: "Budowa domów", desc: "stan surowy i deweloperski", icon: Building2 },
  { id: "fundamenty", title: "Fundamenty", desc: "i prace betoniarskie", icon: Layers },
  { id: "wykonczenia", title: "Wykańczanie wnętrz", desc: "płytki, panele, gładzie", icon: PaintBucket },
  { id: "ocieplenia", title: "Ocieplenia", desc: "poddaszy i elewacji", icon: Thermometer },
  { id: "zabudowy", title: "Zabudowy G-K", desc: "i sufity podwieszane", icon: LayoutGrid },
  { id: "remonty", title: "Remonty", desc: "i rozbiórki", icon: Hammer },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("Wszystkie");
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const filteredGallery = activeFilter === "Wszystkie"
    ? GALLERY.filter((img) => img.featuredInAll)
    : GALLERY.filter((img) => img.category === activeFilter);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-black uppercase tracking-wider text-primary">
            W. Wróbel
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollTo('uslugi')} className="text-sm font-bold uppercase hover:text-primary transition-colors">Usługi</button>
            <button onClick={() => scrollTo('o-nas')} className="text-sm font-bold uppercase hover:text-primary transition-colors">O nas</button>
            <a href="tel:888392132">
              <Button className="font-bold uppercase tracking-wide flex items-center gap-2">
                <Phone size={16} />
                Darmowa Wycena
              </Button>
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-b border-border px-6 py-4 flex flex-col gap-4">
            <button onClick={() => scrollTo('uslugi')} className="text-left text-lg font-bold uppercase">Usługi</button>
            <button onClick={() => scrollTo('o-nas')} className="text-left text-lg font-bold uppercase">O nas</button>
            <a href="tel:888392132" className="block">
              <Button className="w-full font-bold uppercase mt-2 flex items-center justify-center gap-2">
                <Phone size={16} />
                Darmowa Wycena
              </Button>
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="Budowa domu w górach" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-[1.1] mb-6 drop-shadow-lg">
              Budujemy domy na lata – <span className="text-primary">Solidność z Podhala</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium mb-10 max-w-2xl">
              Profesjonalne usługi budowlane w Nowym Targu i okolicach.
            </p>
            <Button 
              size="lg" 
              onClick={() => scrollTo('kontakt')}
              className="text-lg px-8 py-8 rounded-sm font-black uppercase tracking-wider shadow-xl hover:scale-105 transition-transform"
              data-testid="hero-cta"
            >
              Zamów wycenę
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary text-background py-8 border-y-4 border-primary/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-background/20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center py-4 md:py-0"
          >
            <div className="text-4xl font-black mb-1">9.4/10</div>
            <div className="text-sm font-bold uppercase tracking-wider">Ocena klientów (25+ opinii)</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center py-4 md:py-0"
          >
            <div className="text-4xl font-black mb-1">Laureat Konkursu</div>
            <div className="text-sm font-bold uppercase tracking-wider">Złoty Wykonawca 2024 & 2025</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center justify-center py-4 md:py-0"
          >
            <div className="text-4xl font-black mb-1">Rezerwacje 2026</div>
            <div className="text-sm font-bold uppercase tracking-wider">Zarezerwuj swój termin</div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="uslugi" className="py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase text-center mb-16"
          >
            Nasze Usługi
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-8 rounded-sm border-2 border-transparent hover:border-primary transition-all group"
                  data-testid={`service-card-${service.id}`}
                >
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-sm mb-6 text-primary group-hover:scale-110 transition-transform">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold uppercase mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
              Dlaczego Klienci<br />
              <span className="relative inline-block">
                Nas Wybierają
                <span className="absolute left-0 -bottom-2 w-full h-1 bg-primary rounded-full" />
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Hammer,
                heading: "Kompletne Zaplecze",
                text: "Własne koparki, rusztowania i nowoczesne szalunki systemowe — bez zależności od podwykonawców.",
                id: "zaplecze",
              },
              {
                icon: Tag,
                heading: "Oszczędność",
                text: "Specjalne zniżki dla naszych klientów w zaprzyjaźnionych hurtowniach budowlanych.",
                id: "oszczednosc",
              },
              {
                icon: ShieldCheck,
                heading: "Elastyczność",
                text: "Realizujemy budowy etapami i chętnie przejmujemy już rozpoczęte projekty.",
                id: "elastycznosc",
              },
              {
                icon: Lightbulb,
                heading: "Doradztwo",
                text: "Nie tylko budujemy — aktywnie doradzamy najlepsze rozwiązania techniczne dla każdego projektu.",
                id: "doradztwo",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group bg-[#1a1a1a] border-2 border-transparent hover:border-primary/60 rounded-sm p-8 flex flex-col gap-5 transition-colors duration-300 cursor-default"
                  data-testid={`why-card-${item.id}`}
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-sm bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon size={30} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-wide mb-3 text-foreground">
                      {item.heading}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="o-nas" className="py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">O Nas</h2>
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                Jesteśmy firmą budowlaną z wieloletnim doświadczeniem, zlokalizowaną w sercu Podhala – w Nowym Targu. Specjalizujemy się w kompleksowej budowie domów murowanych, łącząc tradycyjną solidność z nowoczesnymi technologiami.
              </p>
              <p>
                Rozumiemy unikalne wyzwania, jakie niesie ze sobą budowa w górzystym terenie. Nasze indywidualne podejście i dbałość o każdy detal zostały docenione nagrodą <strong className="text-white">"Złoty Wykonawca"</strong> w latach 2024 i 2025.
              </p>
              <p>
                Niezależnie od tego, czy planujesz budowę domu od podstaw, czy generalny remont – gwarantujemy terminowość, najwyższą jakość materiałów i precyzję wykonania.
              </p>
            </div>
            
            <div className="mt-10 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-primary">15+</span>
                <span className="text-sm uppercase font-bold text-muted-foreground">Lat doświadczenia</span>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-primary">100%</span>
                <span className="text-sm uppercase font-bold text-muted-foreground">Zadowolonych klientów</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden border-4 border-border relative z-10">
              <img 
                src="/images/about.png" 
                alt="Wojciech Wróbel - Usługi Budowlane" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-primary/20 rounded-sm z-0"></div>
          </motion.div>
        </div>
      </section>

      {/* Nasze Realizacje Gallery */}
      <section id="realizacje" className="py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">Nasze Realizacje</h2>
            <p className="text-muted-foreground text-lg">Wybrane projekty z terenu Podhala i okolic</p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                data-testid={`gallery-filter-${cat}`}
                className={`px-5 py-2 text-sm font-bold uppercase tracking-wider border-2 rounded-sm transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-primary text-background border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/60 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {filteredGallery.map((item, index) => (
                <motion.div
                  key={item.src}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.06, duration: 0.22 }}
                  className="group relative overflow-hidden rounded-sm cursor-pointer aspect-[4/3]"
                  onClick={() => setLightboxSrc(item.src)}
                  data-testid={`gallery-item-${index}`}
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Permanent badge (top-left) */}
                  {item.badge && (
                    <span className="absolute top-3 left-3 z-10 bg-primary text-background text-[10px] font-extrabold uppercase tracking-widest px-2 py-1 rounded-sm shadow-lg">
                      {item.badge}
                    </span>
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block bg-primary text-background text-xs font-bold uppercase tracking-wider px-2 py-0.5 mb-2 rounded-sm">
                      {item.category}
                    </span>
                    <p className="text-white text-sm font-semibold leading-tight">{item.caption}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxSrc(null)}
          data-testid="lightbox-overlay"
        >
          <button
            className="absolute top-5 right-5 text-white hover:text-primary transition-colors"
            onClick={() => setLightboxSrc(null)}
            data-testid="lightbox-close"
          >
            <X size={36} />
          </button>
          <img
            src={lightboxSrc}
            alt="Realizacja"
            className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Customer Reviews */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-sm font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
              <span>Średnia ocena 9.4/10 na podstawie 25+ opinii</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase">
              Opinie Naszych Klientów
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "K. Słodyczka",
                text: "Bardzo rzetelna firma budowlana. Prace wykonane dokładnie, sprawnie i zgodnie z ustalonym terminem. To ekipa, której można zaufać – są słowni i rzetelni, a ogromny plus za doradztwo techniczne.",
                id: "slodyczka",
              },
              {
                name: "Ewa Sentysz",
                text: "Usługa wykonana profesjonalnie i na najwyższym poziomie. Kontakt z Panem Wojtkiem był doskonały. Wykazuje się dużą elastycznością – potrafi doradzić i zmodyfikować projekt pod wizję klienta.",
                id: "sentysz",
              },
              {
                name: "Paweł Szymala",
                text: "Polecam! Świetna, zgrana ekipa. Całość prac wykonana solidnie i bez zarzutu. Termin i cena zgodnie z ustaleniami. Profesjonalne podejście do tematu.",
                id: "szymala",
              },
            ].map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-background rounded-sm border border-border p-8 flex flex-col gap-5"
                data-testid={`review-card-${review.id}`}
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary fill-primary" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <span className="font-bold text-foreground">{review.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 text-primary text-xs font-extrabold uppercase tracking-widest mb-4">
              <MapPin size={14} />
              Zasięg działania
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-4">
              Gdzie Działamy?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Lokalna firma z Nowego Targu z wieloletnim doświadczeniem w górskim budownictwie.
              Znamy specyfikę terenu i wymagania budowlane tego regionu.
            </p>
          </motion.div>

          {/* 4-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Powiat nowotarski", text: "Nowy Targ i okolice" },
              { title: "Powiat tatrzański", text: "Zakopane i okolice" },
              { title: "Powiat suski",      text: "Sucha Beskidzka" },
              { title: "Szczawnica",        text: "i okolice" },
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col items-center text-center gap-4 p-8 rounded-sm border border-white/10 transition-all duration-250 hover:border-primary hover:bg-white/5 cursor-default"
                style={{ backgroundColor: "#232323" }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary/15 group-hover:bg-primary/25 transition-colors duration-250">
                  <MapPin className="text-primary" size={26} />
                </div>
                <div>
                  <p className="text-white font-black text-lg uppercase tracking-wide leading-snug">
                    {area.title}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">{area.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Phone */}
      <section
        id="kontakt"
        className="relative py-28 overflow-hidden"
      >
        {/* Background image with dark overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imgDom3})` }}
        />
        <div className="absolute inset-0 bg-background/88" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Icon ring */}
            <div className="w-20 h-20 rounded-full bg-primary/15 border-2 border-primary flex items-center justify-center">
              <Phone className="text-primary" size={36} />
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">
                Potrzebujesz wyceny?{" "}
                <span className="text-primary">Zadzwoń teraz</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
                Omów szczegóły swojego projektu bezpośrednio z Panem Wojciechem.
                Gwarantujemy fachowe doradztwo i darmową wycenę.
              </p>
            </div>

            {/* Large phone number display */}
            <a
              href="tel:888392132"
              className="text-5xl md:text-7xl font-black tracking-widest text-primary hover:text-primary/80 transition-colors"
            >
              888 392 132
            </a>

            {/* CTA button */}
            <a href="tel:888392132" className="w-full sm:w-auto">
              <button
                className="flex items-center justify-center gap-3 bg-primary text-background font-black uppercase tracking-widest text-lg px-10 py-5 rounded-sm shadow-xl hover:bg-primary/90 active:scale-[0.98] transition-all duration-150 w-full sm:w-auto"
                data-testid="cta-call-button"
              >
                <Phone size={22} />
                Zadzwoń: 888 392 132
              </button>
            </a>

            {/* Trust line */}
            <p className="text-muted-foreground text-sm uppercase tracking-widest">
              Bezpłatna konsultacja · Bez zobowiązań · Odpowiadamy od ręki
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border pt-16 pb-8 text-muted-foreground">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-black uppercase text-foreground mb-1">Wojciech Wróbel</h3>
            <p className="text-primary text-sm font-semibold mb-3">Usługi Budowlane Wojciech Wróbel | Nowy Targ</p>
            <p>Nowy Targ, osiedle Gazdy 22</p>
            <p>Polska</p>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase text-foreground mb-4">Na skróty</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollTo('uslugi')} className="hover:text-primary transition-colors">Nasze Usługi</button></li>
              <li><button onClick={() => scrollTo('o-nas')} className="hover:text-primary transition-colors">O Nas</button></li>
              <li><button onClick={() => scrollTo('kontakt')} className="hover:text-primary transition-colors">Zadzwoń po wycenę</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase text-foreground mb-4">Kontakt</h3>
            <a
              href="tel:888392132"
              className="flex items-center gap-3 group w-fit"
            >
              <Phone className="text-primary" size={20} />
              <span className="text-xl font-black text-foreground group-hover:text-primary transition-colors">
                888 392 132
              </span>
            </a>
            <p className="mt-3 text-sm">
              Nowy Targ, osiedle Gazdy 22
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-border text-sm text-center">
          &copy; 2026 Usługi Budowlane Wojciech Wróbel. Wszelkie prawa zastrzeżone.
        </div>
      </footer>
    </div>
  );
}
