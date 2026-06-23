import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Heart, Users, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Shoply — Our Story" },
      { name: "description", content: "Learn about Shoply's mission, values and services." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary-soft to-background">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" /> About Shoply
          </div>
          <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">Shopping, beautifully simple.</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Shoply is a modern e-commerce experience built to make discovering and buying products effortless. We believe great shopping starts with great design and a genuine love for the customer.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { Icon: Target, t: "Our Mission", d: "Make online shopping faster, friendlier and more delightful for everyone." },
            { Icon: Heart, t: "Our Values", d: "Customer first. Honest pricing. Quality you can trust on every order." },
            { Icon: Users, t: "Our Community", d: "50,000+ happy shoppers across the country and growing every day." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="card-soft p-6">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="overflow-hidden rounded-3xl shadow-card">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&q=80"
              alt="Our team"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold">What we offer</h2>
            <p className="mt-3 text-muted-foreground">
              From everyday essentials to standout finds, our curated catalog covers what you need across five core categories.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Curated selection of electronics, fashion, shoes, books & accessories",
                "Fast & free shipping on orders over $50",
                "Secure checkout with industry-standard encryption",
                "30-day hassle-free returns",
                "Friendly support, 7 days a week",
              ].map((p) => (
                <li key={p} className="flex gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Browse products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
