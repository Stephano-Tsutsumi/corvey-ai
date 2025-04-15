import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </main>
  );
}
