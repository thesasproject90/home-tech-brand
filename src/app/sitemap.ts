import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://home-tech-brand.vercel.app', lastModified: new Date() },
    { url: 'https://home-tech-brand.vercel.app/productos', lastModified: new Date() },
    { url: 'https://home-tech-brand.vercel.app/blog', lastModified: new Date() },
  ]
}
