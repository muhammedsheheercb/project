import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Story: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000000] py-8 md:py-20">
      <div className="flex h-full w-full flex-col items-center justify-center gap-6 px-4 md:flex-row md:gap-8 md:px-20">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <Image
              src="/images/about-us/2.webp"
              width={600}
              height={700}
              alt="True Manchester restaurant interior ambiance"
              className="h-[300px] w-full object-cover shadow-2xl md:h-[600px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex w-full flex-col items-center justify-center gap-4 md:w-1/2 md:items-start md:justify-start md:gap-6">
          <span className="font-poppins text-sm uppercase tracking-[3%] text-[#D1A04D] md:text-base">
            Our Story
          </span>

          <h2 className="font-josefin_Sans text-center text-2xl font-[500] uppercase text-[#E6E6E6] md:text-start md:text-4xl">
            From Manchester&apos;s
            <br />
            <span className="text-[#D1A04D]">Heart to Table</span>
          </h2>

          <div className="space-y-4">
            <p className="font-poppins max-w-[500px] text-center text-sm font-[300] text-[#E6E6E6] md:text-start md:text-base">
              True Manchester was founded with a deep love for our city&apos;s
              vibrant culture and bold ambition to celebrate it through food.
              What began as a simple vision has grown into a dining destination
              that captures the spirit, flavor, and energy of Manchester.
            </p>

            <p className="font-poppins max-w-[500px] text-center text-sm font-[300] text-[#E6E6E6] md:text-start md:text-base">
              More than just a restaurant, True is an experience. Every dish is
              inspired by Manchester&apos;s character—crafted with locally
              sourced ingredients, influenced by tradition, and elevated with
              modern creativity. Whether you&apos;re here for a quick bite or a
              special gathering, we bring people together with every plate,
              creating moments that matter one unforgettable flavor at a time.
            </p>
          </div>

          {/* Heritage Stats */}
          <div className="flex w-full max-w-[500px] flex-col gap-4 rounded-lg border border-[#D1A04D]/30 bg-[#111111] p-6 shadow-lg md:flex-row">
            <div className="flex-1 text-center md:text-left">
              <div className="font-josefin_Sans text-2xl font-[500] text-[#D1A04D]">
                Local
              </div>
              <div className="font-poppins text-xs uppercase tracking-[2px] text-[#E6E6E6]">
                Fresh Ingredients
              </div>
            </div>
            <div className="hidden w-px bg-[#D1A04D]/30 md:block"></div>
            <div className="flex-1 text-center md:text-left">
              <div className="font-josefin_Sans text-2xl font-[500] text-[#D1A04D]">
                Inspired
              </div>
              <div className="font-poppins text-xs uppercase tracking-[2px] text-[#E6E6E6]">
                Manchester Culture
              </div>
            </div>
            <div className="hidden w-px bg-[#D1A04D]/30 md:block"></div>
            <div className="flex-1 text-center md:text-left">
              <div className="font-josefin_Sans text-2xl font-[500] text-[#D1A04D]">
                Contemporary
              </div>
              <div className="font-poppins text-xs uppercase tracking-[2px] text-[#E6E6E6]">
                Dining Experience
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link href="/our-story">
              <Button className="font-open_Sans h-12 border-2 border-[#D1A04D] bg-transparent px-6 text-xs font-[600] uppercase tracking-[2px] text-[#D1A04D] transition-all duration-150 hover:bg-[#D1A04D] hover:text-white active:scale-95">
                Discover Our Story
              </Button>
            </Link>
            <Link href="/menu">
              <Button className="font-open_Sans h-12 border-2 border-[#D1A04D] bg-transparent px-6 text-xs font-[600] uppercase tracking-[2px] text-[#D1A04D] transition-all duration-150 hover:bg-[#D1A04D] hover:text-white active:scale-95">
                Explore Menu
              </Button>
            </Link>
          </div>

          {/* Cultural Elements */}
          <div className="mt-6 flex items-center gap-6 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#D1A04D]">
                <svg
                  className="h-6 w-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="font-poppins text-xs uppercase tracking-[2px] text-[#E6E6E6]">
                Made with Passion
              </span>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#D1A04D]">
                <svg
                  className="h-6 w-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-poppins text-xs uppercase tracking-[2px] text-[#E6E6E6]">
                Authentic Flavours
              </span>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#D1A04D]">
                <svg
                  className="h-6 w-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM10 12a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="font-poppins text-xs uppercase tracking-[2px] text-[#E6E6E6]">
                Manchester Spirit
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
