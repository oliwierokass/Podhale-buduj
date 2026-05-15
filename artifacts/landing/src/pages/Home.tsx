import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Building2, Layers, PaintBucket, Thermometer, LayoutGrid, Hammer, Menu, X, Facebook, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Imię i nazwisko jest wymagane" }),
  phone: z.string().min(9, { message: "Podaj poprawny numer telefonu" }),
  serviceType: z.string().min(1, { message: "Wybierz rodzaj usługi" }),
});

const SERVICES = [
  { id: "budowa", title: "Budowa domów", desc: "stan surowy i deweloperski", icon: Building2 },
  { id: "fundamenty", title: "Fundamenty", desc: "i prace betoniarskie", icon: Layers },
  { id: "wykonczenia", title: "Wykańczanie wnętrz", desc: "płytki, panele, gładzie", icon: PaintBucket },
  { id: "ocieplenia", title: "Ocieplenia", desc: "poddaszy i elewacji", icon: Thermometer },
  { id: "zabudowy", title: "Zabudowy G-K", desc: "i sufity podwieszane", icon: LayoutGrid },
  { id: "remonty", title: "Remonty", desc: "i rozbiórki", icon: Hammer },
];

export default function Home() {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      serviceType: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Dziękujemy! Skontaktujemy się wkrótce.",
      description: "Twoje zapytanie zostało wysłane pomyślnie.",
    });
    form.reset();
  }

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
            <Button onClick={() => scrollTo('kontakt')} className="font-bold uppercase tracking-wide">
              Darmowa Wycena
            </Button>
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
            <Button onClick={() => scrollTo('kontakt')} className="w-full font-bold uppercase mt-2">
              Darmowa Wycena
            </Button>
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

      {/* About Us */}
      <section id="o-nas" className="py-24 bg-background">
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

      {/* Contact Form */}
      <section id="kontakt" className="py-24 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 md:p-12 rounded-sm border border-border shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-2">Zamów bezpłatną wycenę</h2>
            <p className="text-muted-foreground mb-8">Zostaw swoje dane, a my skontaktujemy się z Tobą w ciągu 24 godzin, aby omówić szczegóły Twojego projektu.</p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase font-bold text-xs tracking-wider">Imię i nazwisko</FormLabel>
                      <FormControl>
                        <Input placeholder="Jan Kowalski" className="bg-background h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase font-bold text-xs tracking-wider">Numer telefonu</FormLabel>
                      <FormControl>
                        <Input placeholder="+48 XXX XXX XXX" type="tel" className="bg-background h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase font-bold text-xs tracking-wider">Rodzaj usługi</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background h-12">
                            <SelectValue placeholder="Wybierz usługę..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {SERVICES.map((service) => (
                            <SelectItem key={service.id} value={service.title}>
                              {service.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg h-14 font-black uppercase tracking-wider mt-4"
                  data-testid="submit-contact"
                >
                  Wyślij zapytanie
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border pt-16 pb-8 text-muted-foreground">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-black uppercase text-foreground mb-4">Wojciech Wróbel</h3>
            <p className="mb-2">Usługi Budowlane</p>
            <p>Nowy Targ, osiedle Gazdy 22</p>
            <p>Polska</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold uppercase text-foreground mb-4">Na skróty</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollTo('uslugi')} className="hover:text-primary transition-colors">Nasze Usługi</button></li>
              <li><button onClick={() => scrollTo('o-nas')} className="hover:text-primary transition-colors">O Nas</button></li>
              <li><button onClick={() => scrollTo('kontakt')} className="hover:text-primary transition-colors">Zamów Wycenę</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold uppercase text-foreground mb-4">Kontakt</h3>
            <div className="flex items-center gap-3 mb-4">
              <Phone className="text-primary" size={20} />
              <span className="text-xl font-bold text-foreground">+48 500 000 000</span>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-primary hover:text-background transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="h-10 px-4 rounded-full bg-card flex items-center justify-center font-bold hover:bg-primary hover:text-background transition-colors">
                OLX
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-border text-sm text-center">
          &copy; 2025 Usługi Budowlane Wojciech Wróbel. Wszelkie prawa zastrzeżone.
        </div>
      </footer>
    </div>
  );
}
