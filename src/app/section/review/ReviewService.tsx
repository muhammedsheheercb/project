import { fetcher } from '@/lib/fetcher';
import { type Review } from '@/types/review.type';

const placeId = process.env.GOOGLE_RESTAURANT_PLACE_ID;
const getReviewData = async () => {
  const data = await fetcher<{
    data: {
      placeId: string;
      reviews: Review[];
    };
  }>({
    endpoint: `https://api.staging.app.thefoodo.com/restaurant-reviews/${placeId}`,
    options: {},
  });
  return data?.data?.data;
};

export const ReviewService = {
  getReviewData,
};
