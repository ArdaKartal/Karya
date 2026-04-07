"use client";

import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../lib/data';

export default function ProductsPage() {
  const { addToCart } = useCart();

  return (
    <div>
      <div className="page-header animate-fade-in">
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Tüm Ürünlerimiz</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
            Doğanın kalbinden sofralarınıza uzanan mucize. Her bir damlasında sağlık ve asırlık lezzet barındıran ürünlerimizi keşfedin.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '4rem 2rem' }}>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card animate-fade-in">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p style={{ opacity: 0.7, marginBottom: '1rem', fontSize: '0.9rem', flexGrow: 1 }}>
                  {product.description}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="product-price">₺{product.price}</span>
                </div>
                <button 
                  className="btn btn-outline product-btn"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingBag size={18} />
                  Sepete Ekle
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
