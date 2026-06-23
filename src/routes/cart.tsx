import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";

export default function CartPage() {
  useEffect(() => {
    document.title = "Your Cart — Shoply";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Review your selected items and proceed to checkout.");
    }
  }, []);
  const { items, setQty, remove, total, clear } = useCart();
  const shipping = total > 50 || total === 0 ? 0 : 6.99;
  const tax = total * 0.08;
  const grand = total + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-primary-soft text-primary">
          <ShoppingBag className="h-9 w-9" />
        </div>
        <h1 className="mt-6 text-3xl font-bold">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">Browse our catalog and add something you love.</p>
        <Link
          to="/products"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Start shopping <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold sm:text-4xl">Your Cart</h1>
      <p className="text-muted-foreground mt-1">{items.length} item{items.length !== 1 && "s"}</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="space-y-4">
          {items.map(({ product, qty }) => (
            <div key={product.id} className="card-soft p-4 grid grid-cols-[80px_minmax(0,1fr)_auto] sm:grid-cols-[100px_minmax(0,1fr)_auto] gap-4 items-center">
              <Link to={`/products/${product.id}`} className="block">
                <div className="aspect-square overflow-hidden rounded-xl bg-secondary">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                </div>
              </Link>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">{product.category}</div>
                <Link
                  to={`/products/${product.id}`}
                  className="block font-semibold truncate hover:text-primary"
                >
                  {product.name}
                </Link>
                <div className="mt-1 font-bold">${product.price.toFixed(2)}</div>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center rounded-full border border-input">
                    <button
                      onClick={() => setQty(product.id, qty - 1)}
                      className="grid h-8 w-8 place-items-center rounded-full hover:bg-secondary"
                      aria-label="Decrease"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">{qty}</span>
                    <button
                      onClick={() => setQty(product.id, qty + 1)}
                      className="grid h-8 w-8 place-items-center rounded-full hover:bg-secondary"
                      aria-label="Increase"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <button
                    onClick={() => remove(product.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Remove
                  </button>
                </div>
              </div>
              <div className="text-right font-bold whitespace-nowrap">
                ${(product.price * qty).toFixed(2)}
              </div>
            </div>
          ))}

          <button
            onClick={clear}
            className="text-sm text-muted-foreground hover:text-destructive"
          >
            Clear cart
          </button>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="card-soft p-6">
            <h2 className="text-lg font-bold">Order Summary</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Subtotal</dt>
                <dd className="font-medium">${total.toFixed(2)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Shipping</dt>
                <dd className="font-medium">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Tax (est.)</dt>
                <dd className="font-medium">${tax.toFixed(2)}</dd>
              </div>
              <div className="border-t border-border pt-3 flex justify-between text-base">
                <dt className="font-semibold">Total</dt>
                <dd className="font-bold">${grand.toFixed(2)}</dd>
              </div>
            </dl>

            <button
              onClick={() => alert("Demo checkout — this is a student project.")}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card hover:bg-primary/90 hover:shadow-hover transition-all"
            >
              Proceed to Checkout <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/products"
              className="mt-3 block text-center text-sm text-muted-foreground hover:text-primary"
            >
              Continue shopping
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
