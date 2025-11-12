import { EntranceWave, ScrollAnimate } from '@/components/Animation';
import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="/images/home/hero/bg.png"
      >
        <source src="#" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      <Image
        src={'/images/home/hero/bg.webp'}
        alt="bg image"
        width={2000}
        height={1000}
        priority
        className="absolute inset-0 z-10 h-full w-full object-cover"
      />

      {/* <div className="absolute inset-0"></div> */}

      {/* Animated Content Container */}
      <ScrollAnimate>
        {/* <h1 className="font-josefin_Sans text-center text-5xl font-[700] tracking-[5%] text-[#fff] lg:text-8xl">
          True Manchester
        </h1> */}
        <EntranceWave
          text="True Manchester"
          className="font-josefin_Sans text-center text-5xl font-[700] tracking-[5%] text-[#fff] hover:cursor-pointer lg:text-8xl"
        />

        {/* <div className="flex flex-col items-center justify-center gap-4 pt-4 md:flex-row md:pt-8">
          <Link href={'/table-booking'}>
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="font-[OccamsEraser] text-sm font-[400] uppercase tracking-[5%] text-[#fff] md:text-base">
                  Book Table
                </h1>
              </div>
              <Image
                src={'/images/home/hero/gb.png'}
                alt="red button"
                width={100}
                height={100}
                className="w-32 md:w-36"
              />
            </div>
          </Link>
          <Link href={'/menu'}>
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="font-[OccamsEraser] text-sm font-[400] uppercase tracking-[5%] text-[#fff] md:text-base">
                  Order Now
                </h1>
              </div>
              <Image
                src={'/images/home/hero/rb.png'}
                alt="red button"
                width={100}
                height={100}
                className="w-32 md:w-36"
              />
            </div>
          </Link>
        </div> */}
      </ScrollAnimate>
    </section>
  );
};

export default Hero;
