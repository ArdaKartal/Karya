import { Product } from '../context/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Erken Hasat Soğuk Sıkım Zeytinyağı',
    price: 450,
    image: '/olive_oil.png',
    description: 'Ekim ayının ilk haftası toplanan yeşil zeytinlerden 24 derece altında soğuk sıkım yöntemiyle elde edilmiştir. Fenolik bileşenlerce en zengin olan ürünümüzdür.'
  },
  {
    id: '2',
    name: 'Naturel Sızma Zeytinyağı',
    price: 380,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop',
    description: 'Olgun hasat döneminde toplanan zeytinlerden elde edilmiş, yoğun meyvemsi aromaya sahip gündelik kullanıma uygun premium sızma zeytinyağı.'
  },
  {
    id: '3',
    name: 'Taş Baskı Naturel Sızma',
    price: 520,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop',
    description: 'Geleneksel granit taş değirmenlerde ezilerek, hasır çuvallarda preslenen ve sızdırılarak elde edilen özel seri zeytinyağı.'
  },
  {
    id: '4',
    name: 'Organik Sızma Zeytinyağı',
    price: 650,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop',
    description: 'Ekolojik tarım prensipleriyle yetiştirilen zeytinlerden elde edilen, uluslararası organik sertifikalı sızma zeytinyağımız.'
  },
  {
    id: '5',
    name: 'Sarımsak Aromalı Zeytinyağı',
    price: 320,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop',
    description: 'Hakiki zeytinyağımızla buluşan Taşköprü sarımsaklarının doğal maserasyon yöntemiyle elde edilen aromatik lezzeti.'
  },
  {
    id: '6',
    name: 'Fesleğen Aromalı Zeytinyağı',
    price: 320,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop',
    description: 'Taze taze toplanmış İtalyan fesleğenlerinin hafif sızma zeytinyağında demlenmesiyle hazırlanan gurme ürün.'
  }
];
