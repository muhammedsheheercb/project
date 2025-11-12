'use client';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const JoinUs = () => {
  return (
    <section
      className="relative flex w-full items-center justify-center bg-cover bg-fixed bg-center px-4 py-24 md:py-36"
      style={{
        backgroundImage: "url('/images/about-us/3.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center md:px-0">
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="font-josefin_Sans text-sm uppercase tracking-[8%] text-[#D1A04D] drop-shadow-md md:text-base">
            Celebrate Local Flavours
          </span>
          <h2 className="font-josefin_Sans max-w-4xl text-4xl font-[500] uppercase leading-tight text-white drop-shadow-md md:text-6xl">
            Experience the Spirit of
            <br />
            <span className="text-[#D1A04D]">True Manchester</span>
          </h2>
        </div>

        <p className="font-poppins max-w-2xl text-center text-sm font-[300] leading-relaxed text-[#E6E6E6] drop-shadow-sm md:text-base lg:text-lg">
          Step into a place where Manchester&apos;s culture, creativity, and
          bold flavours come together. At True, every dish is crafted with
          passion, using locally sourced ingredients to honour the city we love.
          Whether you&apos;re joining us for a casual bite or a special
          celebration, we promise an unforgettable dining experience that feels
          uniquely Manchester.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <Link href="/table-booking">
            <Button
              variant={'destructive'}
              className="font-open_Sans flex h-20 w-40 flex-row items-center justify-center gap-2 text-center text-xs font-[600] uppercase tracking-[2px] drop-shadow-lg transition-transform duration-150 hover:cursor-pointer active:scale-95"
            >
              Reserve Table
              <ChevronRight size={16} />
            </Button>
          </Link>

          <Link href="/menu">
            <Button className="font-open_Sans flex flex-row items-center justify-center gap-2 border border-[#D1A04D] bg-transparent py-6 text-center text-xs font-[600] uppercase tracking-[2px] text-[#D1A04D] drop-shadow-lg transition-all duration-150 hover:cursor-pointer hover:bg-[#D1A04D] hover:text-black active:scale-95">
              View Menu
              <ChevronRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
