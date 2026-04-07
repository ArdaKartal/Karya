import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '../lib/data';
import AddToCartButton from '../components/AddToCartButton';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <img
          src="https://images.unsplash.com/photo-1549049950-ec22e4d01b97?q=80&w=1920&auto=format&fit=crop"
          alt="Zeytin ağacı dalları ve taze zeytinler"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Doğanın Altın Sırrı<br />Sofralarınızda.</h1>
          <p className="hero-subtitle">
            Kazdağları'nın taze esintisini taşıyan, nesillerdir süregele, tamamen doğal
            ve birinci kalite soğuk sıkım zeytinyağlarını keşfedin.
          </p>
          <Link href="/products">
            <button className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Ürünleri Keşfedin
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="products-section container">
        <h2 className="section-title">Öne Çıkan Lezzetler</h2>
        <div className="product-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p style={{ opacity: 0.7, marginBottom: '1rem', fontSize: '0.9rem', flexGrow: 1 }}>
                  {product.description?.substring(0, 80)}...
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="product-price">₺{product.price}</span>
                </div>
                <AddToCartButton product={product} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link href="/products">
            <button className="btn btn-primary">Tüm Ürünleri Gör</button>
          </Link>
        </div>
      </section>

      {/* Info Banner */}
      <section style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '5rem 0', margin: '4rem 0' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'center', textAlign: 'center' }}>
          <div style={{ maxWidth: '300px' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <span style={{ fontSize: '2rem' }}>🌿</span>
            </div>
            <h3 style={{ marginBottom: '1rem' }}>%100 Doğal</h3>
            <p style={{ opacity: 0.8 }}>Hiçbir katkı maddesi veya koruyucu içermeyen saf doğallık.</p>
          </div>
          <div style={{ maxWidth: '300px' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <span style={{ fontSize: '2rem', margin: '1rem' }}>❄️</span>
            </div>
            <h3 style={{ marginBottom: '1rem' }}>Soğuk Sıkım</h3>
            <p style={{ opacity: 0.8 }}>24°C altında sıkılarak tüm vitamin ve antioksidanları korunur.</p>
          </div>
          <div style={{ maxWidth: '300px' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <span style={{ fontSize: '2rem' }}>🥇</span>
            </div>
            <h3 style={{ marginBottom: '1rem' }}>Ödüllü Lezzet</h3>
            <p style={{ opacity: 0.8 }}>Uluslararası yarışmalardan altın madalyalı eşsiz tat profili.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
