import React from 'react';
import { Search, Home, Utensils } from 'lucide-react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#000]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-[#D1A04D]/10 via-transparent to-[#D1A04D]/5"></div>
        <div className="absolute left-20 top-20 h-32 w-32 rounded-full border border-[#D1A04D]/20"></div>
        <div className="absolute bottom-40 right-32 h-48 w-48 rounded-full border border-[#D1A04D]/10"></div>
        <div className="absolute right-20 top-1/2 h-24 w-24 rounded-full border border-[#D1A04D]/15"></div>
      </div>

      <div className="relative z-10 mx-auto px-6 text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="bg-gradient-to-r from-[#D1A04D] via-[#E6B85C] to-[#D1A04D] bg-clip-text text-9xl font-bold leading-none text-transparent md:text-[12rem]">
            404
          </h1>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <h2 className="font-josefin_Sans mb-6 text-4xl font-[500] leading-tight text-[#D1A04D] md:text-5xl">
            Oops! This page seems to be
            <span className="block text-[#E6E6E6]">off the menu</span>
          </h2>
          <p className="font-poppins mx-auto max-w-2xl text-lg font-[300] leading-relaxed text-[#E6E6E6] md:text-xl">
            We couldn&apos;t find the page you&apos;re looking for. It might
            have been moved, deleted, or you may have mistyped the URL.
            Let&apos;s get you back to our innovative dining experience at True
            Manchester.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={'/'}>
            <button className="font-open_Sans group flex transform items-center gap-3 rounded-full bg-[#D1A04D] px-8 py-4 font-[600] uppercase text-[#000] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#E6B85C]">
              <Home size={20} />
              Back to Home
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E6B85C] to-[#D1A04D] opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
            </button>
          </Link>

          <Link href={'/'}>
            <button className="font-open_Sans group flex items-center gap-3 rounded-full border-2 border-[#D1A04D] px-8 py-4 font-[600] uppercase text-[#D1A04D] transition-all duration-300 hover:bg-[#D1A04D] hover:text-[#000]">
              <Search size={20} />
              Browse Menu
            </button>
          </Link>
        </div>

        {/* Decorative Food Elements */}
        <div className="flex items-center justify-center gap-8 opacity-60">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#D1A04D]/20 bg-gradient-to-br from-[#D1A04D]/30 to-[#E6B85C]/30">
            <Utensils size={20} className="text-[#D1A04D]" />
          </div>
          <div className="h-2 w-2 animate-pulse rounded-full bg-[#D1A04D]"></div>
          <div className="h-12 w-12 rounded-full border border-[#D1A04D]/20 bg-gradient-to-br from-[#E6B85C]/30 to-[#D1A04D]/30"></div>
          <div className="h-2 w-2 animate-pulse rounded-full bg-[#E6B85C] delay-300"></div>
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#D1A04D]/20 bg-gradient-to-br from-[#E6B85C]/30 to-[#D1A04D]/30">
            <div className="h-10 w-10 rounded-full bg-[#D1A04D]/40"></div>
          </div>
        </div>

        {/* Restaurant Info */}
        <div className="mt-12 rounded-lg border border-[#D1A04D]/20 bg-[#D1A04D]/10 p-6 shadow-md">
          <h3 className="font-josefin_Sans mb-2 text-2xl font-[500] text-[#D1A04D]">
            Meanwhile, explore True Manchester
          </h3>
          <p className="font-poppins text-sm font-[300] tracking-[2%] text-[#E6E6E6]">
            Innovative all‑day dining & elevated cocktail bar • West
            Didsbury&apos;s Burton
          </p>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute left-10 top-1/4 h-2 w-2 animate-bounce rounded-full bg-[#D1A04D] delay-1000"></div>
      <div className="absolute right-20 top-3/4 h-1 w-1 animate-bounce rounded-full bg-[#E6B85C] delay-500"></div>
      <div className="absolute left-1/4 top-1/2 h-1.5 w-1.5 animate-bounce rounded-full bg-[#D1A04D]/80 delay-700"></div>
    </div>
  );
};

export default NotFound;
