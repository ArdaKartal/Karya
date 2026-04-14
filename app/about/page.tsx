import React from 'react';
import { Leaf, Award, Heart, Droplets, Sun, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Hakkımızda | Karya Zeytinyağları',
  description: 'Karya Zeytinyağları\'nın köklü tarihi ve doğaya saygılı üretim serüveni.',
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
              <h2>Karya'nın Kalbinden Sofranıza</h2>
              <p>
                Karya Zeytinyağları, adını binlerce yıllık antik medeniyetlerin yeşerdiği Ege topraklarından alır. 1920'lerden bu yana üç kuşaktır süregelen zeytin yetiştiriciliği geleneğimizi modern, hijyenik ve yenilikçi teknolojiyle birleştiriyoruz.
              </p>
              <p>
                Milas bölgemizin düşük asitli, yüksek polifenol değerli Memecik zeytinlerini, en uygun hasat zamanında tek tek özenle topluyoruz. Hiç bekletmeden 24 derece altında soğuk sıkım (cold press) yöntemiyle işleyerek, doğanın bize sunduğu şifayı ve sağlık bileşenlerini maksimum seviyede koruyoruz.
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

      {/* Memecik Section */}
      <section className="about-section" style={{ backgroundColor: 'var(--background-light)' }}>
        <div className="container">
          <div className="about-grid" style={{ direction: 'rtl' }}>
            {/* Using RTL to flip the grid, then LTR inside items so text is right, image is left */}
            <div className="about-content animate-fade-in" style={{ animationDelay: '0.2s', direction: 'ltr' }}>
              <h2>Kendi Bahçemizden,<br />Memecik Mucizesi</h2>
              <p>
                Muğla Milas'taki <strong>kendi zeytinliklerimizden</strong> özenle hasat ettiğimiz zeytinleri, dışarıdan hiçbir alım yapmadan, sadece asırlık ağaçlarımızın bize sunduğu mahsullerle işliyoruz. Tarladan şişeye kadar tüm üretim aşamalarını kendi tesislerimizde, şeffaflıkla ve büyük bir hassasiyetle gerçekleştiriyoruz. Böylece her damlasında Karya'nın gerçek lezzetini garanti ediyoruz.
              </p>
              <p>
                Zeytinyağlarımızın ardındaki yegane sır, bölgemize has ve Avrupa Birliği Coğrafi İşaretine sahip <strong>Memecik zeytinidir</strong>. Memecik ağaçları, Muğla'nın kayalık ve zengin mineral yapısına tutunarak yüksek polifenol oranına, yoğun meyvemsi kokuya ve kendine has hafif genzi yakan, antioksidan deposu bir lezzete kavuşur.
              </p>
            </div>
            <div className="about-image-wrapper animate-fade-in" style={{ animationDelay: '0.4s', direction: 'ltr' }}>
              <img
                src="/memecik_hero.png"
                alt="Memecik Zeytini ve Kendi Üretimimiz"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section" style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem', letterSpacing: '-0.5px' }}>Üretim Sürecimiz</h2>
            <p style={{ opacity: 0.8, fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>Ağaçtan şişeye şeffaflıkla yürüttüğümüz, kalite ve sevgi odaklı yolculuğumuz.</p>
          </div>
          <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            <div className="process-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <img src="/process_harvest.png" alt="Memecik Zeytini Hasat Süreci" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px', marginBottom: '1.5rem', boxShadow: 'var(--shadow-md)' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>1. Özenli Hasat</h3>
              <p style={{ opacity: 0.8, lineHeight: 1.6 }}>Doğru olgunluk seviyesine ulaşan Memecik zeytinlerini, asırlık ağaçlarımızdan dallarına zarar vermeden dikkatle topluyoruz.</p>
            </div>
            <div className="process-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img src="/process_press.png" alt="Soğuk Sıkım Tesisi" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px', marginBottom: '1.5rem', boxShadow: 'var(--shadow-md)' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>2. Tesisimizde Soğuk Sıkım</h3>
              <p style={{ opacity: 0.8, lineHeight: 1.6 }}>Toplanan zeytinleri bekletmeden kendi tesisimize alıp, 24°C altında sıkarak polifenol ve antioksidan değerlerini koruyoruz.</p>
            </div>
            <div className="process-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img src="/process_bottle.png" alt="Premium Karya Şişesi" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px', marginBottom: '1.5rem', boxShadow: 'var(--shadow-md)' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>3. Şişeleme ve Sunum</h3>
              <p style={{ opacity: 0.8, lineHeight: 1.6 }}>Dinlendirilen yüksek kaliteli zeytinyağlarımızı, aromasını kaybetmemesi için özel cam şişelerimizde sofralarınıza güvenle ulaştırıyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="values-title">Neden Karya Zeytinyağları?</h2>
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
