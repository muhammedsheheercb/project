import Hero from './section/hero/Hero';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Special from './section/special/Special';
import Reviews from './section/review/Review';

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center overflow-x-hidden">
        <Navbar position="absolute" />
        <Hero />
        <Special />
        <Reviews />
        <Footer />
      </div>
      <div className="fixed bottom-6 right-2 z-50 flex md:bottom-[54px] md:right-[48px]"></div>
    </main>
  );
}
