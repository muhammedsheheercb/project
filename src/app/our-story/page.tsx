import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Hero from './section/Hero';
import Story from './section/Story';
import JoinUs from './section/JoinUs';

const page = ({}) => {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#000]">
        <Navbar position="absolute" />
        <Hero />
        <Story />
        <JoinUs />
        <Footer />
      </div>
    </main>
  );
};

export default page;
