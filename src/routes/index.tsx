import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Truck, ShieldCheck, RefreshCw, Sparkles, Laptop, Shirt, Footprints, BookOpen, Watch } from "lucide-react";
import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shoply — Shop Smarter. Live Better." },
      { name: "description", content: "Discover curated electronics, fashion, shoes, books and accessories." },
    ],
  }),
  component: Home,
});

const iconMap = { Laptop, Shirt, Footprints, BookOpen, Watch } as const;

function Home() {
  const featured = products.slice(0, 8);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-soft via-background to-background" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                New season collection
              </div>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Shop smarter.<br />
                <span className="text-primary">Live better.</span>
              </h1>
              <p className="mt-5 max-w-lg text-lg text-muted-foreground">
                Discover thousands of curated products across electronics, fashion, and lifestyle — all in one beautifully simple place.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card hover:bg-primary/90 hover:shadow-hover transition-all"
                >
                  Shop Now <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold hover:bg-secondary transition-colors"
                >
                  Learn more
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                {[
                  { v: "10k+", l: "Products" },
                  { v: "50k+", l: "Customers" },
                  { v: "4.9★", l: "Rating" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-bold">{s.v}</div>
                    <div className="text-xs text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[5/6] overflow-hidden rounded-3xl shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000&q=80"
                  alt="Featured shopping"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden sm:block card-soft p-4 max-w-[220px]">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-success/15 text-success">
                    <Truck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Free shipping</div>
                    <div className="text-xs text-muted-foreground">On orders $50+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { Icon: Truck, t: "Free Shipping", d: "On all orders over $50" },
            { Icon: ShieldCheck, t: "Secure Payments", d: "100% protected checkout" },
            { Icon: RefreshCw, t: "Easy Returns", d: "30-day money back" },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="card-soft p-5 flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <div className="font-semibold">{t}</div>
                <div className="text-sm text-muted-foreground">{d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold">Shop by category</h2>
            <p className="text-muted-foreground mt-1">Find exactly what you're looking for.</p>
          </div>
          <Link to="/products" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((c) => {
            const Icon = iconMap[c.icon as keyof typeof iconMap];
            return (
              <Link
                key={c.name}
                to="/products"
                className={`card-soft card-soft-hover relative overflow-hidden p-6 text-center bg-gradient-to-br ${c.color}`}
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-background shadow-soft">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <div className="mt-3 font-semibold">{c.name}</div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold">Featured products</h2>
            <p className="text-muted-foreground mt-1">Handpicked favorites this week.</p>
          </div>
          <Link to="/products" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            See all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Promo */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 lg:p-12">
            <div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-primary-foreground/10" />
            <div className="relative">
              <div className="text-sm font-medium opacity-80">Limited time</div>
              <h3 className="mt-2 text-3xl font-bold lg:text-4xl">Up to 40% off Electronics</h3>
              <p className="mt-2 opacity-90">Headphones, watches, cameras & more.</p>
              <Link
                to="/products"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-semibold text-primary hover:bg-background/90 transition-colors"
              >
                Shop deals <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-accent p-8 lg:p-12">
            <div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-primary/10" />
            <div className="relative">
              <div className="text-sm font-medium text-primary">New arrivals</div>
              <h3 className="mt-2 text-3xl font-bold lg:text-4xl">Fresh fashion drop</h3>
              <p className="mt-2 text-muted-foreground">Refresh your wardrobe with new styles.</p>
              <Link
                to="/products"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Explore <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
