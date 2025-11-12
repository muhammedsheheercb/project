import Contact from '@/app/contact/section/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const page = ({}) => {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="absolute" />
        <div className="h-[14vh] w-full bg-black md:h-[12vh]" id="hero"></div>
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default page;
