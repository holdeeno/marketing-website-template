import createImageUrlBuilder from '@sanity/image-url';
import { dataset, projectId } from './client';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || 'production',
});

export const urlForImage = (source: any) => {
  if (!source || !source.asset) {
    return 'https://via.placeholder.com/1200x630?text=No+Image';
  }

  return imageBuilder.image(source).url();
};
