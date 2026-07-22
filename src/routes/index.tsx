import { createFileRoute } from "@tanstack/react-router";
import {
  Flame,
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
  Star,
  Leaf,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import heroPizza from "@/assets/hero-pizza.jpg";
import oven from "@/assets/oven.jpg";
import margherita from "@/assets/pizza-margherita.jpg";
import diavola from "@/assets/pizza-diavola.jpg";
import prosciutto from "@/assets/pizza-prosciutto.jpg";
import quattro from "@/assets/pizza-quattro.jpg";

const WHATSAPP = "21612345678"; // numéro tunisien à personnaliser
const waLink = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Notre histoire" },
  { href: "#visit", label: "Nous trouver" },
  { href: "#contact", label: "Contact" },
];

const serviceHighlights = [
  {
    icon: <Flame className="h-5 w-5" />,
    title: "Four à bois",
    description: "Cuisson ultra-rapide à 485°C pour une croûte légère et fondante.",
  },
  {
    icon: <Leaf className="h-5 w-5" />,
    title: "Ingrédients frais",
    description: "Mozzarella, tomates et herbes sélectionnées auprès de producteurs locaux.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Service rapide",
    description: "Commander sur WhatsApp et récupérer votre pizza en moins de 30 minutes.",
  },
];

const testimonials = [
  {
    name: "Sana",
    quote:
      "La meilleure pizza de Tunis. La pâte est légère, le four à bois donne un vrai goût authentique.",
    rating: 5,
  },
  {
    name: "Youssef",
    quote:
      "Chaque visite est un régal. Le service sur WhatsApp est instantané et les portions sont généreuses.",
    rating: 5,
  },
  {
    name: "Leila",
    quote: "Ambiance chaleureuse et pizzas qui sentent bon l'Italie. À recommander sans hésiter.",
    rating: 5,
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trattoria Bella — Pizzeria Italienne à Tunis" },
      {
        name: "description",
        content:
          "Véritable pizza napolitaine cuite au feu de bois à Tunis. Commandez sur WhatsApp — livraison et à emporter.",
      },
      { property: "og:title", content: "Trattoria Bella — Pizzeria Italienne à Tunis" },
      {
        property: "og:description",
        content: "Pizza napolitaine au feu de bois à Tunis. Commande sur WhatsApp.",
      },
      { name: "theme-color", content: "#c83a2d" },
    ],
  }),
  component: Index,
});

type Category = "Toutes" | "Classiques" | "Épicées" | "Végétariennes" | "Gourmandes";

type Pizza = {
  name: string;
  desc: string;
  price: string;
  img: string;
  category: Exclude<Category, "Toutes">;
  featured?: boolean;
  badge?: string;
};

const pizzas: Pizza[] = [
  {
    name: "Margherita",
    desc: "San Marzano, fior di latte, basilic frais, huile d'olive extra vierge",
    price: "24 DT",
    img: margherita,
    category: "Classiques",
    featured: true,
    badge: "À ne pas manquer",
  },
  {
    name: "Diavola",
    desc: "Salami piquant, mozzarella, piment, huile pimentée",
    price: "32 DT",
    img: diavola,
    category: "Épicées",
    featured: true,
    badge: "Chaud",
  },
  {
    name: "Prosciutto e Funghi",
    desc: "Jambon de Parme, champignons, roquette, parmesan",
    price: "36 DT",
    img: prosciutto,
    category: "Gourmandes",
    featured: true,
    badge: "Favori",
  },
  {
    name: "Quattro Formaggi",
    desc: "Mozzarella, gorgonzola, taleggio, parmigiano",
    price: "34 DT",
    img: quattro,
    category: "Gourmandes",
  },
  {
    name: "Marinara",
    desc: "Tomate San Marzano, ail, origan, huile d'olive",
    price: "20 DT",
    img: margherita,
    category: "Classiques",
  },
  {
    name: "Ortolana",
    desc: "Courgettes, aubergines, poivrons grillés, mozzarella",
    price: "28 DT",
    img: quattro,
    category: "Végétariennes",
    badge: "Frais",
  },
  {
    name: "Capricciosa",
    desc: "Jambon, champignons, artichauts, olives, œuf",
    price: "35 DT",
    img: prosciutto,
    category: "Gourmandes",
    badge: "Classique",
  },
  {
    name: "Vegetariana",
    desc: "Légumes de saison, roquette, tomates cerises, mozzarella di bufala",
    price: "30 DT",
    img: margherita,
    category: "Végétariennes",
    badge: "Végétal",
  },
  {
    name: "'Nduja",
    desc: "'Nduja calabraise, oignon rouge, mozzarella, miel piquant",
    price: "34 DT",
    img: diavola,
    category: "Épicées",
  },
];

