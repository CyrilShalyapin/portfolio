import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kiryl Shalipain portfolio web',
    short_name: 'Portfolio',
    description:
      'Portfolio web site for recruiters. Here you will find information about Kiryl Shalipain',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: `/favicon.ico`,
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
