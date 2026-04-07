"use client";

import Link from 'next/link';
import { useCart } from '../../context/CartContext';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <div className="container" style={{ padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary-color)' }}>Alışveriş Sepetim</h1>

      {items.length === 0 ? (
        <div className="glass-panel" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem', color: 'var(--text-dark)' }}>Sepetiniz boş görünüyor</h2>
          <p style={{ opacity: 0.8, marginBottom: '2rem' }}>Doğal ve sağlıklı zeytinyağlarımızı incelemek için ürünler sayfasına göz atabilirsiniz.</p>
          <Link href="/products">
            <button className="btn btn-primary">Alışverişe Başla</button>
          </Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '3rem' }}>
          <div>
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border-color)', textAlign: 'left' }}>
                    <th style={{ paddingBottom: '1rem' }}>Ürün</th>
                    <th style={{ paddingBottom: '1rem' }}>Adet</th>
                    <th style={{ paddingBottom: '1rem', textAlign: 'right' }}>Toplam</th>
                    <th style={{ paddingBottom: '1rem' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} style={{ borderBottom: '1px solid var(--background-light)' }}>
                      <td style={{ padding: '1.5rem 0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '10px' }} />
                        <div>
                          <h4 style={{ color: 'var(--primary-color)' }}>{item.name}</h4>
                          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>₺{item.price}</p>
                        </div>
                      </td>
                      <td style={{ padding: '1.5rem 0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={14} /></button>
                          <span>{item.quantity}</span>
                          <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={14} /></button>
                        </div>
                      </td>
                      <td style={{ padding: '1.5rem 0', textAlign: 'right', fontWeight: 600 }}>
                        ₺{item.price * item.quantity}
                      </td>
                      <td style={{ padding: '1.5rem 0', textAlign: 'right' }}>
                        <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: '#e53e3e', cursor: 'pointer' }}>
                          <Trash2 size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <div className="glass-panel" style={{ padding: '2rem', position: 'sticky', top: '100px' }}>
              <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Sipariş Özeti</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', opacity: 0.8 }}>
                <span>Ara Toplam</span>
                <span>₺{cartTotal}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', opacity: 0.8 }}>
                <span>Kargo Bedeli</span>
                <span>₺0,00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-color)' }}>
                <span>Toplam</span>
                <span>₺{cartTotal}</span>
              </div>
              <Link href="/checkout" style={{ textDecoration: 'none' }}>
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Ödemeye İlerle <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