const categories: Category[] = ["Toutes", "Classiques", "Épicées", "Végétariennes", "Gourmandes"];

function Index() {
  const [active, setActive] = useState<Category>("Toutes");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const filtered = active === "Toutes" ? pizzas : pizzas.filter((p) => p.category === active);
  const featured = pizzas.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="container-x flex items-center justify-between py-6">
          <a href="#home" className="flex items-center gap-2 text-background">
            <Flame className="h-6 w-6 text-accent animate-flicker" />
            <span className="font-display text-xl font-bold tracking-tight">Trattoria Bella</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-background/90 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-accent transition">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsNavOpen(true)}
              className="md:hidden rounded-full border border-background/30 bg-background/80 p-2 text-background/90 shadow-sm transition hover:bg-background"
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <a
              href={waLink("Ciao ! Je souhaite commander une pizza 🍕")}
              className="btn-primary !py-2 !px-4 text-xs"
            >
              <MessageCircle className="h-4 w-4" /> Commander
            </a>
          </div>
        </nav>

        {isNavOpen && (
          <div className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm md:hidden">
            <div className="mx-auto flex h-full max-w-sm flex-col justify-between p-6">
              <div className="flex items-center justify-between">
                <a
                  href="#home"
                  className="flex items-center gap-2 text-foreground"
                  onClick={() => setIsNavOpen(false)}
                >
                  <Flame className="h-6 w-6 text-accent animate-flicker" />
                  <span className="font-display text-lg font-bold">Trattoria Bella</span>
                </a>
                <button
                  type="button"
                  className="rounded-full border border-border bg-card p-2 text-foreground"
                  onClick={() => setIsNavOpen(false)}
                  aria-label="Fermer le menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-5 text-xl font-semibold text-foreground">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block rounded-xl bg-card px-5 py-4 text-foreground transition hover:bg-muted"
                    onClick={() => setIsNavOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <a
                href={waLink("Ciao ! Je souhaite commander une pizza 🍕")}
                className="btn-primary mt-4 !py-3 !px-6 text-sm"
                onClick={() => setIsNavOpen(false)}
              >
                Commander sur WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroPizza}
          alt="Pizza margherita au feu de bois"
          className="absolute inset-0 h-full w-full object-cover scale-105"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/90" />
        <div className="container-x relative flex h-full flex-col justify-center text-background">
          <p className="eyebrow !text-accent animate-fade-up">Tunis · Depuis 1978</p>
          <h1
            className="mt-4 max-w-3xl font-display text-5xl font-black leading-[0.95] md:text-7xl lg:text-8xl animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            La vraie pizza <span className="italic text-accent">napolitaine</span>.
          </h1>
          <p
            className="mt-6 max-w-xl text-base text-background/85 md:text-lg animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Pâte à maturation lente, tomates San Marzano, mozzarella di bufala — cuite dans notre
            four à bois à 485°C, au cœur de Tunis.
          </p>
          <div
            className="mt-10 flex flex-wrap gap-3 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            <a href={waLink("Ciao ! Je souhaite passer commande 🍕")} className="btn-primary">
              <MessageCircle className="h-4 w-4" /> Commander sur WhatsApp
            </a>
            <a
              href="#menu"
              className="btn-outline !border-background/40 !text-background hover:!bg-background hover:!text-foreground"
            >
              Voir le Menu
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-24 bg-muted/40">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6 flex-wrap animate-fade-up">
            <div>
              <p className="eyebrow flex items-center gap-2">
                <Star className="h-3.5 w-3.5 fill-primary" /> Coups de Cœur
              </p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">Les incontournables</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Nos trois pizze les plus commandées à Tunis — impossible de se tromper.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featured.map((p, i) => (
              <article
                key={p.name}
                className="group relative overflow-hidden rounded-sm bg-card border border-border hover-lift animate-scale-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {(p.badge || p.featured) && (
                    <div className="absolute top-3 left-3 bg-accent text-charcoal px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current" /> {p.badge ?? "Favori"}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl">{p.name}</h3>
                    <span className="font-display text-xl text-primary">{p.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
                  <a
                    href={waLink(`Ciao ! Je souhaite commander une ${p.name} 🍕`)}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-secondary hover:text-primary transition-colors"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> Commander
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-charcoal text-background">
        <div className="container-x">
          <div className="text-center animate-fade-up">
            <p className="eyebrow !text-accent">Pourquoi nous choisir</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Le goût, la rapidité et l'authenticité
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-background/70">
              Notre maison combine tradition italienne et service moderne pour vous offrir une
              expérience pizza incomparable.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {serviceHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-sm border border-border bg-card p-6 text-foreground hover-lift transition-all duration-300"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MENU + FILTERS */}
      <section id="menu" className="py-24">
        <div className="container-x">
          <div className="text-center animate-fade-up">
            <p className="eyebrow">Il Menù</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Notre carte</h2>
            <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
              Chaque pizza est étalée à la main, saisie 90 secondes au feu de bois, servie brûlante.
            </p>
          </div>

          {/* Filters */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((c) => {
              const isActive = c === active;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={
                    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 " +
                    (isActive
                      ? "bg-primary text-primary-foreground shadow-md scale-105"
                      : "bg-transparent border border-border text-foreground/70 hover:border-primary hover:text-primary")
                  }
                >
                  {c === "Végétariennes" && <Leaf className="h-3.5 w-3.5" />}
                  {c}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div key={active} className="mt-14 grid gap-8 md:grid-cols-2">
            {filtered.map((p, i) => (
              <article
                key={p.name}
                className="group flex gap-5 border-b border-border pb-8 animate-fade-up"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={200}
                  height={200}
                  className="h-28 w-28 flex-shrink-0 rounded-full object-cover ring-2 ring-border transition-all duration-300 group-hover:ring-accent group-hover:scale-105"
                />
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl flex items-center gap-2">
                      {p.name}
                      {p.featured && <Star className="h-3.5 w-3.5 fill-accent text-accent" />}
                    </h3>
                    <span className="font-display text-xl text-primary">{p.price}</span>
                  </div>
                  <p className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                    {p.category}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <a
                    href={waLink(`Ciao ! Je souhaite commander une ${p.name} 🍕`)}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-secondary hover:text-primary transition-colors"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> Commander
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-14 text-center text-muted-foreground">
              Aucune pizza dans cette catégorie.
            </p>
          )}

          <div className="mt-14 text-center">
            <a
              href={waLink("Ciao ! Pouvez-vous m'envoyer le menu complet ?")}
              className="btn-outline"
            >
              Menu complet sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="bg-charcoal text-background py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative animate-scale-in">
            <img
              src={oven}
              alt="Pizzaiolo devant le four à bois"
              loading="lazy"
              width={900}
              height={900}
              className="w-full rounded-sm object-cover aspect-square"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-accent text-charcoal px-6 py-4 font-display animate-float">
              <div className="text-4xl font-bold leading-none">45</div>
              <div className="text-xs uppercase tracking-widest mt-1">Ans de tradition</div>
            </div>
          </div>
          <div className="animate-fade-up">
            <p className="eyebrow !text-accent">Notre Histoire</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Trois générations. <span className="italic">Un seul four.</span>
            </h2>
            <p className="mt-6 text-background/80 leading-relaxed">
              Nonno Giuseppe a ouvert nos portes en 1978, avec un four en cuivre et une recette
              écrite à la main. Aujourd'hui, ses petits-enfants pétrissent encore la pâte à l'aube
              et allument le bois de hêtre à la main, ici à Tunis.
            </p>
            <p className="mt-4 text-background/80 leading-relaxed">
              Rien de congelé. Rien de précipité. Juste du feu, de la farine et du temps.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-background/15 pt-8">
              <div>
                <div className="font-display text-3xl text-accent">72h</div>
                <div className="text-xs uppercase tracking-widest mt-1 text-background/60">
                  Levée de pâte
                </div>
              </div>
              <div>
                <div className="font-display text-3xl text-accent">485°</div>
                <div className="text-xs uppercase tracking-widest mt-1 text-background/60">
                  Chaleur du four
                </div>
              </div>
              <div>
                <div className="font-display text-3xl text-accent">90s</div>
                <div className="text-xs uppercase tracking-widest mt-1 text-background/60">
                  Temps de cuisson
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-muted/20">
        <div className="container-x">
          <div className="text-center animate-fade-up">
            <p className="eyebrow">Ils nous adorent</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Avis de la trattoria</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Des clients conquis partagent leur coup de cœur après une dégustation autour du four.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-sm border border-border bg-card p-6 text-foreground hover-lift transition-all duration-300"
              >
                <div className="mb-4 flex items-center gap-2 text-accent">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Star key={index} className="h-4 w-4" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">“{testimonial.quote}”</p>
                <div className="mt-5 font-semibold">— {testimonial.name}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-24">
        <div className="container-x grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1 animate-fade-up">
            <p className="eyebrow">Venez nous voir</p>
            <h2 className="mt-3 font-display text-4xl">Visitez la trattoria</h2>
            <p className="mt-4 text-muted-foreground">
              Réservez une table, venez chercher votre commande ou passez juste dire ciao au
              comptoir.
            </p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            <InfoCard
              icon={<MapPin className="h-5 w-5" />}
              title="Adresse"
              lines={["12 Avenue Habib Bourguiba", "La Marsa, Tunis 2078"]}
            />
            <InfoCard
              icon={<Phone className="h-5 w-5" />}
              title="Téléphone"
              lines={["+216 71 555 042"]}
            />
            <InfoCard
              icon={<Clock className="h-5 w-5" />}
              title="Horaires"
              lines={["Mar–Dim · 12h00 – 23h00", "Fermé le lundi"]}
            />
            <InfoCard
              icon={<MessageCircle className="h-5 w-5" />}
              title="Commander"
              lines={["WhatsApp à tout moment"]}
              cta={{ label: "Ouvrir le chat", href: waLink("Ciao ! Je souhaite commander 🍕") }}
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-charcoal text-background py-14">
        <div className="container-x flex flex-col items-center gap-8 text-center">
          <div className="flex items-center gap-2">
            <Flame className="h-6 w-6 text-accent animate-flicker" />
            <span className="font-display text-2xl font-bold">Trattoria Bella</span>
          </div>
          <p className="max-w-md text-sm text-background/70">
            Fait avec amour à Tunis. Suivez-nous pour les spéciales du jour et les coulisses du
            four.
          </p>
          <div className="flex items-center gap-3">
            <Social href="https://instagram.com" label="Instagram">
              <Instagram className="h-5 w-5" />
            </Social>
            <Social href="https://facebook.com" label="Facebook">
              <Facebook className="h-5 w-5" />
            </Social>
            <Social href="https://tiktok.com" label="TikTok">
              <TikTokIcon />
            </Social>
            <Social href={waLink("Ciao !")} label="WhatsApp">
              <MessageCircle className="h-5 w-5" />
            </Social>
          </div>
          <div className="pt-6 border-t border-background/10 w-full text-xs text-background/50">
            © {new Date().getFullYear()} Trattoria Bella · La Marsa, Tunis
          </div>
        </div>
      </footer>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  lines,
  cta,
}: {
  icon: ReactNode;
  title: string;
  lines: string[];
  cta?: { label: string; href: string };
}) {
  return (
    <div className="border border-border bg-card p-6 rounded-sm hover-lift animate-fade-up">
      <div className="flex items-center gap-2 text-primary">
        {icon}
        <span className="text-xs font-semibold uppercase tracking-widest">{title}</span>
      </div>
      <div className="mt-3 space-y-1 text-sm text-foreground">
        {lines.map((l) => (
          <div key={l}>{l}</div>
        ))}
      </div>
      {cta && (
        <a
          href={cta.href}
          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-secondary hover:text-primary transition-colors"
        >
          {cta.label} →
        </a>
      )}
    </div>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="grid h-11 w-11 place-items-center rounded-full border border-background/20 text-background/80 transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-1"
    >
      {children}
    </a>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M19.6 6.3a4.9 4.9 0 01-3.4-1.4 4.9 4.9 0 01-1.4-3.4h-3.4v13.1a2.9 2.9 0 11-2.9-2.9c.3 0 .6 0 .9.1V8.3a6.3 6.3 0 106 6.3V9.2a8.3 8.3 0 004.2 1.2V7z" />
    </svg>
  );
}
