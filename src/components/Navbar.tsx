'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Navbar = ({
  position = 'static',
}: {
  position?: 'static' | 'fixed' | 'absolute';
}) => {
  useEffect(() => {
    const d = localStorage.getItem('positiond');
    if (d !== null) {
      setPositiond(d);
    }
  }, []);

  const [positiond, setPositiond] = useState<string>('');

  useEffect(() => {
    if (positiond) {
      localStorage.setItem('positiond', positiond);
    }
  }, [positiond]);

  const pathname = usePathname();

  return (
    <nav
      className={cn(
        `${position} top-0 z-50 h-[10vh] w-full pt-4 transition-all duration-300 md:pt-5`,
        pathname === '/menu' && 'bg-menubackground pt-4',
        // isScrolled && "h-[15vh] bg-[#013827] backdrop-blur-sm md:h-[11vh]",
      )}
    >
      {/*big screen */}
      <div className="hidden px-4 lg:block lg:px-20">
        <div className="flex flex-row items-center justify-between gap-16 px-8">
          <div>
            <Link href={'/'}>
              <Image
                src={'/images/logo.webp'}
                width={171}
                height={74}
                alt="logo"
                className="w-16"
              />
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center gap-16">
            <Link
              href={'/'}
              className={`font-poppins text-base font-[500] capitalize tracking-[2px] hover:underline ${
                pathname === '/' ? 'text-white' : 'text-white'
              }`}
            >
              Home
            </Link>

            <Link
              href={'/our-story'}
              className={`font-poppins text-base font-[500] capitalize tracking-[2px] hover:underline ${
                pathname === '/' ? 'text-white' : 'text-white'
              }`}
            >
              Our Story
            </Link>

            <Link
              href={'/menu'}
              className={`font-poppins text-base font-[500] capitalize tracking-[2px] hover:underline ${
                pathname === '/' ? 'text-white' : 'text-white'
              }`}
            >
              Order Online
            </Link>
            <Link
              href={'/table-booking'}
              className={`font-poppins text-base font-[500] capitalize tracking-[2px] hover:underline ${
                pathname === '/' ? 'text-white' : 'text-white'
              }`}
            >
              Table Booking
            </Link>
            <Link
              href={'/contact'}
              className={`font-poppins text-base font-[500] capitalize tracking-[2px] hover:underline ${
                pathname === '/' ? 'text-white' : 'text-white'
              }`}
            >
              Contact
            </Link>
          </div>
          <div>
            <Link href={'/table-booking'}>
              <Button
                className="font-open_Sans h-20 w-40 text-center text-xs font-[600] uppercase tracking-[2px] hover:cursor-pointer"
              >
                Book Table
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/*mobile screen */}
      <div className="block px-4 lg:hidden lg:px-20">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href={'/'}>
              <Image
                src={'/images/logo.webp'}
                width={281}
                height={74}
                alt="logo"
                className="w-16"
              />
            </Link>
          </div>
          <div>
            <Sidebar>
              <Button
                variant="ghost"
                className="text-primary hover:text-primary flex px-1 py-1 hover:bg-transparent"
              >
                <div className="flex flex-row gap-2">
                  <EqualizerIcon />
                </div>
              </Button>
            </Sidebar>{' '}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="equalizer-icon rotate">
      <div
        className={`bar ${pathname === '/' ? 'bg-white' : 'bg-white'}`}
      ></div>
      <div
        className={`bar ${pathname === '/' ? 'bg-white' : 'bg-white'}`}
      ></div>
      <div
        className={`bar ${pathname === '/' ? 'bg-white' : 'bg-white'}`}
      ></div>
    </div>
  );
};
