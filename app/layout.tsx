import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartProvider } from '../context/CartContext';

export const metadata: Metadata = {
  title: 'Karya Zeytinyağları | Premium Soğuk Sıkım Zeytinyağları',
  description: 'Ege\'nin kalbi Milas\'tan sofralarınıza uzanan, tamamen doğal, premium kalite soğuk sıkım ve naturel sızma zeytinyağları.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="animate-fade-in">
        <CartProvider>
          <Header />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
