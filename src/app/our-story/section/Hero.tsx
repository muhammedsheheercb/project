import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative mt-8 min-h-screen w-full overflow-hidden bg-[#000000]"
    >
      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-24 md:px-20">
        <div className="flex h-full w-full flex-col items-center justify-center gap-10 md:flex-row md:gap-8">
          {/* Left: Text Content */}
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2 md:items-start md:justify-start">
            <span className="font-poppins text-sm uppercase tracking-[3%] text-[#D1A04D] md:text-base">
              Welcome to True Manchester Restaurant
            </span>

            <h1 className="font-josefin_Sans text-center text-3xl font-[500] uppercase leading-tight text-[#E6E6E6] md:text-start md:text-5xl lg:text-6xl">
              True Manchester
              <br />
              <span className="text-[#D1A04D]">
                A Bold Taste of the City, From the Heart
              </span>
            </h1>

            <p className="font-poppins max-w-[500px] text-center text-base font-[300] leading-relaxed text-[#E6E6E6] md:text-start md:text-lg">
              Born in the heart of Manchester, True was created with one
              vision—to bring people together through the power of unforgettable
              food. More than just a restaurant, we&apos;re a celebration of
              local flavor, creative spirit, and warm hospitality. Every plate
              is crafted with care, and every guest is welcomed like family.
            </p>

            <div className="mt-6 flex flex-col gap-4 pb-4 sm:flex-row">
              <Link href="/menu">
                <button className="font-open_Sans bg-[#D1A04D] px-8 py-4 text-sm font-[600] uppercase tracking-[2px] text-black transition-transform duration-150 hover:bg-[#E6B862] active:scale-95">
                  View Our Menu
                </button>
              </Link>
              <Link href="/table-booking">
                <button className="font-open_Sans border-2 border-[#D1A04D] bg-transparent px-8 py-4 text-sm font-[600] uppercase tracking-[2px] text-[#D1A04D] transition-all duration-150 hover:bg-[#D1A04D] hover:text-black active:scale-95">
                  Reserve Table
                </button>
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="relative overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-us/1.webp"
                  alt="True Manchester restaurant dining experience"
                  width={600}
                  height={700}
                  className="h-[400px] w-full object-cover md:h-[600px]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating accent elements */}
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-[#D1A04D] opacity-20 blur-xl"></div>
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-[#E6B862] opacity-30 blur-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 transform md:block">
        <div className="flex items-center justify-center gap-8 rounded-full border border-[#D1A04D]/30 bg-black/90 px-8 py-4 shadow-lg backdrop-blur-sm">
          <div className="text-center">
            <div className="font-josefin_Sans text-xl font-[500] text-[#D1A04D]">
              10+
            </div>
            <div className="font-poppins text-xs font-[300] uppercase tracking-[2px] text-[#E6E6E6]">
              Years of Excellence
            </div>
          </div>
          <div className="h-8 w-px bg-[#D1A04D]/30"></div>
          <div className="text-center">
            <div className="font-josefin_Sans text-xl font-[500] text-[#D1A04D]">
              100%
            </div>
            <div className="font-poppins text-xs font-[300] uppercase tracking-[2px] text-[#E6E6E6]">
              Fresh & Seasonal
            </div>
          </div>
          <div className="h-8 w-px bg-[#D1A04D]/30"></div>
          <div className="text-center">
            <div className="font-josefin_Sans text-xl font-[500] text-[#D1A04D]">
              1000+
            </div>
            <div className="font-poppins text-xs font-[300] uppercase tracking-[2px] text-[#E6E6E6]">
              Memorable Moments
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
