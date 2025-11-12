import { EntranceWave } from '@/components/Animation';
import { ReviewsCarousel } from './ReviewCarousal';
import { ReviewService } from './ReviewService';

const Reviews = async () => {
  const response = await ReviewService.getReviewData();

  const review = response?.reviews;

  return (
    <section className="relative w-full overflow-hidden bg-[#000] py-12 sm:py-16 md:py-20">
      {/* Background Pattern */}

      <div className="flex flex-col gap-6 md:gap-10">
        <div className="flex items-center justify-center">
          <EntranceWave
            text="From Our Clients"
            className="font-josefin_Sans text-center text-4xl font-[500] tracking-[5%] text-[#D1A04D] md:text-5xl"
          />
        </div>
        <div className="relative">
          {review && <ReviewsCarousel reviews={review} />}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
