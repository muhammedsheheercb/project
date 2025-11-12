import EmblaCarousel from '@/app/section/special/MenuCarousel';
import type { EmblaOptionsType } from 'embla-carousel';
import { ModelService } from './modelService';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ContinuousWave } from '@/components/Animation';

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = async ({}) => {
  const response = await ModelService.getModelData();
  const restaurantID = process.env.NEXT_PUBLIC_RESTAURANT_ID;
  const filteredResponse = response?.rows.filter(
    item => item.meta.restaurantID === restaurantID,
  );
  return (
    <section className="relative z-10 flex h-full w-full justify-center overflow-hidden bg-gradient-to-b from-[#121910] to-[#1A2917] py-12 md:py-28">
      <div className="absolute left-0 top-0 z-10 h-full w-full opacity-10" />
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <ContinuousWave
            text="Our Specialities"
            className="font-josefin_Sans text-center text-4xl font-[500] tracking-[5%] text-[#D1A04D] md:text-5xl"
          ></ContinuousWave>
        </div>
        <div className="relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2">
          {filteredResponse && (
            <EmblaCarousel slides={filteredResponse} options={OPTIONS} />
          )}
        </div>
        <div className="relative z-40">
          <Link href={'/menu'}>
            <Button
              variant={'destructive2'}
              className="font-open_Sans h-20 w-40 text-center text-xs font-[600] uppercase tracking-[2px] hover:cursor-pointer"
            >
              View Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Special;
