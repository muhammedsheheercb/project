'use client';
import React from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';

interface ErrorProps {
  error?: Error;
  reset?: () => void;
  title?: string;
  message?: string;
}

const Error: React.FC<ErrorProps> = ({
  error,
  reset,
  title = 'Something went wrong',
  message = "We're experiencing some technical difficulties. Our team at True Manchester is working to fix this issue.",
}) => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#000]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-[#D1A04D]/10 via-transparent to-[#D1A04D]/5"></div>
        <div className="absolute left-16 top-32 h-40 w-40 animate-pulse rounded-full border border-[#D1A04D]/20"></div>
        <div className="absolute bottom-32 right-20 h-56 w-56 rounded-full border border-[#D1A04D]/10"></div>
        <div className="absolute right-32 top-2/3 h-28 w-28 animate-pulse rounded-full border border-[#D1A04D]/15 delay-500"></div>
      </div>

      <div className="relative z-10 mx-auto px-6 text-center">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="flex h-32 w-32 animate-pulse items-center justify-center rounded-full border-2 border-[#D1A04D]/40 bg-gradient-to-br from-[#E6B85C]/30 to-[#D1A04D]/30">
              <AlertTriangle size={64} className="text-[#D1A04D]" />
            </div>
            <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#D1A04D]/80">
              <span className="text-sm font-bold text-[#000]">!</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <h1 className="font-josefin_Sans mb-6 text-5xl font-[500] leading-tight tracking-[2%] text-[#D1A04D] md:text-6xl">
            {title}
          </h1>
          <p className="font-poppins mx-auto mb-6 max-w-2xl text-lg font-[300] leading-relaxed tracking-[1%] text-[#E6E6E6] md:text-xl">
            {message}
          </p>

          {/* Error Details (if provided) */}
          {error && (
            <div className="mx-auto mb-8 max-w-2xl rounded-lg border border-[#D1A04D]/50 bg-[#D1A04D]/10 p-4 shadow-md">
              <p className="overflow-x-auto text-left font-mono text-sm text-[#E6E6E6]">
                {error.message}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {reset && (
            <button
              onClick={reset}
              className="font-open_Sans group flex transform items-center gap-3 rounded-full bg-[#D1A04D] px-8 py-4 font-[600] uppercase text-[#000] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#E6B85C]"
            >
              <RefreshCw
                size={20}
                className="transition-transform duration-500 group-hover:rotate-180"
              />
              Try Again
            </button>
          )}

          <button className="font-open_Sans group flex items-center gap-3 rounded-full border-2 border-[#D1A04D] px-8 py-4 font-[600] uppercase text-[#D1A04D] transition-all duration-300 hover:bg-[#D1A04D] hover:text-[#000]">
            <Home size={20} />
            Back to Home
          </button>

          <button className="font-open_Sans group flex items-center gap-3 rounded-full border-2 border-[#E6B85C] px-8 py-4 font-[600] uppercase text-[#E6B85C] transition-all duration-300 hover:bg-[#E6B85C] hover:text-[#000]">
            <Mail size={20} />
            Report Issue
          </button>
        </div>

        {/* Status Indicators */}
        <div className="flex items-center justify-center gap-6 opacity-70">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 animate-pulse rounded-full bg-[#D1A04D]"></div>
            <span className="font-poppins text-sm font-[300] text-[#E6E6E6]">
              Service Interrupted
            </span>
          </div>
          <div className="h-4 w-px bg-[#D1A04D]/40"></div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 animate-pulse rounded-full bg-[#E6B85C] delay-300"></div>
            <span className="font-poppins text-sm font-[300] text-[#E6E6E6]">
              Recovery in Progress
            </span>
          </div>
        </div>

        {/* Restaurant Support Card */}
        <div className="mt-12 rounded-lg border border-[#D1A04D]/20 bg-[#D1A04D]/10 p-6 shadow-md">
          <h3 className="font-josefin_Sans mb-2 text-2xl font-[500] text-[#D1A04D]">
            Need immediate assistance?
          </h3>
          <p className="font-poppins mb-4 text-sm font-[300] tracking-[1%] text-[#E6E6E6]">
            Contact True Manchester directly for reservations, cocktail bar
            bookings, or inquiries
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-center sm:gap-6">
            <div className="flex items-center gap-2">
              <span className="font-poppins text-sm font-[400] text-[#D1A04D]">
                Phone:
              </span>
              <span className="font-poppins text-sm font-[300] text-[#E6E6E6]">
                +44 161 xxx xxxx
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-poppins text-sm font-[400] text-[#D1A04D]">
                Email:
              </span>
              <span className="font-poppins text-sm font-[300] text-[#E6E6E6]">
                info@truemanchester.co.uk
              </span>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="font-poppins text-sm font-[400] text-[#D1A04D]">
              Location:
            </span>
            <span className="font-poppins text-sm font-[300] text-[#E6E6E6]">
              West Didsbury&apos;s Burton
            </span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-20 top-20 h-4 w-4 animate-bounce rounded-full bg-[#D1A04D]/60"></div>
        <div className="absolute bottom-40 right-16 h-2 w-2 animate-bounce rounded-full bg-[#E6B85C]/60 delay-700"></div>
        <div className="absolute right-10 top-1/3 h-3 w-3 animate-bounce rounded-full bg-[#D1A04D]/40 delay-1000"></div>
      </div>

      {/* Subtle Effect Lines */}
      <div className="absolute left-0 top-1/4 h-px w-full animate-pulse bg-gradient-to-r from-transparent via-[#D1A04D]/30 to-transparent"></div>
      <div className="absolute bottom-1/3 left-0 h-px w-full animate-pulse bg-gradient-to-r from-transparent via-[#E6B85C]/20 to-transparent delay-500"></div>
    </div>
  );
};

export default Error;
