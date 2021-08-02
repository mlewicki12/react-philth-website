
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: 'sm3hu3jh',
  dataset: 'production',
  useCdn: true
});

const builder = imageUrlBuilder(client);

export const getImageUrl = (image: string) => {
  return builder.image(image);
}
export default client;