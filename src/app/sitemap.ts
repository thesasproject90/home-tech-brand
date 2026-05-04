import { MetadataRoute } from 'next'
import { createClient } from '@/lib/supabase'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createClient()
  const baseUrl = 'https://tu-dominio.com' // Cambia esto cuando tengas dominio

  // Obtener Slugs de Productos
  const { data: products } = await supabase.from('products').select('slug')
  const productUrls = (products || []).map((p) => ({
    url: `${baseUrl}/productos/${p.slug}`,
    lastModified: new Date(),
  }))

  // Obtener Slugs de Blog
  const { data: posts } = await supabase.from('posts').select('slug')
  const postUrls = (posts || []).map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(),
  }))

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/productos`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    ...productUrls,
    ...postUrls,
  ]
}
