"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';
import { CheckCircle } from 'lucide-react';

export default function CheckoutPage() {
  const { cartTotal, items, clearCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    clearCart();
  };

  if (isSuccess) {
    return (
      <div className="container animate-fade-in" style={{ padding: '8rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
        <CheckCircle size={80} color="var(--primary-color)" style={{ margin: '0 auto 2rem' }} />
        <h1 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Siparişiniz Alındı!</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '2rem' }}>
          Doğanın mucizesini sizinle buluşturmak için sabırsızlanıyoruz. Siparişiniz özenle hazırlanıp en kısa sürede kargoya verilecektir.
        </p>
        <Link href="/">
          <button className="btn btn-primary">Ana Sayfaya Dön</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary-color)' }}>Ödeme İşlemleri</h1>
      
      <div className="checkout-layout">
        <div>
          <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Teslimat Bilgileri</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Adınız</label>
                <input type="text" className="form-input" required placeholder="Adınız" />
              </div>
              <div className="form-group">
                <label className="form-label">Soyadınız</label>
                <input type="text" className="form-input" required placeholder="Soyadınız" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">E-posta Adresi</label>
              <input type="email" className="form-input" required placeholder="ornek@email.com" />
            </div>

            <div className="form-group">
              <label className="form-label">Teslimat Adresi</label>
              <textarea className="form-input" required rows={3} placeholder="Açık adresinizi giriniz..."></textarea>
            </div>

            <h3 style={{ margin: '2rem 0 1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Ödeme Yöntemi</h3>
            
            <div className="form-group">
              <label className="form-label">Kart Üzerindeki İsim</label>
              <input type="text" className="form-input" required />
            </div>

            <div className="form-group">
              <label className="form-label">Kart Numarası</label>
              <input type="text" className="form-input" placeholder="0000 0000 0000 0000" maxLength={19} required />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Son Kullanma Tarihi</label>
                <input type="text" className="form-input" placeholder="AA/YY" maxLength={5} required />
              </div>
              <div className="form-group">
                <label className="form-label">CVV</label>
                <input type="text" className="form-input" placeholder="123" maxLength={3} required />
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>
              Siparişi Tamamla (₺{cartTotal})
            </button>
          </form>
        </div>

        <div>
          <div className="glass-panel" style={{ padding: '2rem', position: 'sticky', top: '100px' }}>
            <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Sipariş Özeti</h3>
            
            <div style={{ marginBottom: '2rem' }}>
              {items.map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.9rem' }}>
                  <span>{item.name} <span style={{ opacity: 0.6 }}>x {item.quantity}</span></span>
                  <span style={{ fontWeight: 600 }}>₺{item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', opacity: 0.8 }}>
              <span>Ara Toplam</span>
              <span>₺{cartTotal}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', opacity: 0.8 }}>
              <span>Kargo Bedeli</span>
              <span>Ücretsiz</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-color)' }}>
              <span>Toplam</span>
              <span>₺{cartTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
