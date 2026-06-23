import { Link } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  return (
    <div className="card-soft card-soft-hover group overflow-hidden flex flex-col">
      <Link
        to={`/products/${product.id}`}
        className="relative block aspect-square overflow-hidden bg-secondary"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold text-primary-foreground">
            {product.badge}
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          {product.category}
        </div>
        <Link
          to={`/products/${product.id}`}
          className="mt-1 line-clamp-2 font-semibold hover:text-primary transition-colors min-h-[3rem]"
        >
          {product.name}
        </Link>
        <div className="mt-2 flex items-center gap-1 text-sm">
          <Star className="h-4 w-4 fill-warning text-warning" />
          <span className="font-medium">{product.rating}</span>
          <span className="text-muted-foreground">· In stock</span>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2">
          <div className="text-lg font-bold">${product.price.toFixed(2)}</div>
          <button
            onClick={() => add(product)}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 active:scale-95 transition-all"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
