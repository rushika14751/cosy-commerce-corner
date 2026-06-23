import { useMemo, useState, useEffect } from "react";
import { SlidersHorizontal } from "lucide-react";
import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

type Sort = "popularity" | "price-asc" | "price-desc";

export default function ProductsPage() {
  useEffect(() => {
    document.title = "Products — Shoply";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Browse all products on Shoply with filters and sorting.");
    }
  }, []);

  const [cat, setCat] = useState<string>("All");
  const [maxPrice, setMaxPrice] = useState<number>(300);
  const [sort, setSort] = useState<Sort>("popularity");

  const filtered = useMemo(() => {
    let list = products.filter((p) => p.price <= maxPrice);
    if (cat !== "All") list = list.filter((p) => p.category === cat);
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "popularity") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [cat, maxPrice, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold sm:text-4xl">All Products</h1>
        <p className="text-muted-foreground mt-2">
          {filtered.length} product{filtered.length !== 1 && "s"} available
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        {/* Filters */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="card-soft p-5">
            <div className="flex items-center gap-2 mb-4">
              <SlidersHorizontal className="h-4 w-4 text-primary" />
              <h3 className="font-semibold">Filters</h3>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Category</div>
              <div className="flex flex-col gap-1">
                {["All", ...categories.map((c) => c.name)].map((c) => (
                  <button
                    key={c}
                    onClick={() => setCat(c)}
                    className={`text-left rounded-md px-3 py-2 text-sm transition-colors ${
                      cat === c ? "bg-primary-soft text-primary font-medium" : "hover:bg-secondary"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Max price</div>
                <div className="text-sm font-semibold">${maxPrice}</div>
              </div>
              <input
                type="range"
                min={10}
                max={300}
                step={10}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[oklch(0.55_0.20_258)]"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>$10</span>
                <span>$300</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Grid */}
        <div>
          <div className="mb-5 flex items-center justify-between gap-3">
            <div className="text-sm text-muted-foreground hidden sm:block">
              Showing {filtered.length} results
            </div>
            <label className="ml-auto flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Sort:</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as Sort)}
                className="rounded-full border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="popularity">Popularity</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </label>
          </div>

          {filtered.length === 0 ? (
            <div className="card-soft p-12 text-center text-muted-foreground">
              No products match your filters.
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
