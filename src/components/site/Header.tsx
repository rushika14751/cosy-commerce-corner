import { Link, NavLink } from "react-router-dom";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/products", label: "Categories" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground font-bold">
            S
          </div>
          <span className="font-display text-xl font-bold tracking-tight">Shoply</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 ml-4">
          {nav.map((n) => (
            <NavLink
              key={n.label}
              to={n.to}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-md hover:bg-primary-soft hover:text-primary transition-colors ${
                  isActive ? "text-primary font-semibold" : "text-muted-foreground"
                }`
              }
              end={n.to === "/"}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden md:flex relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search products..."
              className="h-10 w-64 rounded-full border border-input bg-secondary/50 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:bg-background transition-all"
            />
          </div>

          <Link
            to="/cart"
            className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-primary-soft transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 text-[11px] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </Link>

          <button
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full hover:bg-primary-soft"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {nav.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-sm font-medium rounded-md hover:bg-primary-soft"
              >
                {n.label}
              </Link>
            ))}
            <div className="relative my-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search products..."
                className="h-10 w-full rounded-full border border-input bg-secondary/50 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
