"use client";

import { ShoppingBag } from 'lucide-react';
import { useCart, Product } from '../context/CartContext';

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <button 
      className="btn btn-outline product-btn"
      onClick={() => addToCart(product)}
    >
      <ShoppingBag size={18} />
      Sepete Ekle
    </button>
  );
}
