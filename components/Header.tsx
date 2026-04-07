"use client";

import Link from 'next/link';
import { ShoppingCart, Leaf, X, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cartCount, 
    items, 
    cartTotal, 
    updateQuantity, 
    removeFromCart 
  } = useCart();

  return (
    <>
      <header className="glass-header">
        <div className="container">
          <nav className="header-nav">
            <Link href="/" className="logo">
              <Leaf size={28} />
              <span>Aurelia Oliva</span>
            </Link>

            <ul className="nav-links">
              <li><Link href="/" className="nav-link">Ana Sayfa</Link></li>
              <li><Link href="/products" className="nav-link">Ürünlerimiz</Link></li>
              <li><Link href="/about" className="nav-link">Hakkımızda</Link></li>
            </ul>

            <div className="cart-icon-wrapper" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart size={24} color="var(--primary-color)" />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </div>
          </nav>
        </div>
      </header>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />
      )}
      
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>Sepetiniz ({cartCount})</h3>
          <button onClick={() => setIsCartOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>
        
        <div className="cart-items">
          {items.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--primary-light)', marginTop: '2rem' }}>
              Sepetiniz şu an boş. Doğanın mucizesini keşfetmeye başlayın.
            </p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h4 style={{ color: 'var(--primary-color)' }}>{item.name}</h4>
                  <p style={{ fontWeight: 600, marginTop: '0.25rem' }}>₺{item.price}</p>
                  
                  <div className="cart-item-actions">
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={14} /></button>
                    <span>{item.quantity}</span>
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={14} /></button>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#e53e3e', fontSize: '0.8rem', cursor: 'pointer' }}
                    >
                      Kaldır
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Toplam:</span>
              <span>₺{cartTotal}</span>
            </div>
            <Link href="/checkout" onClick={() => setIsCartOpen(false)} style={{ width: '100%', textDecoration: 'none' }}>
              <button className="btn btn-primary" style={{ width: '100%' }}>Ödemeye Geç</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
