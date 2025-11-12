import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import { type FC } from 'react';

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="">
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center justify-center pb-8 pt-16 md:pt-20">
              <Image
                src="/images/logo.webp"
                width={197}
                height={192}
                alt="Foodo"
                className="w-24"
              />
            </div>
          </SheetTitle>
          <SheetDescription className="flex w-full flex-col items-center justify-center gap-7">
            <Link
              href="/"
              className="font-poppins flex w-full justify-center p-0 text-2xl font-normal text-[#fff]"
            >
              Home
            </Link>
            <Link
              href="/our-story"
              className="font-poppins flex w-full justify-center p-0 text-2xl font-normal text-[#fff]"
            >
              Our Story
            </Link>
            <Link
              href="/table-booking"
              className="font-poppins flex w-full justify-center p-0 text-2xl font-normal text-[#fff]"
            >
              Reservation
            </Link>
            <Link
              href="/contact"
              className="font-poppins flex w-full justify-center p-0 text-2xl font-normal text-[#fff]"
            >
              Contact
            </Link>
            <Link
              href="/menu"
              className="font-poppins flex w-full justify-center p-0 text-2xl font-normal text-[#fff]"
            >
              Order Online
            </Link>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
