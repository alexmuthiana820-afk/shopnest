"use client"
import { useState } from "react"

type Product = { id: number, name: string, price: number, emoji: string }

const PRODUCTS: Product[] = [
  { id: 1, name: "Minimal Sneakers", price: 89, emoji: "👟" },
  { id: 2, name: "Wireless Headphones", price: 129, emoji: "🎧" },
  { id: 3, name: "Smart Watch", price: 199, emoji: "⌚" },
  { id: 4, name: "Canvas Backpack", price: 59, emoji: "🎒" },
  { id: 5, name: "Sunglasses", price: 49, emoji: "🕶️" },
  { id: 6, name: "Water Bottle", price: 29, emoji: "💧" },
]

export default function Home() {
  const [cart, setCart] = useState<Product[]>([])
  const [checkedOut, setCheckedOut] = useState(false)
  const total = cart.reduce((sum, p) => sum + p.price, 0)

  function addToCart(p: Product) {
    setCart([...cart, p])
    setCheckedOut(false)
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold">ShopNest 🛒</h1>
          <p className="text-gray-600 mt-2">Simple, fast e-commerce. Add to cart, checkout.</p>
        </div>
        <div className="border rounded-xl px-4 py-3 text-center">
          <p className="font-bold">Cart: {cart.length} items</p>
          <p className="text-sm">Total: ${total}</p>
        </div>
      </div>

      {checkedOut && (
        <div className="bg-green-100 border border-green-300 rounded-xl p-4 mt-6">
          <p className="font-bold">Order placed! 🎉</p>
          <p className="text-sm">Thanks for shopping with ShopNest. This is a demo checkout.</p>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {PRODUCTS.map((p) => (
          <div key={p.id} className="border rounded-xl p-5 text-center">
            <p className="text-4xl">{p.emoji}</p>
            <p className="font-bold mt-3">{p.name}</p>
            <p className="text-gray-600">${p.price}</p>
            <button onClick={() => addToCart(p)} className="bg-blue-600 text-white px-4 py-2 rounded mt-3 w-full">Add to Cart</button>
          </div>
        ))}
      </div>

      <button onClick={() => { if (cart.length > 0) { setCheckedOut(true); setCart([]) } }} className="bg-black text-white px-6 py-3 rounded-lg mt-8 w-full">
        Checkout — ${total} (Demo)
      </button>

      <p className="text-sm text-gray-500 mt-8">Built by Alex Muthiana — Next.js • Tailwind • Stripe-ready demo</p>
    </main>
  )
}