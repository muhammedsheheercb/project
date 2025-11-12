import { fetcher } from '@/lib/fetcher';
import { type ModelData } from '@/types/model-data.type';

const getModelData = async () => {
  const data = await fetcher<{
    data: {
      rows: ModelData[];
    };
  }>({
    endpoint: `https://api.prod.sdk.thefoodo.com/model/all`,
    options: {
      headers: {
        'x-api-key': '2M4QMv8O5JTzSXBOR1H27EU8POBV1JJ7LZSHQO9O3O',
      },
    },
  });
  return data?.data?.data;
};

export const ModelService = {
  getModelData,
};
