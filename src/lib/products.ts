export type Product = {
  id: string;
  name: string;
  price: number;
  category: "Electronics" | "Fashion" | "Shoes" | "Books" | "Accessories";
  rating: number;
  image: string;
  description: string;
  badge?: string;
};

export const categories = [
  { name: "Electronics", icon: "Laptop", color: "from-blue-500/20 to-blue-500/5" },
  { name: "Fashion", icon: "Shirt", color: "from-pink-500/20 to-pink-500/5" },
  { name: "Shoes", icon: "Footprints", color: "from-amber-500/20 to-amber-500/5" },
  { name: "Books", icon: "BookOpen", color: "from-emerald-500/20 to-emerald-500/5" },
  { name: "Accessories", icon: "Watch", color: "from-violet-500/20 to-violet-500/5" },
] as const;

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Noise-Cancelling Headphones",
    price: 149.99,
    category: "Electronics",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    description: "Immerse yourself in studio-grade sound with 40-hour battery life, adaptive noise cancellation, and plush memory-foam ear cushions for all-day comfort.",
    badge: "Bestseller",
  },
  {
    id: "2",
    name: "Smart Fitness Watch Series 6",
    price: 199.0,
    category: "Electronics",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    description: "Track workouts, heart rate, sleep, and notifications on a vibrant AMOLED display. Water resistant with a 7-day battery.",
  },
  {
    id: "3",
    name: "Classic White Sneakers",
    price: 79.5,
    category: "Shoes",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    description: "Timeless silhouette in premium leather with a cushioned insole. Pairs effortlessly with any outfit.",
    badge: "New",
  },
  {
    id: "4",
    name: "Minimalist Leather Wallet",
    price: 39.0,
    category: "Accessories",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80",
    description: "Slim full-grain leather wallet with RFID protection and room for 8 cards plus cash.",
  },
  {
    id: "5",
    name: "Cotton Crewneck T-Shirt",
    price: 24.99,
    category: "Fashion",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    description: "Soft 100% organic cotton tee with a relaxed fit. Pre-shrunk and built to last wash after wash.",
  },
  {
    id: "6",
    name: "The Pragmatic Programmer",
    price: 32.0,
    category: "Books",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=80",
    description: "A modern classic on the craft of software development. Practical advice for writing better code.",
    badge: "Top Rated",
  },
  {
    id: "7",
    name: "4K Action Camera",
    price: 249.0,
    category: "Electronics",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80",
    description: "Capture every adventure in stunning 4K with built-in stabilization and waterproof housing.",
  },
  {
    id: "8",
    name: "Running Shoes Pro",
    price: 119.0,
    category: "Shoes",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1542219550-37153d387c27?w=800&q=80",
    description: "Lightweight mesh upper with responsive foam midsole. Engineered for daily training and long runs.",
  },
  {
    id: "9",
    name: "Aviator Sunglasses",
    price: 59.0,
    category: "Accessories",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    description: "Polarized UV400 lenses with a lightweight metal frame. Includes a hard case and cleaning cloth.",
  },
  {
    id: "10",
    name: "Denim Jacket",
    price: 89.0,
    category: "Fashion",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
    description: "Vintage-washed denim jacket with a tailored fit. A wardrobe staple for every season.",
  },
  {
    id: "11",
    name: "Atomic Habits",
    price: 18.5,
    category: "Books",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=800&q=80",
    description: "An easy and proven way to build good habits and break bad ones. New York Times bestseller.",
  },
  {
    id: "12",
    name: "Portable Bluetooth Speaker",
    price: 69.0,
    category: "Electronics",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
    description: "360° sound, 20-hour playtime, and IPX7 waterproof rating. Take your music anywhere.",
    badge: "Sale",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
