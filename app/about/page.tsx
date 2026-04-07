import React from 'react';
import { Leaf, Award, Heart, Droplets, Sun, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Hakkımızda | Aurelia Oliva',
  description: 'Aurelia Oliva zeytinyağlarının köklü tarihi ve doğaya saygılı üretim serüveni.',
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="about-hero animate-fade-in">
        <img 
          src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=2000&auto=format&fit=crop" 
          alt="Zeytin Bahçesi" 
          className="about-hero-bg"
        />
        <div className="about-hero-overlay"></div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem', fontWeight: 700, letterSpacing: '-1px' }}>
            Köklerden Gelen Lezzet
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto', fontWeight: 300 }}>
            Toprağa olan sevdamız ve asırlık zeytin ağaçlarına duyduğumuz saygı ile başlayan, nesilden nesile aktarılan yolculuğumuz.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2>Kazdağları'nın Eteklerinden Sofranıza</h2>
              <p>
                Aurelia Oliva, adını doğanın uyanışından ve altın sarısı zeytinyağının büyüleyici renginden alır. 1920'lerden bu yana üç kuşaktır süregelen zeytin yetiştiriciliği geleneğimizi modern, hijyenik ve yenilikçi teknolojiyle birleştiriyoruz.
              </p>
              <p>
                Bölgemizin düşük asitli, yüksek polifenol değerli zeytinlerini, en uygun hasat zamanında tek tek özenle topluyoruz. Hiç bekletmeden 24 derece altında soğuk sıkım (cold press) yöntemiyle işleyerek, doğanın bize sunduğu şifayı ve sağlık bileşenlerini maksimum seviyede koruyoruz.
              </p>
              <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem' }}>
                <div>
                  <h4 style={{ fontSize: '2rem', color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>1920</h4>
                  <p style={{ fontSize: '0.9rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px' }}>Kuruluş Yılı</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '2rem', color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>10.000+</h4>
                  <p style={{ fontSize: '0.9rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px' }}>Zeytin Ağacı</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '2rem', color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>%100</h4>
                  <p style={{ fontSize: '0.9rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px' }}>Saf & Doğal</p>
                </div>
              </div>
            </div>
            <div className="about-image-wrapper animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img 
                src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1200&auto=format&fit=crop" 
                alt="Zeytin ağaçları ve hasat" 
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="values-title">Neden Aurelia Oliva?</h2>
          <div className="values-grid">
            <div className="value-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="value-icon-wrapper">
                <Leaf size={40} />
              </div>
              <h3>Ekolojik ve Sürdürülebilir</h3>
              <p>Doğaya saygılı tarım uygulamalarıyla biyoçeşitliliği destekliyor, toprağımızın zenginliğini gelecek nesillere aktarıyoruz.</p>
            </div>
            <div className="value-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="value-icon-wrapper">
                <Droplets size={40} />
              </div>
              <h3>Soğuk Sıkım (Cold Press)</h3>
              <p>Zeytinlerimizi 24°C'nin altında işleyerek, yüksek polifenol, antioksidan ve vitamin değerlerini yağın içinde hapsediyoruz.</p>
            </div>
            <div className="value-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="value-icon-wrapper">
                <Heart size={40} />
              </div>
              <h3>Ustalıklı İşçilik</h3>
              <p>Aile mirası tecrübemizle, her bir damlada kusursuz meyvemsi lezzeti ve mükemmel rayihayı yakalamayı hedefliyoruz.</p>
            </div>
            <div className="value-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="value-icon-wrapper">
                <ShieldCheck size={40} />
              </div>
              <h3>Tam Şeffaflık</h3>
              <p>Tarladan sofralarınıza uzanan her aşamayı şeffaf bir şekilde yönetiyor, laboratuvar analiz testleri ile kalitemizi kanıtlıyoruz.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
