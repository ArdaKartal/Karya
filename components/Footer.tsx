import Link from 'next/link';
import { Leaf, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>
              <Leaf size={28} />
              <span>Aurelia Oliva</span>
            </div>
            <p style={{ opacity: 0.8, marginBottom: '1.5rem' }}>
              Asırlık zeytin ağaçlarından sofralarınıza uzanan, soğuk sıkım ve %100 doğal sızma zeytinyağı mucizesi.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ opacity: 0.8 }}><Instagram size={20} /></a>
              <a href="#" style={{ opacity: 0.8 }}><Facebook size={20} /></a>
              <a href="#" style={{ opacity: 0.8 }}><Twitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="footer-heading">Hızlı Bağlantılar</h4>
            <ul>
              <li style={{ marginBottom: '0.8rem' }}><Link href="/" style={{ opacity: 0.8 }}>Ana Sayfa</Link></li>
              <li style={{ marginBottom: '0.8rem' }}><Link href="/products" style={{ opacity: 0.8 }}>Ürünlerimiz</Link></li>
              <li style={{ marginBottom: '0.8rem' }}><Link href="/about" style={{ opacity: 0.8 }}>Hakkımızda</Link></li>
              <li style={{ marginBottom: '0.8rem' }}><Link href="/cart" style={{ opacity: 0.8 }}>Sepetim</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-heading">İletişim</h4>
            <ul>
              <li style={{ marginBottom: '0.8rem', opacity: 0.8 }}>Kazdağları Etekleri, Edremit / Balıkesir</li>
              <li style={{ marginBottom: '0.8rem', opacity: 0.8 }}>info@aureliaoliva.com</li>
              <li style={{ marginBottom: '0.8rem', opacity: 0.8 }}>+90 (555) 123 45 67</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aurelia Oliva. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
