import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Star, Minus, Plus, ShoppingCart, Zap, ShieldCheck, Truck, RefreshCw } from "lucide-react";
import { getProduct, products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/products/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Shoply` },
          { name: "description", content: loaderData.product.description },
          { property: "og:title", content: loaderData.product.name },
          { property: "og:description", content: loaderData.product.description },
          { property: "og:image", content: loaderData.product.image },
        ]
      : [{ title: "Product — Shoply" }],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="text-2xl font-bold">Product not found</h1>
      <Link to="/products" className="mt-4 inline-block text-primary hover:underline">
        Back to products
      </Link>
    </div>
  ),
  component: ProductDetails,
});

function ProductDetails() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const buyNow = () => {
    add(product, qty);
    navigate({ to: "/cart" });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/products" className="hover:text-primary">Products</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="card-soft overflow-hidden bg-secondary">
          <div className="aspect-square">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">
            {product.category}
          </div>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{product.name}</h1>

          <div className="mt-3 flex items-center gap-3 text-sm">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-warning text-warning" : "text-muted-foreground/40"}`}
                />
              ))}
            </div>
            <span className="font-medium">{product.rating}</span>
            <span className="text-muted-foreground">· 248 reviews</span>
          </div>

          <div className="mt-6 flex items-baseline gap-3">
            <div className="text-4xl font-bold">${product.price.toFixed(2)}</div>
            <div className="text-lg text-muted-foreground line-through">
              ${(product.price * 1.25).toFixed(2)}
            </div>
            <span className="rounded-full bg-success/15 px-2 py-0.5 text-xs font-semibold text-success">
              Save 20%
            </span>
          </div>

          <p className="mt-6 text-muted-foreground leading-relaxed">{product.description}</p>

          <div className="mt-8 flex items-center gap-4">
            <div className="inline-flex items-center rounded-full border border-input bg-background">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="grid h-11 w-11 place-items-center rounded-full hover:bg-secondary"
                aria-label="Decrease"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center font-semibold">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="grid h-11 w-11 place-items-center rounded-full hover:bg-secondary"
                aria-label="Increase"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <div className="text-sm text-muted-foreground">
              Subtotal: <span className="font-semibold text-foreground">${(product.price * qty).toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => add(product, qty)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-primary bg-background px-6 py-3 text-sm font-semibold text-primary hover:bg-primary-soft transition-colors"
            >
              <ShoppingCart className="h-4 w-4" /> Add to Cart
            </button>
            <button
              onClick={buyNow}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card hover:bg-primary/90 hover:shadow-hover transition-all"
            >
              <Zap className="h-4 w-4" /> Buy Now
            </button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { Icon: Truck, t: "Free shipping" },
              { Icon: ShieldCheck, t: "Secure payment" },
              { Icon: RefreshCw, t: "30-day returns" },
            ].map(({ Icon, t }) => (
              <div key={t} className="flex flex-col items-center gap-1 rounded-xl bg-secondary/60 p-3 text-center">
                <Icon className="h-5 w-5 text-primary" />
                <div className="text-xs font-medium">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You may also like</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
