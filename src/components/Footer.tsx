'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from './Icon';

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-[#000] px-4 pt-2 lg:px-8">
      <div className="flex flex-col gap-4 pt-12 md:gap-8 lg:pt-24">
        {/* first  div */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-14 md:px-32 2xl:px-40">
          {/* sub first  div */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-36">
            <div className="flex flex-col items-center gap-4 md:items-start md:gap-8">
              <div>
                <Link href={'/'}>
                  <Image
                    src={'/images/logo.png'}
                    width={281}
                    height={74}
                    alt="logo"
                    className="w-28"
                  />
                </Link>
              </div>
              <div className="flex flex-col items-center gap-2 md:items-start md:pt-4">
                <div className="flex flex-col items-center md:items-start">
                  <span className="font-poppins flex flex-col pb-4 text-center text-xs font-[500] uppercase text-[#fff] md:text-start">
                    contact
                  </span>
                  <span>
                    <Link
                      className="font-inter flex flex-col text-center text-sm font-[400] uppercase text-[#fff] md:text-start"
                      target="_blank"
                      href={'https://share.google/MElOt6c9IDJ4DB4mQ'}
                    >
                      126 Burton Rd, West <br /> Didsbury, <br />
                      Manchester M20 1JQ
                    </Link>
                  </span>
                  <span>
                    <Link
                      className="font-inter text-sm font-[700] uppercase text-[#fff]"
                      href={'tel:+441616128506'}
                    >
                      +44 161 612 8506
                    </Link>
                  </span>
                  {/* <span>
                    <Link
                      className="font-poppins text-xs font-[500] uppercase text-[#fff]"
                      href={'mailto:konak.wilmslow@gmail.com'}
                    >
                      konak.wilmslow@gmail.com
                    </Link>
                  </span> */}
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 md:gap-4 md:pt-6">
                <Link
                  href={'https://www.instagram.com/true.manchester'}
                  target="_blank"
                >
                  <Icons.instagram className="text-[#fff]" />
                </Link>
                {/* <Link href={""} target="_blank">
                  <Icons.unknown className="text-[#fff]" />
                </Link> */}
                <Link
                  href={'https://share.google/MElOt6c9IDJ4DB4mQ'}
                  target="_blank"
                >
                  <Icons.google className="text-[#fff]" />
                </Link>
                <Link
                  href={'https://www.facebook.com/true.mcr/'}
                  target="_blank"
                >
                  <Icons.facebook className="text-[#fff]" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 md:mt-24 md:items-start md:gap-6">
              <Link
                href={'/'}
                className="font-inter text-sm font-[700] uppercase tracking-[2.4px] text-[#fff]"
              >
                Home
              </Link>
              <Link
                href={'/menu'}
                className="font-inter text-sm font-[700] uppercase tracking-[2.4px] text-[#fff]"
              >
                Menu
              </Link>
              <Link
                href={'/our-story'}
                className="font-inter text-sm font-[700] uppercase tracking-[2.4px] text-[#fff]"
              >
                Our Story
              </Link>

              <Link
                href={'/table-booking'}
                className="font-inter text-sm font-[700] uppercase tracking-[2.4px] text-[#fff]"
              >
                Reservation
              </Link>
              <Link
                href={'/contact'}
                className="font-inter text-sm font-[700] uppercase tracking-[2.4px] text-[#fff]"
              >
                Contact Us
              </Link>
            </div>{' '}
          </div>

          {/* sub second  div */}
          <div className="flex w-full flex-col items-center gap-2 md:w-[400px] md:items-start md:pt-32">
            <h6 className="font-poppins text-sm font-[700] uppercase tracking-[2.2px] text-[#fff] md:pb-4">
              Opening Hours
            </h6>
            <div className="flex flex-col items-center justify-center gap-4 md:items-start md:justify-start md:gap-6">
              <div className="h-full w-full border-b-[1px] border-b-[#fff]" />

              <div className="flex w-full flex-row justify-center gap-4 md:w-[400px] md:justify-between">
                <span className="font-poppins text-sm font-[700] uppercase tracking-[1.96px] text-[#fff]">
                  Monday - Thursday
                </span>
                <span className="font-poppins text-sm font-[700] uppercase tracking-[1.96px] text-[#fff]">
                  8 AM - 5 PM{' '}
                </span>
              </div>
              <div className="h-full w-full border-b-[1px] border-b-[#fff]" />
              <div className="flex w-full flex-row justify-center gap-4 md:w-[400px] md:justify-between">
                <span className="font-poppins text-sm font-[700] uppercase tracking-[1.96px] text-[#fff]">
                  Friday - Saturday
                </span>
                <span className="font-poppins text-sm font-[700] uppercase tracking-[1.96px] text-[#fff]">
                  8 AM - 8 PM{' '}
                </span>
              </div>
              <div className="h-full w-full border-b-[1px] border-b-[#fff]" />
              <div className="flex w-full flex-row justify-center gap-4 md:w-[400px] md:justify-between">
                <span className="font-poppins text-sm font-[700] uppercase tracking-[1.96px] text-[#fff]">
                  Sunday
                </span>
                <span className="font-poppins text-sm font-[700] uppercase tracking-[1.96px] text-[#fff]">
                  9 AM - 5 PM{' '}
                </span>
              </div>
              <div className="h-full w-full border-b-[1px] border-b-[#fff]" />
            </div>
          </div>
        </div>

        {/* second  div */}
        <div className="flex flex-col gap-4">
          <div className="h-full w-full border-b-[1px] border-b-[#fff]" />
          <div className="flex flex-col items-center justify-center gap-1 md:flex-row md:items-start md:justify-between">
            <Link href={'https://foodo.ai/'} target="_blank">
              <span className="font-open_sans pb-6 text-xs font-[400] uppercase tracking-[1px] text-[#fff]">
                Powerd by foodo{' '}
              </span>
            </Link>
            <p className="font-open_sans pb-6 text-xs font-[400] uppercase tracking-[1px] text-[#fff]">
              © 2025 True Manchester ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
