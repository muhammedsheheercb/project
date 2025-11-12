import React from 'react';

interface LoaderProps {
  message?: string;
  subMessage?: string;
}

const Loader: React.FC<LoaderProps> = ({
  message = 'Preparing your dining experience',
  subMessage = 'Welcome to True Manchester - where innovation meets flavor',
}) => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#000]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-[#D1A04D]/10 via-transparent to-[#D1A04D]/5"></div>
        <div className="absolute left-24 top-24 h-36 w-36 animate-pulse rounded-full border border-[#D1A04D]/20"></div>
        <div className="absolute bottom-48 right-32 h-48 w-48 animate-pulse rounded-full border border-[#D1A04D]/10 delay-500"></div>
        <div className="absolute right-16 top-1/2 h-24 w-24 animate-pulse rounded-full border border-[#D1A04D]/15 delay-1000"></div>
      </div>

      <div className="relative z-10 mx-auto px-6 text-center">
        {/* Main Loader Animation */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            {/* Outer rotating ring */}
            <div className="h-32 w-32 animate-spin rounded-full border-4 border-transparent border-r-[#D1A04D] border-t-[#E6B85C]"></div>

            {/* Middle rotating ring */}
            <div
              className="absolute left-2 top-2 h-28 w-28 animate-spin rounded-full border-4 border-transparent border-l-[#E6B85C]/70 border-t-[#D1A04D]/70"
              style={{
                animationDirection: 'reverse',
                animationDuration: '1.5s',
              }}
            ></div>

            {/* Inner pulsing circle */}
            <div className="absolute left-6 top-6 flex h-20 w-20 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-[#D1A04D]/40 to-[#E6B85C]/40">
              <div className="h-8 w-8 animate-bounce rounded-full bg-[#D1A04D]/60"></div>
            </div>

            {/* Floating particles */}
            <div className="absolute -top-4 left-1/2 h-2 w-2 animate-bounce rounded-full bg-[#D1A04D] delay-300"></div>
            <div className="absolute -left-4 top-1/2 h-1.5 w-1.5 animate-bounce rounded-full bg-[#E6B85C] delay-700"></div>
            <div className="absolute -bottom-4 right-1/2 h-2 w-2 animate-bounce rounded-full bg-[#D1A04D]/80 delay-1000"></div>
            <div className="absolute -right-4 top-1/2 h-1 w-1 animate-bounce rounded-full bg-[#E6B85C] delay-500"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-8">
          <h1 className="font-josefin_Sans mb-4 text-4xl font-[500] leading-tight tracking-[2%] text-[#D1A04D] md:text-5xl">
            {message}
          </h1>
          <p className="font-poppins mx-auto max-w-2xl text-lg font-[300] leading-relaxed tracking-[1%] text-[#E6E6E6] md:text-xl">
            {subMessage}
          </p>
        </div>

        {/* Progress Dots */}
        <div className="mb-12 flex items-center justify-center gap-2">
          <div className="h-3 w-3 animate-bounce rounded-full bg-[#D1A04D]"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-[#E6B85C] delay-150"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-[#D1A04D]/80 delay-300"></div>
          <div className="delay-450 h-3 w-3 animate-bounce rounded-full bg-[#E6B85C]"></div>
          <div className="delay-600 h-3 w-3 animate-bounce rounded-full bg-[#D1A04D]"></div>
        </div>

        {/* Progress Bar */}
        <div className="mx-auto mb-16 max-w-md">
          <div className="h-1 overflow-hidden rounded-full bg-[#D1A04D]/20">
            <div className="h-full animate-pulse rounded-full bg-gradient-to-r from-[#D1A04D] via-[#E6B85C] to-[#D1A04D]"></div>
            <div
              className="animate-slide absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-transparent via-[#D1A04D]/60 to-transparent"
              style={{
                animation: 'slide 2s ease-in-out infinite',
                width: '30%',
              }}
            ></div>
          </div>
        </div>

        {/* Dining Process Simulation */}
        <div className="flex items-center justify-center gap-8 opacity-70">
          <div className="text-center">
            <div className="mb-2 h-12 w-12 animate-pulse rounded-full border border-[#D1A04D]/20 bg-gradient-to-br from-[#D1A04D]/30 to-[#E6B85C]/30"></div>
            <span className="font-poppins text-xs font-[300] text-[#E6E6E6]">
              Ingredients
            </span>
          </div>
          <div className="h-px w-8 bg-gradient-to-r from-transparent via-[#D1A04D]/40 to-transparent"></div>
          <div className="text-center">
            <div className="mb-2 flex h-14 w-14 animate-pulse items-center justify-center rounded-full border border-[#D1A04D]/20 bg-gradient-to-br from-[#E6B85C]/30 to-[#D1A04D]/30 delay-500">
              <div className="h-6 w-6 animate-spin rounded-full bg-[#D1A04D]/40"></div>
            </div>
            <span className="font-poppins text-xs font-[300] text-[#E6E6E6]">
              Crafting
            </span>
          </div>
          <div className="h-px w-8 bg-gradient-to-r from-transparent via-[#D1A04D]/40 to-transparent"></div>
          <div className="text-center">
            <div className="mb-2 flex h-16 w-16 animate-pulse items-center justify-center rounded-full border border-[#D1A04D]/20 bg-gradient-to-br from-[#E6B85C]/30 to-[#D1A04D]/30 delay-1000">
              <div className="h-8 w-8 rounded-full bg-[#D1A04D]/40"></div>
            </div>
            <span className="font-poppins text-xs font-[300] text-[#E6E6E6]">
              Ready
            </span>
          </div>
        </div>
      </div>

      {/* Ambient Floating Elements */}
      <div className="top-1/5 animate-float absolute left-12 h-2 w-2 rounded-full bg-[#D1A04D]/60"></div>
      <div className="animate-float absolute right-20 top-2/3 h-1.5 w-1.5 rounded-full bg-[#E6B85C]/60 delay-1000"></div>
      <div className="animate-float absolute left-1/3 top-1/3 h-1 w-1 rounded-full bg-[#D1A04D]/60 delay-500"></div>

      <style jsx>{`
        @keyframes slide {
          0%,
          100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(300%);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slide {
          animation: slide 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;
